'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/lib/cart-slice'
import { plants } from '@/lib/plants-data'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

interface ProductListingPageProps {
  setCurrentPage: (page: 'cart') => void
}

export default function ProductListingPage({ setCurrentPage }: ProductListingPageProps) {
  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(plants.map(p => p.category)))
  const filteredPlants = selectedCategory
    ? plants.filter(p => p.category === selectedCategory)
    : plants

  const handleAddToCart = (plant: typeof plants[0]) => {
    dispatch(addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image,
      quantity: 1,
    }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-8">Shop Our Plants</h1>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        <Button
          onClick={() => setSelectedCategory(null)}
          variant={selectedCategory === null ? 'default' : 'outline'}
        >
          All Plants
        </Button>
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'default' : 'outline'}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map(plant => (
          <Card key={plant.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-muted relative">
              <Image
                src={plant.image || "/placeholder.svg"}
                alt={plant.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-2">
                <p className="text-xs text-primary font-medium uppercase">{plant.category}</p>
                <h3 className="text-xl font-semibold text-foreground">{plant.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{plant.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-foreground">${plant.price}</p>
                <Button
                  onClick={() => handleAddToCart(plant)}
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
