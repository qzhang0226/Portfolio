import React from 'react';
import { Store } from '../Store';
import styled from 'styled-components';
import { fetchProjectDetails } from '../actions/Action';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import "../styles/projectDetails.css";

export default function ProjectDetails() {

    const {state, dispatch} = React.useContext(Store);
    const name: any = sessionStorage.getItem('projectName');

    React.useEffect(() => {
        fetchProjectDetails(name, dispatch)
    }, [name, dispatch]);

    const handleClick = () => {
        window.location.href = "/";
    }

    const projectDetails = state.projectDetails._id ? state.projectDetails : undefined;
    
    return (
        projectDetails ?
        <DetailsWrapper>
            <CarouselWrapper>
                <div className="container">
                    <div className="topRow">
                        <img className="closeImg" src={require("../assets/icons/cross-img.PNG")} alt="close" onClick={() => handleClick()}/>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
                            <Carousel  
                                useKeyboardArrows 
                                infiniteLoop
                                showIndicators={false}
                            >
                                {projectDetails.postImage.map((image: any) => {
                                    return (
                                        <div key={image.name}>
                                            <img src={image.url} alt={image.name} />
                                            <p className="legend">{image.name}</p>                                        
                                        </div>
                                    )
                                })}
                                <iframe src="https://www.youtube.com/embed/9w2RHtQ4jVI" allowFullScreen/>
                            </Carousel>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div><span className="lableName">Project Name:</span> {projectDetails.title}</div>
                            <div><span className="lableName">Keywords:</span> {projectDetails.keywords}</div>
                            <div><span className="lableName">Description:</span> {projectDetails.description}</div>
                        </div>
                    </div>
                </div>
            </CarouselWrapper>

        </DetailsWrapper>
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    )
}

const DetailsWrapper = styled("section")`

`
const CarouselWrapper = styled("section")`
    .container{
        text-align: left;
    }  
    .topRow{
        padding-top: 4em;
        height: 10em;
    }
    .topRow .closeImg{
        cursor: pointer;
        padding-right: .5em;
        float: right;
        opacity: .3;
        &:hover{
            opacity: 1;
        }
    }
    .lableName{
        color: #00008B;
        font-weight: 500;
        font-size: 1.2em;
    }
    .carousel .slide iframe{
        margin: 0;
    }
    iframe{
        width: 560px; 
        height: 100%;
    }
    @media (min-width: 1200px){
        .container {
            max-width: 1500px;
        }
    }
`