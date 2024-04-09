import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect } from 'react';
import Button from './Button';
import Image from 'next/image';
import CartSection from './CartSection';
import { CartType } from '../Data';
import Link from 'next/link';
type PropType = {
  cart: CartType[] | [];
  setCart: Dispatch<SetStateAction<CartType[] | []>>;
  burger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
  cartMode: boolean;
  setCartMode: React.Dispatch<React.SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<number>>;
  num: any;
  setNum: Dispatch<SetStateAction<any>>;
};
export default function Cart({
  burger,
  cartMode,
  cart,
  setCart,
  setId,
  setCartMode,
  num,
  setNum,
}: PropType) {
  useEffect(() => {
    let number = 0;
    if (cart) {
      cart.forEach((el) => {
        number += el.total;
      });
      setNum(number.toLocaleString());
    }
  }, [cart]);

  return (
    <motion.div
      className="px-6 max-w-[377px] absolute w-[90%] rounded-md bg-white z-30 top-[107px] md:right-[3%]"
      initial={{ y: '-200%' }}
      animate={{
        y: cartMode ? 0 : '-200%',
      }}
      transition={{ type: 'spring', damping: 20, delay: burger ? 0 : 0.15 }}
    >
      <div className="flex items-start flex-col justify-center h-full w-full relative pt-20 pb-8 gap-6">
        <div className="w-full flex items-center justify-between absolute top-6">
          <h2 className="text-lg font-bold text-black">Cart ({cart.length})</h2>
          <p
            className="text-black opacity-50 underline text-[15px] cursor-pointer"
            onClick={() => {
              setCart([]);
              setId(1);
            }}
          >
            Remove All
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          {cart?.map((el, key) => (
            <CartSection el={el} key={key} />
          ))}
        </div>
        {cart.length === 0 ? (
          <div className="flex justify-center w-full items-center">
            <p className="text-left w-[190px] opacity-50 text-xl">Your cart is empty</p>
            <div className="relative h-[20px] w-[23px]">
              <Image
                src={'/shared/desktop/icon-cart.svg'}
                alt="cart"
                width={23}
                height={20}
              />
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-between items-center">
            <h2 className="opacity-50 text-black text-15px">TOTAL</h2>
            <h2 className="text-black font-bold text-lg">$ {num}</h2>
          </div>
        )}
        {cart.length > 0 ? (
          <Link href={'/checkout'} className="w-full" onClick={() => setCartMode(false)}>
            <Button text="CHECKOUT" width="1" />
          </Link>
        ) : (
          <div className="w-full">
            <Button text="CHECKOUT" width="1" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
