import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthPageImage from "../../assets/AuthPageImage.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/verify-identity');
    console.log('Sending reset link to:', email);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row px-4 py-12 gap-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Forgot Your Password?</h1>
        <p className="text-xl mb-8">
          Enter your registered email address, and we'll send you instructions to reset your password.
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
          No worries — we'll help you get back on track.
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
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
          
          <div className="flex space-x-4 mt-8">
            <Link
              to="/login"
              className="flex-1 text-center border border-gray-300 p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Back
            </Link>
            <button 
              type="submit" 
              className="flex-1 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;