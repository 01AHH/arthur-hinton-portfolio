"use client";

import { useState, useEffect } from "react";

const articles = [
  {
    title: "AI Didn't Make You More Productive, It Made You More Scattered",
    type: "Key Topic",
    date: "2026",
    url: "https://arthurhinton.notion.site/AI-Didn-t-Make-You-More-Productive-It-Made-You-More-Scattered-342312de060380389043faf3b9de84fe",
    description:
      "Why AI tools often fragment your focus instead of sharpening it, and how to use them without losing clarity.",
  },
  {
    title: "Structures of Team as You Scale",
    type: "Key Topic",
    date: "2026",
    url: "https://arthurhinton.notion.site/Structures-of-team-as-you-scale-257312de0603805eab5cc1b781de350f",
    description:
      "How the structure of a team needs to evolve as a company grows, and why what works at ten people breaks at fifty.",
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
    title: "The Danger of Drifting and the Power of a North Star",
    type: "Key Topic",
    date: "2025",
    url: "https://arthurhinton.notion.site/the-danger-of-drifting-and-the-power-of-a-north-star",
    description:
      "Why having a guiding north star is essential to avoiding complacency and building a life with direction and purpose.",
  },
  {
    title: "Career Capital",
    type: "Key Topic",
    date: "2025",
    url: "https://arthurhinton.notion.site/Career-Capital-22c312de0603802aae96e72576be1277",
    description:
      "The skills, relationships, and reputation you build over time are your real assets. How to accumulate them deliberately.",
  },
  {
    title: "What Sets Humans Apart from AI?",
    type: "Key Topic",
    date: "2025",
    url: "https://arthurhinton.notion.site/what-sets-individuals-apart",
    description:
      "As AI gets better at almost everything, the question of what makes humans irreplaceable becomes more important than ever.",
  },
  {
    title: "2024: A Year for Learning",
    type: "Personal",
    date: "Jan 2025",
    url: "https://arthurhinton.notion.site/2024-A-year-for-learning-16a312de06038034ab24ed2b46a178d2",
    description:
      "A look back at a year defined by new challenges, hard lessons, and building the foundations for what came next.",
  },
  {
    title: "2023: What a Year, a Pivotal Shift",
    type: "Personal",
    date: "Jan 2024",
    url: "https://arthurhinton.notion.site/2023-What-a-year-a-pivotal-shift-16a312de060380e1acd4ebe096f336a0",
    description:
      "The year everything changed. A reflection on the decisions, pivots, and moments that set a new direction.",
  },
];

const experience = [
  {
    company: "Slice Pay",
    url: "https://slicepay.travel",
    role: "Growth & Operations",
    bullets: [
      "B2B partnership growth and merchant acquisition strategy",
      "Built internal product tooling to streamline merchant onboarding",
      "Data analysis to shape business decisions and risk-based growth models",
      "Worked on COGS/revenue optimisation to improve gross profit margins",
    ],
  },
  {
    company: "Paylater Travel",
    url: "https://paylatertravel.com.au",
    role: "Growth Specialist",
    bullets: [
      "Built the referral engine from scratch, scaled from 0 to 200+ referrals/month",
      "Developed the creative engine to feed both organic and paid channels",
      "Ran and scaled the Meta paid acquisition engine",
      "Built out the influencer engine as part of the referral and creative mix",
    ],
  },
];

const companies = [
  {
    name: "Empty Labs",
    url: "https://emptylabs.co/",
    description:
      "Growing multiple AI-enabled businesses across B2B and B2C to test and build growth skills at speed.",
  },
  {
    name: "Ascendify",
    url: "https://www.linkedin.com/in/arthur-hinton/",
    description:
      "B2B startup outsourcing agency helping companies hire and manage affordable offshore teams.",
  },
  {
    name: "ActiveMate",
    url: "https://www.linkedin.com/in/arthur-hinton/",
    description: "B2C personalised running coaching app.",
  },
];

