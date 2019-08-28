import React from 'react'
import Right from './right'
// import axios from 'axios'
import css from './index.module.scss'
import Trduction from './trduction'

class Tabbar extends React.Component{
    //TODO:返回上一页
    state={
        url:null,
        sql:null
    }
    

    componentWillMount(){

        // axios.get(`https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=${this.props.id}&version=6.0.4&referer=2`).then(res=>{
        //     // console.log(res.data.data.share_data.share_pic)
        //     this.setState({
        //         url:res.data.data.share_data.share_pic,
        //         sql:res.data.data,
                
        //     })
        //     // console.log(this.state.sql)
        // })
        // console.log(this.props.id)
        this.setState({
            url:this.props.id.share_data.share_pic,
            sql:this.props.id,
            
        })
    }
    goBack(){
        console.log(History.state)
        window.history.go(-1)
    }

    render(){
        return <div className={css.top}>
            <img src={this.state.url} className={css.ing} alt="pic"/>
            <div className={css.tabbar}>
                <span className="iconfont icon-arrow-fine-left" onClick={()=>this.goBack()}></span>
                <span>演出详情</span>
                <Right></Right>
            </div>
            {
            this.state.sql?
            <Trduction sql={this.state.sql}></Trduction>:null
            }
        </div>
    }
}

export default Tabbar