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
    .image_container{
        position: relative;
        text-align: center;
        max-height: 650px;
        overflow: hidden;
    }
    img{
        display: block;
        width: 100%;
        max-width: 100%;
        height: auto !important;
        display: block;
    }
    .img_content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .img_content h1{
        text-align: center;
        color: var(--mainWhite);
    }
    .about_content_container{
        height: 400px;
        margin-top: 60px;
        text-align: center;
        color: var(--mainDark);
    }
    .header_content{
        font-size: 1.41rem;
        margin-bottom: 30px;
    }

`
