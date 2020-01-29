import React from 'react';
import { IAppProps } from '../interfaces';
import { fetchHomeData } from '../actions/Action';
import { Store } from '../Store';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Story from './Story';
import Contact from './Contact';
// import Map from './Map';
import Blogs from './Blog/BlogSection';

export default function Home() {

    const {state, dispatch} = React.useContext(Store);
    React.useEffect(() => {
        fetchHomeData(dispatch)
    }, [dispatch]);


    document.title = "Qi Zhang - home";

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

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

    if(state.home._id) {
        return (
            <>
                <About {...aboutProps} />
                <Experience {...experienceProps} />
                <Projects {...projectProps} />
                <Story {...storyProps} />
                <Contact />
                {/* <Map /> */}
                <Blogs {...blogProps}/>
            </>
        )
    }

    return <div className="loader container" />
}