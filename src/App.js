import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabbar from "./Components/Tabbar"
<<<<<<< HEAD
class App extends React.Component {
  render() {
    // console.log(this.props.children.props.children)
    return <div className="all">
=======
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
>>>>>>> 6031720b5705c33d2378ea75dfcf283ee9d6863e
      {this.props.children}
    {
      this.state.isShow?
      <Tabbar></Tabbar>:null
    }
    </div>
  }
}

export default App;
