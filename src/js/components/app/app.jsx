import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import history from '../../history/history.js';
import Main from '../main/main';
import Form from '../form/form.jsx';
import {AppRoute} from '../../utils/const.js';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={`${AppRoute.ROOT}`}>
        <Main/>
      </Route>
      <Route exact path ={`${AppRoute.FORM}`}>
        <Form/>
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
