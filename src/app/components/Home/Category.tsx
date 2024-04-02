import Image from 'next/image';
import React from 'react';

type PropType = {
  url: string;
  text: string;
};

export default function Category({ url, text }: PropType) {
  return (
    <div className="relative flex flex-col justify-end items-center w-full h-[165px] bg-[#F1F1F1] rounded-lg pb-5 gap-3">
      <Image
        alt="headphones"
        src={`${url}`}
        width={147}
        height={133}
        className="absolute top-[-50px]"
      />
      <p className="text-black text-[15px] font-bold uppercase ">{text}</p>
      <div className="flex gap-2 justify-end items-center  cursor-pointer">
        <p className="text-black opacity-50 text-[13px] tracking-[1px] uppercase">SHOP</p>
        <Image
          alt="earphones"
          src={'/shared/desktop/icon-arrow-right.svg'}
          width={5}
          height={10}
        />
      </div>
    </div>
  );
}
