'use client';
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { DataType, GlobalContext } from '../Data';
import Image from 'next/image';
import Button from './Button';
import { FieldErrors } from 'react-hook-form';
type PropType = {
  errors: FieldErrors<DataType>;
  hasErrors: boolean;
};
export default function Summary({ errors, hasErrors }: PropType) {
  useEffect(() => {
    if (hasErrors) {
      setCheckout(false);
      console.log('errors');
    }
  }, [hasErrors]);

  const context = useContext(GlobalContext);
  if (!context) return null;
  const { cart, num, setCheckout } = context;

  let numericValue = num.length > 1 ? parseInt(num.replace(',', '')) : 0;
  let result = numericValue / 5;
  let Total = (numericValue + 50).toLocaleString();

  return (
    <div className="flex   flex-col px-6 py-8 items-start gap-6 bg-white rounded-md w-full z-0">
      <h2 className="text-black font-bold text-lg ">Summary</h2>
      <div className="w-full flex flex-col justify-center items-center gap-6">
        {cart.map((el, key) => (
          <div key={key} className="flex gap-3 items-center justify-between  w-full">
            <div className="flex gap-4">
              <Image
                alt="product"
                src={el.image}
                height={64}
                width={64}
                className="rounded-md"
              />
              <div className="flex flex-col items-start justify-center text-left w-[75px]">
                <p className="text-black font-bold text-[15px]">{el.forCart}</p>
                <p className="text-black font-bold opacity-50 text-[14px]">
                  $ {el.price}
                </p>
              </div>
            </div>
            <p className="text-black font-bold text-[15px] text-opacity-50">
              x{el.quantity}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <div className="w-full flex justify-between items-center">
          <p className="text-black opacity-50 text-[15px]">TOTAL</p>
          <p className="text-black font-bold text-lg">${num}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-black opacity-50 text-[15px]">SHIPPING</p>
          <p className="text-black font-bold text-lg">$50</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-black opacity-50 text-[15px]">VAT (INCLUDED)</p>
          <p className="text-black font-bold text-lg">${result}</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-black opacity-50 text-[15px]">GRANT TOTAL</p>
        <p className="text-[#D87D4A] font-bold text-lg">${Total}</p>
      </div>
      <button
        className="w-full"
        onClick={() => {
          if (!hasErrors) {
            setCheckout(true);
            // console.log(hasErrors);
          }
        }}
      >
        <Button width="1" text="CONTINUE & PAY" />
      </button>
    </div>
  );
}
