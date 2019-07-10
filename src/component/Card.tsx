import * as React from 'react';
import styled from 'styled-components';

const source = require('../assets/about.JPG');

export interface IAppProps {
}

export default function Card (props: IAppProps) {
    return (
      <CardWrapper>
        <img src={source} alt="about image" />
        <div className="img-content"><h1>About</h1></div>
      </CardWrapper>
    );
}

const CardWrapper = styled("div")`
    img{
        /* display: flex;
        justify-content: center; */
        max-width: 100vw;
        /* opacity: 0.8; */
    }
    .img-content{
        width: 100%;
        position: relative;
        margin-top: -40%;
    }
    .img-content h1{
        text-align: center;
        color: var(--mainWhite);
    }
`
