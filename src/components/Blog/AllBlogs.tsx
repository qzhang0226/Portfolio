import React from 'react';
import styled from 'styled-components';
import { Store } from '../../Store';
import BlogCard from './BlogCard';
import { fetchAllBlogs } from '../../actions/Action';

export default function AllBlogs (): JSX.Element {
    
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        fetchAllBlogs(dispatch)
    }, [dispatch]);

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { allBlog } = state;

    if(allBlog.length !== 1) {
        return (
            <BlogListWrapper>
                <div className="container">
                    {allBlog.map((blog: any) => {
                        return (
                            <div key={blog.id} className="row pb-4">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <BlogCard {...blog} />
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 excerpt" dangerouslySetInnerHTML={{__html: blog.excerpt.rendered}} />
                            </div>
                        )
                    })}
                </div>
            </BlogListWrapper>
        )
    }

    return <div className="loader container" />

}

const BlogListWrapper = styled("section")`
    .excerpt {
        border-style: solid;
        border-width: 1px 1px 1px 0;
        border-color: #C8C8C8;
    }
    @media only screen and (min-width: 576px) {
        .col-md-6 {
            padding: 0 !important;
        }
        .col-sm-6 {
            padding: 0 !important;
        }
    }
    @media only screen and (max-width: 576px) {
        .excerpt {
            border-width: 0px 0px 1px 0;
        }
    }
`