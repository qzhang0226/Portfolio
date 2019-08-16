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
  
    const profileData = state.data;

    return (
        <ExperienceWrapper>
            <div className="profile_image_container">
                ddd
            </div>
        </ExperienceWrapper>
    )
}

const ExperienceWrapper = styled("div")`
    background-color: var(--mainBlue);
    height: 400px;
    .profile_image_container{
        text-align: center;
        padding-top: 30px;
    }
`