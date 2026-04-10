export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-semibold tracking-widest uppercase hover:text-muted-foreground transition-colors">
              LAJ Designs
            </a>
            <nav className="hidden sm:flex items-center gap-6">
              <a href="#work" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Work
              </a>
              <a href="#services" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#about" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LAJ Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
