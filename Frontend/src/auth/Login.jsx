// src/auth/Login.jsx
import googleIcon from "../assets/google-symbol.png";

export default function Login() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-50">
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <img src={loginImg} alt="Login Illustration" className="w-3/4" />
      </div>

      <div className="flex flex-col justify-center items-center md:w-1/2 w-full px-6 py-12">
        <h2 className="text-3xl font-bold text-orange-600">Welcome Back</h2>
        <p className="text-gray-600 mt-2 mb-6">Login to continue managing your expenses</p>

        <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>

          <div className="my-4 text-center text-gray-500">OR</div>

          <button
            type="button"
            className="w-full flex items-center justify-center border py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}
