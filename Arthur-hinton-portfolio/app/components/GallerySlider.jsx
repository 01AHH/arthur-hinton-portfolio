"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

/* ----------------------------- Content data ----------------------------- */

const articles = [
  {
    title: "Does Work Have A Broken Incentive Problem?",
    type: "Key Topic",
    date: "2026",
    url: "https://arthurhinton.notion.site/Does-Work-Have-A-Broken-Incentive-Problem-344312de0603809b8c99ddb015cf1a9b",
    description:
      "Why hourly pay quietly rewards mediocrity, and what leaders should redesign before morale drops.",
  },
  {
    title: "AI Didn't Make You More Productive. It Made You More Scattered.",
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
    title:
      "Building Resilience: A Young Entrepreneur's Path from Early Ventures to Startup Success",
    show: "Fail Wisdom Podcast",
    date: "Nov 2024",
    url: "https://open.spotify.com/episode/5anBXS1ul7Hyw4U6jnMaUh",
    description:
      "The journey from launching a social media project at 14 through multiple startups, with advice on resilience, cold calling, and validating products.",
  },
  {
    title: "episode one w/ Arthur Hinton",
    show: "ABCD",
    date: "2024",
    url: "https://open.spotify.com/episode/7EQ4zdrQ02mw0wwPPWKnjB",
    description:
      "Discussing the startup journey, the creation of ActiveMate, and how to manage a demanding schedule across multiple commitments.",
  },
  {
    title: "#15 - Arthur Hinton ('19)",
    show: "The OSCA Podcast",
    date: "2024",
    url: "https://open.spotify.com/episode/7qW58dsunWY395DqYpTHhQ",
    description:
      "Running 100km from Melbourne to Portsea to raise awareness for the Australian Alopecia Areata Foundation, and building resilience through endurance.",
  },
];

const slides = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "podcasts", label: "Podcasts" },
  { id: "looking", label: "Looking" },
  { id: "contact", label: "Contact" },
];

/* ----------------------------- Micro components -------------------------- */

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*<>";

function ScrambleText({ text, className }) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    let frame = 0;
    let raf;
    const run = () => {
      const revealed = Math.floor(frame / 2.5);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          out += " ";
        } else if (i < revealed) {
          out += text[i];
        } else {
          out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      setDisplay(out);
      frame++;
      if (revealed <= text.length) raf = requestAnimationFrame(run);
      else setDisplay(text);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [text]);
  return <span className={className}>{display}</span>;
}

function Marquee({ items }) {
  const content = items.join("  //  ") + "  //  ";
  return (
    <div className="overflow-hidden border-y-2 border-white bg-acid">
      <div className="marquee-track py-1.5">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black px-2"
          >
            {content.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}

const BrutalButton = ({ href, children, external, primary }) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    data-hover
    className={`inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-[0.15em] border-2 transition-all duration-150
      ${
        primary
          ? "bg-acid text-black border-acid shadow-[4px_4px_0_0_#fff] hover:shadow-[0_0_0_0_#fff]"
          : "bg-transparent text-white border-white shadow-[4px_4px_0_0_#c8ff00] hover:bg-acid hover:text-black hover:border-acid hover:shadow-[0_0_0_0_#c8ff00]"
      }
      hover:translate-x-1 hover:translate-y-1`}
  >
    {children}
  </a>
);

const SectionLabel = ({ index, children }) => (
  <div className="inline-flex items-center gap-2 mb-6 border-2 border-acid px-3 py-1">
    <span className="font-mono text-[11px] font-bold text-acid">
      {String(index + 1).padStart(2, "0")}
    </span>
    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-acid">
      // {children}
    </span>
  </div>
);

const Panel = ({ children }) => (
  <div className="w-full max-w-2xl border-2 border-white bg-ink/85 backdrop-blur-sm p-6 sm:p-9 shadow-brutal">
    {children}
  </div>
);

/* ------------------------------ Slide bodies ----------------------------- */

function IntroSlide() {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-7 inline-block border-2 border-acid p-1 shadow-brutal-sm">
        <img
          src="/profile.jpg"
          alt="Arthur Hinton"
          className="w-20 h-20 object-cover grayscale contrast-125"
        />
      </div>
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-acid mb-5">
        Growth // Operations // Builder
      </p>
      <h1 className="font-mono text-5xl sm:text-7xl font-extrabold tracking-tight uppercase leading-[0.92] mb-6 text-white">
        <ScrambleText text="ARTHUR" />
        <br />
        <ScrambleText text="HINTON" />
      </h1>
      <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-3">
        I build growth engines, find new revenue streams, and ship products that
        compound. I've scaled referral channels from zero, built paid
        acquisition machines, and founded companies from scratch.
      </p>
      <p className="font-mono text-xs text-white/40 leading-relaxed max-w-xl mb-8">
        &gt; Currently looking for a senior growth role where I can do all three.
      </p>
      <div className="flex flex-wrap gap-3">
        <BrutalButton href="https://www.linkedin.com/in/arthur-hinton/" external primary>
          LinkedIn ↗
        </BrutalButton>
        <BrutalButton href="mailto:arthur.h.hinton@gmail.com">Get in touch</BrutalButton>
        <BrutalButton href="/looking-for">What I'm looking for →</BrutalButton>
      </div>
      <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
        [ Drag · Scroll · ← → ] to navigate
      </p>
    </div>
  );
}

