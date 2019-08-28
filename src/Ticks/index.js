import React from 'react'
import Tab from "./tabbar"
import Connect from "./Connect"
import store from '../Redux';


class Ticks extends React.Component{
    componentWillMount(){
        // console.log("隐藏Tabbar")
        store.dispatch({
            type:"hideTabbar",
            payload:false
        })
    }
    componentWillUnmount(){
        // console.log("显示Tabbar")
        store.dispatch({
            type:"showTabbar",
            payload:true
        })
    }
    render(){
        return <div>
            <Tab></Tab>
            <Connect></Connect>
        </div>
    }

}
export default Ticks