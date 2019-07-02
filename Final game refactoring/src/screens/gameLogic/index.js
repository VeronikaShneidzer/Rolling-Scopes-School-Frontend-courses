import { data as heroesData } from "../hero/data";
import { data as monstersData } from "../monster/data";
import { KeyboardEvent as KeyboardEvent } from "./../../settings";

import Room from "../roomOfLocations/index";
import Battle from "../battle/index";
import Task from "../task/index";
import Hero from "../hero/index";
import Monster from "../monster/index";
import TableOfRecords from "../tableOfRecords/index";

export default class Logic {
	constructor(stage) {
		this.heroData = heroesData;
		this.monsterData = monstersData;
		this.stage = stage;
		this.globalLayer = new Konva.Layer();

		this.room = new Room(stage, this.globalLayer);
		this.battle = new Battle(stage, this.globalLayer);
		this.task = new Task(stage, this.globalLayer);
		this.hero = new Hero(stage, this.globalLayer);
		this.monster = new Monster(stage, this.globalLayer);
		this.tableOfRecords = new TableOfRecords(stage, this.globalLayer);
	}

	start() {
		this.drawLayers();
		this.addDamageToMonsterAndHero();
	}

	drawLayers() {
		this.stage.destroyChildren();
		this.room.load()
		.then(() => {
			return this.battle.load();
		})
		.then(() => {
			return this.hero.load();
		})
		.then(() => {
			this.monster.load();
		})
		.then(() => {
			this.battle.drawNames();
			this.battle.getMaxHP();
			this.battle.drawMonsterHP();
			this.battle.drawHeroHP();
			this.battle.drawMonsterTextHP();
			this.battle.drawHeroTextHP();
		});
	}

	addMouseAndKeyEvent(startCombat) {
		this.monster.combatMonsterLayer.on('click', startCombat);

		var func;
		document.addEventListener('keydown', func = (event) => {
			if (event.keyCode === KeyboardEvent.SPACE) {
				startCombat(func);
			}
		});	
	}

	addDamageToMonsterAndHero() {
		const pause = async (time) => {
			return new Promise((resolve) => {
				setTimeout(resolve, time);
			});
		}

		let startCombat = (func) => {
			let spell;

			this.hero.addModalwithSpells()
			.then(() => {
				spell = this.hero.currSpell;
				return this.task.addModalwithTask(this.hero.colorOfHero);
			})
			.then(async () => {
				this.animationLayerWithMonsterDefend(spell);
				this.calculateMonsterDamage(spell);
				this.calculateHeroHealth();
				this.redrawBattleLayers();

				await pause(2000);

				this.drawDefoltLayersStateAfterHeroDamage();

				if (this.battle.monsterHP < 0) {
					this.battle.monsterHP = 0;
					document.removeEventListener('keydown', func);
					this.isUserWin(this.battle.heroHP);
				}

				await pause(1000);

				this.animationLayerWithHeroDefend();
				this.calculateHeroDamage();
				
				if (this.battle.heroHP < 0) {
					this.battle.heroHP = 0;
					document.removeEventListener('keydown', func);
					this.isUserLost();
				}

				this.redrawBattleLayers();

				await pause(2000);
				
				this.drawDefoltLayersStateAfterMonsterDamage();
			});
		}

		this.addMouseAndKeyEvent(startCombat);
	}

	animationLayerWithMonsterDefend(spell) {
		this.hero.drawSpell(spell);
		this.monster.drawDefend();
		this.monster.combatMonsterLayer.opacity(0);
		this.hero.combatHeroLayer.opacity(0);
	}

	calculateMonsterDamage(spell) {
		let damage = (this.task.isTaskSolved == true) ? this.hero.getDamage(spell) : 0;
		this.battle.monsterHP -= damage;
	}

	calculateHeroHealth() {
		let health = this.hero.getHealth();
		let temp = this.battle.heroHP;
		temp += health;
		if (temp > this.battle.maxHP) this.battle.heroHP = this.battle.maxHP;
	}

	drawDefoltLayersStateAfterHeroDamage() {
		this.monster.defendMonsterLayer.destroy();
		this.monster.combatMonsterLayer.opacity(1);
		this.hero.combatHeroLayer.opacity(1);
		this.hero.clearSpellLayers();
	}

	animationLayerWithHeroDefend() {
		this.hero.combatHeroLayer.opacity(0);
		this.hero.drawDefend();
		this.monster.combatMonsterLayer.opacity(0);
		this.monster.drawSpell();
	}

	calculateHeroDamage() {
		let damage = this.monster.getDamage();
		this.battle.heroHP -= damage;
	}

	redrawBattleLayers() {
		this.battle.cleaHP();
		this.battle.drawHeroHP()
		this.battle.drawHeroTextHP();
		this.battle.drawMonsterHP()
		this.battle.drawMonsterTextHP();
	}

	drawDefoltLayersStateAfterMonsterDamage() {
		this.hero.combatHeroLayer.opacity(1);
		this.hero.defendHeroLayer.destroy();
		this.monster.combatMonsterLayer.opacity(1);
		this.monster.clearSpellLayers();
	}

	isUserLost() {
		this.addResultInTableOfRecords();
		this.stage.clear();
		this.tableOfRecords.load();
	}

	addResultInTableOfRecords() {
		let roomsCount = JSON.parse(localStorage["roomsCount"]);
		let table = JSON.parse(localStorage["tableOfRecords"]);
		let hero = JSON.parse(localStorage["heroesName"]);
		let name = JSON.parse(localStorage["userName"]);

		table.push({'monsters': roomsCount, 'data': [hero, name]});

		localStorage.setItem("tableOfRecords", JSON.stringify(table));
	}

	isUserWin(exp) {
		this.updateRoom();
		this.stage.clear();
		this.start();
	}

	updateRoom() {
		let roomsCount = JSON.parse(localStorage["roomsCount"]);
		roomsCount++;
		localStorage.setItem("roomsCount", JSON.stringify(roomsCount));
	}
}