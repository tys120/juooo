import React from 'react'
import {NavLink} from 'react-router-dom'
import css from "./index.module.scss"

class Tabbar extends React.Component{
    render(){
        return <div className={css.tabbar}>
            <ul>
            <li><NavLink to="/home" activeClassName={css.active} replace>首页</NavLink></li>
            <li><NavLink to="/cinema" activeClassName={css.active} replace>影院</NavLink></li>
            <li><NavLink to="/ticks" activeClassName={css.active} replace>票夹</NavLink></li>
            <li><NavLink to="/myself" activeClassName={css.active} replace>我的</NavLink></li>
            </ul>
        </div>
    }
}

export default Tabbar 