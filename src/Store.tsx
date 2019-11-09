import React from 'react';
import {IState, IAction} from './interfaces';

const initialState: IState = {
    home: Object,
    about: Object,
    profile: Object,
    project: Object,
    projectDetails: Object,
    blogDetails: Object,
    allBlog: Object,
    message: "",
    postId: 0,
};


export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_HOME_DATA':
            return {...state, home: action.payload};
        case 'POST_FORM_DATA':
            return {...state, message: action.payload};
        case 'FETCH_PROJECT_DETAILS_DATA':
            return {...state, projectDetails: action.payload};
        case 'FETCH_BLOGS_DATA':
            return {...state, allBlog: action.payload};
        case 'FETCH_BLOG_DETAILS_DATA':
            return {...state, blogDetails: action.payload};
        case 'BLOG_ID':
            return {...state, postId: action.payload};
        default:
            return state;
    }
}

export function StoreProvider({children}: JSX.ElementChildrenAttribute): JSX.Element{
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}