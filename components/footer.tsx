export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">About GreenNest</h3>
            <p className="text-sm text-muted-foreground">
              Curated houseplants and expert care tips for your indoor garden.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground">Shipping Info</a></li>
              <li><a href="#" className="hover:text-foreground">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground">Facebook</a></li>
              <li><a href="#" className="hover:text-foreground">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 GreenNest Plants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