function ExperienceSlide() {
  return (
    <Panel>
      <SectionLabel index={1}>Experience</SectionLabel>
      <div className="space-y-7 max-h-[54vh] overflow-y-auto no-scrollbar pr-1">
        {experience.map((job) => (
          <div key={job.company}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2.5 gap-0.5 sm:gap-4">
              <h3 className="font-mono font-bold uppercase tracking-wide text-white">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  className="hover:text-acid transition-colors"
                >
                  {job.company}
                </a>
              </h3>
              <span className="font-mono text-xs uppercase tracking-wide text-white/40">
                {job.role}
              </span>
            </div>
            <ul className="space-y-1.5">
              {job.bullets.map((b, i) => (
                <li key={i} className="text-sm text-white/65 flex gap-2">
                  <span className="text-acid shrink-0 mt-0.5">&gt;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2.5 gap-0.5 sm:gap-4">
            <h3 className="font-mono font-bold uppercase tracking-wide text-white">Founder</h3>
            <span className="font-mono text-xs uppercase tracking-wide text-white/40">
              Multiple companies
            </span>
          </div>
          <div className="space-y-3">
            {companies.map((c) => (
              <div key={c.name} className="text-sm">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  className="font-mono font-bold text-white hover:text-acid transition-colors"
                >
                  {c.name}
                </a>
                <span className="text-acid mx-2">//</span>
                <span className="text-white/60">{c.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

function CardListSlide({ index, label, items, secondaryKey }) {
  return (
    <Panel>
      <SectionLabel index={index}>{label}</SectionLabel>
      <div className="space-y-4 max-h-[54vh] overflow-y-auto no-scrollbar pr-1">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="group block border-2 border-white/25 hover:border-acid bg-transparent hover:bg-acid/[0.04] transition-colors p-4"
          >
            <div className="flex flex-col sm:flex-row sm:gap-4 sm:justify-between sm:items-start">
              <div className="min-w-0">
                <h3 className="font-mono font-bold text-sm uppercase tracking-wide text-white group-hover:text-acid transition-colors leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex sm:flex-col sm:text-right gap-2 sm:gap-0 mt-2 sm:mt-0 shrink-0">
                <p className="font-mono text-[11px] text-acid whitespace-nowrap">
                  {item.date}
                </p>
                <p className="font-mono text-[11px] uppercase text-white/30 sm:mt-0.5">
                  {item[secondaryKey]}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Panel>
  );
}

function LookingSlide() {
  return (
    <Panel>
      <SectionLabel index={4}>What I'm Looking For</SectionLabel>
      <h2 className="font-mono text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
        The best people<br />in the world.
      </h2>
      <div className="space-y-4 text-white/70 leading-relaxed max-h-[38vh] overflow-y-auto no-scrollbar pr-1">
        <p>
          I'm looking to work with the best product and growth people in the
          world. Not because it sounds impressive, but because it's the only
          environment where real learning happens.
        </p>
        <p>
          When you're around people who are genuinely exceptional, who think
          faster, hold higher standards, and refuse to settle, you can't stay
          where you are. The bar rises. Comfort becomes impossible.
        </p>
        <p>
          That's the environment I'm looking for. One where everyone is trying
          to become their best self, and where that expectation is shared
          without it needing to be said.
        </p>
      </div>
      <div className="mt-7">
        <BrutalButton href="/looking-for" primary>
          Read the full piece →
        </BrutalButton>
      </div>
    </Panel>
  );
}

function ContactSlide() {
  return (
    <div className="flex flex-col items-start max-w-xl">
      <SectionLabel index={5}>Contact</SectionLabel>
      <h2 className="font-mono text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-6 leading-[0.95]">
        Let's build<br />
        <span className="text-acid">something.</span>
      </h2>
      <p className="text-white/70 leading-relaxed mb-9">
        I'm currently open to new opportunities. If you're building something
        that needs to grow across channels, products and revenue, I'd love to
        hear about it.
      </p>
      <div className="flex flex-col gap-3 font-mono text-sm font-bold uppercase tracking-wide">
        <a
          href="mailto:arthur.h.hinton@gmail.com"
          data-hover
          className="text-white hover:text-acid transition-colors w-fit"
        >
          &gt; arthur.h.hinton@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/arthur-hinton/"
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          className="text-white hover:text-acid transition-colors w-fit"
        >
          &gt; linkedin.com/in/arthur-hinton
        </a>
      </div>
    </div>
  );
}

const slideBodies = [
  <IntroSlide key="intro" />,
  <ExperienceSlide key="experience" />,
  <CardListSlide key="writing" index={2} label="Writing" items={articles} secondaryKey="type" />,
  <CardListSlide key="podcasts" index={3} label="Podcasts & PR" items={podcasts} secondaryKey="show" />,
  <LookingSlide key="looking" />,
  <ContactSlide key="contact" />,
];

/* ------------------------------- Slider --------------------------------- */

export default function GallerySlider() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const wheelLock = useRef(false);
  const containerRef = useRef(null);

  const count = slides.length;

  const goTo = useCallback(
    (i) => setIndex(Math.max(0, Math.min(count - 1, i))),
    [count]
  );

  useEffect(() => {
    const measure = () => setWidth(window.innerWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!width) return;
    const controls = animate(x, -index * width, {
      type: "spring",
      stiffness: 280,
      damping: 32,
      mass: 0.9,
    });
    return controls.stop;
  }, [index, width, x]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(index + 1);
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(index - 1);
      else if (e.key === "Home") goTo(0);
      else if (e.key === "End") goTo(count - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goTo, count]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 12) return;
      e.preventDefault();
      if (wheelLock.current) return;
      wheelLock.current = true;
      goTo(index + (delta > 0 ? 1 : -1));
      setTimeout(() => (wheelLock.current = false), 600);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [index, goTo]);

  const handleDragEnd = (_e, info) => {
    const threshold = width * 0.18;
    const { offset, velocity } = info;
    if (offset.x < -threshold || velocity.x < -500) goTo(index + 1);
    else if (offset.x > threshold || velocity.x > 500) goTo(index - 1);
    else goTo(index);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-ink text-white select-none font-sans"
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 dot-grid" />

      {/* Corner registration marks */}
      <span className="absolute top-3 left-3 text-acid font-mono text-sm z-20">+</span>
      <span className="absolute top-3 right-3 text-acid font-mono text-sm z-20">+</span>
      <span className="absolute bottom-3 left-3 text-acid font-mono text-sm z-20">+</span>
      <span className="absolute bottom-3 right-3 text-acid font-mono text-sm z-20">+</span>

      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 z-30 border-b-2 border-white bg-ink/80 backdrop-blur">
        <div className="flex items-center justify-between px-6 sm:px-10 py-3.5">
          <button
            onClick={() => goTo(0)}
            data-hover
            className="font-mono font-extrabold text-sm uppercase tracking-tight text-white"
          >
            ARTHUR_HINTON<span className="text-acid">.</span>
          </button>
          <nav className="hidden sm:flex items-center gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                data-hover
                className={`font-mono text-[11px] font-bold uppercase tracking-widest px-2 py-1 transition-colors ${
                  i === index
                    ? "bg-acid text-black"
                    : "text-white/45 hover:text-acid"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
        <Marquee
          items={[
            "Growth Engines",
            "Referral 0→200/mo",
            "Paid Acquisition",
            "New Revenue Streams",
            "Product-Led Growth",
            "Founder",
          ]}
        />
      </header>

      {/* Sliding track */}
      <motion.div
        className="absolute inset-0 flex"
        style={{ x, width: `${count * 100}vw` }}
        drag="x"
        dragConstraints={{ left: -(count - 1) * width, right: 0 }}
        dragElastic={0.12}
        onDragEnd={handleDragEnd}
      >
        {slideBodies.map((body, i) => (
          <motion.section
            key={i}
            style={{ width: "100vw" }}
            className="h-full shrink-0 flex items-center justify-center px-6 sm:px-12"
            animate={{ opacity: i === index ? 1 : 0.25, scale: i === index ? 1 : 0.95 }}
            transition={{ duration: 0.45 }}
          >
            <div className="w-full max-w-2xl pt-28 pb-24">{body}</div>
          </motion.section>
        ))}
      </motion.div>

      {/* Prev / Next */}
      <button
        onClick={() => goTo(index - 1)}
        disabled={index === 0}
        data-hover
        aria-label="Previous"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 border-2 border-white bg-ink text-white font-mono text-lg shadow-brutal-sm hover:bg-acid hover:text-black hover:border-acid transition disabled:opacity-20 disabled:pointer-events-none"
      >
        ←
      </button>
      <button
        onClick={() => goTo(index + 1)}
        disabled={index === count - 1}
        data-hover
        aria-label="Next"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 border-2 border-white bg-ink text-white font-mono text-lg shadow-brutal-sm hover:bg-acid hover:text-black hover:border-acid transition disabled:opacity-20 disabled:pointer-events-none"
      >
        →
      </button>

      {/* Bottom progress */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 border-t-2 border-white bg-ink/80 backdrop-blur">
        <div className="flex items-center justify-between px-6 sm:px-10 py-3.5">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                data-hover
                aria-label={`Go to ${s.label}`}
                className="group py-2"
              >
                <span
                  className={`block w-6 h-3 border-2 transition-all duration-300 ${
                    i === index
                      ? "bg-acid border-acid"
                      : "border-white/40 group-hover:border-acid"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="font-mono text-xs font-bold text-white/60">
            [ <span className="text-acid">{String(index + 1).padStart(2, "0")}</span>
            {" / "}
            {String(count).padStart(2, "0")} ]
          </div>
        </div>
      </footer>
    </div>
  );
}
