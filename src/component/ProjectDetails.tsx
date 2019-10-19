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

    const projectDetails = state.projectDetails._id ? state.projectDetails : undefined;
    
    return (
        projectDetails ?
        <DetailsWrapper>
            <CarouselWrapper>
                <Carousel  
                    autoPlay 
                    useKeyboardArrows 
                    infiniteLoop
                    width="700px"
                >
                    {projectDetails.postImage.map((image: any) => {
                        return (
                            <div key={image.name}>
                                <img src={image.url} alt={image.name} />
                                <p className="legend">{image.name}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </CarouselWrapper>
            <div>
                <div>Title: {projectDetails.title}</div>
                <div>Keywords: {projectDetails.keywords}</div>
                <div>Description: {projectDetails.description}</div>
            </div>
        </DetailsWrapper>
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    )
}

const DetailsWrapper = styled("section")`

`
const CarouselWrapper = styled("section")`
    
`