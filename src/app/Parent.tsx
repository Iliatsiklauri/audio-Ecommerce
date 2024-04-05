'use client';
import { ReactNode, useState } from 'react';
import { CartType, DataType, GlobalContext } from './Data';
import res from '@/app/data.json';
import Header from './components/Header';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import Cart from './components/Cart';
import BurgerMenu from './components/BurgerMenu';
import DarkBg from './components/DarkBg';

export default function Parent({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataType[]>(res);
  const [burger, setBurger] = useState(false);
  const [cart, setCart] = useState<CartType[] | []>([]);
  const [cartMode, setCartMode] = useState<boolean>(false);
  return (
    <GlobalContext.Provider
      value={{ data, setData, cart, setCart, cartMode, burger, setBurger, setCartMode }}
    >
      <div className="flex flex-col items-center justify-center w-full relative">
        <Header />
        <DarkBg />
        <Cart />
        <BurgerMenu />

        <div
          className={`${
            burger || cartMode ? 'h-[783px] overflow-hidden' : 'h-full overflow-auto'
          }`}
        >
          {children}
        </div>
        <div className={`${burger || cartMode ? 'hidden' : 'block'}`}>
          <Footer />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
