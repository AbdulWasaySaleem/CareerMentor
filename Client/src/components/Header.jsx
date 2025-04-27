import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // <-- import this if you're using react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // <-- hook to navigate

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">CareerMentor</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Steps</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Feature</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a>
          <button
            onClick={handleGetStarted}
            className="border border-gray-800 rounded-full px-6 py-2 hover:bg-gray-100 transition-colors"
          >
            Get Started
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <a href="/" className="text-gray-600 hover:text-gray-900 py-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">Steps</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">Feature</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">Testimonials</a>
              <button
                onClick={handleGetStarted}
                className="border border-gray-800 rounded-full py-2 hover:bg-gray-100 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
