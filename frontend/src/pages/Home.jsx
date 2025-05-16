import React from 'react';
import UtilityCard from '../components/UtilityCard';
import utilities from '../data/utilities';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white/30 backdrop-blur-lg border border-gray-200 shadow-xl rounded-3xl p-6 sm:p-10 md:p-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-10 text-center">
          🏡 Your Home Utilities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {utilities.map((utility, index) => (
            <UtilityCard key={index} util={utility.util} title={utility.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
