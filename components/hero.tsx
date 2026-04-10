export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Architecture & Interior Design Studio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-balance mb-8">
              Design that shapes how you live
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
              We create considered spaces — residential, commercial, and beyond — where form follows feeling and every detail serves a purpose.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#work"
                className="text-sm uppercase tracking-wider border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                View Our Work
              </a>
              <a href="#contact" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Get in Touch →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img
                src="/hero-banner.jpg"
                alt="LAJ Designs — Architecture & Interior Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 mt-20 md:mt-28 pt-10 border-t border-border">
          <div>
            <p className="text-4xl md:text-5xl font-light tracking-tight">37+</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Years of Practice</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-light tracking-tight">200+</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Projects Delivered</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-light tracking-tight">6</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Design Sectors</p>
          </div>
        </div>
      </div>
    </section>
  )
}
