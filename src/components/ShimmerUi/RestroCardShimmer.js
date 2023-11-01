import React from "react";

const RestroCardShimmer = () => {
  // Create an array with 20 elements to represent the cards
  const cardArray = new Array(20).fill(null);

  return (
    <div className="flex flex-wrap m-10">
      {cardArray.map((_, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden mb-4 mt-5">
            <div className="flex justify-center items-center">
              <div className="w-2/3 h-48 bg-gray-300 rounded-lg  mt-4" />
            </div>
            <div className="p-4">
              <div className="bg-gray-300 w-3/4 h-6 rounded-full mb-2" />
              <div className="bg-gray-300 w-1/4 h-4 rounded-full mb-2" />
              <div className="bg-gray-300 w-1/2 h-4 rounded-full mb-2" />
              <div className="bg-gray-300 w-3/4 h-4 rounded-full mb-2" />
              <div className="bg-gray-300 w-2/3 h-4 rounded-full mb-2" />
              
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestroCardShimmer;
