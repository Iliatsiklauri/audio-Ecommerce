import { useContext, useState } from 'react';
import { CartType, GlobalContext } from '../Data';
import Image from 'next/image';

export default function CartSection({ el }: { el: CartType }) {
  const [count, setCount] = useState(el.quantity);
  const context = useContext(GlobalContext);

  if (!context) return null;

  const { cart, setCart } = context;

  const increase = () => {
    if (count < 9) {
      setCount((prev) => prev + 1);
      updateCart(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      updateCart(count - 1);
    }
  };

  const updateCart = (newCount: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === el.id) {
        return {
          ...item,
          quantity: newCount,
          total: newCount * el.price,
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-3 items-center justify-center">
        <Image
          alt="product"
          src={el.image}
          height={64}
          width={64}
          className="rounded-md"
        />
        <div className="flex flex-col items-start justify-center text-left w-[75px]">
          <p className="text-black font-bold text-[15px]">{el.forCart}</p>
          <p className="text-black font-bold opacity-50 text-[14px]">$ {el.price}</p>
        </div>
      </div>
      <div className="w-24 h-8 justify-around bg-[#F1F1F1] flex items-center">
        <p className="text-black opacity-25 font-bold cursor-pointer" onClick={decrease}>
          -
        </p>
        <p className="text-black font-bold">{count}</p>
        <p className="text-black opacity-25 font-bold cursor-pointer" onClick={increase}>
          +
        </p>
      </div>
    </div>
  );
}
