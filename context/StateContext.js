import React, { createContext, useContext, useState, useEffect } from 'react'

export const Context = createContext()

export const StateContext = ({children}) => {
    const [hit, setHit] = useState(false)
    const test = 'test'

    return (
        <Context.Provider value={{
            hit
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)