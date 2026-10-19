import React from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/data/artic9Data";

export default function KnowledgeAccordion() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow">FAQ</div>
          <h2 className="section-title">
            Questions? <span className="hl">We&apos;ve Got Answers</span>
          </h2>
        </div>

        <div className="faq">
          {FAQ_ITEMS.map((f, i) => (
            <details key={f.question} name="faq" open={i === 0}>
              <summary>
                {f.question}
                <span className="pm">
                  <Plus size={18} />
                </span>
              </summary>
              <div className="ans">
                <p>{f.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
