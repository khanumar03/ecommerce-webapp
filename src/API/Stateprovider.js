import React, { createContext, useContext, useReducer } from "react"

const StateContext = createContext()

export const Stateprovider = ({reducer,initialState,children}) => (
    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider> 
);

export const StateValue = () => useContext(StateContext);