import * as React from 'react';
import { IAppProps } from '../interfaces'
import styled from 'styled-components';

export default function Experience (props: IAppProps) {
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