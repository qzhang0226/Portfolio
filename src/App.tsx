import React from 'react';
import Header from './component/Header';
import NavBar from './component/NavBar';
import { Switch, Route } from 'react-router-dom';
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/projects';
import Story from './component/Story';
import Contact from './component/Contact';
import './App.css';

const App: React.FC = () => {

  const storyProps = {
    bgColor: "blue",
    top: `"Do not go where the path may lead. Instead, go where there is no path and leave a trail"`, 
    bottom: "Ralph Waldo Emerson",
  }

  return (
    <React.Fragment>
      <Header headerName="QI ZHANG"/>
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Story storyProps={storyProps} />
      <Contact />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
