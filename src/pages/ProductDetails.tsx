import { RootState } from "../redux/Store";
import { useEffect } from "react";
import { loadProducts } from "../redux/slice/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { add } from "../redux/slice/CartSlice";

export const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state: RootState) => state.products.products.find(p => p.id === Number(id)));
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    dispatch(loadProducts() as any );
  }, [dispatch]);

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex space-x-10 items-center justify-center p-4">
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : !product ? (
        <div>Product not found</div>
      ) : (
        <>
          <div className="lg:flex items-center justify-center relative">
            <Link to="/" className="self-start absolute left-0 -top-16">
              <button className="bg-grey p-3 button hover:bg-transparentDark hover:text-grey transition">
                Назад
              </button>
            </Link>
            <img src={product.image} alt={product.title} className="lg:w-[30rem] md:w-[25rem] w-[20rem]" />
          </div>
          <div>
            <div className="text-3xl font-bold mb-4 text-gray-700">
              {product.title}
            </div>
            <div className="mb-4 text-lg">
              {product.price} <span className="font-bold">TJS</span>
            </div>
            <div className="max-w-[400px] mb-4">
              <p className="mb-4">{product.description}</p>
              <button
                className="bg-grey p-3 button hover:bg-transparentDark hover:text-grey transition"
                onClick={() => dispatch(add({ ...product, amount: 1 }))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
