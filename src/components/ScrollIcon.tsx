import React from 'react';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';

interface Props {
    
}

export const ScrollIcon: React.FC<Props> = () => {

    React.useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());    
        return () => {
          window.removeEventListener('scroll', () => handleScroll())
        }
      }, []
    )

    const handleScroll = () => {
        const myElement: HTMLElement | null = document.getElementById('back_to_top_icon');
        if(myElement){
            if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
                myElement.style.right = "10px";
            } else {
                myElement.style.right = "-100px";
            }
        }
    }

    const scroll = Scroll.animateScroll;

    const scrollToTop: any = () => {
      scroll.scrollToTop({
          duration: 1500,
          smooth: "easeInQuint",
        });
    }

    return (
        <IconWrapper>
            <i 
                className="fas fa-angle-double-up" 
                id="back_to_top_icon" 
                onClick={() => scrollToTop()} 
            /> 
        </IconWrapper>
    )
}

const IconWrapper = styled("div")`
    .fa-angle-double-up{
        opacity: .6;
        font-size: 3rem;
        cursor: pointer;
        position: fixed;
        -webkit-transition: right 0.5s; /* For Safari 3.1 to 6.0 */
        transition: right 0.5s;
        bottom: 3vh;
        z-index: 100;
        right: -100px;
        overflow: hidden;
    }
`
