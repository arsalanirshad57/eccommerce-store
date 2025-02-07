'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './stores'

const RtkProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default RtkProvider