import { add } from "../redux/Slice/CartState.tsx";
import { loadProducts } from "../redux/Slice/ProductsSlice.tsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store.tsx";
import { Link, useParams } from "react-router-dom";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();


  const product = useSelector((state: RootState) => state.products.products.find(p => p.id === Number(id)));
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    if (!product) {
      dispatch(loadProducts(id));
    }
  }, [dispatch, id, product]);

  if (status === 'loading') return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen w-full flex space-x-10 items-center justify-center p-4">
      <div className="lg:flex items-center justify-center">
        <Link to="/" className="self-start">
          <button className="mb-4 bg-gray-200 text-black py-2 px-4 rounded">
            Назад
          </button>
        </Link>
        <img src={product.image} alt={product.title} className="lg:w-[30rem] md:w-[25rem] w-[20rem]"/>
      </div>
      <div>
        <div className="text-3xl font-bold mb-4 text-gray-700">
          {product.title}
        </div>
        <div className="mb-4 text-lg">
          {product.price} <span className="font-bold">TJS</span>
        </div>
        <div className="max-w-[400px] mb-4">
          <p>{product.description}</p>
          <button className="bg-black text-white p-3 mt-3"
                  onClick={() => dispatch(add(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
