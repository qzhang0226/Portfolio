import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './Store';
import Home from './component/Home';
import ProjectDetails from './component/ProjectDetails';

ReactDOM.render( 
    <StoreProvider>
        <BrowserRouter>
            <Switch>
                <App path='/'>
                    <Route exact path="/" component={Home}/>
                    {/* <Route path="/project/:slug" component={ProjectDetails}/> */}
                </App>
            </Switch>
        </BrowserRouter>
    </StoreProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
