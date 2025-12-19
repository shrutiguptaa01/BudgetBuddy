import React from "react";

const features = [
  { title: "Expense Tracking", desc: "Monitor all your spendings in one place." },
  { title: "Smart Goals", desc: "Plan your trips, savings, and investments." },
  { title: "AI Insights", desc: "Get personalized saving tips." }
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-6 bg-white">
      <h3 className="text-3xl font-bold text-center text-indigo-600 mb-8">Features</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 shadow-lg rounded-xl bg-gray-50 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
