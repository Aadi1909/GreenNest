'use client'

import Header from './header'
import Footer from './footer'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  currentPage: string
  setCurrentPage: (page: 'home' | 'products' | 'cart') => void
}

export default function Layout({ children, currentPage, setCurrentPage }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
