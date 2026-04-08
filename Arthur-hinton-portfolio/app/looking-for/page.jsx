"use client";

import { useState } from "react";

export default function LookingFor() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#experience", label: "Experience" },
    { href: "/#writing", label: "Writing" },
    { href: "/#podcasts", label: "Podcasts" },
    { href: "/#contact", label: "Contact" },
    { href: "/cv", label: "CV" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-semibold text-sm tracking-tight text-gray-900">
            Arthur Hinton
          </a>

          {/* Desktop nav */}
          <div className="hidden sm:flex gap-7">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
                {label}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-gray-700 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-gray-700 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-gray-700 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-gray-100 bg-white/95 backdrop-blur px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-1"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-2xl mx-auto px-5 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          What I'm Looking For
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-8 sm:mb-10">
          The best people in the world.
        </h1>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <div className="space-y-5 text-base sm:text-lg">
            <p>
              I'm looking to work with the best product and growth people in the world.
            </p>
            <p>
              Not because it sounds impressive. Because it's the only environment where real learning happens.
            </p>
            <p>
              When you're around people who are genuinely exceptional — who think faster, hold higher standards, and refuse to settle — you can't stay where you are. The bar rises. Comfort becomes impossible. You're either growing or you're falling behind, and that pressure is the point.
            </p>
            <p>
              I've seen what it does to a room. The best people don't just perform at a higher level themselves — they pull everyone around them up. They make mediocrity feel uncomfortable. They make you want to be better, not because anyone asked you to, but because the standard is just there, visible, every day.
            </p>
            <p>
              That's the environment I'm looking for. One where everyone is trying to become their best self, and where that expectation is shared without it needing to be said.
            </p>
            <p>
              Learning doesn't come from easy rooms. It never has.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Background
            </p>
            <div className="space-y-4 text-sm sm:text-base">
              <p>
                I started building at 14. My first business was selling drinks at school, which taught me more about pricing, cost management, and customer behaviour than most courses ever could.
              </p>
              <p>
                Since then I've co-founded a personalised running coaching app, built referral and paid acquisition engines from scratch, and spent time inside fast-moving fintech startups in growth and operations roles.
              </p>
              <p>
                At Slice Pay I worked across B2B partnership growth, internal tooling, and revenue optimisation. At Paylater Travel I owned the full growth engine: referral, paid, influencer, and creative. I scaled referral from zero to 200+ per month.
              </p>
              <p>
                Alongside that, I run Empty Labs, where I build and test AI-enabled businesses across B2B and B2C to sharpen my skills at speed.
              </p>
              <p>
                The thread through all of it is the same: I learn most when I'm operating at the edge of what I know, alongside people who are further along than I am. Every role, every project, every co-founder has taught me that. The best teachers aren't always in classrooms — they're the people next to you who hold a standard you haven't reached yet.
              </p>
              <p>
                My north star is to become exceptional — to build companies and tools that have a real impact on the world, and to do it alongside people worth learning from.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="https://www.linkedin.com/in/arthur-hinton/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-700 transition-colors font-medium"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:arthur.h.hinton@gmail.com"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 border border-gray-200 text-sm rounded-full hover:border-gray-400 transition-colors text-gray-700"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 flex justify-between items-center">
          <span className="text-xs text-gray-400">Arthur Hinton</span>
          <span className="text-xs text-gray-300">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
