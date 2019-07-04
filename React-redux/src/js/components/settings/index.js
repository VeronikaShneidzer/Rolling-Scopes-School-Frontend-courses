import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';


import "./style.css";
import Game from "../game/index";
import { setUserInfo } from "../../actions/settingsActions";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.warning = "";
    this.state = {
      username: "",
      email: "",
      countOfCards: 6,
      cardsShirt: "memes"
    };
  }

  validateEmail(email) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(email).toLowerCase());
  }

  validation() {
    if (!this.validateEmail(this.state.email)) {
      this.warning = "Please, enter right E-mail!";
    }
    else if (!this.state.username) {
      this.warning = "Please, enter username!";
    }
    else this.warning = "";
  }

  handleClick() {
    this.props.setUserInfo(this.state.username,
        this.state.email,
        this.state.countOfCards,
        this.state.cardsShirt
    );

    if (this.validateEmail(this.props.settings.email) && this.props.settings.username) {
      ReactDOM.render((
        <BrowserRouter>
          <Game />
        </BrowserRouter>
      ), document.getElementById("root"));
    }
  }

  render() {
    return (
      <div className="wrapper settings-field">
        <div className="content">
          <h2>Choose your settings:</h2>
          <form action="">
            <p>
              <label htmlFor="username">Username: </label>
              <input type="text"
                     id="username"
                     name="Username"
                     placeholder="Username"
                     onChange={(event) => {
                       this.setState({username: event.target.value});
                       this.validation();
                     }}/>
            </p>
            <p>
              <label htmlFor="email">Email name: </label>
              <input type="email"
                     id="email"
                     placeholder="sophie@example.com"
                     onChange={(event) => {
                       this.setState({email: event.target.value});
                       this.validation();
                     }}/>
            </p>
            <h3>Shirt Cards: </h3>
            <p>
              <input type="radio"
                     name="shirt"
                     defaultChecked
                     value="memes"
                     onClick={(event) => this.setState({cardsShirt: event.target.value})}/>
              <img src="./img/memes/shirt.png" alt="Memes"/>
              <input type="radio"
                     name="shirt"
                     value="languages"
                     onClick={(event) => this.setState({cardsShirt: event.target.value})}/>
              <img src="./img/languages/shirt.png" alt="Languages"/>
              <input type="radio"
                     name="shirt"
                     value="different"
                     onClick={(event) => this.setState({cardsShirt: event.target.value})}/>
              <img src="./img/different/shirt.png" alt="Different"/>
            </p>
            <h3>Game difficulty: </h3>
            <p>
              <input type="radio"
                     name="difficulty"
                     defaultChecked
                     value="6"
                     onClick={(event) => this.setState({countOfCards: event.target.value})}
              />Low (6 cards)<br/>
              <input type="radio"
                     name="difficulty"
                     value="18"
                     onClick={(event) => this.setState({countOfCards: event.target.value})}
              />Medium (18 cards)<br/>
              <input type="radio"
                     name="difficulty"
                     value="36"
                     onClick={(event) => this.setState({countOfCards: event.target.value})}
              />Hight (36 cards)<br/>
            </p>
            <p id="attention" className="attention">{this.warning}</p>
            <Link to='/game' className="start-game-button" onClick={(event) => this.handleClick(event)}>Start game</Link>
          </form>
        </div>
      </div>
  );
  }
}

export default connect(
  state => ({
    settings: state.settings
  }),
  {
    setUserInfo
  }
)(Settings);
