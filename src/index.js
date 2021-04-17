import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.scss"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const Login = loadable(() => import('./views/Login'))
const SignUp = loadable(() => import('./views/SignUp'))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={SignUp} />
      </Switch>
    </ BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
