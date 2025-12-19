import React from "react";

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} BudgetBuddy. All rights reserved.</p>
      </div>
    </footer>
  );
}
