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
import Footer from './Footer';
import Blogs from './Blog/BlogSection';

export default function Home() {

    const {state, dispatch} = React.useContext(Store);
    React.useEffect(() => {
        fetchHomeData(dispatch)
    }, [dispatch]);

    React.useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());    
        return () => {
          window.removeEventListener('scroll', () => handleScroll())
        }
      }, []
    )

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

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

    const blogProps: IAppProps = {
        data: state.home.blogs,
        store: {state, dispatch},
    }

    const scroll = Scroll.animateScroll;

    const scrollToTop: any = () => {
      scroll.scrollToTop();
    }

    if(state.home._id) {
        return (
            <HomeWrapper>
                <About {...aboutProps}/>
                <Experience {...experienceProps}/>
                <Projects {...projectProps}/>
                <Story {...storyProps}/>
                <Contact />
                <Map />
                <Blogs {...blogProps}/>
                <i 
                    className="fas fa-angle-double-up" 
                    id="back_to_top_icon" 
                    onClick={() => scrollToTop()} 
                />
                <Footer name="Qi Zhang"/>
            </HomeWrapper>
        )
    }

    return <div className="loader container" />

}

const HomeWrapper = styled("div")`
    .fa-angle-double-up{
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