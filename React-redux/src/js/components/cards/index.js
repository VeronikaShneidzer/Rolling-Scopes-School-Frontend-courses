import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import "./style.css";
import store from "../../store/store";
import Table_of_records from "../table_of_records/index";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.deck = [];
    this.previousCard = null;
    this.previousCardId = undefined;
    this.isAnimated = true;
    this.countOfCards = this.props.settings.countOfCards;
  }

  componentDidMount() {
    this.generateCards();
    this.drawCards();
  }

  generateCards() {
    this.deck = Array.from({length: this.countOfCards / 2}, (i, x) => x);
    this.deck = this.deck.concat(this.deck);

    for (let i = this.deck.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = this.deck[randomIndex];

      this.deck[randomIndex] = this.deck[i];
      this.deck[i] = itemAtIndex;
    }
  }

  drawCards() {
    let cards = this.deck.map((x, index) => {
      let frontImg = "url(./img/" + this.props.settings.cardsShirt + "/" + x + ".png) no-repeat #fff";;
      let backImg = "url(./img/" + this.props.settings.cardsShirt + "/shirt.png) no-repeat";

      return (
        <div className="card" key={index}>
          <div className="front"
               style={{background: frontImg, backgroundSize: "contain"}}></div>
          <div className="back"
               onClick={(event) => this.handleClick(event.target, x)}
               style={{background: backImg, backgroundSize: "contain"}}></div>
        </div>
      );
    });

    this.props.createCardsList(cards);
  }

  loadTableOfRecords() {
    ReactDOM.render((
      <Provider store={store}>
        <BrowserRouter>
          <Table_of_records />
        </BrowserRouter>
      </Provider>
    ), document.getElementById("root"));
  }

  handleClick(event, x) {
    if (this.previousCardId === undefined) {
      this.previousCardId = x;
      this.previousCard = event.parentElement;
      this.previousCard.classList.add('selected');
    }
    else {
      let currentCard = event.parentElement;
      currentCard.classList.add('selected');

      if (this.previousCardId === x) {
        this.previousCard.classList.add('solved');
        currentCard.classList.add('solved');

        if (document.getElementsByClassName('solved').length == this.countOfCards) {
          this.loadTableOfRecords();
        }
      }

      this.isAnimated = false;
      let self = this;
      setTimeout(function() {
        self.previousCard.classList.remove('selected');
        currentCard.classList.remove('selected');

        self.previousCard = null;
        self.previousCardId = undefined;
        self.isAnimated = true;
      }, 1000);
    }
  }

  render() {
    return (
      <div className="card_list">{this.props.cards.cardsList}</div>
    );
  }
}

export default Cards;