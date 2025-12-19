import React from "react";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">BudgetBuddy</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-gray-200">Features</a>
          <a href="#how" className="hover:text-gray-200">How it works</a>
          <a href="#pricing" className="hover:text-gray-200">Pricing</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </nav>
      </div>
    </header>
  );
}
