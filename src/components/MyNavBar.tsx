import React, { useState, useEffect } from 'react';
import Header from './Header';
import { IFormState } from '../interfaces';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

export interface IAppProps {
}

function MyNavBar (props: IFormState) {

  const initialNavState: IFormState = {
    display: "block"
  }

  const [navState, setNavState] = useState(initialNavState);

  useEffect(() => {
    if(props.location.pathname === "/project/dsny" || props.location.pathname === "/project/portfolio") {
      setNavState({
        display: "none"
      });
    } else {
      setNavState({
        display: "block"
      });
    }
  }, [props.location.pathname])

  const initialStateMobile: IFormState = {
    buttonClicked: false,
  }

  const [buttonState, setClickState] = useState(initialStateMobile);
  
  const handleButtonClick = () => {
    setClickState({
      buttonClicked: !buttonState.buttonClicked
    })
  }

  const initialActiveState: IFormState = {
    active: "homeLink"
  }
  const [activeState, setActiveState] = useState(initialActiveState)

  const handleLinkClick = (e: any) => {
    setClickState({
      buttonClicked: !buttonState.buttonClicked,
    });
    const clicked = e.target.id;
    if(activeState.active === clicked) {
      setActiveState({
        active: ''
      })
    } else {
      setActiveState({
        active: clicked
      })
    }
  }

  return (
    <NavWrapper className={navState.display}>
        <Header name="Qi Zhang" className="navHeader" />  
        <div className="myNav normalView">
          <div className="normal-internal-links">
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/blog">Blogs</Link>
          </div>
          <div className="normal-external-links">
            <a href="https://www.linkedin.com/in/qi-zhang-0226/" target="_blank" rel="noopener noreferrer" id="linkedin" className="linkedin-link mr-4">
              <i className="fab fa-linkedin-in" />
            </a>          
            <a href="https://github.com/qzhang0226" target="_blank" rel="noopener noreferrer" id="github" className="github-link">
              <i className="fab fa-github" />
            </a> 
          </div>
        </div>   
        <div className="myNav mobileView">
          <div className={buttonState.buttonClicked ? "nav-button-clicked" : "nav-button"} onClick={handleButtonClick}>
            <div className={buttonState.buttonClicked ? "changeBar1" : "bar1"}></div>
            <div className={buttonState.buttonClicked ? "changeBar2" : "bar2"}></div>
            <div className={buttonState.buttonClicked ? "changeBar3" : "bar3"}></div>
          </div>
          <div className={buttonState.buttonClicked ? "open" : "closed"}>
            <div className="mobile-internal-links">
              <Link id="homeLink" to="/" className={activeState.active === "homeLink" ? "active" : ""} onClick={handleLinkClick}>Home</Link>
              <Link id="blogLink" to="/blog" className={`mt-5 ${activeState.active === "blogLink" ? "active" : ""}`} onClick={handleLinkClick}>Blogs</Link>
            </div>
            <div className="mobile-external-links">
              <a href="https://www.linkedin.com/in/qi-zhang-0226/" target="_blank" rel="noopener noreferrer" id="linkedin" className="linkedin-link">
                <i className="fab fa-linkedin-in" />
              </a>          
              <a href="https://github.com/qzhang0226" target="_blank" rel="noopener noreferrer" id="github" className="github-link">
                <i className="fab fa-github" />
              </a> 
            </div>
          </div>
        </div>   
    </NavWrapper>
  );
}

export default withRouter(MyNavBar);

const NavWrapper = styled("div")`
  display: ${(props: IFormState) => props.className === "block" ? "block" : "none"};
  height: 180px;
  padding: 50px 0;
  text-align: center;
  .navHeader {
    height: 65px;
    font-size: 1.5rem;
  }
  .nav-button {
    opacity: .3;
    display: inline-block;
    position: fixed;
    top: 1%;
    right: 3%;
    z-index: 100;
    cursor: pointer;
  }
  .nav-button-clicked {
    opacity: 1;
    display: inline-block;
    position: fixed;
    top: 1%;
    right: 3%;
    z-index: 100;
    cursor: pointer;
  }
  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 3px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }
  .changeBar1 {
    width: 35px;
    height: 3px;
    background-color: var(--mainWhite);
    margin: 6px 0;
    transition: 0.4s;
    -webkit-transform: rotate(-45deg) translate(-5px, 5px);
    transform: rotate(-45deg) translate(-5px, 5px);
  }
  .changeBar2 {
    width: 35px;
    height: 3px;
    background-color: var(--mainWhite);
    margin: 6px 0;
    transition: 0.4s;
    opacity: 0;
  }
  .changeBar3 {
    width: 35px;
    height: 3px;
    background-color: var(--mainWhite);
    margin: 6px 0;
    transition: 0.4s;
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
  .closed{
    position: fixed; 
    width: 100%; 
    height: 100vh; 
    top: 0;
    right: -100%;
    background-color: #5D727D; 
    opacity: 0;
    color: var(--mainDark);
    z-index: 10; 
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .open{
    position: fixed; 
    width: 100%; 
    height: 100vh; 
    top: 0;
    right: 0;
    background-color: #5D727D;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.9);
    z-index: 10; 
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .normalView {
    position: relative;
  }
  .mobile-internal-links a{
    font-size: 2rem;
    color: #989898;
    display: block;
    transition: 0.3s;
  }
  .mobile-external-links a {
    display: inline-block;
    margin: 0 20px;
    font-size: 2rem;
    color: #f1f1f1;
    transition: 0.3s;
  }
  .mobile-internal-links a:hover, .mobile-external-links a:hover {
    color: #FFFFFF;
  }
  .normal-external-links {
    display: inline-block;
    position: absolute;
    top: 10%;
    right: 5%;
    transform: translate(-95%,-10%);
    -ms-transform: translate(-95%,-10%);
  }
  .mobile-internal-links{
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translate(-50%,-33%);
    -ms-transform: translate(-50%,-33%);
  }
  .mobile-external-links {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-70%);
    -ms-transform: translate(-50%,-70%);
  }  
  .active {
    color: #ffffff !important;
  }
  @media only screen and (min-width: 992px){
    .mobileView {
      display: none;
    }
  }
  @media only screen and (max-width: 991px){
    .normalView {
      display: none;
    }
    .navHeader {
      margin-top: 25px;
    }
  }
`
