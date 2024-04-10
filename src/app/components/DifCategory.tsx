'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type PropType = {
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
  home?: boolean;
};

export default function DifCategory({ setBurger }: PropType) {
  return (
    <div className="w-full  flex items-center justify-center  gap-[10px] flex-row ">
      <motion.div className="relative flex flex-col justify-end items-center w-full h-[165px] bg-[#F1F1F1] rounded-lg pb-5 gap-3 ">
        <Image
          alt="headphones"
          src={`/shared/desktop/image-category-thumbnail-headphones.png`}
          width={147}
          height={133}
          className="absolute top-[-50px]"
        />
        <p className="text-black text-[15px] font-bold uppercase ">headphones</p>
        <Link
          href={`/category/headphones`}
          className="cursor-pointer z-20"
          onClick={() => setBurger(false)}
        >
          <div className="flex gap-2 justify-end items-center  cursor-pointer">
            <p className="text-black opacity-50 text-[13px] tracking-[1px] uppercase hover:text-[#D87D4A] hover:opacity-100">
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
      <motion.div className="relative flex flex-col justify-end items-center w-full h-[165px] bg-[#F1F1F1] rounded-lg pb-5 gap-3">
        <Image
          alt="speakers"
          src={`/shared/desktop/image-category-thumbnail-speakers.png`}
          width={147}
          height={133}
          className="absolute top-[-50px]"
        />
        <p className="text-black text-[15px] font-bold uppercase ">speakers</p>
        <Link
          href={`/category/speakers`}
          className="cursor-pointer z-20"
          onClick={() => setBurger(false)}
        >
          <div className="flex gap-2 justify-end items-center  cursor-pointer">
            <p className="text-black opacity-50 text-[13px] tracking-[1px] uppercase hover:text-[#D87D4A] hover:opacity-100">
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
      <motion.div className="relative flex flex-col justify-end items-center w-full h-[165px] bg-[#F1F1F1] rounded-lg pb-5 gap-3">
        <Image
          alt="earphones"
          src={`/shared/desktop/image-category-thumbnail-earphones.png`}
          width={147}
          height={133}
          className="absolute top-[-50px]"
        />
        <p className="text-black text-[15px] font-bold uppercase ">earphones</p>
        <Link
          href={`/category/earphones`}
          className="cursor-pointer z-20"
          onClick={() => setBurger(false)}
        >
          <div className="flex gap-2 justify-end items-center  cursor-pointer">
            <p className="text-black opacity-50 text-[13px] tracking-[1px] uppercase hover:text-[#D87D4A] hover:opacity-100">
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
