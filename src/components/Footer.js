import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
  const user = useSelector((store) => store.user);

  // Check if user is not null or undefined before using split
  const userName = user ? user.split('@')[0] : " ";

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around w-full shadow h-14 bg-orange-500 text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40">
      <span className="text-md">
        Hey <span className="font-bold">{userName}</span>.... Thanks for using <span className="font-bold">Food Villa</span> <span className="text-red">&#x2764;</span>
      </span>
      <span className="text-md mt-2 lg:mt-0">
        Developed with <span className="text-red">&#x2764;</span> by <span className="font-bold">Mayur</span>
      </span>
    </div>
  );
}
