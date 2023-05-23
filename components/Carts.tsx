import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

interface CartProps {
  image: string;
  updateTotalCount: (count: number, price: number) => void; // Update the function signature
  price: number;
}

const Carts: React.FC<CartProps> = ({ image, updateTotalCount, price }) => {
  const [minusEnabled, setMinusEnabled] = useState(false);
  const [count, setCount] = useState(1);

  const minusCount = () => {
  if (count === 1) return;
  if (count - 1 === 1) {
    setCount(count - 1);
    setMinusEnabled(false);
  } else {
    setCount(count - 1);
  }
  updateTotalCount(-1, price); // Pass both count and price
  };

  const incrementCount = () => {
  setCount(count + 1);
  setMinusEnabled(true);
  updateTotalCount(1, price); // Pass both count and price
  };

  return (
    <div className="bg-[#d9d9d9] w-full h-[200px] flex flex-row justify-between items-center px-20">
      <div className="bg-[#e1acac] w-[300px] h-[160px] rounded-2xl">
        <img className="w-full h-full" src={image} alt="Product" />
      </div>
      <div className="inline-flex h-[40px] flex-row items-center gap-2">
        <div
          onClick={minusCount}
          className={
            minusEnabled
              ? "h-full w-[40px] bg-[#7e0000] text-white text-2xl flex justify-center items-center rounded-md"
              : "h-full w-[40px] bg-[#7e0000] text-white text-2xl flex justify-center items-center rounded-md cursor-not-allowed"
          }
        >
          <FaMinus />
        </div>
        <div className="font-medium text-2xl flex items-center justify-center bg-white text-black h-full w-[60px] rounded-md">
          <p>{count}</p>
        </div>
        <div
          onClick={incrementCount}
          className="h-full w-[40px] bg-[#7e0000] text-white text-2xl flex justify-center items-center rounded-md"
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default Carts;
