import React from 'react'
import { Store } from '../../Store';
import { fetchBlogDetails } from '../../actions/Action';
import styled from 'styled-components';
import moment from 'moment';

export default function BlogDetails(props: any): JSX.Element {

    const {state, dispatch} = React.useContext(Store);

    const postId: any = localStorage.getItem("postId");

    React.useEffect(() => {
        let mounted = true;
        if (mounted) fetchBlogDetails(postId, dispatch);
    }, [postId, dispatch]);

    
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { blogDetails } = state;

    if(blogDetails.id) {
        document.title = blogDetails.slug;
        return (
            <>
                <BlogDetailsWrapper className="container"> 
                    <h1 className="mb-3">{blogDetails.acf.title}</h1>
                    <h5>{blogDetails.acf.sub_title}</h5>
                    <div className="top_info">
                        <img src={blogDetails.acf.profile_image.sizes.thumbnail} alt={blogDetails.acf.profile_image.alt} />
                        <div className="post_basic_info">
                            <div>{blogDetails.acf.author}</div>
                            <div>{moment(blogDetails.date_gmt).format("MMM Do, YY")}</div>
                        </div>
                    </div>
                    <div className="my-5">
                        <img src={blogDetails.acf.image.sizes.large} alt={blogDetails.acf.image.alt} className=""/>
                        <div className="top_img_cap pt-3">{blogDetails.acf.image.caption}</div>
                    </div>
                    <div className="post_content" dangerouslySetInnerHTML={{__html: blogDetails.content.rendered}} />
                </BlogDetailsWrapper>
            </>
        )
    } 

    return <div className="loader container" />
}

const BlogDetailsWrapper = styled("div")`


    /* font-family: 'Open Sans', sans-serif; */
    text-align: left;
    height: 100%;
    img {
        width: 100%;
    }
    .top_info {
        position: relative;
    }
    .top_info>img {
        height: 45px;
        width: 45px;
    }
    .has-light-gray-background-color {
        background-color: gray;
    }
    .post_basic_info {
        position: absolute;
        top: 25%;
        font-size: 0.5em;
        display: inline-block;
        padding-left: 1.5em;
    }
    a {
        color: #185EA5;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
            color: #0a4266;
            text-decoration: none;
        }
    }
    h4 {
        margin-bottom: 1rem;
    }
    h5 {
        color: rgba(0, 0, 0, 0.54);
    }
    .top_img_cap {
        text-align: center;
        color: rgba(0, 0, 0, 0.54);
        font-size: 0.8em;
    }
    .post_content {
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
        font-size: 1em;
        line-height: 1.8;
        margin: 0;
        text-rendering: optimizeLegibility;
    }
    // a::after {
    //     content: "\f35d";
    //     font-weight: 700;
    //     position: relative;
    //     display: inline-block;
    //     font-family: "Font Awesome 5 Free";
    //     text-align: center;
    //     line-height: 1;
    //     margin: 0 0 0 .3125em;
    // }  
`
