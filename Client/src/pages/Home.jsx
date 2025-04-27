import { useState } from "react";

const Home = () => {
  return (
   <>
   <div className="w-full py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto relative">
        {/* Main Content */}
        <div className="pt-16 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">From </span>
            <span className="text-orange-500">Confusion </span>
            <span className="text-gray-800">to </span>
            <span className="text-sky-500">Clarity </span>
            <span className="text-gray-800">- Your Smart Career Guide in Tech</span>
          </h1>
          
          <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
            Personalized guidance, real industry insights, and the roadmap you wish you had earlier - all in one platform
          </p>
          
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300">
            Get Started - It's Free
          </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default Home;
