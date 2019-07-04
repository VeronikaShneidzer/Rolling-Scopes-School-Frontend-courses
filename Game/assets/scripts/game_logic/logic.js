import { data as heroesData } from "../heroes/data";
import { data as monstersData } from "../monsters/data";
import { KeyboardEvent as KeyboardEvent } from "../settings";

import Rooms from "../rooms/rooms";
import Battle from "../battle/battle";
import Task from "../tasks/tasks";
import Heroes from "../heroes/heroes";
import Monsters from "../monsters/monsters";
import Table_of_records from "../table/table";

export default class Logic {
	constructor(stage) {
		this.heroesData = heroesData;
		this.monstersData = monstersData;
		this.stage = stage;

		this.global_layer = new Konva.Layer();

		this.rooms = new Rooms(stage, this.global_layer);
		this.battle = new Battle(stage, this.global_layer);
		this.task = new Task(stage, this.global_layer);
		this.heroes = new Heroes(stage, this.global_layer);
		this.monsters = new Monsters(stage, this.global_layer);
		this.table_of_records = new Table_of_records(stage, this.global_layer);
	}

	start() {
		this.drawLayers();
		this.addDamageToMonster();
	}

	drawLayers() {
		this.stage.destroyChildren();
		this.rooms.load()
		.then(() => {
			return this.battle.load();
		})
		.then(() => {
			return this.heroes.load();
		})
		.then(() => {
			this.monsters.load();
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

	addDamageToMonster() {
		this.monsters.combatMonsterLayer.on('click', startCombat);

		// document.addEventListener('keydown', function(event) {
		// 	if (event.keyCode === KeyboardEvent.SPACE) startCombat();
		// });

		let self = this;
		function startCombat() {
			let spell;
			self.heroes.addModalwithSpells()
			.then(() => {
				spell = self.heroes.currSpell;
				return self.task.addModalwithTask(self.heroes.colorOfHero);
			})
			.then(() => {
				self.heroes.drawSpell(spell);
				
				self.monsters.drawDefend();
				self.monsters.combatMonsterLayer.opacity(0);
				self.heroes.combatHeroLayer.opacity(0);

				let damage = (self.task.solved == true) ? self.heroes.getDamage(spell) : 0;
				self.battle.monsterHP -= damage;

				let health = self.heroes.getHealth();
				let temp = self.battle.heroHP;
				temp += health;
				if (temp > self.battle.maxHP) self.battle.heroHP = self.battle.maxHP;

				self.battle.cleaHP();
				self.battle.drawHeroHP()
				self.battle.drawHeroTextHP();
				self.battle.drawMonsterHP()
				self.battle.drawMonsterTextHP();

				setTimeout(() => {
					self.monsters.defendMonsterLayer.destroy();
					self.monsters.combatMonsterLayer.opacity(1);
					self.heroes.combatHeroLayer.opacity(1);
					self.heroes.clearSpellLayers();

					if (self.battle.monsterHP < 0) {
						self.battle.monsterHP = 0;
						self.win(self.battle.heroHP);
					}
					else self.addDamageToHero();
				}, 2000);
			});
		}
	}

	addDamageToHero() {
		setTimeout(() => {
			this.heroes.combatHeroLayer.opacity(0);
			this.heroes.drawDefend();
			this.monsters.combatMonsterLayer.opacity(0);

			this.monsters.drawSpell();
			let damage = this.monsters.getDamage();
			this.battle.heroHP -= damage;
			
			if (this.battle.heroHP < 0) {
				this.battle.heroHP = 0;
				this.lost();
			}

			this.battle.cleaHP();
			this.battle.drawHeroHP()
			this.battle.drawHeroTextHP();
			this.battle.drawMonsterHP()
			this.battle.drawMonsterTextHP();
		}, 1000);
		
		setTimeout(() => {
			this.heroes.combatHeroLayer.opacity(1);
			this.heroes.defendHeroLayer.destroy();
			this.monsters.combatMonsterLayer.opacity(1);
			this.monsters.clearSpellLayers();
		}, 3000);
	}

	lost() {
		let roomsCount = JSON.parse(localStorage["roomsCount"]);
		let table = JSON.parse(localStorage["tableOfRecords"]);
		let exp = JSON.parse(localStorage["exp"]);
		let hero = JSON.parse(localStorage["heroes_name"]);
		let name = JSON.parse(localStorage["user_name"]);

		table.push({'monsters': roomsCount, 'data': [hero, name]});

		localStorage.setItem("exp", JSON.stringify(0));
		localStorage.setItem("roomsCount", JSON.stringify(0));
		localStorage.setItem("tableOfRecords", JSON.stringify(table));

		this.stage.clear();
		this.table_of_records.load();
	}

	win(exp) {
		let prevExp = JSON.parse(localStorage["exp"]);
		prevExp += exp;
		localStorage.setItem("exp", JSON.stringify(prevExp));

		let roomsCount = JSON.parse(localStorage["roomsCount"]);
		roomsCount++;
		localStorage.setItem("roomsCount", JSON.stringify(roomsCount));

		this.stage.clear();
		this.start();
	}
}