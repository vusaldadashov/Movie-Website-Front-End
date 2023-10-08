import {configureStore} from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    user : {}
}


const sessionReducer = (state = initialState, action) => {
    if(action.type === "save_session"){
        return {isLoggedIn: action.session.isLoggedIn, user: action.session.user}
    }
    return {isLoggedIn: false, user: {}}
}


const store = configureStore({reducer: sessionReducer})

export default store

