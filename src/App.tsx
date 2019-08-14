import React from 'react';
import Header from './component/Header';
import NavBar from './component/NavBar';
import { Store } from './Store';
import { Switch, Route } from 'react-router-dom';
import About from './component/About';
import Experience from './component/Experience';
import './App.css';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <Header headerName="QI ZHANG"/>
      <NavBar />
      <About />
      <Experience />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
