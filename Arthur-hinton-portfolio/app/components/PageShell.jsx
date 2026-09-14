"use client";

import { useState } from "react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/empty-labs", label: "Empty Labs" },
  { href: "/investorhub", label: "InvestorHub" },
  { href: "/open-source", label: "Open Source" },
  { href: "/#writing", label: "Writing" },
  { href: "/looking-for", label: "Looking" },
];

/* --------------------------- Shared primitives --------------------------- */

export const BrutalButton = ({ href, children, external, primary }) => (
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

export const Eyebrow = ({ index, children }) => (
  <div className="inline-flex items-center gap-2 mb-6 border-2 border-acid px-3 py-1">
    <span className="font-mono text-[11px] font-bold text-acid">
      {String(index).padStart(2, "0")}
    </span>
    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-acid">
      // {children}
    </span>
  </div>
);

export const Rule = ({ children }) => (
  <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 border-b-2 border-white/15 pb-2 mb-6">
    {children}
  </h2>
);

export const Lede = ({ children }) => (
  <p className="text-lg sm:text-xl text-white/75 leading-relaxed">{children}</p>
);

export const Body = ({ children }) => (
  <p className="text-base text-white/60 leading-relaxed">{children}</p>
);

/* A bordered card with the signature offset shadow. */
export const Card = ({ href, title, meta, tags, children }) => {
  const inner = (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 mb-2.5">
        <h3 className="font-mono font-bold text-sm uppercase tracking-wide text-white group-hover:text-acid transition-colors">
          {title}
        </h3>
        {meta && (
          <span className="font-mono text-[11px] uppercase tracking-wide text-white/35 shrink-0">
            {meta}
          </span>
        )}
      </div>
      <p className="text-sm text-white/55 leading-relaxed">{children}</p>
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3.5">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-acid/70 border border-acid/30 px-1.5 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  );

  const className =
    "group block border-2 border-white/25 p-5 transition-all duration-150 hover:border-acid hover:bg-acid/[0.04] hover:shadow-[5px_5px_0_0_#c8ff00] hover:-translate-x-0.5 hover:-translate-y-0.5";

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" data-hover className={className}>
      {inner}
      <span className="mt-3.5 inline-block font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white/35 group-hover:text-acid transition-colors">
        {href.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
      </span>
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
};

/* Numbered list rows — used for "how I think about it" style sections. */
export const NumberedList = ({ items }) => (
  <ol className="space-y-5">
    {items.map((item, i) => (
      <li key={item.title} className="flex gap-4">
        <span className="font-mono text-[11px] font-bold text-acid pt-1 shrink-0 w-6">
          {String(i + 1).padStart(2, "0")}
        </span>
        <div>
          <h4 className="font-mono font-bold text-sm uppercase tracking-wide text-white mb-1.5">
            {item.title}
          </h4>
          <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
        </div>
      </li>
    ))}
  </ol>
);

/* -------------------------------- Shell ---------------------------------- */

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

export default function PageShell({ ticker, current, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-ink text-white font-sans">
      <div className="fixed inset-0 dot-grid pointer-events-none" />

      <span className="fixed top-3 left-3 text-acid font-mono text-sm z-40">+</span>
      <span className="fixed top-3 right-3 text-acid font-mono text-sm z-40">+</span>

      <header className="fixed top-0 left-0 right-0 z-30 border-b-2 border-white bg-ink/85 backdrop-blur">
        <div className="flex items-center justify-between px-6 sm:px-10 py-3.5">
          <a
            href="/"
            data-hover
            className="font-mono font-extrabold text-sm uppercase tracking-tight text-white"
          >
            ARTHUR_HINTON<span className="text-acid">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                data-hover
                className={`font-mono text-[11px] font-bold uppercase tracking-widest px-2 py-1 transition-colors ${
                  label === current ? "bg-acid text-black" : "text-white/45 hover:text-acid"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-hover
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden w-9 h-9 border-2 border-white flex flex-col items-center justify-center gap-1 hover:border-acid transition-colors"
          >
            <span
              className={`block w-4 h-0.5 bg-acid transition-transform duration-200 ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-acid transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-acid transition-transform duration-200 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t-2 border-white/20 px-6 py-4 flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                data-hover
                className={`font-mono text-xs font-bold uppercase tracking-widest ${
                  label === current ? "text-acid" : "text-white/50"
                }`}
              >
                &gt; {label}
              </a>
            ))}
          </div>
        )}

        <Marquee items={ticker} />
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 pt-36 sm:pt-40 pb-24">
        {children}
      </main>

      <footer className="relative z-10 border-t-2 border-white bg-ink/85 backdrop-blur">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-6 flex flex-wrap items-center justify-between gap-4">
          <a
            href="mailto:arthur.h.hinton@gmail.com"
            data-hover
            className="font-mono text-[11px] font-bold uppercase tracking-widest text-white hover:text-acid transition-colors"
          >
            &gt; arthur.h.hinton@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/arthur-hinton/"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45 hover:text-acid transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
