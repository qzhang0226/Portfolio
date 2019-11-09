import React from 'react'
import { Store } from '../../Store';
import { fetchBlogDetails } from '../../actions/Action';
import styled from 'styled-components';

export default function BlogDetails(props: any): JSX.Element {

    const {state, dispatch} = React.useContext(Store);

    const postId: any = localStorage.getItem("postId");

    React.useEffect(() => {
        let mounted = true;
        if (mounted) fetchBlogDetails(postId, dispatch);
        // const cleanUp = () => {
        //     mounted = false;
        //     cleanUpBlogData(dispatch);
        // };
        // return cleanUp();
    }, [postId, dispatch]);

    const { blogDetails } = state;

    if(blogDetails.id) {
        return (
            <>
                <BlogDetailsWrapper className="container">  
                    <h1 className="mb-3">{blogDetails.acf.title}</h1>
                    <h4>This is the subtitle</h4>
                    <div className="blogImgContainer">
                        <img src={blogDetails.acf.image.sizes.large} alt={blogDetails.acf.image.alt} />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: blogDetails.content.rendered}}/>
                </BlogDetailsWrapper>
            </>
        )
    } 

    return <div className="loader container" />
}

const BlogDetailsWrapper = styled("div")`
    text-align: left;
    height: 100%;
    .blogImgContainer {
        width: 100%;
    }
    img {
        background-size: cover;
    }
    .has-light-gray-background-color {
        background-color: gray;
    }
`
