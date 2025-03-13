"use client"
import { RootState, store } from '@/store'
import React, { ReactNode, useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'

const OverflowControl = () => {
    const isOverflowHidden = useSelector(
        (state: RootState) => state.overflow.isOverflowHidden
    );

    useEffect(() => {      
        document.body.style.overflowY = isOverflowHidden ? "hidden" : "auto";
        var html = document.getElementsByTagName('html')[0]
        if(isOverflowHidden){
          html.classList.add("overflowHide")
        }else{
          html.classList.remove("overflowHide")
        }
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