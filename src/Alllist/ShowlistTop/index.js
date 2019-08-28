import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
import {Route,Switch} from 'react-router-dom'
import  {withRouter} from 'react-router'
// import Concert from '../ShowlistTop/Concert'


class ShowlistTop extends Component{

    componentDidMount() {
        console.log(this.props.location.pathname.slice(-1))
    }

    render(){
        // console.log(this.props.isFixed)
       
// var id=this.props.match.params.id
var id=this.props.location.pathname.slice(-1)

        return <div className={css.ShowlistTop}>
             <ul>   
                <li>全部
                  
                </li>
                {/* <li><NavLink to={{pathname:`/alllist/Showlist/${id}`}} activeClassName={css.active} replace>全部</NavLink></li> */}
                <li><NavLink to={{pathname:`/alllist/Concert/${id}`}} activeClassName={css.active} replace>演唱会</NavLink></li>
                {/* <li onClick={()=>this.handClick1(id)}>演唱会</li> */}
                {/* <li onClick={()=>this.handClick2(id)}>音乐会</li> */}
                <li><NavLink to={{pathname:`/alllist/music/${id}`}} activeClassName={css.active} replace>音乐会</NavLink></li>
                <li><NavLink to={{pathname:`/alllist/Drama/${id}`}} activeClassName={css.active} replace>话剧歌剧</NavLink></li>
                <li><NavLink to={{pathname:`/alllist/Son/${id}`}} activeClassName={css.active} replace>儿童亲子</NavLink></li>
                <li><NavLink to={{pathname:`/alllist/Musical/${id}`}}activeClassName={css.active} replace>音乐剧</NavLink></li>
                <li><NavLink to={{pathname:`/alllist/Dance/${id}`}} activeClassName={css.active} replace>舞蹈芭蕾</NavLink></li>
                <li><NavLink to={{pathname:`/alllist/Opera/${id}`}}activeClassName={css.active} replace>戏曲综艺</NavLink></li>
                <li><NavLink to={{pathname:`/alllist/Exhibition/${id}`}} activeClassName={css.active} replace>展览</NavLink></li>
              
            </ul>

         
           
        </div>

    }
    // handClick1(id){
    //    console.log(id)
      
    //     this.props.history.push(`/alllist/Concert/${id}`)
      
        
        
    // }
    // handClick2(id){
    //     console.log(id)
       
    //      this.props.history.push(`/alllist/music/${id}`)
       
         
         
    //  }
}

export default withRouter(ShowlistTop)