import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { cleanUpBlogData } from '../../actions/Action';
import { Store } from '../../Store';

export default function BlogCard (props: any): JSX.Element {
    
    const {dispatch} = React.useContext(Store);

    const handleClick = (id: number) => {
        
        cleanUpBlogData(dispatch);
        localStorage.setItem("postId", id.toString())
    }

    return (
        <CardWrapper onClick={() => handleClick(props.id)}>   
            <Link to={`blog/${props.slug}`}>                       
                <div className="blogCard">
                    {/* <img src={props.postImage} alt={props.name}/> */}
                    <h3>{props.title.rendered}</h3>
                </div>
            </Link>
        </CardWrapper>
    )
}

const CardWrapper = styled("div")`
    .blogCard{
        height: 250px;
        cursor: pointer;
        &:hover{
            img{
                filter: none;
                opacity: 1;
                transition: all 0.5s ease-in-out; 
            };
            h3{
                background-image: linear-gradient(#FFDC00, #FF851B, #7FDBFF, #85144b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                transition: all 1s ease-in-out;
            }
        }
    }; 
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: grayscale(80%);
        opacity: .9;
        transition: all 0.5s ease-in-out;
    };
    h3 {
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
    };

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
`


