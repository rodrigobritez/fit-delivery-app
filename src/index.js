import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.scss"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/login" component={loadable(() => import('./views/Login'))} />
        <Route path="/cadastro" component={loadable(() => import('./views/SignUp'))} />
      </Switch>
    </ BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
