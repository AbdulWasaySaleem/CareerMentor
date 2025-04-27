import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthPageImage from "../../assets/AuthPageImage.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", email, password);
  };
  
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row px-4 py-12 gap-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome Back! To Career Mentor
        </h1>
        <p className="text-xl mb-8">
          Sign in to access your dashboard, track progress, and explore new
          opportunities.
        </p>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={AuthPageImage}
            alt="Colorful abstract design"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Let's continue your journey to a smarter career.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="johndavid@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-gray-600 hover:text-gray-900"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors mt-6"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>


    </>
  );
};

export default Login;