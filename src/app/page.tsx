'use client';

import Button from './components/Button';
import Image from 'next/image';
import Category from './components/Category';
import BestGear from './components/BestGear';
import Link from 'next/link';
import DifCategory from './components/DifCategory';
import { useContext } from 'react';
import { GlobalContext } from './Data';
import { motion } from 'framer-motion';

export default function Home() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { burger, setBurger } = context;
  return (
    <div className="w-full relative flex flex-col items-center xl:items-center justify-center gap-10 pt-32 pb-10 px-4 bg-[#FAFAFA]  xl:px-[12%] xl:gap-28">
      <div className="flex flex-col xl:self-start  justify-center xl:items-start items-center gap-6 mb-32 xl:gap-8 w-[70%] xl:w-[30%] ">
        <img
          src="/home/mobile/image-header.jpg"
          alt=""
          className="absolute w-full h-[570px] top-0  md:hidden"
        />
        <img
          src="/home/tablet/image-header.jpg"
          alt=""
          className="absolute w-full h-[570px] hidden md:block xl:hidden top-0 "
        />
        <img
          src="/home/desktop/image-hero.jpg"
          alt=""
          className="absolute w-full  left-0 hidden xl:block top-0 "
        />
        <h2 className="opacity-50 text-white text-[14px] tracking-[10px] uppercase xl:text-left ">
          NEW PRODUCT
        </h2>
        <h1 className="text-white inline  text-center tracking-[1.2px] w-full leading-[40px] font-bold text-[36px] z-10 uppercase md:text-[56px] md:tracking-[2px] md:leading-[60px] xl:text-left">
          XX99 Mark II Headphones
        </h1>
        <p className="opacity-75 text-white text-center leading-[25px] w-[90%] text-[15px] xl:text-left">
          Experience natural, lifelike audio and exceptional build quality made for the
          passionate music enthusiast.
        </p>
        <Link href={'/product/2'} className="w-[160px] z-10 bg-black">
          <Button />
        </Link>
      </div>
      <Category />
      <motion.div className="w-full hidden md:block my-10 xl:mt-14">
        <DifCategory setBurger={setBurger} home={true} />
      </motion.div>
      <div className="w-full h-[690px] rounded-md bg-[#D87D4A] relative flex items-center justify-center flex-col gap-6 md:gap-10 text-center px-4 text-white xl:overflow-hidden xl:items-center xl:justify-center xl:flex-row ">
        <img
          src="/home/desktop/pattern-circles.svg"
          alt=""
          className="absolute top-0 xl:left-[-300px] xl:top-0 md:top-[-200px] w-full "
        />
        <Image
          alt="speaker"
          src={'/shared/desktop/image-category-thumbnail-speakers.png'}
          width={212}
          height={0}
          className="absolute top-20 block md:hidden"
        />
        <Image
          alt="speaker"
          src={'/shared/desktop/image-category-thumbnail-speakers.png'}
          width={320}
          height={0}
          className="absolute top-10 hidden md:block xl:hidden"
        />

        <Image
          alt="speaker"
          src={'/home/desktop/image-speaker-zx9.png'}
          width={410}
          height={493}
          className=" z-20 hidden left-[10%] bottom-[-10px] xl:block self-end absolute"
        />

        <div className="flex flex-col items-center  justify-center gap-6 xl:items-start  xl:w-[28%] xl:justify-between h-[349px]  xl:mr-[-40%]">
          <h2 className="text-[36px] xl:text-left  font-bold mx-6 xl:mx-0 mt-48 xl:mt-0 md:text-[56px]">
            ZX9 SPEAKER
          </h2>
          <p className="text-white text-[15px] opacity-75 leading-[25px] md:w-[60%] xl:text-left xl:w-full">
            Upgrade to premium speakers that are phenomenally built to deliver truly
            remarkable sound.
          </p>
          <Link href={'/product/5'} className="z-10">
            <Button backgroud="black" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center pl-10 w-full  relative h-[320px] gap-6 ">
        <img
          src="home\mobile\image-speaker-zx7.jpg"
          alt=""
          className="absolute w-full top-0 left-0 rounded-md h-full block md:hidden"
        />
        <img
          src="home\tablet\image-speaker-zx7.jpg"
          alt=""
          className="absolute w-full top-0 left-0 rounded-md h-full md:block hidden xl:hidden"
        />
        <img
          src="home\desktop\image-speaker-zx7.jpg"
          alt=""
          className="absolute w-full top-0 left-0 rounded-md h-full xl:block hidden"
        />
        <h2 className="text-black text-[28px] font-bold tracking-[2px] z-10">
          ZX7 SPEAKER
        </h2>
        <Link href={'/product/6'} className="z-20">
          <Button backgroud="fsdd" />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-6 flex-col w-full md:flex-row xl:justify-between">
        <img
          src="home\mobile\image-earphones-yx1.jpg
        "
          className="w-full rounded-md block md:hidden"
          alt=""
        />
        <img
          src="home\tablet\image-earphones-yx1.jpg
        "
          className="w-[50%] h-[320px] rounded-md hidden md:block xl:hidden"
          alt=""
        />
        <img
          src="home\desktop\image-earphones-yx1.jpg
        "
          className="w-[50%] h-[320px] rounded-md hidden xl:block"
          alt=""
        />
        <div className="w-full bg-[#F1F1F1] pl-6 md:h-[320px] flex items-start justify-center flex-col h-[200px] md:w-[50%] xl:w-[50%] rounded-md gap-6">
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
