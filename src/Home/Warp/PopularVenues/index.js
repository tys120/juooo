import React, { Component } from "react"
import css from "./index.module.scss"
import Axios from "axios";
class PopularVenues extends Component {
    state = {
        swiperlist: null
    }
    componentDidMount() {
        Axios.get("https://api.juooo.com/home/index/getHotTheatre?version=6.0.4&referer=2").then(res =>
            this.setState({
                swiperlist: res.data.data.theatre_list
            })
        )
    }
    render() {

        return <div className={css.all}>
            <h3>热门场馆</h3>
            <ul className={css.all_ul}>
                {
                    this.state.swiperlist ?
                        this.state.swiperlist.map(item => (
                            <li key={item.pic}>
                                <div className={css.top}>
                                    <img src={item.pic} />
                                    <div>
                                        <a href="#">{item.name}</a>
                                        <p>{item.count + "场在售演出"}</p>

                                    </div>
                                    <a href="#">...</a>
                                </div>
                                <div className={css.month}>
                                    <p>
                                        <span>{item.showList[0].show_time}</span>
                                    </p>
                                    <p>
                                        <span>{item.showList[1].show_time}</span>
                                    </p>
                                </div>

                                <ul className={css.bottom}>
                                    <li>

                                        <img src={item.showList[0].pic} alt={item.showList[0].pic} />

                                    </li>
                                    <li>

                                        <img src={item.showList[1].pic} alt={item.showList[1].pic} />

                                    </li>
                                </ul>

                            </li>
                        )) : null
                }
            </ul>
        </div>

    }
}
export default PopularVenues