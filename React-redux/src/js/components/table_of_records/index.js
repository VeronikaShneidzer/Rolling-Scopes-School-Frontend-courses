import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './style.css';
import { createScoreboard } from "../../actions/table_of_recordsActions"
import ReactDOM from "react-dom";
import Settings from "../settings";
import store from "../../store/store";
import Provider from "react-redux/es/components/Provider";

class Table_of_records extends Component {
  componentDidMount() {
    fetch('http://mmg-score.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({
        username: this.props.settings.username,
        email: this.props.settings.email,
        score: Math.floor(this.props.timer.time / 1000)
      }),
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'cors_url',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result.error.code !== 0) console.log("Something has gone wrong =(");
        else fetch('http://mmg-score.herokuapp.com/')
              .then(response => response.json())
              .then(data => {
                if (data.error.code !== 0) console.log("Something has gone wrong =(");
                else this.createTbody(data);
              })
      });
  }
  
  createTbody(data) {
    let table = data.result.sort((a, b) => {return a.score - b.score;});
    let rows = table.map((x, index) => {
      return (
        <tr key={index}>
          <td>{x.username}</td>
          <td>{x.email}</td>
          <td>{x.score}</td>
        </tr>
      );
    });

    this.props.createScoreboard(rows);
  }

  handleClick() {
    ReactDOM.render((
        <Provider store={store}>
          <BrowserRouter>
            <Settings />
          </BrowserRouter>
        </Provider>
    ), document.getElementById("root"));
  }

  render() {
    console.log(this.props);
    return (
      <div className="wrapper final">
        <h2>Scoreboard:</h2>
        <div className="table-of-records">
          <table className="table">
            <tbody>
              <tr className="caption">
                <td>Username</td>
                <td>E-mail</td>
                <td>Score</td>
              </tr>
              {this.props.table_of_records.scoreboard}
            </tbody>
          </table>
        </div>
        <Link to='/' className="final-button" onClick={this.handleClick}>Do you want to play again?</Link>
      </div>
    );
  }
}

export default connect(
    state => ({
      settings: state.settings,
      table_of_records: state.table_of_records,
      timer: state.timer
    }),
    {
      createScoreboard
    }
)(Table_of_records);