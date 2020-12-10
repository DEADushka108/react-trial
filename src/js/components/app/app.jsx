import React from 'react';
// import PropTypes from 'prop-types';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../../history/history.js';
import Main from '../main/main.jsx';
import Form from '../form/form.jsx';
import {AppRoute} from '../../utils/const.js';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`} render={() => {
          <Main/>
        }}/>
        <Route exact path={`${AppRoute.FORM}`} render={() => {
          <Form/>
        }}/>
      </Switch>
    </Router>
  )
}

export default App;
