import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { IFormState } from '../interfaces';
import { withRouter } from "react-router-dom"

interface WrapperProps {
  className: string;
}

function NavBar (props: any ) {

  const initialState: IFormState = {
    wrapper: "wrapper",
    headerWrapper: "headerWrapper",
  }
  
  const [scrollState, setScrollState] = React.useState(initialState);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  });

  const handleScroll = () => {
    if(window.pageYOffset > 150) {
      setScrollState({
        wrapper: "scrolledWrapper",
        headerWrapper: "scrolledHeaderWrapper",
      });
    } else {
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
      <NavWrapper id="navWrapper" className="navbar navbar-expand-lg px-sm-5">
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo01"> */}
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
        {/* </div> */}
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
    margin-top: 2.5em;
    display: ${(props: WrapperProps) => props.className === "scrolledHeaderWrapper" ? "none" : "block"};
    word-spacing: 0;
    transition: all 0.5s ease-in-out;
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


