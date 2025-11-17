'use client'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'
import { removeFromCart, updateQuantity, clearCart } from '@/lib/cart-slice'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import CheckoutModal from '@/components/checkout-modal'

export default function CartPage() {
  const dispatch = useDispatch()
  const { items, total } = useSelector((state: RootState) => state.cart)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const handleCheckoutComplete = () => {
    setIsCheckoutOpen(false)
    dispatch(clearCart())
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>
        <Card className="p-12 text-center border-border">
          <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
          <Button variant="outline">Continue Shopping</Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <Card key={item.id} className="p-6 border-border flex gap-6">
              <div className="w-24 h-24 bg-muted rounded relative flex-shrink-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">${item.price}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))
                      }
                      variant="outline"
                      size="sm"
                    >
                      −
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                      }
                      variant="outline"
                      size="sm"
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    variant="destructive"
                    size="sm"
                    className="ml-auto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div>
          <Card className="p-6 border-border sticky top-24">
            <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between text-xl font-bold text-foreground">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-primary hover:bg-primary/90 mb-3"
            >
              Proceed to Checkout
            </Button>
            <Button
              onClick={() => dispatch(clearCart())}
              variant="outline"
              className="w-full"
            >
              Clear Cart
            </Button>
          </Card>
        </div>
      </div>

      {/* Checkout Modal Component */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        total={total}
        onClose={() => setIsCheckoutOpen(false)}
        onSubmit={handleCheckoutComplete}
      />
    </div>
  )
}
