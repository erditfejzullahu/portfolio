"use client"
import { store } from '@/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import Cursor from './Cursor'
import Topbar from './Topbar'
import SideProjects from './SideProjects'
import { Toaster } from 'sonner'

const ClientProviderWrapper = ({children}: {children: ReactNode}) => {
  return (
    <Provider store={store}>
        <Cursor />
        <Topbar />
        <SideProjects />
        {children}
        <Toaster />
    </Provider>
  )
}

export default ClientProviderWrapper