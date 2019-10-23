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
                                <div className="blogCard">
                                    <img src={blog.postImage} alt={blog.name}/>
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
        &:hover img{
            filter: none;
            opacity: 1;
            transition: all 0.5s ease-in-out;
        }
        &:hover h3{
            background-image: linear-gradient(#FFDC00, #FF851B, #7FDBFF, #85144b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all 1s ease-in-out;
        }
    };
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: grayscale(80%);
        opacity: .9;
        transition: all 0.5s ease-in-out;
    }
    .blogCard{

        height: 250px;
        cursor: pointer;
    };
    h3{
        font-weight: 900;
        font-size: 2em;
        text-shadow: 0 2px 4px rgba(0,0,0,0.50);
        text-transform: uppercase;
        color: var(--mainWhite);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 5;
        transition: all 1s ease-in-out;
        /* this makes a rainbow text */
        /* background-image: linear-gradient(red, orange, yellow, green, blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
    }
`