import { motion } from 'framer-motion';
import { GlobalContext } from '../Data';
import { useContext } from 'react';
import Button from './Button';
import Image from 'next/image';
import { count } from 'console';

export default function Cart() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { burger, cartMode, cart, setCart } = context;
  return (
    <motion.div
      className="px-7  absolute w-[90%] rounded-md bg-white z-30 top-[107px]"
      initial={{ y: '-200%' }}
      animate={{
        y: cartMode ? 0 : '-200%',
      }}
      transition={{ type: 'spring', damping: 20, delay: burger ? 0 : 0.15 }}
    >
      <div className="flex  items-start flex-col justify-center  h-full w-full relative pt-16 pb-8 gap-4">
        <div className="w-full flex items-center justify-between  absolute  top-6">
          <h2 className="text-lg font-bold text-black">Cart ({cart.length})</h2>
          <p
            className="text-black opacity-50 underline text-[15px] cursor-pointer"
            onClick={() => setCart([])}
          >
            Remove All
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          {cart?.map((el, key) => (
            <div key={key} className="w-full flex justify-between items-center ">
              <Image
                alt="product"
                src={`${el.image}`}
                height={64}
                width={64}
                className="rounded-md"
              />
              <div>
                <p>{el.name}</p>
                <p>{el.price}</p>
              </div>
              <p>{el.quantity}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center">
          <h2 className="opacity-50 text-black text-15px">TOTAL</h2>
        </div>
        <div className="w-full">
          <Button text="CHECKOUT" width="1" />
        </div>
      </div>
    </motion.div>
  );
}
