import React from 'react'
import {NavLink} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return <div>
            <NavLink to="/home"><span className="iconfont icon-shouye"></span></NavLink>
        </div>
    }
}
export default Home