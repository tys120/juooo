import React, { Component } from "react"
import css from "./index.module.scss"
class Concert extends Component {
    state = {
        Concertlist: null
    }
    componentWillMount() {
        // console.log(this.props)
        this.setState({
            Concertlist: this.props.allList
        })

    }
    render() {
        var state = this.state.Concertlist.list[1]
        return <div className={css.all}>
            <h3>{this.props.allList.title}</h3>
            <div>
                <a href="#">
                    <img src={state.pic} />
                    <span></span>
                    <div>
                        <p>
                            <strong>{state.date}</strong>
                            <span>{state.week}</span>
                        </p>
                        <h3>{state.schedular_name}</h3>
                        <p>{state.city_name + "  |  " + state.venue_name}</p>
                    </div>
                </a>
            </div>
            <div className={css.swiper}>
                <ul>
                    {
                        this.state.Concertlist.list.map(item => (
                            <li key={item}>
                                <img src={item.pic} alt={item.schedular_name} />
                                <p>{item.schedular_name}</p>
                                <i>{"￥ " + item.low_price}</i>
                                <span>起</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    }
}
export default Concert