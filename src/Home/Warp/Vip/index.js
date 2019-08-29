import React from "react"
import css from "./index.module.scss"
import axios from "axios"
class Vip extends React.Component {
  state = {
    viplist: null,
  }
  render() {
    return <div className={css.all}>
      <h3>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg==" alt="vip" />
        <span>VIP+会员尊享权益</span>
        <span>99元/年</span>
      </h3>
      <div className={css.left}>
        <h3>专享折扣</h3>
        <ul>
          {
            this.state.viplist ?
              this.state.viplist.discountList.map(item => (
                <li key={item.pic}>
                  <img src={item.pic} alt={item.componentDidMountschedular_name} />
                  <p>
                    <i>{item.min_discount}</i>
                    {"折"}</p>
                </li>
              )) : null
          }
        </ul>
      </div>
      <div className={css.right}>
        <h3>专享折扣</h3>
        <ul>
          {
            this.state.viplist ?
              this.state.viplist.watchList.map(item => (
                <li key={item.pic}>
                  <img src={item.pic} alt={item.componentDidMountschedular_name} />
                  <p>
                    <i>{item.end_time}</i>
                    {"结束"}
                  </p>
                </li>
              )
              ) : null
          }
        </ul>
      </div>
      {/* <img /> */}
    </div>
  }
  componentDidMount() {
    axios.get("https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.4&referer=2").then(res => (
      this.setState({
        viplist: res.data.data
      })
      // console.log(res.data.data)
    )
      // console.log(res.data.data.discountList)
    )
  }
}
export default Vip