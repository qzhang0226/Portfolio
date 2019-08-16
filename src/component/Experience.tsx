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

    return (
        profile ?
        <ExperienceWrapper>
            <div className="profile_image_container">
                {profile.map((item: any) => {
                    return (
                        <img src={item.postImage} alt="my profile image" key={item._id}/>
                    )
                })}
                
            </div>
            <div className="experience_container">
            </div>
        </ExperienceWrapper>
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    )
}

const ExperienceWrapper = styled("div")`
    background-color: var(--mainBlue);
    height: auto;
    .profile_image_container{
        text-align: center;
        padding-top: 100px;
    }
    img{
        width: 200px;
        height: 200px;
    }
`