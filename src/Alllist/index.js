import React,{Component} from 'react'
import axios from 'axios';
import ShowlistTop from './ShowlistTop'
import css from './index.module.scss'
import {Route,Redirect,Switch} from 'react-router-dom'
import Concert from './Concert'
import Music from './Music'
import Drama from './Drama'
import Son from './Son'
import Musical from './Musical'
import Dance from './Dance'
import Opera from './Opera'
import Exhibition from './Exhibition'
import Showlist from './Showlist';




class Alllist extends React.Component{
    // state = {
   
    //     showList:[],
 
    //  }
    // componentDidMount() {
    //     var id=this.props.match.params.id
    //     var num=1
    //     axios.get(`https://m.juooo.com/Theatre/showListData?tid=${id}&category=0&page=${num}`).then(res => {       
    //         console.log(res.data.datas)
    //         this.setState({              
    //             showList:res.data.datas
    //         },()=>{

    //         })

    //     })

    // }

    render(){

        
        return <div>
              <ShowlistTop></ShowlistTop>
              {/* <div className={css.all}>
          
          {
              
             this.state.showList.map(list=>
                 <dl key={list.id} className={css.lists}>
                      <dt><img src={`https://image.juooo.com/${list.pic}`} alt="加载失败"/></dt>
                      <dd>
                         <p className={css.lists1}>{list.schedular_name}</p>
                         <p className={css.lists2}>{list.show_time}</p>
                         <p className={css.lists3}>{list.name}</p>
                         <p className={css.lists4}>{list.min_price}起</p>
 
                      </dd>
 
                 </dl>
                     
                     
             )
             
 
          }
            </div>
  */}


              <Switch>
              <Route path="/alllist/Showlist/:id" render={()=>
                    <Showlist></Showlist>
                }/>
                <Route path="/alllist/Concert/:id" render={()=>
                    <Concert></Concert>
                }/>
                <Route path="/alllist/Music/:id" render={()=>
                    <Music></Music>
                }/>
                <Route path="/alllist/Drama/:id" render={()=>
                    <Drama></Drama>
                }/>
               <Route path="/alllist/Son/:id" render={()=>
                    <Son></Son>
                }/>
                <Route path="/alllist/Musical/:id" render={()=>
                    <Musical></Musical>
                }/>
                 <Route path="/alllist/Dance/:id" render={()=>
                    <Dance></Dance>
                }/>
                 <Route path="/alllist/Opera/:id" render={()=>
                    <Opera></Opera>
                }/>
                <Route path="/alllist/Exhibition/:id" render={()=>
                    <Exhibition></Exhibition>
                }/>
               
                <Redirect from="/alllist/Showlist" to="/Showlist"/>
            </Switch>
            

        
           </div>

         
       
      
    }
}
export default Alllist