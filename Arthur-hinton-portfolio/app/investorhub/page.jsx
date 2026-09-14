import PageShell, {
  BrutalButton,
  Body,
  Eyebrow,
  Lede,
  NumberedList,
  Rule,
} from "../components/PageShell";

export const metadata = {
  title: "InvestorHub — Arthur Hinton",
  description:
    "What InvestorHub does, why digitising investor relations matters, and what I work on there in Growth.",
};

const problem = [
  {
    title: "A listed company usually doesn't know who owns it",
    body: "Shares are held through brokers and custodians, so the register a company receives is a list of holdings, not a list of relationships. Most boards can tell you how many retail shareholders they have and almost nothing about who those people are or what they care about.",
  },
  {
    title: "So communication gets outsourced",
    body: "The traditional fix is intermediaries — IR advisory firms, brokers, roadshows. That works for the institutional end of the register. It does very little for the thousands of retail holders who collectively move liquidity.",
  },
  {
    title: "Which means the retail base is flown blind",
    body: "Announcements go out to the market and the company has no reliable way to know who read them, who cared, or who bought. Every campaign is judged on share price and hope.",
  },
];

const whatItDoes = [
  {
    title: "Communication",
    body: "Investor hubs and company website tools, announcements, and webinars — the owned channels a listed company uses to talk to its shareholders directly instead of through a middle layer.",
  },
  {
    title: "Data and insight",
    body: "Registry analytics and reporting that connect what a company communicates to what actually happens on its register, so IR activity can finally be measured rather than assumed.",
  },
];

export default function InvestorHub() {
  return (
    <PageShell
      current="InvestorHub"
      ticker={[
        "B2B SaaS",
        "Investor Relations",
        "ASX + LSE",
        "Direct To Investor",
        "Growth",
      ]}
    >
      <Eyebrow index={2}>InvestorHub</Eyebrow>

      <h1 className="font-mono text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-[0.92] text-white mb-7">
        Digitising
        <br />
        investor
        <br />
        <span className="text-acid">relations.</span>
      </h1>

      <div className="space-y-5 mb-10">
        <Lede>
          InvestorHub is a B2B SaaS platform that lets listed companies own the
          relationship with their investors — reaching the entire share register
          digitally, at scale, without an intermediary sitting in the middle.
        </Lede>
        <Body>
          I work in Growth there. The short version of why the company exists: a
          listed company has thousands of people who own a piece of it and almost no
          direct way to speak to them. InvestorHub closes that gap, and then makes
          the result measurable.
        </Body>
      </div>

      <div className="flex flex-wrap gap-3 mb-16">
        <BrutalButton href="https://investorhub.com" external primary>
          investorhub.com ↗
        </BrutalButton>
        <BrutalButton href="/looking-for">What I&apos;m looking for →</BrutalButton>
      </div>

      <section className="mb-16">
        <Rule>The problem</Rule>
        <NumberedList items={problem} />
      </section>

      <section className="mb-16">
        <Rule>What the platform does</Rule>
        <NumberedList items={whatItDoes} />
        <div className="border-2 border-acid/40 bg-acid/[0.04] p-5 mt-7">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-acid mb-2.5">
            // The distinction that matters
          </p>
          <p className="text-sm text-white/65 leading-relaxed">
            The customer is the listed company, but the value is only created when
            retail investors actually engage. It is a B2B product with a B2C success
            condition, which changes almost every growth decision downstream — what
            you sell, what you measure, and what churn really tells you.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <Rule>Where it operates</Rule>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { k: "Australia", v: "Primary market — ASX-listed companies" },
            { k: "United Kingdom", v: "Second market — London Stock Exchange" },
            { k: "Sector depth", v: "Biotech, healthcare, resources and mining" },
          ].map(({ k, v }) => (
            <div key={k} className="border-2 border-white/25 p-5">
              <p className="font-mono text-sm font-bold uppercase tracking-wide text-white mb-2">
                {k}
              </p>
              <p className="text-sm text-white/55 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Rule>Why I joined</Rule>
        <div className="space-y-5">
          <Body>
            Most growth roles hand you a channel. This one hands you a category that
            is still being defined. Digitising investor relations is not a better
            version of something companies already do — for most of them it is a
            capability they have never had, which makes the work as much about
            explaining the category as selling the product.
          </Body>
          <Body>
            That mix — positioning, go-to-market and the analytics to prove any of it
            worked — is exactly the kind of problem I wanted to be closer to.
          </Body>
        </div>
      </section>

      <section>
        <Rule>More</Rule>
        <div className="flex flex-wrap gap-3">
          <BrutalButton href="https://investorhub.com" external primary>
            InvestorHub ↗
          </BrutalButton>
          <BrutalButton href="/empty-labs">Empty Labs →</BrutalButton>
          <BrutalButton href="/open-source">Open source →</BrutalButton>
        </div>
      </section>
    </PageShell>
  );
}
