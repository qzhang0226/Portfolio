import * as React from 'react';
import { IState, IAction } from './interfaces';

const initialState: IState = {
    something: []
}

export const PortfolioContext = React.createContext<IState>(initialState);


function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case "FETCH_DATA":
            return {...state, something: action.payload}
        default:
            return state;
    }
}


export function PortfolioProvider (props: any) : JSX.Element {
    return (
        <PortfolioContext.Provider value={initialState}>
            {props.children}
        </PortfolioContext.Provider>
    );
}
