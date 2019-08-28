import React, { Component } from "react"
import css from "./index.module.scss"
import List_Swiper from "../List_Swiper/List_Swiper"
import axios from "axios";
class HotShow extends Component {
    state = {
        swiper_list: null
    }
    componentDidMount() {
        axios.get("https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.0.4&referer=2").then(res => (
            this.setState({
                swiper_list: res.data.data.hots_show_list
            })
        ))
    }
    render() {
        return <div className={css.all}>
            <h3>热门演出</h3>
            {
                this.state.swiper_list ?
                    <List_Swiper mystate={this.state.swiper_list}></List_Swiper> : null
            }
        </div>
    }
}
export default HotShow