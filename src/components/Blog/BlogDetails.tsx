import React from 'react'
import { Store } from '../../Store';
import { fetchBlogDetails } from '../../actions/Action';

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
                <div dangerouslySetInnerHTML={{__html: blogDetails.content.rendered}}/>
            </>
        )
    } 

    return <div>Loading...</div>

}
