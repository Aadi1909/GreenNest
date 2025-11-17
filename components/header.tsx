'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Leaf, ShoppingCart } from 'lucide-react'

interface HeaderProps {
  currentPage: string
  setCurrentPage: (page: 'home' | 'products' | 'cart') => void
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <header className="border-b border-border bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Leaf className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">GreenNest</span>
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <button
            onClick={() => setCurrentPage('home')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'home'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('products')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'products'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Shop
          </button>
          <Button
            onClick={() => setCurrentPage('cart')}
            variant="outline"
            className="relative"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Button>
        </nav>
      </div>
    </header>
  )
}
