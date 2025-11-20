import React from "react";

export interface ProudItem {
  badge: string;
  punchline: string;
  description: string;
}

const ProudSection: React.FC<{ items: ProudItem[] }> = ({ items }) => {
  if (!items.length) {
    return null;
  }

  return (
    <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
      <div className="rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold text-brown-900 mb-4 leading-snug">
          Quiet wins that keep the work moving.
        </h3>

        <div className="space-y-4">
          {items.map((item, index) => (
            <article
              key={index}
              className="group rounded-lg px-4 py-4 transition-all duration-200 hover:bg-paper/70">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brown-500">{item.badge}</span>
              <p className="text-xl text-brown-900 mt-2 leading-tight">{item.punchline}</p>
              <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProudSection;

