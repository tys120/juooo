import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import App from '../App'
import home from "../Home"
import cinema from "../Cinema"
import Ticks from "../Ticks"
import Myself from "../Myself"
import detail from "../Detail"
import login from "../Login"
import register from "../Register"

var Auth = {
    isLogin() {
        return true
    }
}

const router = <Router>
    <App>
        <Switch>
            <Route path="/home" component={home}></Route>
            <Route path="/cinema" component={cinema}></Route>
            {/* <Route path="/ticks" component={ticks}></Route> */}
            {/* <Route path="/myself" component={myself}></Route> */}
            <Route path="/ticks" render={() =>
                Auth.isLogin() ? <Ticks></Ticks> : <Redirect to="/login"></Redirect>}></Route>
            <Route path="/myself" render={() =>
                Auth.isLogin() ? <Myself></Myself> : <Redirect to="/login"></Redirect>}></Route>
            <Route path="/detail/:id" component={detail}></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/register" component={register}></Route>
        </Switch>
        <Redirect from="/" to="/home" />
    </App>
</Router>

export default router