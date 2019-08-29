import React from 'react'
import TabbarTop from "../Components/TabbarTop"
// import css from './index.module.scss'
// import axios from 'axios';

class Home extends React.Component{
    state={
        isFixed:false,
        datalist:[],
    }
   
    render(){
        return <div>
            <TabbarTop></TabbarTop>
            Home
        </div>
    }
}
export default Home