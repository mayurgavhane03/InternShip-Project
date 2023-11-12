import React from 'react';
import useOnline from './Hooks/useOnline';

const CheckOnlineStatus = () => {
  const status = useOnline();

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
      <h1 className={`text-2xl ${status ? 'text-green-500' : 'text-red-500'}`}>
        {status ? 'User is online' : 'User is offline'}
      </h1>
    </div>
  );
};

export default CheckOnlineStatus;
