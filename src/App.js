import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabbar from "./Components/Tabbar"


class App extends React.Component{
  render(){
    return <div>
      
      
      {this.props.children}
      <Tabbar></Tabbar>
    </div>
  }
}

export default App;
