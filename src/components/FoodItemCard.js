import { ITEM_IMG_CDN_URL } from "./constant.js";

const FoodItemCard = ({ name, description, imageId, price }) => {






  return (
    <div className="flex">
      <img className="h-[100px] rounded-md" src={ITEM_IMG_CDN_URL + imageId} alt="" />
      <h3>{name}</h3>
      <p>
        {price > 0
          ? new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(price / 100)
          : " "}
      </p>
      


    </div>
  );
};

export default FoodItemCard;
