'use client';
import { ReactNode, useState } from 'react';
import { DataType, GlobalContext } from './Data';
import res from '@/app/data.json';
import Header from './components/Header';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import CategoryBurger from './components/CategoryBurger';

export default function Parent({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataType[]>(res);
  const [cart, setCart] = useState<[]>([]);
  const [burger, setBurger] = useState(false);
  return (
    <GlobalContext.Provider value={{ data, setData, cart, setCart }}>
      <div className="flex flex-col items-center justify-center w-full relative ">
        <Header burger={burger} setBurger={setBurger} />
        <div
          className={`${
            burger ? 'block' : 'hidden'
          } h-full w-full absolute top-0 bg-black z-20 opacity-25`}
        ></div>
        <motion.div
          className={`w-full  py-10  bg-white px-6  z-20 top-[97px] absolute`}
          initial={{ x: '-100%' }}
          animate={{ x: burger ? 0 : '-100%' }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <CategoryBurger burger={burger} setBurger={setBurger} />
        </motion.div>
        <div
          className={`${burger ? 'h-[700px] overflow-hidden' : 'h-full overflow-auto'}`}
        >
          {children}
        </div>
        <div className={`${burger ? 'hidden' : 'block'}`}>
          <Footer />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
