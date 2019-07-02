class Game {
  constructor() {
    this.selectedCard = null;
    this.isAnimated = true;
    this.countOfCards;
    this.cardsShirt;
    this.timeCounter;
    this.pastTime;
  }

  startGame() {
    this.setTimer();
    this.generateCards();
    this.drawCards();
  }

  setTimer() {
    let self = this;

    clearInterval(self.timeCounter);

    let time = document.createElement('div');
    time.className = 'timer';
    time.id = 'timer';
    document.getElementById('game_field').appendChild(time);

    let whenGameStart = new Date().getTime();

    self.timeCounter = setInterval(function() {
      let now = new Date().getTime();
      self.distance = now - whenGameStart;

      let days = Math.floor(self.distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((self.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((self.distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((self.distance % (1000 * 60)) / 1000);

      if (document.getElementById('timer')) {
        self.pastTime = ((hours < 10) ? '0' + hours : hours) + ":" +
        ((minutes < 10) ? '0' + minutes : minutes) + ":" +
        ((seconds < 10) ? '0' + seconds : seconds);

        document.getElementById('timer').innerHTML = self.pastTime;
      }

      if (days > 0) {
        clearInterval(self.timeCounter);
        document.getElementById('timer').innerHTML = 'You play too long!';
      }
    }, 0);
  }

  generateCards() {
    this.deck = Array.from({ length: this.countOfCards / 2}, (i, x) => x);
    this.deck = this.deck.concat(this.deck);

    for (let i = this.deck.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = this.deck[randomIndex];

      this.deck[randomIndex] = this.deck[i];
      this.deck[i] = itemAtIndex;
    }
  }

  drawCards() {
    let self = this;
    self.deck.forEach((x) => { drawOneCard(x); });

    function drawOneCard(id) {
      let card = document.createElement('div');
      card.className = 'card';
      document.getElementById('game_field').appendChild(card);

      let frontOfCard = document.createElement('div');
      let backOfCard = document.createElement('div');
      frontOfCard.className = 'front';
      backOfCard.className = 'back';

      switch (self.cardsShirt) {
        case 'memes':
          frontOfCard.style.background = 'url(img/memes/' + id + '.jpg) no-repeat #fff';
          backOfCard.style.background = 'url(img/memes/shirt.jpg) no-repeat #fff';
          break;
        case 'languages':
          frontOfCard.style.background = 'url(img/languages/' + id + '.png) no-repeat';
          backOfCard.style.background = 'url(img/languages/shirt.png) no-repeat';
          break;
        case 'different':
          frontOfCard.style.background = 'url(img/different/' + id + '.png) no-repeat';
          backOfCard.style.background = 'url(img/different/shirt.png) no-repeat';
          break;
      }

      frontOfCard.style['background-size'] = 'contain';
      backOfCard.style['background-size'] = 'contain';

      card.appendChild(frontOfCard);
      card.appendChild(backOfCard);

      card.addEventListener('click', function() {
        if (self.isAnimated) {
            this.classList.add('selected');
            if (self.selectedCard && this != self.selectedCard) {
              let firstSelectedElement = self.selectedCard.getElementsByClassName('front')[0];
              let secondSelectedElement = this.getElementsByClassName('front')[0];

              if (firstSelectedElement.style.background == secondSelectedElement.style.background) {
                  self.selectedCard.classList.add('solved');
                  this.classList.add('solved');
                  self.isWin();
              }

              self.isAnimated = false;

              let temp = this;
              setTimeout(function () {
                  self.selectedCard.classList.remove('selected');
                  temp.classList.remove('selected');
                  self.selectedCard = null;
                  self.isAnimated = true;
              }, 1000);
            }
            else self.selectedCard = this;
        }
      });
    }
  }

  isWin() {
    let self = this;

    if (document.getElementsByClassName('solved').length == this.countOfCards) {
      document.getElementById('final').style.display = 'block';
      document.getElementById('game_field').innerHTML = '';
      document.getElementById('game_field').style.display = 'none';
      document.getElementById('final_caption').innerHTML = 'Congratulations!<br />You win!';
      document.getElementById('final_caption').className = 'win';
      self.createRecordsTable();
      self.drawTableOfRecords();
    }
    else if (document.getElementById('timer').innerHTML == 'You lose') {
      document.getElementById('final').style.display = 'block';
      document.getElementById('game_field').innerHTML = '';
      document.getElementById('game_field').style.display = 'none';
      document.getElementById('final_caption').innerHTML = 'Sorry!<br />You lose!';
      document.getElementById('final_caption').className = 'lose';
      self.createRecordsTable();
      self.drawTableOfRecords();
    }

    let final_button = document.getElementById('final_button');

    final_button.addEventListener('click', function(event) {
      document.getElementById('final').style.display = 'none';
      document.getElementById('settings_field_div').style.display = 'flex';
    });
  }

  createRecordsTable() {
    let table_of_users_records;
    let fullName = this.first_name + " " + this.last_name;
    let temp = {};

    temp["name"] = fullName;
    temp["timetoString"] = this.pastTime;
    temp["time"] = this.distance;
    temp["countOfCards"] = this.countOfCards;

    if (localStorage.getItem("table_of_users_records") == null) {
      table_of_users_records = {};
      table_of_users_records[this.distance] = temp;
    }
    else {
      table_of_users_records = JSON.parse(localStorage.getItem("table_of_users_records"));

      if(table_of_users_records[this.distance] == undefined) {
        table_of_users_records[this.distance] = temp;
      }
      else {
        let temp1 = {};
        let temp2 = table_of_users_records[this.distance];
        let id1 = fullName;
        let id2 = temp2["name"];

        if (id1 != id2) {
          temp1[fullName] = temp;
          temp1[temp2["name"]] = temp2;
          table_of_users_records[this.distance] = temp1;
        }
        else {
          table_of_users_records[this.distance] = temp;
        }
      }

      let arrOfDistance = Object.keys(table_of_users_records);
      let tempTable = {};

      arrOfDistance = arrOfDistance.sort();
      arrOfDistance.forEach(function(item, index) {
        tempTable[item] = table_of_users_records[item];
      });
      table_of_users_records = tempTable;
    }

    localStorage.setItem("table_of_users_records",JSON.stringify(table_of_users_records));
  }

  drawTableOfRecords() {
    let table_of_users_records = JSON.parse(localStorage.getItem("table_of_users_records"));
    let keys = Object.keys(table_of_users_records);
    let table = document.getElementById('table');

    table.innerHTML = '';
    
    let countFor6 = 10;
    let countFor18 = 10;
    let countFor36 = 10;

    for (let i = 0; i < keys.length; i++) {
      let tableItem = table_of_users_records[keys[i]];
      let countOfCards = tableItem["countOfCards"];

      switch (countOfCards) {
        case '6':
          if (countFor6 != 0) {
            appendRowsInTable('6');
            countFor6--;
          }
          break;
        case '18':
          if (countFor18 != 0) {
            appendRowsInTable('18');
            countFor18--;
          }
          break;
        case '36':
          if (countFor36 != 0) {
            appendRowsInTable('36');
            countFor36--;
          }
          break;
      }

      function appendRowsInTable(id) {
        let line = document.createElement('tr');

        if (document.getElementById('recordWith' + id + 'cards') == null) {
          let lineBlock = document.createElement('tr');
          lineBlock.id = "recordWith" + id + "cards";
          table.appendChild(lineBlock);

          let lineCaption = document.createElement('tr');
          lineCaption.className = "caption";
          lineCaption.innerHTML = "Records with " + id + " cards:";
          lineBlock.appendChild(lineCaption);
          lineBlock.appendChild(line);
        }
        else {
          document.getElementById('recordWith' + id + 'cards').appendChild(line);
        }

        let cell1 = document.createElement('td');
        cell1.innerHTML = tableItem["name"];
        line.appendChild(cell1);

        let cell2 = document.createElement('td');
        cell2.innerHTML = tableItem["timetoString"];
        line.appendChild(cell2);
      }
    }
  }

  setSettings() {
    let self = this;
    let close_rules_button = document.getElementById('close_rules_button');
    let start_game_button = document.getElementById('start_game_button');

    close_rules_button.addEventListener('click', function(event) {
      document.getElementById('settings_field_div').style.display = 'flex';
      document.getElementById('rules_div').style.display = 'none';
    });

    start_game_button.addEventListener('click', function(event) {
      self.first_name = document.querySelector('#first_name').value;
      self.last_name = document.querySelector('#last_name').value;
      self.email = document.querySelector('#email').value;
      self.countOfCards = document.querySelector('input[name = "difficulty"]:checked').value;
      self.cardsShirt = document.querySelector('input[name = "shirt"]:checked').value;

      if (self.first_name == "" || self.last_name == "" || self.email == "") {
        document.getElementById('attention').textContent = "Please, fill the field!";
      }
      else {
        localStorage.setItem("first_name",JSON.stringify(self.first_name));
        localStorage.setItem("last_name",JSON.stringify(self.last_name));
        localStorage.setItem("email",JSON.stringify(self.email));
        localStorage.setItem("countOfCards",JSON.stringify(self.countOfCards));
        localStorage.setItem("cardsShirt",JSON.stringify(self.cardsShirt));

        document.getElementById('settings_field_div').style.display = 'none';
        document.getElementById('game_field').style.display = 'block';
        self.startGame();
      }
    });
  }
}

function initialize() {
    let game = new Game();
    game.setSettings();
}

window.onload = function() {
    initialize();
};
