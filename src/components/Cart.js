import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/slices/cartSlice";
import ItemQuantity from "./ItemQuantity";
import EmptyCart from "./EmptyCart";
import { ITEM_IMG_CDN_URL } from "./constant";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const HandleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate the total price of all items in the cart
  const totalCartPrice = Object.values(cartItems).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleNavigate = () => {
    navigate("/");
  };

  return totalCartPrice > 0 ? (
    <div className="flex items-cente lg:ml-[170px] justify-center  ">
      <div className="flex mt-[100px]   justify-between  sm:p-0 xsm:p-0 mob:p-0 xsm:flex-col mob:flex-col lg:w-[900px]">
        <div className="bg-white drop-shadow-md flex-2 p-6 ">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg mt-2.5 text-title font-bold">
              Cart Items {Object.values(cartItems).length}
            </h1>
            <button
              className="w-[80px] h-[22px] rounded-md bg-red  bg-orange-500  text-white text-sm"
              onClick={() => HandleClearCart()}
            >
              Clear Cart
            </button>
          </div>

          {Object.values(cartItems).map((item) => (
            <div className="my-3" key={item.id}>
              <div className="flex items-center mt-2 ">
                <img
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                  className="h-[50px] lg:h-[80px] pl-3 lg:px-[40px]"
                ></img>

                <p className="px-2 lg:w-48 sm:w-36 text-sm">{item.name}</p>

                <div className="px-[80px]">
                  <p className="font-thin text-sm text-bold">
                    {"₹ " + (item.price / 100) * item.quantity}
                  </p>
                  <ItemQuantity item={item} />
                </div>
              </div>
            </div>
          ))}

          {Object.values(cartItems).length < 3 ? (
            <div className="flex justify-center items-center h-[300px]">
              <div className="bg-orange-500 text-white p-2 rounded-lg text-center">
                <button onClick={handleNavigate}>PLZ ADD MORE ITEMS</button>
              </div>
            </div>
          ) : null}

          <div className=" mt-[20px] ">
            <div className="border border-black my-2"></div>
            <div className="flex justify-between ">
              <p className="font-bold text-xs lg:text-sm">To Pay</p>
              <p className="font-bold text-xs lg:text-sm">
                {"₹ " + totalCartPrice / 100}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
};

export default Cart;
