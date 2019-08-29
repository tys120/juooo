import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabbar from "./Components/Tabbar"
import store from './Redux';

class App extends React.Component{
  state={
    isShow:true
  }

  componentWillMount(){
    store.subscribe(()=>{
      // console.log("store修改了",store.getState())
      this.setState({
        isShow:store.getState().isTabbarShow
      })
    })
  }

  render(){
    return <div>
      {this.props.children}
    {
      this.state.isShow?
      <Tabbar></Tabbar>:null
    }
    </div>
  }
}

export default App;
