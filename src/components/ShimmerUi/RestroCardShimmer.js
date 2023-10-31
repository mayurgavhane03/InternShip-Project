import React from "react";

const Shimmer = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden ml-70 w-[300px] h-[410px] mb-[100px] justify-center items-center animate-pulse">
      <div className="flex justify-center items-center">
        <div className="w-[250px] h-[250px] bg-gray-300 rounded-lg" />
      </div>
      <div className="p-4">
        <div className="bg-gray-300 w-3/4 h-6 rounded-full mb-2" />
        <div className="bg-gray-300 w-1/4 h-4 rounded-full mb-2" />
        <div className="bg-gray-300 w-1/2 h-4 rounded-full mb-2" />
        <div className="bg-gray-300 w-3/4 h-4 rounded-full mb-2" />
        <div className="bg-gray-300 w-2/3 h-4 rounded-full mb-2" />
        <div className="bg-gray-300 w-1/3 h-4 rounded-full mb-2" />
      </div>
    </div>
  );
};

export default Shimmer;
