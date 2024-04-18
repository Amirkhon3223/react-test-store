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

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading products.</div>;
  if (!products || products.length === 0) return <div>No products available.</div>;

  return (
    <div className="section grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      {products.map((item) => (
        <ShoppingItems key={item.id} item={{...item, amount: 1}} />
      ))}
    </div>
  );
};
