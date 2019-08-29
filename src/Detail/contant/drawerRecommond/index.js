import React from 'react'
import css from "../../index.module.scss"
import Inner from './inner'

class drawer extends React.Component {
    render() {
        // console.log(this.props)
        return <div>
            {
                this.props.myopenRe ?
                    <div className={css.drawer + " " + css.disp}>
                        <Inner myid={this.props.myid}></Inner>
                    </div>
                    : <div className={css.drawer}>
                    </div>
            }
        </div>
    }
}

export default drawer