const podcasts = [
  {
    title: "Building Resilience: A Young Entrepreneur's Path from Early Ventures to Startup Success",
    show: "Fail Wisdom Podcast",
    date: "Nov 2024",
    url: "https://open.spotify.com/episode/5anBXS1ul7Hyw4U6jnMaUh",
    description:
      "Covering the journey from launching a social media project at 14 through multiple startups, with practical advice on resilience, cold calling, validating products, and managing costs.",
  },
  {
    title: "episode one w/ Arthur Hinton",
    show: "ABCD",
    date: "2024",
    url: "https://open.spotify.com/episode/7EQ4zdrQ02mw0wwPPWKnjB",
    description:
      "Discussing the startup journey, the creation of ActiveMate, and how to manage a demanding schedule across multiple professional commitments.",
  },
  {
    title: "#15 - Arthur Hinton ('19)",
    show: "The OSCA Podcast",
    date: "2024",
    url: "https://open.spotify.com/episode/7qW58dsunWY395DqYpTHhQ",
    description:
      "Running 100km from Melbourne to Portsea to raise awareness and funds for the Australian Alopecia Areata Foundation, and what it means to build resilience through endurance.",
  },
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "experience", "writing", "podcasts", "contact"];
      for (const id of [...sections].reverse()) {
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
    { href: "/looking-for", label: "Looking For", external: true },
    { href: "#experience", label: "Experience" },
    { href: "#writing", label: "Writing" },
    { href: "#podcasts", label: "Podcasts" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="font-semibold text-sm tracking-tight text-gray-900">
            Arthur Hinton
          </a>

          {/* Desktop nav */}
          <div className="hidden sm:flex gap-7">
            {navLinks.map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  !external && activeSection === href.replace("#", "")
                    ? "text-gray-900 font-medium"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
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

      <main className="max-w-2xl mx-auto px-5 sm:px-6">
        {/* HERO */}
        <section id="home" className="pt-28 sm:pt-36 pb-16 sm:pb-24">
          <img
            src="/profile.jpg"
            alt="Arthur Hinton"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-6 sm:mb-8 grayscale"
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">
            Growth · Operations · Builder
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4 sm:mb-5">
            Arthur Hinton
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mb-3">
            I build growth engines, find new revenue streams, and ship products
            that compound. I've scaled referral channels from zero, built paid
            acquisition machines, and founded companies from scratch.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-lg mb-8 sm:mb-10">
            Currently looking for a senior growth role where I can do all three.
          </p>
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
            <a
              href="/looking-for"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 border border-gray-200 text-sm rounded-full hover:border-gray-400 transition-colors text-gray-700"
            >
              What I'm looking for →
            </a>
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* EXPERIENCE */}
        <section id="experience" className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Experience
          </p>
          <div className="space-y-10 sm:space-y-12">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 gap-0.5 sm:gap-4">
                  <h3 className="font-semibold text-gray-900">
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                      {job.company}
                    </a>
                  </h3>
                  <span className="text-sm text-gray-400">{job.role}</span>
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

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 gap-0.5 sm:gap-4">
                <h3 className="font-semibold text-gray-900">Founder</h3>
                <span className="text-sm text-gray-400">Multiple companies</span>
              </div>
              <div className="space-y-4">
                {companies.map((c) => (
                  <div key={c.name} className="text-sm">
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-800 hover:text-gray-500 transition-colors">
                      {c.name}
                    </a>
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
        <section id="writing" className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Writing
          </p>
          <div className="space-y-7 sm:space-y-8">
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex flex-col sm:flex-row sm:gap-4 sm:justify-between sm:items-start">
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900 group-hover:text-gray-500 transition-colors leading-snug mb-1.5">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex sm:flex-col sm:text-right gap-2 sm:gap-0 mt-2 sm:mt-0 shrink-0">
                    <p className="text-xs text-gray-400 whitespace-nowrap">{article.date}</p>
                    <p className="text-xs text-gray-300 sm:mt-0.5">{article.type}</p>
                  </div>
                </div>
                <div className="mt-5 h-px bg-gray-100" />
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* PODCASTS & PR */}
        <section id="podcasts" className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Podcasts & PR
          </p>
          <div className="space-y-7 sm:space-y-8">
            {podcasts.map((ep, i) => (
              <a
                key={i}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex flex-col sm:flex-row sm:gap-4 sm:justify-between sm:items-start">
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900 group-hover:text-gray-500 transition-colors leading-snug mb-1.5">
                      {ep.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {ep.description}
                    </p>
                  </div>
                  <div className="flex sm:flex-col sm:text-right gap-2 sm:gap-0 mt-2 sm:mt-0 shrink-0">
                    <p className="text-xs text-gray-400 whitespace-nowrap">{ep.date}</p>
                    <p className="text-xs text-gray-300 sm:mt-0.5">{ep.show}</p>
                  </div>
                </div>
                <div className="mt-5 h-px bg-gray-100" />
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* CONTACT */}
        <section id="contact" className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Contact
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
            I'm currently open to new opportunities. If you're building
            something that needs to grow across channels, products and revenue, I'd
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
        <div className="max-w-2xl mx-auto px-5 sm:px-6 flex justify-between items-center">
          <span className="text-xs text-gray-400">Arthur Hinton</span>
          <span className="text-xs text-gray-300">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
