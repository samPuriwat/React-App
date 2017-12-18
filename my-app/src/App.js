import React, { Component } from 'react';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';

class App extends Component {
  render(){
    
    return(
      <div>
            <Header/>
            <Content title= "Course React" name="Puriwat" price="Free"/>
            <Footer/>
            
            
            


      </div>
    );
  }

}//App

export default App;
