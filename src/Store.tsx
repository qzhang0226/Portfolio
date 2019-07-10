import React from 'react';
import {IState, IAction} from './interfaces';

const initialState: IState = {
    pictures: [],
    experience: [],
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_ABOUT_DATA':
            return {...state, pictures: action.payload}   
        default:
            return state;
    }
}

export function StoreProvider({children}: JSX.ElementChildrenAttribute): JSX.Element{
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}