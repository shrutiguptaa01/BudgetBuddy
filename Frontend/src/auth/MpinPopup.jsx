// src/auth/MpinPopup.jsx
export default function MpinPopup({ onClose }) {
  const mpin = Math.floor(100000 + Math.random() * 900000); // 6-digit random MPIN

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96 text-center relative">
        <h3 className="text-2xl font-bold text-orange-600">Your MPIN is Ready 🔒</h3>
        <p className="mt-4 text-gray-700">
          Please save this MPIN securely. You will need it every time you login to unlock your account.
        </p>
        <div className="text-3xl font-bold text-orange-500 my-6">{mpin}</div>
        <button
          onClick={onClose}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Got It
        </button>
        <p className="text-xs text-gray-500 mt-6">© 2025 BudgetBuddy. All rights reserved.</p>
      </div>
    </div>
  );
}
