import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { INameProps } from '../interfaces';

export default function Header (props: INameProps) {
    return (
        <HeaderWrapper>
            <p><Link to="/">{props.name}</Link></p>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled("section")`
    font-size: 1.41em;
    font-style: normal;
    text-align: center;
    margin-top: 2.5em;
    word-spacing: 0;
`
