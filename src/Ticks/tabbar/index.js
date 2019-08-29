import React from 'react'
import css from "./index.module.scss"
import {withRouter} from "react-router-dom"
import Navbar from "./Navbar"

class Tab extends React.Component{
    state={
        show:false   
    }
    render(){
        // console.log(this.props)
        return <div className={css.tab}>
                <span className="iconfont icon-arrow-fine-left " onClick={()=>this.goBack()}></span>
                <span>票夹</span>
                <span  onClick={this.change.bind(this)}>···</span>
                {
                    this.state.show?
                    <Navbar></Navbar>
                    :null

                }
            </div>
    }
    change(){
        this.setState({
            show:!this.state.show
        })
    }
    goBack(){
        this.props.history.push("/home")
    }

}
    
export default withRouter(Tab)