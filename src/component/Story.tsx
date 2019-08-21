import React from 'react';
import { TextProps } from '../interfaces';
import styled from 'styled-components';

export default function Story (props: TextProps) {
    console.log(props.storyProps.bgColor)
    return (
        <Wrapper bgColor="">
            <div></div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: ${props: }
`
