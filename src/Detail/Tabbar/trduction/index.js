import React from 'react'
// import axios from 'axios'
import css from '../index.module.scss'

class Trduction extends React.Component{    
    render(){
        return <div className={css.trduction}>
            <img src={this.props.sql.static_data.pic} alt="pic"/>
            <div className={css.nm}>
                <div>{this.props.sql.share_data.share_title}</div>
                {
                    this.props.sql.static_data.real_name.is_real_name_certification?
                    <div style={{background:'#f90'}}>实名认证</div>:
                    <div></div>
                }
                
                <div>{"￥"+this.props.sql.static_data.price_range}</div>
            </div>
        </div>
    }
}

export default Trduction