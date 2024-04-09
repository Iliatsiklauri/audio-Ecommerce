import React, { useContext } from 'react';
import { GlobalContext } from '../Data';
import { motion } from 'framer-motion';

export default function DarkBg() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { burger, cartMode, setCartMode } = context;
  return (
    <motion.div
      className={`
  ${cartMode || burger ? 'block' : 'hidden'}

   h-full w-full absolute top-0  z-20 bg-black`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: burger || cartMode ? 0.5 : 0,
      }}
      transition={{ type: 'spring', damping: 20 }}
      onClick={() => setCartMode(false)}
    ></motion.div>
  );
}
