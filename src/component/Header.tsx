import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface IAppProps {
    headerName: string
}

export default function Header (props: IAppProps) {
    return (
        <HeaderWrapper>
            <Link to="/">
                <p>{props.headerName}</p>
            </Link>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled("div")`
    font-size: 1.41rem;
    font-style: normal;
    font-weight: lighter;
    font-family: 'Source Sans Pro', 'sans-serif';
    text-align: center;
    margin-top: 2rem;
`
