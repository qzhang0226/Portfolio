import React from 'react';
import Header from './component/Header';
import NavBar from './component/NavBar';
import { Switch, Route } from 'react-router-dom';
import {PortfolioContext} from './context';
import Card from './component/Card';
import './App.css';

const App: React.FC = () => {
  const store = React.useContext(PortfolioContext)
  return (
    <React.Fragment>
      <Header headerName="QI ZHANG"/>
      <NavBar />
      <Card />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
