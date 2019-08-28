import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabbar from "./Components/Tabbar"
class App extends React.Component {
  render() {
    // console.log(this.props.children.props.children)
    return <div className="all">
      {this.props.children}
      <Tabbar></Tabbar>
    </div>
  }
}

export default App;
