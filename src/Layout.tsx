import { Navbar } from "./components/generalComponents/Navbar";
import { Cart } from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "./redux/Store";

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