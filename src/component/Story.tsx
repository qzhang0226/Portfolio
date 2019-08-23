import React from 'react';
import { ITextProps } from '../interfaces';
import styled from 'styled-components';

interface storyDivProps {
    bgColor: string;
}

export default function Story (props: ITextProps) {
    const {bgColor, top, bottom} = props.storyProps;
    return (
        <Wrapper bgColor={bgColor}>
            <div className="container">
                <div className="offset-md-2 col-md-8 offset-md-2">
                    <div className="top">
                        {top}
                    </div>
                    <div className="bottom">
                        {bottom}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: ${(props: storyDivProps) => props.bgColor === "blue" ? "var(--mainBlue)" : "var(--mainWhite)"};
    height: auto;
    padding: 2.5em 0 2.5em 0;   
    font-size: 1.15em;
    .container{
        margin-top: 5em;
        margin-bottom: 5em;
        text-align: center;
    }
    .top{
        padding-bottom: 1em;
    }
`
