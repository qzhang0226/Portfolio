import * as React from 'react';
import { IAppProps } from '../interfaces';
import styled from 'styled-components';

export default function Experience (props: IAppProps): JSX.Element {

    const data = props.data;

    const experienceIcon = require('../assets/icons/profile-icon.PNG');

    console.log(data)

    return (
        data ?
        <ExperienceWrapper>  
            <div className="container">         
                {data.profile.map((item: any) => {
                    return (
                        <div className="profile_container" key={item._id}>
                            <img src={item.postImage} alt="my profile image"/>
                            <div className="profile_title">{item.title}</div>
                            <div className="profile_subtitle">{item.subTitle}</div>
                        </div>
                    )
                })}
                {data.experiences.map((item: any) => {
                    return (
                        <div className="row" key={item._id}>
                            <div className="col-1"><img src={experienceIcon}/></div>
                            <div className="col-md-3 col-sm-12 col-xs-12">
                                <div className=""><strong>{item.title}</strong></div>
                                <div className="">{item.duration}</div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                {item.description.map((project: any) => {
                                    return (                             
                                        <div className="text-left mb-4">
                                            <div className="mb-2"><strong>{project.projectName}</strong></div>
                                            {project.responsibilities.map((duty: any) => {
                                                return (<div>-- {duty}</div>)
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
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
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
    @media only screen and (max-width: 767px) {
        .row .col-1{
            display: none;
        }
        .col-sm-12{
            margin-top: 15px;
        }
    }
`