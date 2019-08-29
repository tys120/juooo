import React from 'react'
import {NavLink} from 'react-router-dom'
import css from '../../../index.module.scss'
import axios from 'axios'

class Inner extends React.Component{
    state={
        price:null
    }
    componentWillMount(){
        axios.get(`https://api.juooo.com/Schedule/Schedule/getScheduleTicket?schedular_id=${this.props.myid.static_data.schedular_id}&version=6.0.4&referer=2`).then(res=>[
            // console.log(res.data.data.list)
            this.setState({
                price:res.data.data.list
            })
        ])
    }
    render(){
        // console.log(this.props)
        return <div>
            <p>选择日期</p>
            <ul>
                {
                    this.props.myid.item_list.map(item=>
                        <li key={item}><NavLink to="#" activeClassName={css.active} replace>{item.project_time}</NavLink></li>
                    )
                }
            </ul>
            <p>选择场次</p>
            <ul>
                {
                    this.props.myid.item_list.map(item=>
                        <li key={item}><NavLink to="#" activeClassName={css.active} replace>{item.session_time}</NavLink></li>
                    )
                }
            </ul>
            <p>选择价格</p>
            <ul>
                {
                    this.state.price?
                    this.state.price.map(item=>
                        <li key={item.price}><NavLink to="#" activeClassName={css.active} replace>{item.price+"元"}</NavLink></li>
                       
                    ) 
                    :null
                }
            </ul>
        </div>
    }
}

export default Inner