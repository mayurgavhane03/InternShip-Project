import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
  const user = useSelector((store) => store.user);

  // Check if user is not null or undefined before using split
  const userName = user ? user.split('@')[0] : " ";

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around w-full shadow h-16 bg-orange-500 text-black text-center bottom-0 fixed z-40">

      {/* Adjusted styles for smaller screens using Tailwind CSS classes */}
      <span className="text-base sm:text-lg lg:text-xl  sm:mb-0">
        Hey <span className="font-bold">{userName}</span>.... Thanks for using <span className="font-bold">Food Villa</span> <span className="text-red">&#x2764;</span>
      </span>

      <span className="text-base sm:text-lg lg:text-xl lg:mb-2 lg:mt-2">
        Developed with <span className="text-red">&#x2764;</span> by <span className="font-bold">Mayur</span>
      </span>
    </div>
  );
}
