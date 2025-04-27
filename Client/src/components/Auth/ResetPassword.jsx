import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthPageImage from "../../assets/AuthPageImage.svg";

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      console.log('Resetting password');
      // Handle password reset submission
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row px-4 py-12 gap-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Create a New Password</h1>
        <p className="text-xl mb-8">
          Enter a new password that's strong and easy for you to remember.
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
          Let's secure your account.
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="new-password" className="block text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              id="new-password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirm-password" className="block text-gray-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              id="confirm-password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {passwordError && (
              <p className="text-red-500 mt-2">{passwordError}</p>
            )}
          </div>
          
          <div className="flex space-x-4 mt-8">
            <Link
              to="/verify-identity"
              className="flex-1 text-center border border-gray-300 p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Back
            </Link>
            <button 
              type="submit" 
              className="flex-1 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;