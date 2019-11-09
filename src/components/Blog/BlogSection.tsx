import React from 'react';
import styled from 'styled-components';
import { IAppProps } from '../../interfaces';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';

export default function BlogSection (props: IAppProps): JSX.Element {

    const { data } = props;

    const firstThreePosts = data.slice(0, 3)

    return (
        <BlogsWrapper>
            <div className="container"> 
                <h2 className="mb-5">RECENT POSTS</h2>
                <div className="row">
                    {firstThreePosts.map((blog: any) => {
                        return (
                            <div key={blog.id} className="col-md-4 col-sm-6 col-xs-12">
                                <BlogCard {...blog}/>
                            </div>
                        )
                    })}
                </div>
                <Link to="/blog">
                    <h5 className="mt-4">All Posts</h5>
                </Link>
            </div> 
        </BlogsWrapper>
    )
}

const BlogsWrapper = styled("section")`
    margin: 100px 0;
    [class*=col-]{
        margin: 0 0 20px 0;
    };
`