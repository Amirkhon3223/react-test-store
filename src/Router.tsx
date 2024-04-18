import { HomePage } from "./pages/HomePage.tsx";
import { ProductDetails } from "./pages/ProductDetails.tsx";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

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
]);

export default router;
