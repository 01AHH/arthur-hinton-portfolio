import PageShell, {
  BrutalButton,
  Body,
  Eyebrow,
  Lede,
  Rule,
} from "../components/PageShell";

export const metadata = {
  title: "What I'm Looking For — Arthur Hinton",
  description:
    "The best product and growth people in the world, because it's the only environment where real learning happens.",
};

export default function LookingFor() {
  return (
    <PageShell
      current="Looking"
      ticker={[
        "The Best People",
        "High Standards",
        "Growth",
        "No Easy Rooms",
        "North Star",
      ]}
    >
      <Eyebrow index={7}>What I&apos;m Looking For</Eyebrow>

      <h1 className="font-mono text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-[0.92] text-white mb-8">
        The best people
        <br />
        <span className="text-acid">in the world.</span>
      </h1>

      <div className="space-y-5 mb-16">
        <Lede>
          I&apos;m looking to work with the best product and growth people in the
          world.
        </Lede>
        <Body>
          Not because it sounds impressive. Because it&apos;s the only environment
          where real learning happens.
        </Body>
        <Body>
          When you&apos;re around people who are genuinely exceptional, who think
          faster, hold higher standards, and refuse to settle, you can&apos;t stay
          where you are. The bar rises. Comfort becomes impossible. You&apos;re
          either growing or you&apos;re falling behind, and that pressure is the
          point.
        </Body>
        <Body>
          I&apos;ve seen what it does to a room. The best people don&apos;t just
          perform at a higher level themselves. They pull everyone around them up.
          They make mediocrity feel uncomfortable. They make you want to be better,
          not because anyone asked you to, but because the standard is just there,
          visible, every day.
        </Body>
        <Body>
          That&apos;s the environment I&apos;m looking for. One where everyone is
          trying to become their best self, and where that expectation is shared
          without it needing to be said.
        </Body>
        <p className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-acid pt-2">
          &gt; Learning doesn&apos;t come from easy rooms. It never has.
        </p>
      </div>

      <section className="mb-16">
        <Rule>Background</Rule>
        <div className="space-y-5">
          <Body>
            I started building at 14. My first business was selling drinks at school,
            which taught me more about pricing, cost management, and customer
            behaviour than most courses ever could.
          </Body>
          <Body>
            Since then I&apos;ve co-founded a personalised running coaching app,
            built referral and paid acquisition engines from scratch, and spent time
            inside fast-moving fintech startups in growth and operations roles.
          </Body>
          <Body>
            At Slice Pay I worked across B2B partnership growth, internal tooling,
            and revenue optimisation. At Paylater Travel I owned the full growth
            engine: referral, paid, influencer, and creative. I scaled referral from
            zero to 200+ per month. Today I&apos;m in{" "}
            <a
              href="/investorhub"
              data-hover
              className="text-acid hover:underline underline-offset-4"
            >
              Growth at InvestorHub
            </a>
            , working on a category most customers have never bought before.
          </Body>
          <Body>
            Alongside that, I run{" "}
            <a
              href="/empty-labs"
              data-hover
              className="text-acid hover:underline underline-offset-4"
            >
              Empty Labs
            </a>
            , where I build and test businesses across B2B and B2C to sharpen my
            skills at speed, and I{" "}
            <a
              href="/open-source"
              data-hover
              className="text-acid hover:underline underline-offset-4"
            >
              ship open source tools
            </a>{" "}
            for the same reason.
          </Body>
          <Body>
            The thread through all of it is the same: I learn most when I&apos;m
            operating at the edge of what I know, alongside people who are further
            along than I am. Every role, every project, every co-founder has taught
            me that. The best teachers aren&apos;t always in classrooms. They&apos;re
            the people next to you who hold a standard you haven&apos;t reached yet.
          </Body>
        </div>
      </section>

      <section>
        <div className="border-2 border-acid/40 bg-acid/[0.04] p-6 mb-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-acid mb-2.5">
            // North star
          </p>
          <p className="text-base text-white/70 leading-relaxed">
            To become exceptional: to build companies and tools that have a real
            impact on the world, and to do it alongside people worth learning from.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <BrutalButton href="https://www.linkedin.com/in/arthur-hinton/" external primary>
            LinkedIn ↗
          </BrutalButton>
          <BrutalButton href="mailto:arthur.h.hinton@gmail.com">Get in touch</BrutalButton>
        </div>
      </section>
    </PageShell>
  );
}
