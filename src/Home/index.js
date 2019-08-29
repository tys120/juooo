import React from 'react'
import TabbarTop from "../Components/TabbarTop"
// import css from './index.module.scss'
// import axios from 'axios';

<<<<<<< HEAD
class Home extends React.Component {
    state = {
            isFixed: false,
            datalist: []
        }
        // componentDidMount(){
        //     axios.get("https://api.juooo.com/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.4&referer=2").then(res=>{
        //         console.log(res.data.data)
        //         this.setState({
        //             datalist:res.data.data.recommend_show_list
        //         })
        //     })
        // }
    render() {
        return <div >
            <TabbarTop > </TabbarTop>
        Home {
            /* {
                            this.state.datalist.map((item)=>
                                <li key={item.sche_id}>{item.show_name}</li>
                            )
                        } */
        } </div>
=======
class Home extends React.Component{
    state={
        isFixed:false,
        datalist:[],
    }
   
    render(){
        return <div>
            <TabbarTop></TabbarTop>
            Home
        </div>
>>>>>>> 12bf4ec477a9f8d157ffd68bec7d9168fec55ddd
    }
}
export default Home