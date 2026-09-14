import PageShell, {
  BrutalButton,
  Body,
  Card,
  Eyebrow,
  Lede,
  NumberedList,
  Rule,
} from "../components/PageShell";

export const metadata = {
  title: "Empty Labs — Arthur Hinton",
  description:
    "A digital product studio building and running small software and service businesses across B2B and B2C.",
};

const ventures = [
  {
    name: "Certainty Savings",
    url: "https://certaintysavings.net",
    meta: "B2B2C · Fintech",
    tags: ["Product", "Payments", "Loyalty"],
    description:
      "Lets a business offer its customers automated savings plans toward its own services, so an interested customer becomes a committed one before they ever reach checkout.",
  },
  {
    name: "A Piece of Cake",
    url: "https://apieceofcake.au",
    meta: "B2B · AI",
    tags: ["AI", "Productivity", "SaaS"],
    description:
      "Capture, organise and share meeting notes with AI-generated summaries. The pitch is unglamorous and exactly right: walk out of a meeting already looking switched on.",
  },
  {
    name: "Float Media",
    url: "https://floatmedia.com.au",
    meta: "B2B · Media",
    tags: ["Advertising", "Offline"],
    description:
      "High-density awareness advertising on the side of trucks and vans. An offline channel with genuinely cheap impressions, which makes it a useful counterweight to everything we run online.",
  },
  {
    name: "The Removalist Melbourne",
    url: "https://theremovalistmelbourne.com",
    meta: "B2C · Services",
    tags: ["Operations", "Logistics"],
    description:
      "Final-mile delivery for high-end and designer furniture, built around experience rather than price. A service business is the fastest way to learn what a customer will actually pay more for.",
  },
];

const why = [
  {
    title: "Range beats depth in one channel",
    body: "Running B2B SaaS, a consumer service, an ad product and a fintech at the same time forces the same growth question to be answered four different ways. You find out quickly which of your instincts were transferable and which were just one company's context.",
  },
  {
    title: "Ship, then decide",
    body: "Every venture is built small and put in front of real customers before it is argued about. The studio exists so that the cost of testing an idea is a weekend, not a quarter.",
  },
  {
    title: "Operating, not advising",
    body: "These are businesses with customers, invoices and churn, not case studies. The lessons stick because the consequences are real.",
  },
];

export default function EmptyLabs() {
  return (
    <PageShell
      current="Empty Labs"
      ticker={[
        "Digital Product Studio",
        "B2B + B2C",
        "Certainty Savings",
        "A Piece of Cake",
        "Float Media",
        "Ship Fast",
      ]}
    >
      <Eyebrow index={1}>Empty Labs</Eyebrow>

      <h1 className="font-mono text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-[0.92] text-white mb-7">
        A digital
        <br />
        product
        <br />
        <span className="text-acid">studio.</span>
      </h1>

      <div className="space-y-5 mb-10">
        <Lede>
          Empty Labs is where I build and run small software and service businesses
          across B2B and B2C — partly because they should stand on their own, and
          partly because owning the whole loop is the only way I know to get sharper
          at growth.
        </Lede>
        <Body>
          Each venture is a real business with real customers. Together they work as
          a testbed: a place to run pricing, positioning, acquisition and retention
          experiments across very different markets, at a speed no single company
          would ever allow.
        </Body>
      </div>

      <div className="flex flex-wrap gap-3 mb-16">
        <BrutalButton href="https://emptylabs.co/" external primary>
          emptylabs.co ↗
        </BrutalButton>
        <BrutalButton href="/open-source">Open source work →</BrutalButton>
      </div>

      <section className="mb-16">
        <Rule>What we&apos;re building</Rule>
        <div className="grid gap-4 sm:grid-cols-2">
          {ventures.map((v) => (
            <Card key={v.name} href={v.url} title={v.name} meta={v.meta} tags={v.tags}>
              {v.description}
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Rule>Why run four at once</Rule>
        <NumberedList items={why} />
      </section>

      <section className="mb-16">
        <Rule>Lab Notes</Rule>
        <div className="space-y-4">
          <Body>
            The studio publishes what it learns. Lab Notes is the writing arm —
            experiments, process, and the frameworks that came out of actually
            building the things above.
          </Body>
          <Card
            href="https://ai-ladder.vercel.app"
            title="The AI Ladder"
            meta="Arthur · May 2026"
            tags={["Framework", "AI", "Open source"]}
          >
            A framework for how individuals actually climb from prompting to running
            integrated agent systems — eight concrete steps, each with a working
            example. The repo itself is the content.
          </Card>
        </div>
      </section>

      <section>
        <Rule>Want to build something with us?</Rule>
        <Body>
          If you have an idea that should exist and no good reason it doesn&apos;t
          yet, that&apos;s usually the start of a conversation worth having.
        </Body>
        <div className="flex flex-wrap gap-3 mt-7">
          <BrutalButton href="mailto:arthur.h.hinton@gmail.com" primary>
            Get in touch
          </BrutalButton>
          <BrutalButton href="https://emptylabs.co/" external>
            See the studio ↗
          </BrutalButton>
        </div>
      </section>
    </PageShell>
  );
}
