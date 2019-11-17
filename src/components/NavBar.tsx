import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { IFormState } from '../interfaces';
import { withRouter } from "react-router-dom"

interface WrapperProps {
  className: string;
}

function NavBar (props: any) {

  const initialState: IFormState = {
    wrapper: "wrapper",
    headerWrapper: "headerWrapper",
    pageLocation: props.location.pathname
  }
  
  const [scrollState, setScrollState] = useState(initialState);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  }, []);

  useEffect(() => {
    let navItem = document.getElementsByClassName("nav-item");
    let navLink = document.getElementsByClassName("nav-link");
    for (let i=0; i < navLink.length; i++) {
      if(navLink[i].getAttribute("href") === scrollState.pageLocation) {
        navItem[i].classList.add("active")
      }
      // navItem[i].addEventListener('click', function() {
      //   var current = document.getElementsByClassName("active");
      //   current[0].className = current[0].className.replace(" active", "");
      //   navItem[i].classList.add("active");
      // });
    }
  }, [])

  const handleScroll = () => {

    let st = window.pageYOffset;

    if(st > 0) {
      setScrollState({
        wrapper: "scrolledWrapper",
        headerWrapper: "scrolledHeaderWrapper",
      });
    } else if(st < 180){
      setScrollState({
        wrapper: "wrapper",
        headerWrapper: "headerWrapper",
      });
    }
  };

  const handleClick = () => {
    
  }
  
  return (
    // <Wrapper className={scrollState.wrapper}>  
    //   <NavWrapper id="navWrapper" className="navbar navbar-expand-lg px-sm-5 navbar-fixed-top">
    //     <HeaderWrapper className={scrollState.headerWrapper}>
    //       <Link to="/">Qi Zhang</Link>
    //     </HeaderWrapper>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/blog">Blogs</Link>
    //       </li>
    //       <div className="social-media">
    //       <a href="https://www.linkedin.com/in/qi-zhang-0226/" target="_blank" rel="noopener noreferrer" id="linkedin" className="linkedin-link">
    //         <i className="fab fa-linkedin-in" />
    //       </a>          
    //       <a href="https://github.com/qzhang0226" target="_blank" rel="noopener noreferrer" id="github" className="github-link">
    //         <i className="fab fa-github" />
    //       </a>  
    //     </div>   
    //     </ul>
    //   </NavWrapper>
    // </Wrapper>

    <NavWrapper className="navbar navbar-expand-lg navbar-light" role="navigation">
      <Link className="navbar-brand" to="/">Qi Zhang</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-ex1-collapse" id="navbarNav">
        <ul className="nav navbar-nav internal-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blogs</Link>
          </li>
        </ul>
        <ul className="navbar-nav media-nav ml-auto">
          <li className="nav-item linkedIn-icon">
            <a href="https://www.linkedin.com/in/qi-zhang-0226/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li className="nav-item github-icon">
            <a href="https://github.com/qzhang0226" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </NavWrapper>
  );
}

const Wrapper = styled("section")`
  height: ${(props: WrapperProps) => props.className === "scrolledWrapper" ? "40px" : "180px"};
  box-shadow:  ${(props: WrapperProps) => props.className === "scrolledWrapper" && "0px 0px 3px 0px darkgrey"};
  background: var(--mainWhite);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
`
const HeaderWrapper = styled("div")`
    font-size: 1.41em;
    font-style: normal;
    float: left;
    padding: 15px;
    text-align: center;
    width: 100%;
    /* text-align: center; */
    /* margin-top: ${(props: WrapperProps) => props.className === "scrolledHeaderWrapper" ? "0" : "2.5em"}; */
    opacity: ${(props: WrapperProps) => props.className === "scrolledHeaderWrapper" ? "0" : "1"};
    height: ${(props: WrapperProps) => props.className === "scrolledHeaderWrapper" ? "0" : "auto"}; 
    word-spacing: 0;
    transition: all 0.3s ease-in-out;
    p {
      float: none;
    }
`
const NavWrapper = styled("nav")`
  background: var(--mainWhite);
  text-align: center;
  display: inherit;
  position: relative;
  .navbar-nav .media-nav{
    cursor: pointer;
  }
  .navbar-collapse {
    text-align: center;
  }
  button {
    position: absolute;
    right: 5%;
    &:focus {
      outline: none;
    }
  }
  .show {
    height: 100vh;
  }
  .collapsing {
    z-index: 1000;
    position: fixed;
    transition: height 10s ease-in-out;
  }
  @media only screen and (min-width: 992px){
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .navbar-brand {
      padding-bottom: 1.3125rem;
    }
    .internal-nav {
      position: absolute;
      left: 50%;
      transform: translateX(-56%);
    }
    .github-icon {
      margin-left: 1rem;
    }
  }
  @media only screen and (max-width: 991px){
    .media-nav>li {
      margin-top: 0.5rem;
    }
  }
`

export default withRouter(NavBar)


