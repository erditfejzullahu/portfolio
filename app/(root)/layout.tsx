"use client"
import { RootState, store } from '@/store'
import React, { ReactNode, useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'

const OverflowControl = () => {
    const isOverflowHidden = useSelector(
        (state: RootState) => state.overflow.isOverflowHidden
    );

    useEffect(() => {
        document.body.style.overflow = isOverflowHidden ? "hidden" : "auto";
    }, [isOverflowHidden])
    
    return null;
}

const layout = ({children}: {children: ReactNode}) => {
  return (
    <Provider store={store}>
        <OverflowControl />
        {children}
    </Provider>
  )
}

export default layout