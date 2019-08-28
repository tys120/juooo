import React from 'react'
import Tabbar from './Tabbar'
import axios from 'axios'
import Contant from './contant'
import css from './index.module.scss'
import store from '../Redux';

class Detail extends React.Component{
    state={
        id:105040,
        obj:null,
        need:null,
        total:null,
        arr:[]
    }
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
    componentDidMount(){
        axios.get(`https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=${this.state.id}&version=6.0.4&referer=2`).then(res=>{
            console.log(res.data.data)
            this.setState({
                obj:res.data.data
            })
            axios.get(`https://m.juooo.com/Search/getShowList?category=${res.data.data.static_data.cate_parent_id}&city_id=${res.data.data.static_data.city.city_id}&version=6.0.4&referer=2`).then(reses=>{
                this.setState({
                    need:reses.data
                })
                // console.log(this.state.need)
            })
            axios.get(`https://api.juooo.com/Schedule/Schedule/getTour?show_id=${res.data.data.static_data.show_id}&venue_id=${res.data.data.static_data.venue.venue_id}&version=6.0.4&referer=2`).then(res=>{
            this.state.total=res.data.data.show_total
            this.state.arr=res.data.data.tour_list
            // console.log(this.state.total)
    })
        })
    }
    render(){
        return <div className={css.all}>
                    {
                        this.state.obj?
                        <Tabbar id={this.state.obj}></Tabbar>:null}
                    {
                        this.state.need?
                        <Contant need={this.state.need} id={this.state.obj} total={this.state.total} arr={this.state.arr}></Contant>
                        :null
                    }
                </div>
    }
}
export default Detail