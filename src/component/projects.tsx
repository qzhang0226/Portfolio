import * as React from 'react';
import { IAppProps } from '../interfaces';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export default function Projects (props: IAppProps): JSX.Element {

    const data = props.data;

    const handleProjectClick = (name: string) => {
        sessionStorage.setItem('projectName', name);
    }

    return (
        data ?
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
            {data.projects.map((item: any) => {
                return (
                    <div className="carousel_image_container" key={item._id} onClick={() => handleProjectClick(item.name)}>   
                        <Link to={`project/${item.name}`}>                  
                            <img src={item.postImage} alt={item.title} />
                            <div className="overlay"></div>
                            <div className="project_description">
                                <div className="project_title">{item.title}</div>
                                <p>{item.description}</p>
                            </div>  
                        </Link>
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
    margin: 100px 0;
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
        opacity: 0.8;
    }
    .project_description{
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
    .carousel_image_container:hover .project_description{
        font-weight: 500;
        opacity: 1;
    }
    .project_title{
        font-size: 1.5rem;
        padding-bottom: 2em;
    }
    @media only screen and (max-width: 480px) {
        padding: 2.5em 0 2.5em 0;
        .project_description{
            overflow: scroll;
        }
    }
    @media (min-width: 481px) and (max-width: 768px) {
        padding: 4.5em 0 4.5em 0;
        .project_description{
            overflow: scroll;
        }
    }
`;