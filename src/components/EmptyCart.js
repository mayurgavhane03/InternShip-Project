import React from 'react';
import { useNavigate } from 'react-router-dom';
import emptyCartImg from "../components/Images/empty-cart.png";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="h-screen m-10 flex flex-col justify-center items-center">
      <img src={emptyCartImg} alt="emptyCartImg" className="h-[300px]" />
      <p className="text-center">You can go to the home page to view more restaurants</p>
      <div className="bg-orange-500 text-white p-2 rounded mt-12">
        <button onClick={handleNavigate}>
          <h1 className="text-center text-xl font-semibold">SEE RESTAURANTS NEAR YOU</h1>
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
