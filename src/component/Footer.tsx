import React from 'react';
import { INameProps } from '../interfaces';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Footer (props: INameProps) {
    return (
        <FooterWrapper id="footer">
            <p>Copyright</p>
            {"  "}
            <i className="fa fa-copyright fa-spin" aria-hidden="true" />
            {"  "}
            <p>2019 by <Link to="/">{props.name}</Link> - Web Developer</p>
        </FooterWrapper>
    );
}

const FooterWrapper = styled("div")`
    /* position: absolute;
    bottom: 0;
    width: 100%; */
    text-align: center;
    p{
        display: inline-block;
    }
    a{
        color: #880;
        text-decoration: none;
        border-bottom: 1px dotted #AA0;
    }
`
