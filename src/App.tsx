import React from 'react';
import Header from './component/Header';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import './App.css';

export default function App(props: any): JSX.Element {
  return (
    <React.Fragment>
      <Header name="QI ZHANG"/>
      <NavBar />
      {props.children}
      <Footer name="Qi Zhang"/>
    </React.Fragment>
  );
}