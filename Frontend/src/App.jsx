import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Copyright from "./components/Copyright";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-orange-50">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold text-orange-600">BudgetBuddy</h1>
          <div className="space-x-6">
            <Link to="/signup" className="text-gray-600 hover:text-orange-500">Signup</Link>
            <Link to="/login" className="text-gray-600 hover:text-orange-500">Login</Link>
          </div>
        </nav>

        {/* Pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Signup />} />
          </Routes>
        </div>

        {/* Footer */}
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
