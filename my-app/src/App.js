import React, { Component } from 'react';


class App extends Component {
  render(){
    var mystyle={
      fontSize:100,
      color:'#FF0000'
    }
    return(
      <div>
        <h1 style = {mystyle}>React Tutorial samPuriwat</h1> 
        <h2>{50*50}</h2>
      </div>
    );
  }

}//App

export default App;
