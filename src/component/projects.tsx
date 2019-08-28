import * as React from 'react';
import { Store } from '../Store';
import { fetchProjectData } from '../actions/Action';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Projects () {

    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchProjectData(dispatch)
    }, []);

    const projects = state.project.data;

    return (
        projects ?
        <ProjectsWrapper>
            <Carousel 
                className="offset-1 col-10 offset-1" 
                autoPlay 
                useKeyboardArrows 
                infiniteLoop
                showThumbs={false} 
                showIndicators={false} 
                showStatus={false} 
            >
            {projects.map((item: any) => {
                return (
                    <div className="carousel_image_container" key={item._id}>
                        <img src={item.postImage} alt={item.title} />
                        <div className="overlay"></div>
                        <div className="project_description">
                            <div className="project_title">{item.title}</div>
                            <p>{item.description}</p>
                            <div></div>
                            <div></div>
                        </div>  
                    </div>
                )
            })}
            </Carousel>
        </ProjectsWrapper>
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    )
}


const ProjectsWrapper = styled("section")`
    background: var(--mainWhite);
    padding: 6.5em 0 6.5em 0;
    .carousel_image_container{
        max-height: 650px;
        position: relative;
        text-align: center;
        overflow: hidden;
    }
    .overlay {
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .3s ease;
        background-color: #FFFFFF;
    }
    .carousel_image_container:hover .overlay{
        opacity: 0.7;
    }
    .project_description{
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .carousel_image_container:hover .project_description{
        opacity: 1;
    }
    .project_title{
        font-size: 1.5rem;
        padding-bottom: 2em;
    }
    @media only screen and (max-width: 480px) {
        padding: 2.5em 0 2.5em 0;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        padding: 4.5em 0 4.5em 0;
    }
`;