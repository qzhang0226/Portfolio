import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { INameProps } from '../interfaces';

export default function NavBar (props: INameProps) {

  // React.useEffect(() => {
  //   window.addEventListener('scroll', () => handleScroll());    
  //   return () => {
  //     window.removeEventListener('scroll', () => handleScroll())
  //   }
  // }, []);

//   const handleScroll = () => {
//     const myHeaderElement: HTMLElement | null = document.getElementById('headerWrapper');
//     // const myLinkedInElement: any = document.getElementById('linkedin');
//     const myNavElement: any = document.getElementById('navWrapper');
//     const myWrapperElement: any = document.getElementById('wrapper');
//     if(myHeaderElement){
//         if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//             myHeaderElement.style.textAlign = "left";
//             myHeaderElement.style.marginTop = "0.5em";
//             myHeaderElement.style.display = "inline-block";
//             // myLinkedInElement.style.display = "none";
//             // myLinkedInElement.style.display = "none";
//             myNavElement.style.display = "inline-block";
//             myNavElement.style.float = "right";
//             myNavElement.style.marginTop = "0.4em";
//             myWrapperElement.style.height = "50px";
//             myWrapperElement.style.background = "#F8F8F8";
//         } else {
//             myHeaderElement.style.textAlign = "center";
//             myHeaderElement.style.marginTop = "2.5em";
//             myHeaderElement.style.display = "block";
//             // myLinkedInElement.style.display = "block";
//             myNavElement.style.margin = "0 auto";
//             myNavElement.style.display = "flex";
//             myNavElement.style.float = "none";
//             myNavElement.style.marginTop = "0";
//             myWrapperElement.style.background = "#fff";
//             myWrapperElement.style.height = "180px";

//             // myWrapperElement.style.height = "30px";
//         }
//     }
// }
  
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
  /* overflow: hidden;
  transition: 0.4s;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99; */
`
const HeaderWrapper = styled("div")`
    font-size: 1.41em;
    font-style: normal;
    text-align: center;
    margin-top: 2.5em;
    word-spacing: 0;
    transition: 0.4s;
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


