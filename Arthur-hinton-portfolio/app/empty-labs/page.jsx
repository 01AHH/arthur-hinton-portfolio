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
    "We acquire small businesses and rebuild them as service businesses, and build growth strategies for other companies for a fee.",
};

const arms = [
  {
    title: "Acquire and rebuild",
    body: "We buy small businesses and rebuild them as service businesses. The asset we're buying is demand that already exists — customers, cash flow, a proven appetite. What usually needs replacing is the model around it: most small operators compete on price when the thing their customers actually pay for is the service.",
  },
  {
    title: "Growth partnerships",
    body: "We build growth strategies for other companies and make the introductions that let them execute, for a fee. It's the same work we do inside our own businesses, sold to people who need the plan and the network rather than another headcount.",
  },
];

const ventures = [
  {
    name: "The Removalist Melbourne",
    url: "https://theremovalistmelbourne.com",
    meta: "B2C · Services",
    tags: ["Operations", "Logistics"],
    description:
      "Final-mile delivery for high-end and designer furniture, built around experience rather than price. The clearest version of the thesis: the same job, repositioned around what the customer actually cares about.",
  },
  {
    name: "Float Media",
    url: "https://floatmedia.com.au",
    meta: "B2B · Media",
    tags: ["Advertising", "Offline"],
    description:
      "High-density awareness advertising on the side of trucks and vans. Genuinely cheap impressions in a channel most businesses have stopped thinking about.",
  },
  {
    name: "Certainty Savings",
    url: "https://certaintysavings.net",
    meta: "B2B2C · Fintech",
    tags: ["Product", "Payments", "Loyalty"],
    description:
      "Lets a business offer its customers automated savings plans toward its own services, so an interested customer becomes a committed one long before they reach checkout.",
  },
  {
    name: "A Piece of Cake",
    url: "https://apieceofcake.au",
    meta: "B2B · AI",
    tags: ["AI", "Productivity", "SaaS"],
    description:
      "Capture, organise and share meeting notes with AI-generated summaries. Walk out of a meeting already looking switched on.",
  },
];

const why = [
  {
    title: "Buying beats starting from zero",
    body: "An existing business arrives with customers, revenue and a demand signal. You skip the expensive part where you find out nobody wanted it, and go straight to the part you can actually be good at.",
  },
  {
    title: "Service is the cheapest lever available",
    body: "Small businesses are usually run as commodities because that's how they were bought. Rebuilding one around the service — how it's delivered, what it feels like, what it's worth — moves margin without moving the cost base much at all.",
  },
  {
    title: "We only sell what we operate",
    body: "The growth strategies we charge for are the ones we've run on our own P&L first. That's the whole reason the second arm exists: the advice has somewhere real to have been tested.",
  },
];

export default function EmptyLabs() {
  return (
    <PageShell
      current="Empty Labs"
      ticker={[
        "Acquire + Rebuild",
        "Service Businesses",
        "Growth Partnerships",
        "The Removalist",
        "Float Media",
        "Certainty Savings",
      ]}
    >
      <Eyebrow index={1}>Empty Labs</Eyebrow>

      <h1 className="font-mono text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-[0.92] text-white mb-7">
        Acquire.
        <br />
        Rebuild.
        <br />
        <span className="text-acid">Grow.</span>
      </h1>

      <div className="space-y-5 mb-10">
        <Lede>
          Empty Labs buys small businesses and rebuilds them as service businesses.
          Alongside that, we build growth strategies for other people&apos;s
          companies — and make the introductions that unlock them — for a fee.
        </Lede>
        <Body>
          Two arms, one idea. Most small businesses are sitting on demand they
          don&apos;t know how to price, and most growing companies are one plan and
          one introduction away from their next step. We work on both ends of that.
        </Body>
      </div>

      <div className="flex flex-wrap gap-3 mb-16">
        <BrutalButton href="https://emptylabs.co/" external primary>
          emptylabs.co ↗
        </BrutalButton>
        <BrutalButton href="/open-source">Open source work →</BrutalButton>
      </div>

      <section className="mb-16">
        <Rule>How we work</Rule>
        <NumberedList items={arms} />
      </section>

      <section className="mb-16">
        <Rule>What we&apos;re working on</Rule>
        <div className="grid gap-4 sm:grid-cols-2">
          {ventures.map((v) => (
            <Card key={v.name} href={v.url} title={v.name} meta={v.meta} tags={v.tags}>
              {v.description}
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Rule>Why this model</Rule>
        <NumberedList items={why} />
      </section>

      <section className="mb-16">
        <Rule>Lab Notes</Rule>
        <div className="space-y-4">
          <Body>
            We publish what we learn. Lab Notes is the writing arm — experiments,
            process, and the frameworks that came out of actually running the
            businesses above.
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
        <Rule>Work with us</Rule>
        <div className="space-y-5">
          <Body>
            If you&apos;re selling a small business and want it to end up in decent
            hands, or you&apos;re growing one and need the strategy and the
            introductions rather than another hire, that&apos;s the conversation.
          </Body>
        </div>
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
