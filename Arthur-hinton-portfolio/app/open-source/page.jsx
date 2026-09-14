import PageShell, {
  BrutalButton,
  Body,
  Card,
  Eyebrow,
  Lede,
  Rule,
} from "../components/PageShell";

export const metadata = {
  title: "Open Source — Arthur Hinton",
  description:
    "Small, local-first macOS and web tools I've built and open sourced: Wisp, SnapMark, LiveWall, ai-ladder and more.",
};

const groups = [
  {
    label: "Mac apps",
    blurb:
      "Native Swift, no Electron, no accounts, nothing leaving the machine. Each one started as something I wanted every day and did not want to pay a subscription for.",
    projects: [
      {
        name: "Wisp",
        url: "https://github.com/01AHH/Wisp",
        meta: "Swift · macOS 26",
        tags: ["Swift", "Speech", "On-device"],
        description:
          "A stripped-down Wispr Flow. Hold a key, talk, let go — the words appear wherever your cursor is. Runs entirely on-device with Apple's speech engine, so there is no account, no API key and nothing sent anywhere. Includes a scratchpad for dictating, editing, then pulling the text through into whatever app you came from.",
      },
      {
        name: "SnapMark",
        url: "https://github.com/01AHH/SnapMark",
        meta: "Swift · Menu bar",
        tags: ["Swift", "SwiftUI", "AppKit"],
        description:
          "A CleanShot X-style screenshot tool. It takes over ⌘⇧4, every capture lands on the clipboard instantly, and a floating thumbnail opens a markup editor with arrows, boxes, text and highlighter. Capture history survives restarts. 100% native, no dependencies, no cloud.",
      },
      {
        name: "LiveWall",
        url: "https://github.com/01AHH/live-wallpaper-mac",
        meta: "Swift · AppKit",
        tags: ["Swift", "Video", "Multi-monitor"],
        description:
          "Live video wallpapers for macOS. Looping muted video renders behind your desktop icons and stays click-through, with a Wallpaper-Engine-style control panel, fill/fit scaling, and the option to span one continuous video across every screen.",
      },
    ],
  },
  {
    label: "Developer tools",
    blurb:
      "Things that sand down a rough edge in how I work rather than trying to be products.",
    projects: [
      {
        name: "claude-waiting-menubar",
        url: "https://github.com/01AHH/claude-waiting-menubar",
        meta: "Shell · SwiftBar",
        tags: ["Shell", "Hooks", "Claude Code"],
        description:
          "One menu-bar icon showing how many Claude Code sessions have finished and are waiting on you, across every tab and project. The count goes up on a Stop hook and down when you reply; clicking it lists which projects are waiting and for how long. The installer is idempotent and merges its hooks without touching the rest of your settings.",
      },
      {
        name: "Deep Work To-Do",
        url: "https://github.com/01AHH/minimal-deep-work-to-do-list-tracker",
        meta: "HTML · Swift wrapper",
        tags: ["Local-first", "Focus"],
        description:
          "A distraction-free to-do list for a single deep work session: one intention, a few concrete targets, an optional timer, nothing else. No accounts, no sync, no notifications, no internet. Runs as a single HTML file or builds into a tiny native macOS app.",
      },
      {
        name: "Spectra",
        url: "https://github.com/01AHH/nightly-browser",
        meta: "Gecko · Soft fork",
        tags: ["Browser", "Firefox", "Fork"],
        description:
          "An Arc-inspired open-source browser — a soft fork of Zen Browser on Firefox/Gecko, with custom branding and a dashboard new-tab page. Mostly an excuse to find out how much of a browser's feel is actually changeable from the outside.",
      },
    ],
  },
  {
    label: "Writing as software",
    blurb:
      "Where the argument only lands if you can run it.",
    projects: [
      {
        name: "AI Ladder",
        url: "https://github.com/01AHH/ai-ladder",
        meta: "Next.js · TypeScript",
        tags: ["TypeScript", "Anthropic API", "Framework"],
        description:
          "Eight steps from prompting to integrated agent systems, each showing one vivid example of what is possible at that level, personalised to you. The repo is the content: clone it and you get the working agent, with the skills that ship alongside it loading automatically in Claude Code. Live at ai-ladder.vercel.app.",
      },
    ],
  },
];

const principles = [
  {
    k: "Local-first",
    v: "No accounts, no telemetry, no server. If it can run on the machine, it runs on the machine.",
  },
  {
    k: "Native where it counts",
    v: "Swift and AppKit for the Mac apps. Small binaries, no Electron, no 400MB of runtime for a menu bar icon.",
  },
  {
    k: "Built to be read",
    v: "Every repo ships a README that explains what it does, how to build it, and what will go wrong on first run.",
  },
];

export default function OpenSource() {
  return (
    <PageShell
      current="Open Source"
      ticker={[
        "Wisp",
        "SnapMark",
        "LiveWall",
        "AI Ladder",
        "Spectra",
        "Local-First",
        "Swift",
      ]}
    >
      <Eyebrow index={3}>Open Source</Eyebrow>

      <h1 className="font-mono text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-[0.92] text-white mb-7">
        Tools I
        <br />
        wanted, so
        <br />
        <span className="text-acid">I built them.</span>
      </h1>

      <div className="space-y-5 mb-10">
        <Lede>
          Seven projects, all public. None of them are trying to be a startup. Each
          one exists because something I used every day was either subscription-priced,
          sending my data somewhere, or simply didn&apos;t exist.
        </Lede>
        <Body>
          I&apos;m not a full-time engineer, which is rather the point: these are what
          someone in growth can now ship end to end. That shift is the most useful
          thing I&apos;ve learned in the last two years, and building in the open is
          how I keep testing it.
        </Body>
      </div>

      <div className="flex flex-wrap gap-3 mb-16">
        <BrutalButton href="https://github.com/01AHH" external primary>
          github.com/01AHH ↗
        </BrutalButton>
        <BrutalButton href="/empty-labs">Empty Labs →</BrutalButton>
      </div>

      {groups.map((group) => (
        <section key={group.label} className="mb-16">
          <Rule>{group.label}</Rule>
          <p className="text-sm text-white/50 leading-relaxed mb-6 -mt-2">{group.blurb}</p>
          <div className="space-y-4">
            {group.projects.map((p) => (
              <Card key={p.name} href={p.url} title={p.name} meta={p.meta} tags={p.tags}>
                {p.description}
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section className="mb-16">
        <Rule>How they&apos;re built</Rule>
        <div className="grid gap-4 sm:grid-cols-3">
          {principles.map(({ k, v }) => (
            <div key={k} className="border-2 border-white/25 p-5">
              <p className="font-mono text-sm font-bold uppercase tracking-wide text-white mb-2">
                {k}
              </p>
              <p className="text-sm text-white/55 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Rule>Fork anything</Rule>
        <Body>
          Everything here is public. Clone it, break it, ship a better version — and
          if you do something interesting with one of them, I&apos;d genuinely like to
          hear about it.
        </Body>
        <div className="flex flex-wrap gap-3 mt-7">
          <BrutalButton href="https://github.com/01AHH" external primary>
            All repos ↗
          </BrutalButton>
          <BrutalButton href="mailto:arthur.h.hinton@gmail.com">Get in touch</BrutalButton>
        </div>
      </section>
    </PageShell>
  );
}
