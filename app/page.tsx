'use client'

import { Provider } from 'react-redux'
import store from '@/lib/store'
import Layout from '@/components/layout'
import LandingPage from '@/components/pages/landing-page'
import { useState } from 'react'

export default function Page() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'cart'>('home')

  return (
    <Provider store={store}>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {currentPage === 'home' && <LandingPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'products' && <ProductListingPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'cart' && <CartPage setCurrentPage={setCurrentPage} />}
      </Layout>
    </Provider>
  )
}

import ProductListingPage from '@/components/pages/product-listing-page'
import CartPage from '@/components/pages/cart-page'
