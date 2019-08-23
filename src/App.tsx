import React from 'react';
import Header from './component/Header';
import NavBar from './component/NavBar';
import { Switch, Route } from 'react-router-dom';
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/projects';
import Story from './component/Story';
import Contact from './component/Contact';
import Map from './component/Map';
import Footer from './component/Footer';
import './App.css';

const App: React.FC = () => {

  const storyProps = {
    bgColor: "blue",
    top: `"Do not go where the path may lead. Instead, go where there is no path and leave a trail"`, 
    bottom: "Ralph Waldo Emerson",
  }

  return (
    <React.Fragment>
      <Header name="QI ZHANG"/>
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Story storyProps={storyProps} />
      <Contact />
      <Map />
      <Footer name="2019 by Qi Zhang"/>
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
