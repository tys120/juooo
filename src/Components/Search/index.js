import React from 'react'
import css from "./index.module.scss"

class Search extends React.Component{
    render(){
        return <div className={css.Search}>
            <input type="text" placeholder="搜索热门演出"/>
        </div>
    }
}

export default Search