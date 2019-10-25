import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { INameProps } from '../interfaces';

export default function NavBar (props: INameProps) {

  React.useEffect(() => {
    window.addEventListener('scroll', () => handleScroll());    
    return () => {
      window.removeEventListener('scroll', () => handleScroll())
    }
  }, []);

  const handleScroll = () => {
    const myHeaderElement: HTMLElement | null = document.getElementById('headerWrapper');
    const myWrapperElement: HTMLElement | null = document.getElementById('wrapper');
    const myNavElement: HTMLElement | null = document.getElementById('navWrapper');
    if(myWrapperElement && myHeaderElement && myNavElement){
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            myHeaderElement.style.marginTop = "1em";
            myNavElement.style.marginBottom = "1em";
            myWrapperElement.style.boxShadow = "0px 0px 3px darkgrey";
        } else {
            myHeaderElement.style.marginTop = "2.5em";
            myNavElement.style.marginBottom = "2.5em";
            myWrapperElement.style.boxShadow = "none";
        }
    }
}
  
  return (
    <Wrapper id="wrapper">        
      <HeaderWrapper id="headerWrapper">
        <p><Link to="/">{props.name}</Link></p>
      </HeaderWrapper>
      <NavWrapper id="navWrapper" className="navbar navbar-expand-lg px-sm-5">
        <div className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <a href="https://www.linkedin.com/in/qi-zhang-0226/" target="_blank" rel="noopener noreferrer" id="linkedin" className="linkedin-link">
            <i className="fab fa-linkedin-in" />
          </a>          
        </div>
      </NavWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("section")`
  background: var(--mainWhite);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
`
const HeaderWrapper = styled("div")`
    font-size: 1.41em;
    font-style: normal;
    text-align: center;
    margin-top: 2.5em;
    word-spacing: 0;
    transition: all 0.4s ease-in-out;
`
const NavWrapper = styled("nav")`
  font-weight: 300;
  margin-bottom: 2.5em;
  .navbar-nav{
    margin: 0 auto;
  }
  .nav-item:hover{
    background: var(--mainBlue);
  }
  .linkedin-link{
    position: absolute;
    right: 10%;
  }
`;


