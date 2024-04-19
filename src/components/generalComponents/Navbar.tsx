import { useEffect, useState } from "react";
import { BiMoon, BiShoppingBag, BiSun } from "react-icons/bi";
import { openToggleCard } from "../../redux/slice/ProductCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.card);
  const [scroll, setScroll] = useState(false);

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkTheme]);

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
          <Link to="/"
                className={`${scroll ? "dark:text-transparentDark" : "text-grey"} font-bold text-xl dark:text-grey text-transparentDark`}>
            Store-Test
          </Link>
          <div className="flex items-center justify-between space-x-10">
            <div className="relative cursor-pointer" onClick={() => dispatch(openToggleCard())}>
              <BiShoppingBag
                className={`${scroll ? "dark:text-transparentDark" : "text-grey"} text-3xl dark:text-grey`}/>
              <div className={`${scroll ? "dark:text-grey" : "text-transparentDark"} absolute w-4 h-4 rounded-full z-20 right-[-3px] bottom-[-3px] flex
                            items-center justify-center text-[10px] bg-black text-white dark:text-grey`}
              >
                {cartItems.reduce((total, item) => total + item.amount, 0)}
              </div>
            </div>
            <div>
              <button onClick={() => setDarkTheme(!darkTheme)}
                      className={`${scroll ? "dark:text-transparentDark" : "text-grey"} dark:text-grey`}>
                {
                  darkTheme ?
                    <BiSun className="inline mr-2 text-3xl"/> : <BiMoon className="inline mr-2 text-3xl"/>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
