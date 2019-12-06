import * as React from 'react';
import { IAppProps } from '../interfaces';
import styled from 'styled-components';

export default function Experience (props: IAppProps): JSX.Element {

    const { data } = props;

    const experienceIcon = require('../assets/icons/profile-icon.PNG');

    return (
        <ExperienceWrapper>  
            <div className="container">         
                {data.profile.map((item: any) => {
                    return (
                        <div className="profile_container" key={item._id}>
                            <img src={item.postImage} alt="my profile"/>
                            <div className="profile_title">{item.title}</div>
                            <div className="profile_subtitle">{item.subTitle}</div>
                        </div>
                    )
                })}
                {data.experiences.map((item: any) => {
                    return (
                        <div className="row" key={item._id}>
                            <div className="col-md-1 col-sm-12 col-xs-12"><img src={experienceIcon} alt="experience icon"/></div>
                            <div className="col-md-3 col-sm-12 col-xs-12">
                                <div>{item.title}</div>
                                <div>{item.duration}</div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                {item.description.map((project: any) => {
                                    return (                             
                                        <div className="text-left mb-4" key={project.projectName}>
                                            <div className="mb-2">{project.projectName}</div>
                                            {project.responsibilities.map((duty: any) => {
                                                return (<div key={duty}>&#8226; {duty}</div>)
                                            })}
                                        </div>
                                    )  
                                })}
                            </div>
                        </div>
                    )
                })}  
            </div>             
        </ExperienceWrapper>
    )
}

const ExperienceWrapper = styled("section")`
    background-color: var(--mainBlue);
    height: auto;
    padding: 100px 0;
    .container{
        text-align: center;
    }
    img{
        width: 200px;
        height: 200px;
    }
    .profile_title{
         font-size: 2.5em;
         padding-top: 30px;
    }
    .profile_subtitle{
        font-size: 1.2em;
    }
    .col-md-1{
        padding-top: 5px;
    }
    .col-md-1 img{
        width: 50%;
        height: auto;
    }
    .row{
        margin: 0 auto;
        padding-top: 3rem;
    }
    @media only screen and (max-width: 767px) {
        .row {
            padding-top: 2rem;
        }
        .row .col-md-1 img{
            width: 5%;
            height: auto;
        }
        .col-sm-12{
            margin-top: 1.5rem;
        }
    }
`