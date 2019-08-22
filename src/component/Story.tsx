import React from 'react';
import { TextProps } from '../interfaces';
import styled from 'styled-components';

interface storyDivProps {
    bgColor: string;
}

export default function Story (props: TextProps) {
    return (
        <Wrapper bgColor={props.storyProps.bgColor}>
            <div>sss</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: ${(props: storyDivProps) => props.bgColor === "blue" ? "var(--mainBlue)" : "var(--mainWhite)"}
`
