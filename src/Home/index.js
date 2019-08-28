import React from 'react'
import TabbarTop from "../Components/TabbarTop"
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
        </div>
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