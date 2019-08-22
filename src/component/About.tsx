import * as React from 'react';
import { Store } from '../Store';
import { fetchAboutData } from '../actions/Action';
import { IAppProps } from '../interfaces';
import styled from 'styled-components';

export default function About (props: IAppProps) {

    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchAboutData(dispatch)
    }, [])
  
    const aboutData = state.about[0];
    
    return (
        aboutData ?
        <CardWrapper> 
            <div className="image_container">
                <img src={aboutData.postImage} alt="about image" />
                <div className="img_content"><h1>{aboutData.title}</h1></div>
            </div>           
            {/* <div className="container">
                <div className="offset-md-2 col-md-8 offset-md-2">
                    <div className="header_content">
                        {aboutData.header}
                    </div>
                    <div className="story_content">
                        {aboutData.content}
                    </div>
                </div>
            </div> */}
        </CardWrapper>
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    );
}

const CardWrapper = styled("div")`
    .image_container{
        background-color: var(--mainDark);
        position: relative;
        text-align: center;
        max-height: 650px;
        overflow: hidden;
    }
    img{
        opacity: .9;
        width: 100%;
    }
    .img_content {
        text-align: center;
        color: var(--mainWhite);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
 
    .header_content{
        font-size: 1.13em;
        padding-bottom: 1em;
    }
    .story_content{
        line-height: 1.8em;
    }

`
