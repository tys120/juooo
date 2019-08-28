import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from "react";
import css from "./index.module.scss"
class Swiper extends Component {
    state = {
        list: null,
        imgHeight: 0,
    }
    componentWillMount() {
        this.setState({
            list: this.props.mystate.slide_list
        })
    }
    render() {
        // console.log(this.props.mystate.slide_list)
        return <div className={css.all}>
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    dots={true}
                    autoplayInterval={2500}

                >
                    {
                        this.state.list ?
                            this.state.list.map(val => (
                                <a
                                    key={val}
                                    href={val.url}
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={val.image_url}
                                        alt={val.title}
                                        style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
                                        onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: "1.96rem" });
                                        }}
                                    />
                                </a>
                            )) : null
                    }
                </Carousel>
            </WingBlank>
        </ div>
    }

}
export default Swiper;