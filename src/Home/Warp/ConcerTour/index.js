import React, { Component } from "react"
import { Carousel, WingBlank } from 'antd-mobile';
import axios from "axios"
import css from "./index.module.scss"
// class ConcerTour extends Component {
//     render() {
//         return <div class={CSS.all}>


//         </div>
//     }
// }

class ConcerTour extends Component {
    state = {
        data: null,
        imgHeight: 176,
    }
    render() {
        return <div>
            {
                this.state.data ?
                    <Child mythis={this.state.data} ></Child > : null
            }
        </div>
    }
    componentDidMount() {
        axios.get("https://api.juooo.com/home/index/getTourRecommendList?city_id=0&version=6.0.4&referer=2").then(res => (
            this.setState({
                data: res.data.data.tour_show_list
            })
        ))
    }
}
// componentDidMount() {
//     // simulate img loading
//     setTimeout(() => {
//         this.setState({
//             data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
//         });
//     }, 100);
// }
class Child extends Component {
    state = {
        data: this.props.mythis,
        imgHeight: 176,
    }
    render() {
        return <div className={css.all}>
            <h3>巡回演出</h3>
            {
                this.state.data ?
                    <WingBlank>
                        <Carousel className="space-carousel"
                            frameOverflow="visible"
                            slideWidth={0.6}
                            autoplay
                            infinite
                            cellSpacing={10}
                        // beforeChange={(from, to) => console.log(111)}
                        // afterChange={index => this.setState({ slideIndex: index })}
                        >
                            {this.state.data.slice(0, 6).map((val, index) => (
                                <a
                                    key={val}
                                    href={val}
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        top: this.state.slideIndex === index ? -10 : 0,
                                        height: this.state.imgHeight,
                                        // boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <img
                                        src={val.pic}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                    <h3>
                                        {val.show_name}
                                    </h3>
                                    <p>
                                        {val.schedular_num + "场次巡演"}
                                    </p>
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank> : null
            }
        </div>
    }
}

// ReactDOM.render(<ConcerTour />, 100);

export default ConcerTour
