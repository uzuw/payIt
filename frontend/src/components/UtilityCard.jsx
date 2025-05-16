import React from 'react';

const UtilityCard = ({ util, title }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px]">
      <div className="text-4xl text-green-600 mb-2 sm:mb-3">
        {util}
      </div>
      <div className="text-sm sm:text-base font-medium text-gray-700">
        {title}
      </div>
    </div>
  );
};

export default UtilityCard;
