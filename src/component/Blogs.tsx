import React from 'react';
import styled from 'styled-components';
import { IAppProps } from '../interfaces';

export default function Blogs (props: IAppProps): JSX.Element {

    const blogData = props.data;

    const handleClick = (e: any) => {
        let nodeValue = "";
        if(e.target.firstChild.firstChild) nodeValue = e.target.firstChild.firstChild.nodeValue;
        else nodeValue = e.target.firstChild.nodeValue;
    }

    return (
        blogData ?
        <BlogsWrapper>
            <div className="container mb-5"> 
                <div className="row">
                    {blogData.blogs.map((blog: any) => {
                        return (
                            <div className="col-md-4 col-sm-6 col-xs-12" key={blog.name} onClick={(e: any) => handleClick(e)}>
                                <img src={blog.postImage} alt={blog.name}/>
                                <div className="blogCard">
                                    <h3>{blog.name}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> 
        </BlogsWrapper>
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    )
}

const BlogsWrapper = styled("section")`
    [class*=col-]{ 
        margin: 0 0 20px 0;
    };
    img{
        object-fit: cover;
        width: 100%;
        height: auto;
        filter: grayscale(80%);
        opacity: .9;
        &:hover{
            filter: none;
            opacity: 1;
        }
    }
    .blogCard{
        font-weight: 900;
        font-size: 28px;
        text-shadow: 0 2px 4px rgba(0,0,0,0.50);
        text-transform: uppercase;
        border: 1px solid #000000;
        height: 250px;
        cursor: pointer;
    };
    h3{
        color: var(--mainWhite);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
`