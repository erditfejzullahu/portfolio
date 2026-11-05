"use client"
import { store } from '@/store'
import dynamic from 'next/dynamic'
import React, { ReactNode, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import Cursor from './Cursor'
import Topbar from './Topbar'
import { Toaster } from 'sonner'

const SideProjects = dynamic(() => import('./SideProjects'), { ssr: false })

const ClientProviderWrapper = ({children}: {children: ReactNode}) => {
  const [showSideProjects, setShowSideProjects] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)')
    const updateVisibility = () => setShowSideProjects(mediaQuery.matches)

    updateVisibility()
    mediaQuery.addEventListener('change', updateVisibility)
    return () => mediaQuery.removeEventListener('change', updateVisibility)
  }, [])

  return (
    <Provider store={store}>
        <Cursor />
        <Topbar />
        {showSideProjects && <SideProjects />}
        {children}
        <Toaster />
    </Provider>
  )
}

export default ClientProviderWrapper