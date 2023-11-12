import React from "react";
import { IMG_CDN_URL } from "./constant";

export default function RestaurantCard({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
  user,
}) {
  return (
    <div className="bg-bl rounded-lg shadow-lg overflow-hidden ml-70 w-[300px] h-[410px] mb-[100px] justify-center items-center   transform scale-100 transition-transform duration-300 hover:scale-110">
      <div className="flex  justify-center items-center ">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-[250px] h-[250px] object-cover rounded-lg "
        />
      </div>
      <div className="p-4">
      <h3 className="text-left mb-6 text-gray-700 overflow-hidden truncate  text-xl font-semibold">
  {name}
</h3>



    

        <p className="text-gray-600">{areaName}</p>
        <div className="flex items-center mt-2 text-gray-700">
        <div
          className={`name-rating ${
            avgRatingString < 4 ? "bg-orange-500" : "bg-green-500"
          } rounded text-white text-sm w-10 p-1   `}
        >
          {avgRatingString}
        </div>
          <span className="mx-2">•</span>
          <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
          <span className="mx-2">•</span>
          <h4>{costForTwo ?? "₹200 for two"}</h4>
        </div>
      </div>
    </div>
  );
}
