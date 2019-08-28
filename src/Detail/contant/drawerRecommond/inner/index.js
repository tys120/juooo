import React from 'react'
import css from "../../../index.module.scss"
class Inner extends React.Component{
    render(){
       return <div>
           <h2>温馨提示</h2>
           <ul className={css.second}>
               {
                   this.props.myid.static_data.show_notice.list.map(item=>
                        <li key={item.title}>
                           <dl>
                                <dt>{item.title}</dt>
                                <dd>{item.desc}</dd>
                           </dl>
                        </li>)
               }
           </ul>
       </div>
    }
}

export default Inner