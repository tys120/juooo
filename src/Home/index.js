import React from 'react'
import TabbarTop from "../Components/TabbarTop"
<<<<<<< HEAD
import Warp from "./Warp"
import Swiper from "./Swiper"
import css from './index.module.scss'
import axios from 'axios';
class Home extends React.Component {
    state = {
        isFixed: false,
        datalist: null
    }

    render() {
        return <div className={css.all}>
            <TabbarTop ></TabbarTop>
            {this.state.datalist ? <Swiper mystate={this.state.datalist}></Swiper> : null}
            {this.state.datalist ? <Warp mystate={this.state.datalist}></Warp> : null}
=======
// import css from './index.module.scss'
// import axios from 'axios';

<<<<<<< HEAD
class Home extends React.Component{
    state={
        isFixed:false,
        datalist:[]
    }
   
    render(){
        return <div>
            <TabbarTop></TabbarTop>
            Home
>>>>>>> 6031720b5705c33d2378ea75dfcf283ee9d6863e
        </div>
=======
class Home extends React.Component {
    state = {
            isFixed: false,
            datalist: []
        }
        // componentDidMount(){
        //     axios.get("https://api.juooo.com/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.4&referer=2").then(res=>{
        //         console.log(res.data.data)
        //         this.setState({
        //             datalist:res.data.data.recommend_show_list
        //         })
        //     })
        // }
    render() {
        return <div >
            <
            TabbarTop > < /TabbarTop>
        Home {
            /* {
                            this.state.datalist.map((item)=>
                                <li key={item.sche_id}>{item.show_name}</li>
                            )
                        } */
        } <
        /div>
>>>>>>> 91a12060f680550a480544ceeef7ce1b868b7073
    }
    componentDidMount() {
        axios.get("https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.4&referer=2").then(res => {
            this.setState({
                datalist: res.data.data
            })
            // console.log(res.data.data.slide_list)
        })
    }
}
export default Home