import React from 'react'
import css from "./index.module.scss"
import Position from "../Position"
import Search from "../Search"
import axios from 'axios';

class TabbarTop extends React.Component {
    state = {
        url: null
    }
    componentDidMount() {
        axios.get("https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.4&referer=2").then(res => {
            // console.log(res.data.data.top_icon[0].pic)
            // this.state.url=res.data.data.top_icon[0].pic
            this.setState({
                url: res.data.data.top_icon[0].pic
            })
        })
    }

<<<<<<< HEAD
    render(){
        return <div className={css.TabbarTop}>
            <Position></Position>
            <Search></Search>
            <img src={this.state.url}  alt="pic"/>
        </div>
=======
    render() {
        return <div className = { css.TabbarTop } >
            <Position> </Position> 
            <Search > </Search> 
            <img src = { this.state.url }
        /> </div>
>>>>>>> 91a12060f680550a480544ceeef7ce1b868b7073
    }
}

export default TabbarTop