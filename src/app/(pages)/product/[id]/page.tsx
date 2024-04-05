'use client';
import { DataType, GlobalContext } from '@/app/Data';
import Alsolike from '@/app/components/Alsolike';
import BestGear from '@/app/components/BestGear';
import Button from '@/app/components/Button';
import Category from '@/app/components/Category';
import Link from 'next/link';
import { useContext, useState } from 'react';

type ParamsType = {
  params: {
    id: string;
  };
};

export default function Page({ params }: ParamsType) {
  const [count, setCount] = useState(0);
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data, setCart, cart } = context;
  const newData = data.filter((el) => el.id === Number(params.id))[0];
  const price = newData.price.toString();
  const formattedPrice =
    price.length > 3 ? `$ ${price.slice(0, -3)},${price.slice(-3)}` : `$ ${price}`;
  const halfwayIndex = newData.features.length / 2;
  const part1 = newData.features.slice(0, halfwayIndex);
  const part2 = newData.features.slice(halfwayIndex);
  return (
    <div className="flex flex-col px-4 items-start justify-center py-5 gap-16 bg-[#FAFAFA]">
      <div>
        <Link
          className="text-black text-[13px] opacity-50 leading-6"
          href={`/${newData.category}`}
        >
          Go Back
        </Link>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-12 ">
        <img src={`${newData.image.mobile}`} alt="" className="rounded-md" />
        <div className="flex flex-col gap-6 items-start ustify-center ">
          {newData.new ? (
            <p className="text-[#D87D4A] tracking-[10px] text-[14px]">NEW PRODUCT</p>
          ) : null}
          <h2 className="text-black text-[28px] font-bold tracking-[1px]">
            {newData.name}
          </h2>
          <p className="text-black opacity-50 text-[15px]">{newData.description}</p>
          <p className="text-blac font-bold text-[18px] tracking-wide">
            {formattedPrice}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-12 w-[120px] bg-[#F1F1F1] flex items-center justify-around">
              <p
                className="text-black opacity-30 font-bold text-13px cursor-pointer selection:bg-black"
                onClick={() => setCount(count === 0 ? count : count - 1)}
              >
                -
              </p>
              <p className="font-bold text-black text-[13px]">{count}</p>
              <p
                className="text-black opacity-30 font-bold text-13px cursor-pointer selection:bg-black"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </p>
            </div>
            <button
              onClick={() => {
                let obj = {
                  price: newData.price,
                  name: newData.name,
                  image: newData.categoryImage.mobile,
                  quantity: count,
                };
                if (count > 0) {
                  setCart([...cart, obj]);
                  setCount(0);
                }
              }}
            >
              <Button text="ADD TO CART" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-start justify-center">
        <div className="w-full text-left gap-4 flex flex-col">
          <h2 className="font-bold text-[28px] leading-9 text-black">FEATURES</h2>
          <p className="text-black opacity-50 text-[15px]">{part1}</p>
          <p className="text-black opacity-50 text-[15px]">{part2}</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-6">
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
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={`${newData.gallery.first.mobile}`} alt="" className="rounded-md" />
          <img src={`${newData.gallery.second.mobile}`} alt="" className="rounded-md" />
        </div>
        <img src={`${newData.gallery.third.mobile}`} alt="" className="rounded-md" />
      </div>
      <div className="flex flex-col items-center justify-center gap-9">
        {newData.others.map((el, key) => (
          <Alsolike title={`${el.name}`} url={`${el.image.mobile}`} key={key} />
        ))}
      </div>
      <Category />
      <BestGear />
    </div>
  );
}
