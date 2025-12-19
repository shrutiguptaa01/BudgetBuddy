import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-600">
        Take Control of Your Finances
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Track expenses, set goals, and save smarter with BudgetBuddy.
      </p>
      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
        Get Started
      </button>
    </section>
  );
}
