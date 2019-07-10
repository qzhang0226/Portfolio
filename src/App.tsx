import React from 'react';
import Header from './component/Header';
import NavBar from './component/NavBar';
import { Switch, Route } from 'react-router-dom';
import Card from './component/Card';
import './App.css';

const App: React.FC = () => {
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
