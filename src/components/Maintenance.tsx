import * as React from 'react';
import styled from 'styled-components';

export interface IAppProps {
}

export default function Maintain (props: IAppProps) {
  return (
    <Wrapper>
      The website is currently down for maitenance. I'll be back soon.
    </Wrapper>
  );
}

const Wrapper = styled("section")`
    width: 100vw;
    height: 100vh;
    font-size: 1.5rem;
    padding: 50vh 1rem 0 1rem;
    text-align: center;
    background-color: #E3F2F3;
`

