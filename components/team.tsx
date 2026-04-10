const values = [
  {
    title: "Intentional Design",
    description: "Every decision is deliberate. We question assumptions and pursue solutions that are both elegant and enduring."
  },
  {
    title: "Client Partnership",
    description: "We listen deeply before we draw. Understanding how our clients live, work, and move is the foundation of every project."
  },
  {
    title: "Craft & Detail",
    description: "The quality of a space is felt in its details. We hold ourselves to exacting standards at every scale."
  }
]

export function Team() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">

        {/* About intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              A studio built on design with purpose
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to LAJ Designs, where we craft unique architectural experiences since 1987. Based in Kochi, Kerala, our legacy of over three decades is built on a bespoke approach to each project — from graceful landscaping to intricate interior details.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expertise spans a diverse range of buildings, encompassing residential, commercial, educational, religious, hospitality, and interior spaces. At LAJ Designs, we don't just create structures; we create experiences.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12">Our Values</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {values.map((value, index) => (
            <div key={index}>
              <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
              <h3 className="text-xl font-normal tracking-tight mt-4 mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
