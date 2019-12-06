import React from 'react';
import { Store } from '../Store';
import styled from 'styled-components';
// import { fetchProjectDetails, cleanProjectDetails } from '../actions/Action';
import { fetchProjectDetails } from '../actions/Action';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export default function ProjectDetails(props: any) {

    const {state, dispatch} = React.useContext(Store);
    const name: string = props.match.params.slug;

    React.useEffect(() => {
        // cleanProjectDetails(dispatch);
        fetchProjectDetails(name, dispatch)
    }, [name, dispatch]);

    const projectDetails = state.projectDetails._id ? state.projectDetails : undefined;

    if(projectDetails) {
        return (
            <DetailsWrapper>
                <CarouselWrapper>
                    <Link to='/'>
                        <div className="topRow">
                            <img className="closeImg" src={require("../assets/icons/cross-img.PNG")} alt="close" />
                        </div>
                    </Link>
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
                                <iframe src={projectDetails.youtubeUrl} title={projectDetails.name} allowFullScreen><img src={projectDetails.youtubeImg} alt={`${projectDetails.name} youtube screenshot`} /></iframe>
                            </Carousel>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div><span className="lableName">Project Name:</span> {projectDetails.title}</div>
                            <div><span className="lableName">Keywords:</span> {projectDetails.keywords}</div>
                            <div><span className="lableName">Description:</span> {projectDetails.description}</div>
                        </div>
                    </div>
                </CarouselWrapper>
    
            </DetailsWrapper>
        )
    }

    return <div className="loader container" />
}

const DetailsWrapper = styled("section")`

`
const CarouselWrapper = styled("section")`
    text-align: left;
    padding: 0 100px;
    @media only screen and (max-width: 480px) {
        padding: 0 15px;
        .topRow{
            padding-top: 2em !important;
            height: 6em !important;
        }
    }
    @media (min-width: 481px) and (max-width: 768px) {
        padding: 0 15px;
        .topRow{
            padding-top: 2em;
            height: 6em;
        }
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
    .thumbs-wrapper{
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .thumbs-wrapper .thumbs{
        transform: translate3d(0px, 0px, 0px) !important;
    }
    .thumbs-wrapper .animated{
        transform: translate3d(0px, 0px, 0px) !important;
        padding-left: 0 !important;
    }
    @media (min-width: 1200px){
        /* .container {
            max-width: 1500px;
        } */
    }
`