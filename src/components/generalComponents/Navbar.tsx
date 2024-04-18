import { BiShoppingBag } from "react-icons/bi";
import { useEffect, useState } from "react";
import { openToggleCard } from "../../redux/slice/ProductCartSlice.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store.tsx";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.card);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <div
        className={`${scroll ? "bg-grey shadow-md" : "shadow-none"} fixed top-0 left-0 w-full z-20 transition duration-300`}>
        <div className="flex items-center justify-between container py-4 px-2 mx-auto text-gray-800">
          <Link to="/" className="font-bold text-xl">
            Store-Test
          </Link>
          <div className="relative cursor-pointer" onClick={() => dispatch(openToggleCard())}>
            <BiShoppingBag className="text-2xl"/>
            <div className="absolute w-4 h-4 rounded-full z-20 right-[-3px] bottom-[-3px]
                            flex items-center justify-center text-[10px] bg-black text-white"
            >
              {cartItems.reduce((total, item) => total + item.amount, 0)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
