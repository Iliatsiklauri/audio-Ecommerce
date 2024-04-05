import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import CategoryBurger from './CategoryBurger';
import { GlobalContext } from '../Data';

export default function BurgerMenu() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { burger, setBurger } = context;
  return (
    <motion.div
      className={`w-full  py-10  bg-white px-6  z-20 top-[97px] absolute`}
      initial={{ x: '-100%' }}
      animate={{ x: burger ? 0 : '-100%' }}
      transition={{ type: 'spring', damping: 20 }}
    >
      <CategoryBurger burger={burger} setBurger={setBurger} />
    </motion.div>
  );
}
