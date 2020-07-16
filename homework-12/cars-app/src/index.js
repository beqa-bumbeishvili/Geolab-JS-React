import React from 'react';
import ReactDOM from 'react-dom';
import CarsCatalogMain from './components/CarsCatalogMain'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CarDetails from './components/CarDetails'
import LoginPage from './components/LoginPage'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/details/:id" component={CarDetails}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/" component={CarsCatalogMain}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);