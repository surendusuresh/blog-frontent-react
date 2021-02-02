import React, { useReducer, useEffect } from 'react'
import authReducer from '../reducers/auth.js'

export const Context = React.createContext()

const ContextProvider = (props) => {
        
    const cachedToken = localStorage.getItem('token')
    const [ auth, authDispatch ] = useReducer(authReducer, '')

    useEffect(() => {
        if(cachedToken){
            authDispatch({
                type: 'LOGIN',
                token: cachedToken
            })
        }        
    })

    return(
        <Context.Provider value={{ auth, authDispatch }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider