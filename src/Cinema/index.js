import React from 'react'
import axios from 'axios';
import css from "./index.module.scss"

// import Showlist from "./Showlist"

// import Swiper from 'swiper' // js
// import 'swiper/dist/css/swiper.css' // css
class Cinema extends React.Component {

    state = {
        datalist:[],
        // showList:[],

    }
    componentDidMount() {
        axios.get("https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.0.4&referer=2").then(res => {
            // console.log(res.data.data.theatre_list);
            // console.log(res.data.data.theatre_list[0].showList)

        //     var aaa=res.data.data.theatre_list
        //     console.log(aaa)
        //     for(let i=0;i<aaa.length;i++){
        //        for(var j=0;j<=(aaa[i].showList.length>7?7:aaa[i].showList.length);j++){
        //             var showList=aaa[i].showList[j]
        //             console.log(showList)
        //        }
        //    }

            this.setState({              
                datalist:res.data.data.theatre_list, 
            })

        })
        
    }
render() {
    return <div>
       {/* <Switch>
            <Route path="/Cinema/Showlist" component={Showlist}/>
        </Switch> */}
        
        <div  className = { css.Tabbar }>剧院</div>
        <div className={css.all}>
            {
            this.state.datalist.map(item=>
            <li key={item.id} className={css.list}>
                <div className={css.tator}>
                    <div className={css.tatorone}>
                        <img src={item.pic} className = {css.pic} alt="加载失败"/>
                        <div>
                            <h3> {item.name}</h3>
                            <p>{item.count}场在售演出</p>                   
                        </div>
                    </div>
                    <p onClick={()=>this.handClick(item.id)}>...</p>
                </div>

                <div className={css.bor} >
                    <ul>
                        {
                            
                        item.showList.length>8?[...item.showList.map(items=>
                        
                            <li className={css.lists} key={items.id}>
            
                                <p>{items.show_time}<span></span></p>
                                        <img src={items.pic} alt="加载失败"/>
                            </li>
                            ),<li className={css.lists} key={item.id}>
                                <p><span></span></p>
                                <div className={css.more} onClick={()=>this.handClick(item.id)}>查看更多></div>
                            </li>]
                            :
                             item.showList.map(items=>
                                <li className={css.lists} key={items.id}>
                                <p>{items.show_time}<span></span></p>
                                    <img src={items.pic} alt="加载失败"/>
                                </li>)
                        }
                    </ul>
                </div>                                            
            </li>
                )    
            }
        </div>
        
        </div>
        
    }
    handClick(id){
        this.props.history.push(`/showlist/${id}`)
    } 
}
export default Cinema