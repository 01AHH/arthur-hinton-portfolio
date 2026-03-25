"use client";

export default function LookingFor() {
  return (
    <div
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
      className="min-h-screen bg-white text-gray-900"
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-semibold text-sm tracking-tight text-gray-900">
            Arthur Hinton
          </a>
          <div className="flex gap-7">
            <a href="/#experience" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Experience</a>
            <a href="/#writing" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Writing</a>
            <a href="/#podcasts" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Podcasts</a>
            <a href="/#contact" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          What I'm Looking For
        </p>
        <h1 className="text-4xl font-bold tracking-tight leading-tight mb-10">
          The right growth role.
        </h1>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <div>
            <p className="text-lg mb-4">
              I want a growth role where I'm not just analysing, I'm actually making the changes. That means three things to me:
            </p>
            <div className="space-y-6 pl-5 border-l-2 border-gray-100 py-1">
              <div>
                <p className="font-medium text-gray-900 mb-1">Product-led growth.</p>
                <p className="text-sm">
                  Building new tools and features that directly impact how users onboard, activate, and expand, not just measuring what's already there.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Channel development.</p>
                <p className="text-sm">
                  Finding and scaling new acquisition channels so the business isn't reliant on a single source of growth.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">New revenue streams.</p>
                <p className="text-sm">
                  Identifying and building out entirely new ways the company can generate income outside of its core model.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Background
            </p>
            <div className="space-y-4">
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
                My north star is to become exceptional, building companies and tools that have a real impact on the world, and teaching others how to do the same.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.linkedin.com/in/arthur-hinton/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-700 transition-colors font-medium"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:arthur.h.hinton@gmail.com"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-gray-200 text-sm rounded-full hover:border-gray-400 transition-colors text-gray-700"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xs text-gray-400">Arthur Hinton</span>
          <span className="text-xs text-gray-300">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
