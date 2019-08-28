import React, { Component } from "react"
import axios from "axios"
import Concert from "../Concert"
import Musical from "../Musical"
import StageShow from "../StageShow"
import ChildrenPlay from "../ChildrenPlay"
import Mulic from "../Mulic"
import ExhibitionLeisure from "../ExhibitionLeisure"
import PopularVenues from "../PopularVenues"
// import List_Swiper from "../List_Swiper/List_Swiper";
// import css from "./Common.module.scss"
class Common extends Component {
    state = {
        Componentlist: null,
    }
    render() {

        return <div>
            {
                this.state.Componentlist ?
                    <Concert allList={this.state.Componentlist[0]} ></Concert>
                    : null
            }
            {
                this.state.Componentlist ?
                    <Musical allList={this.state.Componentlist[1]}></Musical>
                    : null
            }
            {
                this.state.Componentlist ?
                    <StageShow allList={this.state.Componentlist[2]}></StageShow>
                    : null
            }  {
                this.state.Componentlist ?
                    <ChildrenPlay allList={this.state.Componentlist[3]}></ChildrenPlay>
                    : null
            }  {
                this.state.Componentlist ?
                    <Mulic allList={this.state.Componentlist[4]}></Mulic>
                    : null
            }  {
                this.state.Componentlist ?
                    <ExhibitionLeisure allList={this.state.Componentlist[5]}></ExhibitionLeisure>
                    : null
            }
            {
                this.state.Componentlist ?
                    <PopularVenues></PopularVenues>
                    : null
            }
        </div>
    }
    componentDidMount() {
        axios.get("https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.4&referer=2").then(res => {
            this.setState({
                Componentlist: res.data.data
            })
        }
        )
    }

}
export default Common


