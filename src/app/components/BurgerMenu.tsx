import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import CategoryBurger from './CategoryBurger';
import { GlobalContext } from '../Data';
import DifCategory from './DifCategory';

export default function BurgerMenu() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { burger, setBurger } = context;
  return (
    <div className="w-full">
      <motion.div
        className={`w-full  py-10  bg-white px-6  z-20 top-[97px] absolute md:hidden`}
        initial={{ x: '-100%' }}
        animate={{ x: burger ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <CategoryBurger burger={burger} setBurger={setBurger} />
      </motion.div>
      <motion.div
        className={`w-full  py-20  bg-white px-6  z-20 top-[97px] absolute hidden md:block`}
        initial={{ y: '-101%' }}
        animate={{ y: burger ? 0 : '-101%' }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <DifCategory burger={burger} setBurger={setBurger} />
      </motion.div>
    </div>
  );
}
