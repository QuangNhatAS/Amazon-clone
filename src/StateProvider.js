//setup data layer
//we need this to track the basket

import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

//buid a provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);