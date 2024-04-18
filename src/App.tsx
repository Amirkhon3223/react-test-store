import { Navbar } from "./components/generalComponents/Navbar.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { Cart } from "./components/Cart/Cart.tsx";
import { RootState } from "./redux/Store.tsx";
import { useSelector } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductDetails } from "./components/ProductDetails.tsx";

const Layout = () => {
  const isOpen = useSelector((state: RootState) => state.productCard.isOpen);
  return (
    <div>
      <Navbar/>
      {
        isOpen && <Cart/>
      }
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetails/>
      }
    ]
  }
])

const App = () => {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
