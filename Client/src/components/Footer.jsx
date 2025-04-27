import React from 'react'
import { Linkedin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <footer className="py-8 px-8 md:px-16 lg:px-24 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">Menu</div>
          <div className="flex space-x-6 text-sm text-gray-600 mb-4 md:mb-0">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Steps</a>
            <a href="#">Feature</a>
            <a href="#">Testimonials</a>
          </div>
          <div className="text-gray-600 mb-2 md:mb-0">Socials</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer