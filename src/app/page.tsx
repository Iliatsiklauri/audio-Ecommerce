'use client';

import { useContext } from 'react';
import { GlobalContext } from './Data';
import Button from './components/Button';
import Image from 'next/image';
import Category from './components/Category';
import BestGear from './components/BestGear';
import Link from 'next/link';

export default function Home() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data } = context;
  return (
    <div className="w-full relative flex flex-col items-center justify-center gap-10 pt-32 pb-10 px-4 bg-[#FAFAFA]">
      <div className="flex flex-col justify-center items-center gap-4 mb-32">
        <img
          src="/home/mobile/image-header.jpg"
          alt=""
          className="absolute w-full h-[570px] top-0"
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
        <Link href={'/product/2'} className="w-[160px] z-10 bg-black">
          <Button />
        </Link>
      </div>
      <Category />
      <div className="w-full h-[600px] rounded-md bg-[#D87D4A] relative flex items-center justify-center flex-col gap-6 text-center px-4 text-white ">
        <img
          src="/home/desktop/pattern-circles.svg"
          alt=""
          className="absolute top-0  w-full "
        />
        <Image
          alt="speaker"
          src={'/shared/desktop/image-category-thumbnail-speakers.png'}
          width={212}
          height={0}
          className="absolute top-20"
        />
        <h2 className="text-[36px] font-bold mx-6 mt-48">ZX9 SPEAKER</h2>
        <p className="text-white text-[15px] opacity-75 leading-[25px]">
          Upgrade to premium speakers that are phenomenally built to deliver truly
          remarkable sound.
        </p>
        <Link href={'/product/5'}>
          <Button backgroud="black" />
        </Link>
      </div>
      <div className="flex flex-col items-start justify-center pl-10 w-full  relative h-[320px] gap-6">
        <img
          src="home\mobile\image-speaker-zx7.jpg"
          alt=""
          className="absolute w-full top-0 left-0 rounded-md h-full"
        />
        <h2 className="text-black text-[28px] font-bold tracking-[2px] z-10">
          ZX7 SPEAKER
        </h2>
        <Link href={'/product/6'} className="z-20">
          <Button backgroud="fsdd" />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-6 flex-col w-full">
        <img
          src="home\mobile\image-earphones-yx1.jpg
        "
          className="w-full rounded-md"
          alt=""
        />
        <div className="w-full bg-[#F1F1F1] pl-6 flex items-start justify-center flex-col h-[200px] rounded-md gap-6">
          <h2 className="text-black text-[28px] font-bold tracking-[2px] z-10">
            YX1 EARPHONES
          </h2>
          <Link href={'/product/1'}>
            <Button backgroud="transparent" />
          </Link>
        </div>
      </div>
      <BestGear />
    </div>
  );
}
