import React from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import './App.css';

export default function App(props: any): JSX.Element {
  return (
    <React.Fragment>
      <NavBar name="QI ZHANG"/>
      {props.children}
      <Footer name="Qi Zhang"/>
    </React.Fragment>
  );
}