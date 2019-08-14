import * as React from 'react';
import { Store } from '../Store';
import { fetchAboutData } from '../actions/Action';
import styled from 'styled-components';

export interface IAppProps {
}

export default function About (props: IAppProps) {

    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
      fetchAboutData(dispatch)
    }, [])
  
    const aboutData = state.data[0];
    
    return (
        aboutData ?
        <CardWrapper> 
            <div className="image_container">
                <img src={aboutData.postImage} alt="about image" />
                <div className="img_content"><h1>{aboutData.title}</h1></div>
            </div>           
            <div className="about_content_container">
                <div className="header_content">
                    {aboutData.header}
                </div>
                <div className="story_content">
                    {aboutData.content}
                </div>
            </div>
        </CardWrapper>
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    );
}

const CardWrapper = styled("div")`
    img{
        display: flex;
        justify-content: center;
        max-width: 100vw;
    }
    .img_content {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .img_content h1{
        text-align: center;
        color: var(--mainWhite);
    }
    .about_content_container{
        height: auto;
        text-align: center;
        color: var(--mainDark);
    }

`
