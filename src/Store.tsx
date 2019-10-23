import React from 'react';
import {IState, IAction} from './interfaces';

const initialState: IState = {
    home: Object,
    about: Object,
    profile: Object,
    project: Object,
    projectDetails: Object,
    blog: Object,
    message: "",
};


export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_HOME_DATA':
            return {...state, home: action.payload};
        // case 'FETCH_ABOUT_DATA':
        //     return {...state, about: action.payload};
        // case 'FETCH_PROFILE_DATA':
        //     return {...state, profile: action.payload};
        // case 'FETCH_PROJECT_DATA':
        //     return {...state, project: action.payload};
        // case 'POST_FORM_DATA':
        //     return {...state, message: action.payload};
        // case 'FETCH_PROJECT_DETAILS_DATA':
        //     return {...state, projectDetails: action.payload};
        default:
            return state;
    }
}

export function StoreProvider({children}: JSX.ElementChildrenAttribute): JSX.Element{
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}