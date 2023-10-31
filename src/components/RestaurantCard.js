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
        <h3 className="text-xl font-semibold overflow-ellipsis overflow-hidden">
          {name}
        </h3>
        <div
          className={`name-rating bg-${
            avgRatingString < 4 ? "orange-500" : "green-500"
          } py-1 px-2 rounded text-white text-sm`}
        >
          {avgRatingString}
        </div>
        <p className="mt-2 text-gray-600 whitespace-normal break-words">
  <span className="flex flex-wrap">
    {cuisines.map((cuisine, index) => (
      <span key={index} className="mr-2">
        {cuisine}
      </span>
    ))}
  </span>
</p>

        <p className="text-gray-600">{areaName}</p>
        <div className="flex items-center mt-2 text-gray-700">
          <h4>
            <i className="fa-solid fa-star mr-1"></i>
            {avgRatingString}
          </h4>
          <span className="mx-2">•</span>
          <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
          <span className="mx-2">•</span>
          <h4>{costForTwo ?? "₹200 for two"}</h4>
        </div>
      </div>
    </div>
  );
}
