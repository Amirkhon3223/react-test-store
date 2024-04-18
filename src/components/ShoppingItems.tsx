import React from "react";
import { CartItem } from "../models/interfaces.ts";
import { useDispatch } from "react-redux";
import { add } from "../redux/Slice/CartState.tsx";
import { Link } from "react-router-dom";

interface ShoppingItemProps {
  item: CartItem;
}

export const ShoppingItems: React.FC<ShoppingItemProps> = ({ item }) => {

  const dispatch = useDispatch();
  const { image, price, title } = item;

  return (
    <>
      <div>
        <Link to={`/product-detail/${item.id}`}>
          <div className="bg-grey h-[400px] flex items-center justify-center">
            <img src={image} alt={title} className="w-[200px]"/>
          </div>
        </Link>
        <div className="mt-6 flex justify-between items-center px-0.5">
          <div>
            <div className="text-sm font-bold mb-3">{title}</div>
            <div className="text-sm font-bold mb-3">{price + " "}TSJ</div>
          </div>
          <button className="bg-grey p-3"
                  onClick={() => dispatch(add(item))}
          >Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};