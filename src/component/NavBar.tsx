import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { INameProps, IFormState } from '../interfaces';

interface WrapperProps {
  className: string;
}

export default function NavBar (props: INameProps) {

  const initialState: IFormState = {
    wrapper: "wrapper",
    headerWrapper: "headerWrapper",
    navWrapper: "navWrapper,"
  }

  const [scrollState, setScrollState] = React.useState(initialState);

  React.useEffect(() => {
    window.addEventListener('scroll', () => handleScroll());    
    return () => {
      window.removeEventListener('scroll', () => handleScroll())
    }
  }, []);

  const handleScroll = () => {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      setScrollState({
        wrapper: "scrolledWrapper",
        headerWrapper: "scrolledHeaderWrapper",
        navWrapper: "scrolledNavWrapper,"
      });
    } else {
      setScrollState({
        wrapper: "wrapper",
        headerWrapper: "headerWrapper",
        navWrapper: "navWrapper,"
      });
    }
  }
  
  return (
    <Wrapper className={scrollState.wrapper}>        
      <HeaderWrapper className={scrollState.headerWrapper}>
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
  height: ${(props: WrapperProps) => props.className === "scrolledWrapper" ? "140px" : " 180px"};
  box-shadow:  ${(props: WrapperProps) => props.className === "scrolledWrapper" && "0px 0px 3px 0px darkgrey"};
  background: var(--mainWhite);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  position: sticky;
  position: -webkit-sticky;
  width: 100%;
  top: 0;
  z-index: 99;
`
const HeaderWrapper = styled("div")`
    font-size: 1.41em;
    font-style: normal;
    text-align: center;
    margin-top: ${(props: WrapperProps) => props.className === "scrolledHeaderWrapper" ? "1.5em" : " 2.5em"};
    word-spacing: 0;
    transition: all 0.4s ease-in-out;
`
const NavWrapper = styled("nav")`
  font-weight: 300;
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


