import React from "react";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-gray-100 py-16 px-6">
      <h3 className="text-3xl font-bold text-center text-indigo-600 mb-10">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h4 className="font-bold mb-2">1. Sign Up</h4>
          <p className="text-gray-600">Create your account with email, Google, or phone OTP.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h4 className="font-bold mb-2">2. Track</h4>
          <p className="text-gray-600">Add incomes, set expenses, and monitor goals.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h4 className="font-bold mb-2">3. Save Smarter</h4>
          <p className="text-gray-600">Get AI-based suggestions to grow savings.</p>
        </div>
      </div>
    </section>
  );
}
