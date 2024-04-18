import { HiChevronLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { openToggleCard } from "../../redux/slice/ProductCartSlice.tsx";

import { RootState } from "../../redux/Store.tsx";
import CheckOutItems from "./CheckOutItems.tsx";


export const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state: RootState) => state.card);

  return (
    <>
      <div className="bg-transparentDark fixed z-30 top-0 left-0 w-full h-screen ">
        <div className="h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer"
                   onClick={() => dispatch(openToggleCard())}
              >
                <HiChevronLeft/>
                <span className="uppercase text-[0.9rem] select-none">Продолжить покупку</span>
              </div>
              <div>
                Shopping Bag ({cartItems.reduce((total, item) => total + item.amount, 0)})
              </div>
            </div>
          </div>
          <div className="mt-8">
            {
              cartItems.length === 0 ? (
                <div className="uppercase text-center text-3xl">
                  Корзина Пустая
                </div>
              ) : (
                <>
                  {
                    cartItems.map((item) => {
                      return (
                        <CheckOutItems key={item.id} item={item}/>
                      )
                    })
                  }
                  <div className="flex justify-between mt-12">
                    <div>Общая сумма: {total.toFixed(2)}</div>
                  </div>
                  <div className="text-center cursor-pointer bg-black text-white p-3 mt-6">
                    Купить
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};