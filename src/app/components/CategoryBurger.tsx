import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CategoryBurger({
  burger,
  setBurger,
}: {
  burger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full overflow-hidden flex items-center justify-center flex-col gap-16">
      <motion.div
        className="relative flex flex-col justify-end items-center w-full h-[165px] bg-[#F1F1F1] rounded-lg pb-5 gap-3 mt-12"
        initial={{ x: -200 }}
        animate={{ x: burger ? 0 : -200 }}
        transition={{ type: 'spring', damping: 20, delay: 0.15 }}
      >
        <Image
          alt="headphones"
          src={`/shared/desktop/image-category-thumbnail-headphones.png`}
          width={147}
          height={133}
          className="absolute top-[-50px]"
        />
        <p className="text-black text-[15px] font-bold uppercase ">headphones</p>
        <Link href={`/headphones`} onClick={() => setBurger(!burger)}>
          <div className="flex gap-2 justify-end items-center  cursor-pointer">
            <p className="text-black opacity-50 text-[13px] tracking-[1px] uppercase">
              SHOP
            </p>
            <div className="relative h-[10px] w-[5px]">
              <Image alt="earphones" src={'/shared/desktop/icon-arrow-right.svg'} fill />
            </div>
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="relative flex flex-col justify-end items-center w-full h-[165px] bg-[#F1F1F1] rounded-lg pb-5 gap-3"
        initial={{ x: -200 }}
        animate={{ x: burger ? 0 : -200 }}
        transition={{ type: 'spring', damping: 20, delay: 0.25 }}
      >
        <Image
          alt="speakers"
          src={`/shared/desktop/image-category-thumbnail-speakers.png`}
          width={147}
          height={133}
          className="absolute top-[-50px]"
        />
        <p className="text-black text-[15px] font-bold uppercase ">speakers</p>
        <Link href={`/speakers`} onClick={() => setBurger(!burger)}>
          <div className="flex gap-2 justify-end items-center  cursor-pointer">
            <p className="text-black opacity-50 text-[13px] tracking-[1px] uppercase">
              SHOP
            </p>
            <Image
              alt="earphones"
              src={'/shared/desktop/icon-arrow-right.svg'}
              width={5}
              height={10}
            />
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="relative flex flex-col justify-end items-center w-full h-[165px] bg-[#F1F1F1] rounded-lg pb-5 gap-3"
        initial={{ x: -200 }}
        animate={{ x: burger ? 0 : -200 }}
        transition={{ type: 'spring', damping: 20, delay: 0.35 }}
      >
        <Image
          alt="earphones"
          src={`/shared/desktop/image-category-thumbnail-earphones.png`}
          width={147}
          height={133}
          className="absolute top-[-50px]"
        />
        <p className="text-black text-[15px] font-bold uppercase ">earphones</p>
        <Link href={`/earphones`} onClick={() => setBurger(!burger)}>
          <div className="flex gap-2 justify-end items-center  cursor-pointer">
            <p className="text-black opacity-50 text-[13px] tracking-[1px] uppercase">
              SHOP
            </p>
            <Image
              alt="earphones"
              src={'/shared/desktop/icon-arrow-right.svg'}
              width={5}
              height={10}
            />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
