import React,{Component} from 'react'
import axios from 'axios';
import ShowlistTop from '../Alllist/ShowlistTop'
import css from './index.module.scss'


class Showlist extends React.Component{
   

    state = {
   
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

         
        </div>
      
    }
    handClick(id){
      
        this.props.history.push(`/Detail/${id}`)
      
    }
}
export default Showlist