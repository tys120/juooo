import React from 'react'
import css from "./index.module.scss"

class Connect extends React.Component{
    render(){
        return<div className={css.emp}>
            <div className={css.cent}>
                <span className="iconfont icon-dingdanguanli"></span>
                <div>暂无电子票</div>   
            </div>
        </div>
    }
}
export default Connect