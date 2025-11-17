'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Leaf, Droplet, Sun } from 'lucide-react'

interface LandingPageProps {
  setCurrentPage: (page: 'products' | 'cart') => void
}

export default function LandingPage({ setCurrentPage }: LandingPageProps) {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Bring Nature Into Your Home
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Discover our curated collection of premium houseplants. Each plant comes with care instructions and is selected for quality and beauty.
              </p>
              <Button
                onClick={() => setCurrentPage('products')}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Explore Plants
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-green-300 to-emerald-400 rounded-lg flex items-center justify-center">
                <Leaf className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose GreenNest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 border-border">
            <Sun className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Quality Assured</h3>
            <p className="text-muted-foreground">
              Every plant is carefully selected and inspected to ensure it arrives healthy and vibrant.
            </p>
          </Card>
          <Card className="p-8 border-border">
            <Droplet className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Expert Care Guides</h3>
            <p className="text-muted-foreground">
              Comprehensive care instructions included with every plant purchase for your success.
            </p>
          </Card>
          <Card className="p-8 border-border">
            <Leaf className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Free Shipping</h3>
            <p className="text-muted-foreground">
              Enjoy free shipping on all orders over $50. Fast and secure delivery to your door.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Plant Collection?</h2>
          <Button
            onClick={() => setCurrentPage('products')}
            size="lg"
            variant="secondary"
          >
            Shop Now
          </Button>
        </div>
      </section>
    </div>
  )
}
