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
<<<<<<< HEAD

var Auth = {
    isLogin() {
=======
import alllist from "../Alllist"
// import Concert from '../Alllist/Concert'
import showlisttop from '../Alllist/ShowlistTop'
import showlist from '../Showlist'
// import music from '../Music'
// import Concert from '../Concert'
var Auth={
    isLogin(){
>>>>>>> 6031720b5705c33d2378ea75dfcf283ee9d6863e
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
<<<<<<< HEAD
=======
            {/* <Route path="/alllist/Concert" component={Concert}/> */}
            
            <Route path="/showlisttop" component={showlisttop}/>
            <Route path="/alllist/:id" component={alllist}></Route>
            {/* <Route path="/concert/:id" component={music}></Route>
            <Route path="/music/:id" component={music}></Route> */}
            <Route path="/showlist/:id" component={showlist}></Route>
            
            {/* <Redirect from="/" to="/home"/> */}
>>>>>>> 6031720b5705c33d2378ea75dfcf283ee9d6863e
        </Switch>
        <Redirect from="/" to="/home" />
    </App>
</Router>

export default router