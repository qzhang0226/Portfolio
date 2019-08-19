import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function NavBar () {
    return (
      <NavWrapper className="navbar navbar-expand-lg px-sm-5">
        <div className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="nav-item ml-3">
            <Link to="/blog">Blog</Link>
          </li> */}
          <a href="https://www.linkedin.com/in/qi-zhang-0226/" target="_blank" className="linkedin-link">
            <i className="fab fa-linkedin-in" />
          </a>          
        </div>
      </NavWrapper>
    );
}

const NavWrapper = styled("nav")`
  background: var(--mainWhite);
  font-weight: 300;
  margin-bottom: 2em;
  .navbar-nav{
    margin: 0 auto;
  }
  .linkedin-link{
    position: absolute;
    right: 10%;
  }
`;


