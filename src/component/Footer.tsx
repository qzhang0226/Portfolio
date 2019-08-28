import React from 'react';
import { INameProps } from '../interfaces';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Footer (props: INameProps) {
    return (
        <FooterWrapper>
            <div>
                <p>Copyright</p>
                {"  "}
                <i className="fa fa-copyright fa-spin" aria-hidden="true" />
                {"  "}
                <p>2019 by <Link to="/">{props.name}</Link> - Web Developer</p>
            </div>
        </FooterWrapper>
    );
}

const FooterWrapper = styled("div")`
    text-align: center;
    p{
        display: inline-block;
        /* padding-left: .5em; */
    }
    a{
        color: #880;
        text-decoration: none;
        border-bottom: 1px dotted #AA0;
    }
`
