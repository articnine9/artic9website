import React from "react";
import { Search, Compass, PenTool, Rocket, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: Search, title: "Discover", text: "We dig into your business, audience, competitors and goals in an in-depth discovery session." },
  { icon: Compass, title: "Strategy", text: "A clear roadmap — channels, messaging, milestones and the metrics that define success." },
  { icon: PenTool, title: "Create", text: "Designers, developers and our production crew bring the brand, site, app or campaign to life." },
  { icon: Rocket, title: "Launch", text: "Thorough QA, milestone approvals and a smooth go-live across every platform." },
  { icon: TrendingUp, title: "Grow", text: "We track, report and optimise continuously so results keep compounding." }
];

export default function ProcessSteps({ dark = false }: { dark?: boolean }) {
  return (
    <section className={`section ${dark ? "section-dark" : "section-alt"}`}>
      <div className="container">
        <Reveal className="section-head center">
          <div className="eyebrow">How We Work</div>
          <h2 className="section-title">
            A Process Built for <span className="hl">Results</span>
          </h2>
          <p className="section-lead">
            Every engagement follows the same proven path — so you always know what happens next.
          </p>
        </Reveal>

        <ol className="process">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title} className="process-step">
                <Reveal delay={i * 90}>
                  <div className="process-card">
                    <span className="process-num">0{i + 1}</span>
                    <span className="process-icon">
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
