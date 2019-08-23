import React from 'react';
import { INameProps } from '../interfaces';
import styled from 'styled-components';

export default function Footer (props: INameProps) {
    return (
        <FooterWrapper>
            <div>
                <i className="fa fa-copyright fa-spin" aria-hidden="true" />
                <p>{props.name}</p>
            </div>
        </FooterWrapper>
    );
}

const FooterWrapper = styled("div")`
    text-align: center;
    p{
        display: inline-block;
        padding-left: .5em;
    }
`
