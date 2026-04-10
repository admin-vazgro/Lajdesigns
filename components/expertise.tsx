const services = [
  {
    number: "01",
    title: "Residential Design",
    description: "From intimate apartments to sprawling villas, we design homes that reflect the lives of those who inhabit them — balancing comfort, beauty, and function."
  },
  {
    number: "02",
    title: "Commercial Design",
    description: "Office spaces, retail environments, and corporate interiors designed to foster productivity, reinforce brand identity, and create lasting impressions."
  },
  {
    number: "03",
    title: "Hospitality Design",
    description: "Hotels, restaurants, and resorts conceived to deliver exceptional guest experiences through thoughtful spatial narrative and refined material choices."
  },
  {
    number: "04",
    title: "Religious Architecture",
    description: "Sacred spaces designed with reverence — blending tradition with contemporary expression to create environments of reflection, community, and meaning."
  },
  {
    number: "05",
    title: "Educational Spaces",
    description: "Learning environments that inspire curiosity and collaboration — from classrooms and libraries to campus master plans that grow with institutions."
  },
  {
    number: "06",
    title: "Interior Design",
    description: "Transforming interior spaces with meticulous attention to materials, lighting, and spatial flow — creating environments that feel both refined and lived-in."
  }
]

export function Expertise() {
  return (
    <section id="services" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 lg:sticky lg:top-32">
              Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We bring the same rigour and creative depth to every sector — tailoring our approach to the unique demands of each project type.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="py-10 border-b border-border first:border-t"
                >
                  <div className="flex gap-8">
                    <span className="text-sm text-muted-foreground font-mono mt-1 shrink-0">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-normal tracking-tight mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
