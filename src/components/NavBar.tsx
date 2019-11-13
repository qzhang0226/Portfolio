import * as React from 'react';
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
  
  const [scrollState, setScrollState] = React.useState(initialState);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  });

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
  
  return (
    <Wrapper className={scrollState.wrapper}>  
      <HeaderWrapper className={scrollState.headerWrapper}>
        <p><Link to="/">Qi Zhang</Link></p>
      </HeaderWrapper>
      <NavWrapper id="navWrapper" className="navbar navbar-expand-lg px-sm-5 navbar-fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog">Blogs</Link>
          </li>
          <a href="https://www.linkedin.com/in/qi-zhang-0226/" target="_blank" rel="noopener noreferrer" id="linkedin" className="linkedin-link">
            <i className="fab fa-linkedin-in" />
          </a>          
        </ul>
      </NavWrapper>
    </Wrapper>
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
    text-align: center;
    margin-top: ${(props: WrapperProps) => props.className === "scrolledHeaderWrapper" ? "0" : "2.5em"};
    opacity: ${(props: WrapperProps) => props.className === "scrolledHeaderWrapper" ? "0" : "1"};
    height: ${(props: WrapperProps) => props.className === "scrolledHeaderWrapper" ? "0" : "auto"}; 
    word-spacing: 0;
    transition: all 0.3s ease-in-out;
`
const NavWrapper = styled("nav")`
  font-weight: 300;
  .navbar-nav{
    margin: 0 auto;
  }
  .navbar-nav > li{
    padding-left:10px;
    padding-right:10px;
  }
  .nav-item:hover{
    background: var(--mainBlue);
  }
  .linkedin-link{
    position: absolute;
    right: 10%;
  }
`;

export default withRouter(NavBar)


