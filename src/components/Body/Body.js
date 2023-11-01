import React from "react";
import { filterData } from "../../utils/Helper";
import useResData from "../Hooks/useResData";
import { useState } from "react";
import { swiggy_api_URL } from "../constant";
import { Link } from "react-router-dom";
import RestaurantCard from "../RestaurantCard";
import Carousel from "../Carousel";
import RestroCardShimmer from "../ShimmerUi/RestroCardShimmer";
const MainBody = (user) => {
  const [searchText, setSearchText] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };
  if (!allRestaurants) return null;

  return (
    <>
      <div className="flex flex-wrap mt-[150px]">
        <div className="mx-auto sm:w-full lg:w-1/2 justify-center">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Search for Restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              searchData(e.target.value, allRestaurants);
            }}
          />
          {errorMessage && (
            <div className="mt-4 text-red-500">{errorMessage}</div>
          )}
        </div>
        <Carousel />
      </div>

      <div className="mt-12 sm:flex sm:items-center sm:justify-center  ">
          {" "}
          <h1 className="text-2xl font-bold">Top restaurant in Aurangabad</h1>

        </div>
      
      
      
      {allRestaurants?.length  ===0 && FilterRes?.length ===0 ? (<RestroCardShimmer />) :  <div className="w-full flex flex-wrap justify-center items-center gap-10 mt-[100px] ">
        
        {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
          (restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} user={user} />
              </Link>
            );
          }
        )}
      </div>}
    </>
  );
};

export default MainBody;
