import { useState, useEffect } from "react";

const articles = [
  {
    title: "The Danger of Drifting and the Power of a North Star",
    type: "Key Topic",
    date: "Aug 2025",
    url: "https://arthurhinton.notion.site/The-Danger-of-Drifting-and-the-Power-of-a-North-Star-243312de06038059ab28f6abdd48d395",
    description:
      "Why having a guiding north star is essential to avoiding complacency and building a life with direction and purpose.",
  },
  {
    title: "Builders and Distributors — How to Build and Structure a Team",
    type: "Key Topic",
    date: "Dec 2025",
    url: "https://arthurhinton.notion.site/Builders-and-Distributors-2d5312de0603807f879fe1ca6088fe78",
    description:
      "Every early-stage business needs someone to build the thing and someone to sell it. Here's the framework for getting that right.",
  },
  {
    title: "Distribution & Growth Channels — Master Plan",
    type: "Learning",
    date: "Jan 2026",
    url: "https://arthurhinton.notion.site/Distribution-Growth-Channels-Master-Plan-2dd312de060380f7ab2dc58372a08aa5",
    description:
      "A comprehensive breakdown of every growth channel — when to use them, how to sequence them, and which are non-negotiable.",
  },
  {
    title: "2025: The Year To Experiment",
    type: "Personal",
    date: "Jan 2026",
    url: "https://arthurhinton.notion.site/2025-The-Year-To-Experiment-2d4312de06038086830cff5badd449cf",
    description:
      "Reflections on what 2025 taught me about building, shipping fast, and developing as a founder.",
  },
  {
    title: "Principles",
    type: "Personal",
    date: "Feb 2026",
    url: "https://arthurhinton.notion.site/Principles-1f8312de060380eab3adfaf2665e3ec9",
    description:
      "The core principles that shape how I live, work, and make decisions every day.",
  },
];

const experience = [
  {
    company: "Slice Pay",
    role: "Growth & Operations",
    bullets: [
      "B2B partnership growth and merchant acquisition strategy",
      "Built internal product tooling to strmline merchant onboarding",
      "Data analysis to shape business decisions and risk-based growth models",
      "Worked on COGS/revenue optimisation to improve gross profit margins",
    ],
  },
  {
    company: "Paylater Travel",
    role: "Growth Lead",
    bullets: [
      "Built the referral engine from scratch — scaled from 0 to 200+ referrals/month",
      "Developed the creative engine to feed both organic and paid channels",
      "Ran and scaled the Meta paid acquisition engine",
      "Built out the influencer engine as part of the referral and creative mix",
    ],
  },
];

const companies = [
  {
    name: "Empty Labs",
    description:
      "Growing multiple AI-enabled businesses across B2B and B2C to test and build growth skills at speed.",
  },
  {
    name: "Ascendify",
    description:
      "B2B startup outsourcing agency helping companies hire and manage affordable offshore teams.",
  },
  {
    name: "ActiveMate",
    description: "B2C personalised running coaching app.",
  },
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "experience", "writing", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#writing", label: "Writing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
      className="min-h-screen bg-white text-gray-900"
    >
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="font-semibold text-sm tracking-tight text-gray-900">
            Arthur Hinton
          </a>
          <div className="flex gap-7">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  activeSection === href.replace("#", "")
                    ? "text-gray-900 font-medium"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6">
        {/* HERO */}
        <section id="home" className="pt-36 pb-24">
          <img
            src="./DSC00044.JPG"
            alt="Arthur Hinton"
            className="w-20 h-20 rounded-full object-cover mb-6"
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Growth · Operations · Builder
          </p>
          <h1 className="text-4xl font-bold tracking-tight leading-tight mb-5">
            Arthur Hinton
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-3">
            I build growth engines, find new revenue streams, and ship products
            that compound. I've scaled referral channels from zero, built paid
            acquisition machines, and founded companies from scratch.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-lg mb-10">
            Currently looking for a senior growth role where I can do all three.
          </p>
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
        </section>

        <div className="border-t border-gray-100" />

        {/* ABOUT */}
        <section id="about" className="py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            What I'm Looking For
          </p>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              I want a growth role where I'm not just analysing — I'm actually
              making the changes. That means three things to me:
            </p>

            <div className="space-y-4 pl-5 border-l-2 border-gray-100 py-1">
              <div>
                <p className="font-medium text-gray-900 mb-0.5">Product-led growth.</p>
                <p className="text-sm">
                  Building new tools and features that directly impact how users onboard,
                  activate, and expand — not just measuring what's already there.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-0.5">Channel development.</p>
                <p className="text-sm">
                  Finding and scaling new acquisition channels so the business
                  isn't reliant on a single source of growth.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-0.5">New revenue streams.</p>
                <p className="text-sm">
                  Identifying and building out entirely new ways the company can
                  generate income outside of its core model.
                </p>
              </div>
            </div>

            <p>
              My north star is to become exceptional — building companies and
              tools that have a real impact on the world, and teaching others
              how to do the same.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* EXPERIENCE */}
        <section id="experience" className="py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Experience
          </p>

          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex justify-between items-baseline mb-3 gap-4">
                  <h3 className="font-semibold text-gray-900">{job.company}</h3>
                  <span className="text-sm text-gray-400 shrink-0">{job.role}</span>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-gray-300 shrink-0 mt-0.5">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Founder section */}
            <div>
              <div className="flex justify-between items-baseline mb-3 gap-4">
                <h3 className="font-semibold text-gray-900">Founder</h3>
                <span className="text-sm text-gray-400 shrink-0">Multiple companies</span>
              </div>
              <div className="space-y-4">
                {companies.map((c) => (
                  <div key={c.name} className="text-sm">
                    <span className="font-medium text-gray-800">{c.name}</span>
                    <span className="text-gray-300 mx-2">·</span>
                    <span className="text-gray-600">{c.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* WRITING */}
        <section id="writing" className="py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Writing
          </p>
          <div className="space-y-8">
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex gap-4 justify-between items-start">
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900 group-hover:text-gray-500 transition-colors leading-snug mb-1.5">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-gray-400 whitespace-nowrap">{article.date}</p>
                    <p className="text-xs text-gray-300 mt-0.5">{article.type}</p>
                  </div>
                </div>
                <div className="mt-5 h-px bg-gray-100" />
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Contact
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
            I'm currently open to new opportunities. If you're building
            something that needs to grow — channels, products, revenue — I'd
            love to hear about it.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:arthur.h.hinton@gmail.com"
              className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors w-fit"
            >
              arthur.h.hinton@gmail.com ↗
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-hinton/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors w-fit"
            >
              linkedin.com/in/arthur-hinton ↗
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xs text-gray-400">Arthur Hinton</span>
          <span className="text-xs text-gray-300">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
