import React,{Component} from 'react'
import axios from 'axios';
import  {withRouter} from 'react-router'
import css from './index.module.scss'
// import ShowlistTop from '/juooo/src/ShowlistTop'
// import ShowlistTop from './ShowlistTop'
class Dance extends React.Component{
    state = {
        showList:[],
    }
    componentDidMount() {
        var id=this.props.match.params.id
         console.log(this.props)
        axios.get(`https://m.juooo.com/Theatre/showListData?tid=${id}&category=86&page=1`).then(res => {
            console.log(res.data)
            this.setState({ 
                showList:res.data.datas             
               
            })

        })
        
    }
    render(){
        return <div>
             {/* <ShowlistTop></ShowlistTop> */}
            <div className={css.all}>
            { 
                this.state.showList==null?
              
                <div className={css.nothing}>别看电影了这里没东西我们去听kerwin的讲课吧<a href="http://dl.mobiletrain.org/?pinpaisogoutg=mopinpaiquanguo=pinpaipc=sogoumo=1808173665*pinpai-sg5-qg-pc-pp013249*&jzl_kwd=29025188465&jzl_ctv=5944399936&jzl_ch=12">点这里你就快要成功了</a></div>
                
                : 
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
        </div>
    }
    handClick(id){
      
        this.props.history.push(`/Detail/${id}`)
      
    }
}
export default withRouter(Dance)