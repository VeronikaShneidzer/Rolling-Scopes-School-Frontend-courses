import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';
import store from './js/store/store';
import Rules from './js/components/rules/index';
import Settings from "./js/components/settings/index";
import Game from "./js/components/game/index";
import Table_of_records from "./js/components/table_of_records/index";

const App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Rules}/>
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/game' component={Game}/>
          <Route exact path='/table_of_records' component={Table_of_records}/>
        </Switch>
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
