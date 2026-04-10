'use client'

import { useState } from 'react'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto link with form data
    const subject = `New Enquiry from ${formState.name} — ${formState.projectType || 'General'}`
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.projectType}\n\nMessage:\n${formState.message}`
    window.location.href = `mailto:lajdesignspalarivattom@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const projectTypes = [
    'Commercial',
    'Residential',
    'Educational',
    'Religious',
    'Hospitality',
    'Interior',
    'Other',
  ]

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Let&apos;s build something together
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Whether you have a fully formed brief or just an idea — we&apos;d love to hear from you. Every great project starts with a conversation.
            </p>
          </div>
        </div>

        {/* Form + Details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Contact form */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-0">
              {/* Name field */}
              <div className="py-6 border-b border-border group">
                <label
                  htmlFor="contact-name"
                  className={`block text-xs uppercase tracking-wider mb-3 transition-colors duration-300 ${
                    focused === 'name' ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Full name"
                  className="w-full bg-transparent text-lg font-light tracking-tight placeholder:text-muted-foreground/40 focus:outline-none transition-colors"
                />
              </div>

              {/* Email field */}
              <div className="py-6 border-b border-border group">
                <label
                  htmlFor="contact-email"
                  className={`block text-xs uppercase tracking-wider mb-3 transition-colors duration-300 ${
                    focused === 'email' ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="email@example.com"
                  className="w-full bg-transparent text-lg font-light tracking-tight placeholder:text-muted-foreground/40 focus:outline-none transition-colors"
                />
              </div>

              {/* Project type */}
              <div className="py-6 border-b border-border group">
                <label
                  htmlFor="contact-project-type"
                  className={`block text-xs uppercase tracking-wider mb-3 transition-colors duration-300 ${
                    focused === 'projectType' ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Project Type
                </label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  onFocus={() => setFocused('projectType')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent text-lg font-light tracking-tight text-muted-foreground/60 focus:text-foreground focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a sector</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="py-6 border-b border-border group">
                <label
                  htmlFor="contact-message"
                  className={`block text-xs uppercase tracking-wider mb-3 transition-colors duration-300 ${
                    focused === 'message' ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent text-lg font-light tracking-tight placeholder:text-muted-foreground/40 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-10">
                <button
                  type="submit"
                  className="group/btn relative text-sm uppercase tracking-wider border border-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-300 overflow-hidden"
                >
                  <span className={`inline-block transition-all duration-300 ${submitted ? 'translate-y-[-120%] opacity-0' : ''}`}>
                    Send Enquiry
                  </span>
                  <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${submitted ? '' : 'translate-y-[120%] opacity-0'}`}>
                    Message Sent ✓
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact details sidebar */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="lg:sticky lg:top-32 space-y-12">

              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Studio
                </h3>
                <address className="not-italic text-sm leading-relaxed text-foreground/80">
                  LAJ Designs<br />
                  Palarivattom, Kochi 682025<br />
                  Kerala, India
                </address>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Email
                </h3>
                <a
                  href="mailto:lajdesignspalarivattom@gmail.com"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  lajdesignspalarivattom@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Phone
                </h3>
                <a
                  href="tel:+917012057274"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  +91 7012057274
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Follow
                </h3>
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/lajdesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/lajdesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Sectors
                </h3>
                <div className="text-sm text-foreground/80 space-y-1">
                  <p>Commercial</p>
                  <p>Residential</p>
                  <p>Educational</p>
                  <p>Religious</p>
                  <p>Hospitality</p>
                  <p>Interior</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
