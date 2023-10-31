import React from "react";
import {
  ITEM_IMG_CDN_URL,
} from "../constants";

const FoodItemCart = ({ name, description, imageId, price }) => {
  return (
    <div className="cart-card {">
      <img className="cart-img" src={ITEM_IMG_CDN_URL + imageId} alt="" />
      <h3 className="cart-name">{name}</h3>
      <p className="cart-item">
        {price > 0
          ? new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(price / 100)
          : " "}
      </p>
      <p className="item-desc">{description}</p>
    </div>
  );
};

export default FoodItemCart;
