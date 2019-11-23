import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { cleanUpBlogData } from '../../actions/Action';
// import { Store } from '../../Store';
import moment from 'moment';

export default function BlogCard (props: any): JSX.Element {
    
    // const {dispatch} = React.useContext(Store);

    const handleClick = (id: number) => {
        // cleanUpBlogData(dispatch);
        // localStorage.setItem("postId", id.toString())
    }

    const { title, acf } = props;

    const renderCards = () => {
        switch (props.page) {
            case "All Blogs Page":
                return (
                    <Link to={`blog/${props.slug}`}>                       
                        <div className="blog-card-all-page">
                            <img src={acf.image.sizes.medium_large} alt={acf.image.alt}/>
                        </div> 
                    </Link>
                )
            default:
                return (
                    <Link to={`blog/${props.slug}`}>                       
                        <div className="blogCard">
                            <div className="postTime">{moment(props.modified).format("MMM Do YY")}</div>
                            <img src={acf.image.sizes.medium_large} alt={acf.image.alt}/>
                            <h3>{title.rendered}</h3>
                        </div> 
                    </Link>
                )
        }
    }

    return (
        <CardWrapper onClick={() => handleClick(props.id)}>   
            {renderCards()}
        </CardWrapper>
    )
}

const CardWrapper = styled("div")`
    .blogCard{
        position: relative;
        height: 250px;
        cursor: pointer;
        &:hover{
            img{
                filter: none;
                opacity: 1;
                transition: all 0.5s ease-in-out; 
            };
            /* h3 {
                background-image: linear-gradient(#FFDC00, #FF851B, #7FDBFF, #85144b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                transition: all 1s ease-in-out;
            }
            .postTime {
                background-image: linear-gradient(#FFDC11, #FF851F, #7FDBFF, #85144b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                transition: all 1s ease-in-out;
            } */
        }
        /* padding: 0 15px; */
    }; 
    .blogCard img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: grayscale(80%);
        opacity: .9;
        transition: all 0.5s ease-in-out;
    };
    h3 {
        /* font-weight: 500; */
        font-size: 1.5em;
        text-shadow: 0 2px 4px rgba(0,0,0,0.50);
        text-transform: uppercase;
        color: var(--mainWhite);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 5;
        transition: all 1s ease-in-out;
    };
    .postTime {
        position: absolute;
        top: 10%;
        left: 10%;
        font-size: 0.5em;
        z-index: 5;
        color: var(--mainWhite);
        transition: all 1s ease-in-out;
    }
    /* hr {
        border: none;
        height: 0.1px;
        color: var(--mainWhite);
        background-color: var(--mainWhite);
        position: absolute;
        top: 78%;
        width: 100%;
    } */

    /* [class*=col-]{ 
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
    } */

    /* Styles for all blogs page */
    .blog-card-all-page {
        position: relative;
        height: 350px;
        cursor: pointer;
    }
    .blog-card-all-page img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`


