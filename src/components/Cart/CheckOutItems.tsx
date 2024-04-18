import { HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { increase, decrease, remove } from "../../redux/slice/CartSlice.tsx";
import { CartItem } from "../../models/interfaces.ts";

const CheckOutItems = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border border-solid border-glass p-4 mb-6" key={item.id}>
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover"/>
      </div>
      <div className="flex flex-col items-start max-w-[6.5rem]">
        <div>{item.title}</div>
        <div className="flex items-center gap-4 mt-2">
          <button className="w-8 h-8 text-white bg-black rounded-full"
                  onClick={() => dispatch(decrease(item))}
          >-
          </button>
          <div>{item.amount}</div>
          <button className="w-8 h-8 text-white bg-black rounded-full"
                  onClick={() => dispatch(increase(item))}
          >+
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <HiX className="cursor-pointer text-xl"
             onClick={() => dispatch(remove(item))}/>
        <div>
          {((item.price * item.amount).toFixed(2))} TJS
        </div>
      </div>
    </div>
  );
};

export default CheckOutItems;
