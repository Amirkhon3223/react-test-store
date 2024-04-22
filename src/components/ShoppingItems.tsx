import React from "react";
import { CartItem } from "../models/interfaces";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../redux/slice/CartSlice";

interface ShoppingItemProps {
  item: CartItem;
}

export const ShoppingItems: React.FC<ShoppingItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { image, price, title } = item;

  return (
    <>
      <div className="transition hover:scale-105 hover:shadow-lg rounded-lg">
        <Link to={`/product-detail/${item.id}`}>
          <div className="h-[400px] flex items-center justify-center">
            <img src={image} alt={title} className="w-[200px]"/>
          </div>
        </Link>
        <div className="items-center p-3 relative">
          <div>
            <div className="text-sm font-bold mb-5 line-clamp-1">{title}</div>
            <div className="text-lg font-bold mb-3">{price + " "}TSJ</div>
          </div>
          <button
            className="bg-grey p-3 button hover:bg-transparentDark hover:text-grey transition absolute bottom-3 right-3"
            onClick={() => dispatch(add(item))}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};
