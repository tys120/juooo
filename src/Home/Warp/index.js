import React, { Component } from "react"
import css from "./index.module.scss"
import HotShow from "./HotShow"
import ConcertTour from "./ConcerTour"
import Vip from "./Vip"
// import Concert from "./Concert"
import RecommendedToYou from "./RecommendedToYou"
import Commom from "./Common"
class Warp extends Component {
    state = {
        mydata: null,
        itemdata: null,
    }
    componentWillMount() {
        this.setState({
            mydata: this.props.mystate.classify_list,
            itemdata: this.props.mystate.operation_list,
        })

    }
    render() {
        // console.log(this.props)
        return <div className={css.all}>
            <ul className={css.container}>
                {
                    this.state.mydata.map(item =>
                        (
                            <li key={item.id} >
                                <a href={item.url} key={item.id}>
                                    <img src={item.pic} alt={item.category_id} />
                                    <p>{item.name}</p>
                                </a>
                            </li>
                        )
                    )
                }
            </ul>
            <ul className={css.middleContainer}>
                {
                    this.state.itemdata.slice(0, 2).map(item => (
                        <li key={item.name}>
                            <a href={item.url}>
                                <h3>{item.name}</h3>
                                <img src={item.pic} alt={item.name} />
                                <p>
                                    {item.describe.replace("<p>", "").replace(`<span class="c_ff6">`, "").replace("</span>", "").replace("</p>", "")}
                                </p>
                            </a>

                        </li>
                    )
                    )
                }
            </ul>
            <ul className={css.bottomContainer}>
                {
                    this.state.itemdata.slice(2, 6).map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>
                                <h3>{item.name}</h3>
                                <p>
                                    {item.describe.replace("<p>", "").replace(`<span class="c_ff6">`, "").replace("</span>", "").replace("</p>", "")}
                                </p>
                                <img src={item.pic} alt={item.name} />
                            </a>
                        </li>
                    ))
                }
                {/* <HotShow></HotShow> */}

            </ul>
            {/*  <ul className={css.listContainer}>
                {
                    this.state.moreList.map(item => (
                        <li>
                            {item}
                        </li>
                    ))
                }  
            </ul> */}
            <ul className={css.componentContainer}>
                <li>
                    <HotShow />
                </li>
                <li>
                    <ConcertTour />
                </li>
                <li>
                    <Vip></Vip>
                </li>
                <li>
                    <Commom></Commom>
                </li>
                <li>  <RecommendedToYou></RecommendedToYou></li>

            </ul>
        </div>
    }
}
export default Warp;