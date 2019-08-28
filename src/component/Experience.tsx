import * as React from 'react';
import { IAppProps } from '../interfaces';
import { Store } from '../Store';
import { fetchProfileData } from '../actions/Action';
import styled from 'styled-components';

export default function Experience (props: IAppProps) {

    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchProfileData(dispatch)
    }, [])
  
    const profile = state.profile.profile;
    const experiences = state.profile.experiences;

    const experienceIcon = require('../assets/icons/profile-icon.PNG');

    return (
        profile ?
        <ExperienceWrapper>  
            <div className="container">         
                {profile.map((item: any) => {
                    return (
                        <div className="profile_container" key={item._id}>
                            <img src={item.postImage} alt="my profile image"/>
                            <div className="profile_title">{item.title}</div>
                            <div className="profile_subtitle">{item.subTitle}</div>
                        </div>
                    )
                })}
                {experiences.map((item: any) => {
                    return (
                        <div className="row" key={item._id}>
                            <div className="col-1"><img src={experienceIcon}/></div>
                            <div className="col-3">
                                <div>{item.title}</div>
                                <div>{item.duration}</div>
                            </div>
                            <div className="col-8">{item.description}</div>
                        </div>
                    )
                })}  
            </div>             
        </ExperienceWrapper>
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    )
}

const ExperienceWrapper = styled("section")`
    background-color: var(--mainBlue);
    height: auto;
    .container{
        text-align: center;
        padding-top: 5em;
        padding-bottom: 5em
    }
    img{
        width: 200px;
        height: 200px;
    }
    .profile_title{
         font-size: 2.6em;
         padding-top: 30px;
    }
    .profile_subtitle{
        font-size: 1.2em;
    }
    .col-1{
        padding-top: 5px;
    }
    .col-1 img{
        width: 50%;
        height: auto;
    }
    .row{
        margin: 0 auto;
        padding-top: 50px;
    }
`