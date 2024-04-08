'use client';
import { ReactNode, useState } from 'react';
import { CartType, DataType, GlobalContext } from './Data';
import res from '@/app/data.json';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import BurgerMenu from './components/BurgerMenu';
import DarkBg from './components/DarkBg';
import CheckModal from './components/CheckModal';

export default function Parent({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataType[]>(res);
  const [burger, setBurger] = useState(false);
  const [cart, setCart] = useState<CartType[] | []>([]);
  const [cartMode, setCartMode] = useState<boolean>(false);
  const [id, setId] = useState(1);
  const [num, setNum] = useState(0);
  const [checkout, setCheckout] = useState(false);
  // const [total]

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        cartMode,
        burger,
        setBurger,
        setCartMode,
        id,
        setId,
        num,
        setNum,
        checkout,
        setCheckout,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full relative">
        <Header />
        <DarkBg />
        <CheckModal />
        <Cart
          burger={burger}
          cartMode={cartMode}
          cart={cart}
          setCart={setCart}
          setId={setId}
          setBurger={setBurger}
          setCartMode={setCartMode}
          num={num}
          setNum={setNum}
        />
        <BurgerMenu />

        <div
          className={`${
            burger || cartMode
              ? 'h-[783px] overflow-hidden w-full'
              : 'h-full overflow-auto w-full'
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
