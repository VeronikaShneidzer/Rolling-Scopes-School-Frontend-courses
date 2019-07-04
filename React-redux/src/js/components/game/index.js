import React, { Component } from "react";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

import "./style.css";
import store from "../../store/store";
import Timer from "../timer/index";
import Cards from "../cards/index";
import { setTimeInState } from "../../actions/timeActions";
import { createCardsList } from "../../actions/cardsActions";

const ConnectedTimer = connect(
    state => ({
      timer: state.timer
    }),
    {
      setTimeInState,
    }
)(Timer);

const ConnectedCards = connect(
    state => ({
      settings: state.settings,
      cards: state.cards
    }),
    {
      createCardsList
    }
)(Cards);

class Game extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper game-field">
          <ConnectedTimer />
          <ConnectedCards />
        </div>
      </Provider>
    );
  }
}

export default Game;