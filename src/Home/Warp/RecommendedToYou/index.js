import React, { Component } from "react"
import css from "./index.module.scss"
import Axios from "axios";
import { PullToRefresh } from 'antd-mobile';
import { withRouter } from "react-router"
class RecommendedToYou extends Component {

    state = {
        count: 1,
        morelist: [],

        // height: 1000
    }
    handleclick(id) {
        this.props.history.push(`/detail/${id}`)
        console.log(id)
    }
    render() {
        return <div className={css.all}>
            <h3>为你推荐</h3>
            <PullToRefresh
                damping={60}
                ref={el => this.ptr = el}
                style={{
                    height: this.state.height,
                    // overflow: 'auto',
                }}
                // indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                direction={"up"}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({
                        refreshing: true,
                        count: this.state.count + 1
                    });
                    // setTimeout(() => {
                    //     this.setState({ refreshing: false });
                    // }, 1000);                              
                    Axios.get(`https://api.juooo.com/home/index/getRecommendShow?cityAdd=&page=${this.state.count}&version=6.0.4&referer=2`).then(res => {
                        this.setState({
                            morelist: [...this.state.morelist, ...res.data.data.recommend_show_list],
                            // current: this.state.current + 1
                        })
                    })
                }}
            >

                {/* {this.state.data.map(i => (
                    <div key={i} style={{ textAlign: 'center', padding: 20 }}>
                        {this.state.down ? 'pull down' : 'pull up'} {i}
                    </div>
                ))} */}

                <ul>
                    {this.state.morelist.length ?
                        this.state.morelist.map(item => (
                            <li key={item.sche_id} onClick={() => this.handleclick(item.sche_id)}>
                                <div>
                                    <img src={item.schePic} />
                                    <div className={css.right}>
                                        <strong>{item.show_time}</strong>
                                        <h3>{item.show_name}</h3>
                                        <p className={css.text}>{item.c_name + " | " + item.v_name}</p>
                                        <p className={css.price}>
                                            <i>{"￥  " + item.low_price}</i>
                                            <span>起</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )) : null
                    }
                </ul>
            </PullToRefresh>

        </div>

    }

    // https://api.juooo.com/home/index/getRecommendShow?cityAdd=&page=2&version=6.0.4&referer=2
    componentDidMount() {
        // console.log(this.state.morelist)
        Axios.get(`https://api.juooo.com/home/index/getRecommendShow?cityAdd=&page=${this.state.count}&version=6.0.4&referer=2`).then(res => this.setState({
            morelist: [...this.state.morelist, ...res.data.data.recommend_show_list]
        })
        )
    }

}
export default withRouter(RecommendedToYou) 