import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RouterApp from './RouterApp';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
import {Router,Route,Link} from 'react-router'

import BrowserRouter from 'react-router-dom';
import Switch from 'react-router-dom/Switch';

ReactDOM.render(
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={RouterApp}/>
            <Route path="/header" component={Header}/>
            <Route path="/content" component={Content}/>
            <Route path="/footer" component={Footer}/>
        </Switch>
    </BrowserRouter>
    ,document.getElementById('root')


);

