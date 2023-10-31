import { useParams } from "react-router-dom";
import {  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY, } from "./constant";


import useResMenuData from "./Hooks/useResMenuData";


const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );


 (
    <div className="bg-black">
      <div className=" ">
        <div className=" ">
          <img
            className=" "
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
        </div>
        <h1 className="mt-10"> heydfklahsdjfa</h1>

        <div className=" ">
          <h2 className=" ">{restaurant?.name}</h2>
          <p className=" ">{restaurant?.cuisines?.join(", ")}</p>
          <div className=" ">
            <div
              className=" "
              style={{
                backgroundClip:
                  restaurant?.avgRating < 4 ? "#DB7C38" : "#48C479",
              }}
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            {/* <div>{restaurant?.sla?.slaString}</div> */}
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          <div className="">
            <h3 className=" ">Recommended</h3>
            <p className=" ">{menuItems.length} ITEMS</p>
          </div>
          <div className=" ">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className=" ">
                  <h3>{item?.name}</h3>
                  <p className=" ">{item?.description}</p>
                  <p className=" ">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : " "}
                </p>
                </div>

                <div className=" ">
                  {item?.imageId && (
                    <img
                      className=" "
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;


//item is array of object with

