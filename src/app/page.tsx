'use client';

import { useContext } from 'react';
import { GlobalContext } from './Data';
import Button from './components/Button';
import Image from 'next/image';
import Category from './components/Home/Category';

export default function Home() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data } = context;
  return (
    <div className="w-full relative flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col justify-center items-center mt-44 gap-4">
        <img
          src="/home/mobile/image-header.jpg"
          alt=""
          className="absolute w-full h-auto top-0"
        />
        <h2 className="opacity-50 text-white text-[14px] tracking-[10px] uppercase ">
          NEW PRODUCT
        </h2>
        <h1 className="text-white inline  text-center tracking-[1.2px] w-full leading-[40px] font-bold text-[36px] z-10 uppercase ">
          XX99 Mark II Headphones
        </h1>
        <p className="opacity-75 text-white text-center leading-[25px] w-[90%] text-[15px]">
          Experience natural, lifelike audio and exceptional build quality made for the
          passionate music enthusiast.
        </p>
        <Button />
      </div>
      <div className="w-[90%] mt-60 flex items-center justify-center flex-col gap-28">
        <Category
          text="HEADPHONES"
          url="/shared/desktop/image-category-thumbnail-headphones.png"
        />
        <Category
          text="SPEAKERS"
          url="/shared/desktop/image-category-thumbnail-speakers.png"
        />
        <Category
          text="HEADPHONES"
          url="/shared/desktop/image-category-thumbnail-earphones.png"
        />
      </div>
      <div className="w-[90%] h-[600px] rounded-md bg-[#D87D4A] relative flex items-center justify-center flex-col gap-6 text-center px-4 text-white">
        <img
          src="/home/desktop/pattern-circles.svg"
          alt=""
          className="top-0 absolute  h-[400px] "
        />
        <Image
          alt="speaker"
          src={'/shared/desktop/image-category-thumbnail-speakers.png'}
          width={212}
          height={0}
          className=""
        />
        <h2 className="text-[36px] font-bold mx-6">ZX9 SPEAKER</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver truly
          remarkable sound.
        </p>
        <Button />
      </div>
    </div>
  );
}
