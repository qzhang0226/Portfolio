import React from 'react';
import { IAppProps } from '../interfaces';
import { fetchHomeData } from '../actions/Action';
import { Store } from '../Store';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Story from './Story';
import Contact from './Contact';
import Map from './Map';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';

export default function Home() {
    const {state, dispatch} = React.useContext(Store);
    React.useEffect(() => {
        fetchHomeData(dispatch)
    }, []);

    // const [lastScrollTop, setLastScrollTop] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());
      
        return () => {
          window.removeEventListener('scroll', () => handleScroll())
        }
      }, [])

    const handleScroll = () => {
        const myElement: HTMLElement | null = document.getElementById('back_to_top_icon');
        if(myElement){
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                myElement.style.right = "10px";
            } else {
                myElement.style.right = "-100px";
            }
        }

    }

    const aboutProps: IAppProps = {
        data: state.home.about,
        store: {state, dispatch},
    }

    const experienceProps: IAppProps = {
        data: state.home.profile,
        store: {state, dispatch},
    }

    const projectProps: IAppProps = {
        data: state.home.project,
        store: {state, dispatch},
    }

    const storyProps: IAppProps = {
        data: state.home.quotation,
        store: {state, dispatch},
    }

    const scroll = Scroll.animateScroll;

    const scrollToTop: any = () => {
      scroll.scrollToTop();
    }

    return (
        <HomeWrapper>
            <React.Suspense fallback={<div>loading...</div>}>
                <About {...aboutProps}/>
                <Experience {...experienceProps}/>
                <Projects {...projectProps}/>
                <Story {...storyProps}/>
                <Contact />
                <Map />
                <i 
                    className="fas fa-angle-double-up" 
                    id="back_to_top_icon" 
                    onClick={() => scrollToTop()} 
                />
            </React.Suspense>
        </HomeWrapper>
    )
}

const HomeWrapper = styled("section")`
    .fas{
        opacity: .6;
        font-size: 4rem;
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