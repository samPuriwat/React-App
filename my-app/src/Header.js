import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            name: "UnLike",
            count: 0
        };
    }
    render(){
     
      return(
        <div>
            <h1>samPuriwat React Tutorial</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.count}</h2>
            <h1><a herf = "/">Home</a></h1>
        </div>
       
      );
    }
  
  }
 export default Header;