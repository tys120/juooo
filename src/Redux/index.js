import {createStore} from 'redux'

const reducer=(prevState={
    isTabbarShow:true
},action)=>{
    // console.log(action)
    let {type,payload} = action
    let newState={...prevState}
    switch(type){
        case "hideTabbar":
            newState.isTabbarShow=payload
            return newState
        case "showTabbar":
            newState.isTabbarShow=payload
            return newState
    }
    return prevState
}
const store =createStore(reducer)
export default store