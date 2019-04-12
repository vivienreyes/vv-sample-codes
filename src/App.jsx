import React, { Component } from 'react';
import './cssfold/App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import User from './components/user.jsx';
import Body from './components/body.jsx';


class App extends Component {
  render () {

    return ( 
      <div className='my-App'>
     
    <Header/>
    <User/>
    <Footer/>
  
    
    </div>

    
    );
  }
}

export default App;
