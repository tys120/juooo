import React, { Component } from "react"
import css from "./List_Swiper.module.scss"
class List_Swiper extends Component {
  state = {
    list: null
  }
  componentWillMount() {
    // console.log(this.props.state.swiper_list)
    this.setState({
      list: this.props.mystate
    })
  }
  render() {
    return <div className={css.space_arousel}>
      <ul>
        {
          //this.props.mystate
          this.state.list.map(item => (
            <li key={item.show_name}>
              <a >
                <img src={item.pic} alt={item.schedular_url} />
                <h3>{item.show_name}</h3>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  }
}
export default List_Swiper