import React from "react";
import { useParams } from "react-router-dom";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "./constant";
import useResMenuData from "./Hooks/useResMenuData";

export default function RestaurantMenu() {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  return (
    <div className="mt-[200px] items-center justify-center">
      <div className="lg:ml-[300px] sm:ml-[300px]  mb-10 flex flex-col items-center justify-center sm:flex-row">
        <div className="w-1/3 p-4 flex justify-center sm:w-auto">
          <img
            className=" h-48 min-w-fit object-cover rounded"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
        </div>
        <div className="w-2/3 p-4 text-center sm:text-left">
          <h1 className="text-3xl font-bold mb-4">{restaurant?.name}</h1>
          <p className="text-gray-500 mb-2">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="mb-4">
            <div
              className={`bg-${
                restaurant?.avgRating < 4 ? "orange" : "green"
              }-500 p-2 rounded-full inline-flex items-center`}
            >
              <i className="fa-solid fa-star text-white mr-1"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="text-gray-500">{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="w-full p-4">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Recommended</h3>
          <p className="text-gray-500">{menuItems.length} ITEMS</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full justify-center items-center">
          {menuItems.map((item) => (
            <div className="bg-white p-4 rounded shadow-md" key={item?.id}>
              {item?.imageId && (
                <img
                  className="mt-4 w-30 h-40 object-cover rounded"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                />
              )}
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{item?.name}</h3>
                <p className="text-gray-500">{item?.description}</p>
              </div>
              <p className="text-xl font-semibold">
                {item?.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item?.price / 100)
                  : " "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
