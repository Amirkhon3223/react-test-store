import { BiShoppingBag } from "react-icons/bi"
import { useEffect, useState } from "react";
import { openToggleCard } from "../../redux/Slice/ProductCartState.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store.tsx";

export const Navbar = () => {

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.card);


  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, [])

  return (
    <>
      <div className={`${scroll ? "bg-grey" : ""} fixed top-0 left-0 w-full z-20`}>
        <div className="flex items-center justify-between relative container py-4 px-2 mx-auto">
          <div className="font-bold text-xl">Store-Test</div>
          <div className="relative cursor-pointer" onClick={() => dispatch(openToggleCard())}>
            <BiShoppingBag className="absolute h-6 w-6 rounded-full"/>
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