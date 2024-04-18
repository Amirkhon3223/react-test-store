import { Navbar } from "./components/generalComponents/Navbar.tsx";
import { Cart } from "./components/Cart/Cart.tsx";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "./redux/Store.tsx";

export const Layout = () => {
  const isOpen = useSelector((state: RootState) => state.productCard.isOpen);
  return (
    <div>
      <Navbar/>
      {isOpen && <Cart/>}
      <Outlet/>
    </div>
  );
}