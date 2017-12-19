import React, { Component } from 'react';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';

class App extends Component {
  constructor(){
    super();
    this.state={
    data:[],
    message: "UnLike",
    type: ""
  };
  this.changeMessage = this.changeMessage.bind(this);
  this.insertData = this.insertData.bind(this);
}

changeMessage(){
  this.setState({message:"Like"});
}
insertData(){
  var item = "React";
  var myArray = this.state.data;
  myArray.push(item);
  this.setState({data:myArray })

}
  render(){
    
    return(
      <div>
            <Header/>
            <Content title= "Course React" name="Puriwat" price="Free"/>
            <Footer/>
            <h1>{this.state.message}</h1>
            <button onClick = {this.changeMessage}>{this.state.message} </button><br/>
            <h1>{this.state.data}</h1>
            <button onClick = {this.insertData}>Insert</button>
          

      </div>
    );
  }

}//App

export default App;
