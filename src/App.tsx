import React from 'react';
import Header from './component/Header';
import NavBar from './component/NavBar';
import { Switch, Route } from 'react-router-dom';
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/projects';
import './App.css';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <Header headerName="QI ZHANG"/>
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
