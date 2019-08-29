import React from 'react'
import Share from './Share'
import Home from './Home'
import css from './index.module.scss'

class Right extends React.Component{
    render(){
        return <div className={css.right}>
            <Share></Share>
            <Home></Home>
        </div>
    }
}
export default Right