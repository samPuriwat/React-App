import React, { Component } from 'react';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';

class RouterApp extends Component{
    render(){
        return(               
         <div>
             <h1>Sam Puriwat</h1>
             <h1><a herf = "#">Header</a></h1>
             <h1><a herf = "#">Content</a></h1>
             <h1><a herf = "#">Footer</a></h1>

        </div>

        );
    }//render

}//class
export default RouterApp;