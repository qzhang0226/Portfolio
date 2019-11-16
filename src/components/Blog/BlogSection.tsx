import React from 'react';
import styled from 'styled-components';
import { IAppProps } from '../../interfaces';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';

export default function BlogSection (props: IAppProps): JSX.Element {

    const { data } = props;

    const firstThreePosts = data.slice(0, 3)

    const renderBlogCards = () => {
        switch (firstThreePosts.length) {
            case 0:
                return null;
            case 1:
                return (
                    <div className="row mb-5">
                        {firstThreePosts.map((blog: any) => {
                            return (
                                <div key={blog.id} className="col-md-6 offset-md-3">
                                    <BlogCard {...blog}/>
                                </div>
                            )
                        })}
                    </div>
                )
            default:
                break;
        }
    }

    return (
        <BlogsWrapper>
            <div className="container"> 
                <h2 className="mb-5">RECENT POSTS</h2>
                {renderBlogCards()}
                <Link to="/blog">
                    <h5 className="mt-4">All Posts</h5>
                </Link>
            </div> 
        </BlogsWrapper>
    )
}

const BlogsWrapper = styled("section")`
    margin: 100px 0;
    /* [class*=col-]{
        margin: 0 0 20px 0;
    }; */
`