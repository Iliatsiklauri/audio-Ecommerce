'use client';
import { GlobalContext } from '@/app/Data';
import Alsolike from '@/app/components/Alsolike';
import BestGear from '@/app/components/BestGear';
import Button from '@/app/components/Button';
import Category from '@/app/components/Category';
import DifCategory from '@/app/components/DifCategory';
import { spread } from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContext, useState } from 'react';

export type IdType = {
  params: {
    id: string;
  };
};

export default function Page({ params }: IdType) {
  const [count, setCount] = useState(0);
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data, setCart, cart, id, setId, burger, setBurger } = context;
  const newData = data.filter((el) => el.id === Number(params.id))[0];
  const price = newData.price.toString();
  const formattedPrice =
    price.length > 3 ? `$ ${price.slice(0, -3)},${price.slice(-3)}` : `$ ${price}`;
  const halfwayIndex = newData.features.length / 2;
  const part1 = newData.features.slice(0, halfwayIndex);
  const part2 = newData.features.slice(halfwayIndex);
  return (
    <div className="flex flex-col px-4 items-start justify-center py-5 md:px-[5%]  md:gap-32 gap-20 bg-[#FAFAFA] xl:px-[12%] ">
      <div>
        <Link
          className="text-black text-[13px] opacity-50 leading-6"
          href={`/category/${newData.category}`}
        >
          Go Back
        </Link>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-12 md:gap-16 md:flex-row md:mt-[-110px] xl:items-center xl:gap-32  ">
        <img
          src={`${newData.image.mobile}`}
          alt=""
          className="rounded-md block md:hidden"
        />
        <img
          src={`${newData.image.tablet}`}
          alt=""
          className="rounded-md hidden md:block w-[281px] xl:hidden "
        />
        <img
          src={`${newData.image.desktop}`}
          alt=""
          className="rounded-md hidden xl:block xl:w-[540px]"
        />
        <div className="flex flex-col gap-6 md:gap-8 items-start justify-center md:h-full">
          {newData.new ? (
            <p className="text-[#D87D4A] tracking-[10px] text-[14px]">NEW PRODUCT</p>
          ) : null}
          <h2 className="text-black text-[28px] xl:text-[40px] font-bold tracking-[1px]">
            {newData.name}
          </h2>
          <p className="text-black opacity-50 text-[15px]">{newData.description}</p>
          <p className="text-black font-bold text-[18px] tracking-wide">
            {formattedPrice}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-12 w-[120px] bg-[#F1F1F1] flex items-center justify-around">
              <p
                className="text-black opacity-30 font-bold text-13px cursor-pointer selection:bg-black hover:opacity-100 hover:text-[#D87D4A]"
                onClick={() => setCount(count === 0 ? count : count - 1)}
              >
                -
              </p>
              <p className="font-bold text-black text-[13px]">{count}</p>
              <p
                className="text-black opacity-30 font-bold hover:opacity-100 hover:text-[#D87D4A] text-13px cursor-pointer selection:bg-black"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </p>
            </div>
            <button
              onClick={() => {
                let obj = {
                  id: id,
                  price: newData.price,
                  forCart: newData.forCart,
                  image: newData.categoryImage.mobile,
                  quantity: count,
                  total: newData.price * count,
                };
                if (count > 0) {
                  setCart([...cart, obj]);
                }
                setId((prev) => prev + 1);
              }}
            >
              <Button text="ADD TO CART" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-start justify-center xl:flex-row xl:justify-between xl:gap-40">
        <div className="w-full text-left gap-4 flex flex-col">
          <h2 className="font-bold text-[28px] leading-9 text-black">FEATURES</h2>
          <p className="text-black opacity-50 text-[15px]">{part1}</p>
          <p className="text-black opacity-50 text-[15px]">{part2}</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-6 md:flex-row md:w-[80%] md:justify-between xl:flex-col xl:w-[60%]">
          <h2 className="text-black font-bold uppercase text-[24px]">in the box</h2>
          <div className="flex flex-col gap-2 items-start">
            {newData.includes.map((el, key) => (
              <div key={key} className="flex gap-4 justify-center items-center">
                <p className="text-[#D87D4A] text-[15px] font-bold h-[25px] w-[15px]">
                  {el.quantity}x
                </p>
                <p className="text-[15px] text-black opacity-50">{el.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row xl:w-full  xl:justify-start self-center">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <img
            src={`${newData.gallery.first.mobile}`}
            alt=""
            className="rounded-md block md:hidden"
          />
          <img
            src={`${newData.gallery.first.tablet}`}
            alt=""
            className="rounded-md hidden md:block h-[174px] xl:hidden"
          />
          <img
            src={`${newData.gallery.first.desktop}`}
            alt=""
            className="rounded-md hidden xl:block "
          />
          <img
            src={`${newData.gallery.second.desktop}`}
            alt=""
            className="rounded-md hidden xl:block w-full"
          />
          <img
            src={`${newData.gallery.second.mobile}`}
            alt=""
            className="rounded-md block md:hidden"
          />
          <img
            src={`${newData.gallery.second.tablet}`}
            alt=""
            className="rounded-md hidden md:block h-[174px] xl:hidden"
          />
        </div>
        <img
          src={`${newData.gallery.third.mobile}`}
          alt=""
          className="rounded-md block md:hidden"
        />
        <img
          src={`${newData.gallery.third.tablet}`}
          alt=""
          className="rounded-md hidden md:block h-[368px] w-auto xl:hidden"
        />
        <img
          src={`${newData.gallery.third.desktop}`}
          alt=""
          className="rounded-md hidden xl:block"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-9 md:hidden">
        <h1 className="text-black font-bold text-[24px] uppercase">you may also like</h1>
        <div className="flex flex-col items-center justify-center gap-9 md:flex-row md:gap-[11px] xl:gap-[30px]">
          {newData.others.map((el, key) => (
            <Alsolike
              title={`${el.name}`}
              url={`${el.image.mobile}`}
              key={key}
              url1={`${el.image.tablet}`}
              url2={`${el.image.desktop}`}
            />
          ))}
        </div>
      </div>
      <motion.div className=" flex-col items-center justify-center gap-9 hidden md:flex">
        <h1 className="text-black font-bold text-[24px] uppercase">you may also like</h1>
        <div className="flex flex-col items-center justify-center gap-9 md:flex-row md:gap-[11px] xl:gap-[30px]">
          {newData.others.map((el, key) => (
            <Alsolike
              title={`${el.name}`}
              url={`${el.image.mobile}`}
              key={key}
              url1={`${el.image.tablet}`}
              url2={`${el.image.desktop}`}
            />
          ))}
        </div>
      </motion.div>
      <Category />
      <motion.div className="hidden w-full md:block">
        <DifCategory setBurger={setBurger} />
      </motion.div>
      <BestGear />
    </div>
  );
}
