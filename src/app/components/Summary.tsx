'use client';
import React, { useContext } from 'react';
import { GlobalContext } from '../Data';
import Image from 'next/image';

export default function Summary() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { cart } = context;
  return (
    <div className="flex flex-col px-6 py-8 items-center gap-8 bg-white rounded-md w-full">
      <h2>Summary</h2>
      <div className="w-full flex flex-col justify-center items-center gap-6">
        {cart.map((el) => (
          <div className="flex gap-3 items-center justify-center">
            <Image
              alt="product"
              src={el.image}
              height={64}
              width={64}
              className="rounded-md"
            />
            <div className="flex flex-col items-start justify-center text-left w-[75px]">
              <p className="text-black font-bold text-[15px]">{el.forCart}</p>
              <p className="text-black font-bold opacity-50 text-[14px]">$ {el.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
