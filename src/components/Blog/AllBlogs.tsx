import React from 'react';
import styled from 'styled-components';
import { IAppProps } from '../../interfaces';

export default function AllBlogs (props: IAppProps): JSX.Element {
    return (
        <BlogListWrapper>
            <div className="container">
                <div>
                    this is the blog list
                </div>
            </div>
        </BlogListWrapper>
    )
}

const BlogListWrapper = styled("section")`

`