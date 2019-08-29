import React,{Component} from 'react'
import axios from 'axios';
import ShowlistTop from '../Alllist/ShowlistTop'
import css from './index.module.scss'
import {PullToRefresh} from 'antd-mobile'
class Showlist extends React.Component{
    state = {
        num:1,
       showList:[],
    }
    componentDidMount() {
        var id=this.props.match.params.id
        var num=1
        axios.get(`https://m.juooo.com/Theatre/showListData?tid=${id}&category=0&page=${num}`).then(res => {       
            console.log(res.data.datas)
            this.setState({              
                showList:res.data.datas
            },()=>{

            //     window.onscroll=function(){
            //         console.log(window.innerHeight)
            //         if(window.innerHeight>=667){
                        
            //             num+=1
                       
            //             axios.get(`https://m.juooo.com/Theatre/showListData?tid=${id}&category=0&page=${num}`).then(res => {       
            //         console.log(res.data.datas)
            //         this.setState({              
            //             showList:[...this.state.showList,...res.data.datas]
            //         })
        
            //     })
        
            //         }
        
            //     }

            })
        })
    }
    render(){
 
        return <div>
              <ShowlistTop></ShowlistTop>
              <PullToRefresh
                damping={60}
                ref="mypull"
                style={{
                height: this.state.height,
                overflow: 'auto',
                }}
                indicator={this.state.down ? {} : { deactivate: '上拉可以刷新111' }}
                direction={'up'}
                refreshing={this.state.refreshing}
                onRefresh={() => {

                    if (this.state.num==5){
                        this.setState({ refreshing: false 
                           
                        });
                        return}

                    console.log("下拉了")
                    this.setState({ refreshing: true ,
                        num:this.state.num + 1
                    });
                 
                    var id=this.props.match.params.id
                  
                    axios.get(`https://m.juooo.com/Theatre/showListData?tid=${id}&category=0&page=${this.state.num}`).then(res => {  
                        console.log(res.data.datas)     
            
            this.setState({              
                showList:[...this.state.showList,...res.data.datas]
                     })
                 })
                }
            }        
            >
            <div className={css.all}>
         {
            
            this.state.showList.map(list=>
                <dl key={list.id} className={css.lists} onClick={()=>this.handClick(list.id)}>
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
           </PullToRefresh>
        </div>
    }
    handClick(id){
        this.props.history.push(`/detail/${id}`)
    }
}
export default Showlist