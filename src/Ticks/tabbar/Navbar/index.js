import React,{Component} from "react"
import css from "../index.module.scss"
import {NavLink} from "react-router-dom"

class Navbar extends Component{
    
    render(){
        return <div  className={css.elli}>
            <NavLink to="/home">主页</NavLink>
            <NavLink to="/myself">我的聚橙</NavLink>
        </div>
    }
}

export default Navbar