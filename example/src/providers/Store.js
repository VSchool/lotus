import React, { useState } from 'react'

export const ComponentDisplayContext = React.createContext()

export default function Store({ children }) {

    const [componentDisplay, setComponentDisplay] =  useState({
        componentDisplay: 'Card'
    })

    return (
        <ComponentDisplayContext.Provider value={[componentDisplay, setComponentDisplay]}>
            {children}
        </ComponentDisplayContext.Provider>
    )
}