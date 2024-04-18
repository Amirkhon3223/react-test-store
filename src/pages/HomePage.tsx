import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ShoppingItems } from "../components/ShoppingItems";
import { loadProducts } from "../redux/Slice/ProductsSlice";
import { RootState } from "../redux/Store";

export const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    dispatch(loadProducts() as any);
  }, [dispatch]);

  return (
    <div className="section grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      {status === 'loading' ? <div>Loading...</div> :
        status === 'failed' ? <div>Error loading products.</div> :
          !products || products.length === 0 ? <div>No products available.</div> :
            products.map((item) => <ShoppingItems key={item.id} item={{ ...item, amount: 1 }}/>)
      }
    </div>
  );
};
