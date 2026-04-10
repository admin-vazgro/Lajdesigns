'use client'

import { useState } from 'react'

const projects = [
  {
    title: "Commercial Complex",
    location: "Kochi, Kerala",
    category: "Commercial",
    image: "/portfolio/commercial/commercial-1.jpg"
  },
  {
    title: "Modern Residence",
    location: "Kerala",
    category: "Residential",
    image: "/portfolio/residential/residential-1.jpg"
  },
  {
    title: "Educational Campus",
    location: "Kerala",
    category: "Educational",
    image: "/portfolio/educational/educational-1.jpg"
  },
  {
    title: "Sacred Architecture",
    location: "Kerala",
    category: "Religious",
    image: "/portfolio/religious/religious-1.jpg"
  },
  {
    title: "Hospitality Project",
    location: "Kerala",
    category: "Hospitality",
    image: "/portfolio/hospitality/hospitality-1.jpg"
  },
  {
    title: "Interior Design",
    location: "Private Client",
    category: "Interior",
    image: "/portfolio/interior/interior-1.jpg"
  },
  {
    title: "Office Building",
    location: "Kochi, Kerala",
    category: "Commercial",
    image: "/portfolio/commercial/commercial-2.jpg"
  },
  {
    title: "Family Home",
    location: "Kerala",
    category: "Residential",
    image: "/portfolio/residential/residential-2.jpg"
  },
  {
    title: "Temple Design",
    location: "Kerala",
    category: "Religious",
    image: "/portfolio/religious/religious-2.jpg"
  },
  {
    title: "Living Space",
    location: "Private Client",
    category: "Interior",
    image: "/portfolio/interior/interior-2.jpg"
  },
  {
    title: "Commercial Space",
    location: "Kochi, Kerala",
    category: "Commercial",
    image: "/portfolio/commercial/commercial-3.jpg"
  },
  {
    title: "Villa",
    location: "Kerala",
    category: "Residential",
    image: "/portfolio/residential/residential-3.jpg"
  },
]

const categories = ["All", "Commercial", "Residential", "Educational", "Religious", "Hospitality", "Interior"]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="work" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects across commercial, residential, educational, religious, hospitality, and interior design sectors.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-6 mb-16 pb-6 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === cat
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="block h-px w-full bg-foreground mt-1" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {filteredProjects.map((project, index) => (
            <article key={`${project.category}-${index}`} className="group cursor-pointer">
              <div className="aspect-[3/2] bg-muted mb-6 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-normal tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
