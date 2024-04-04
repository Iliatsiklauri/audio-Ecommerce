'use client';
import { DataType, GlobalContext } from '@/app/Data';
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
  const [obj, setObj] = useState();
  const context = useContext(GlobalContext);

  if (!context) return null;

  const { data } = context;
  const newData = data.filter((el) => el.id === Number(params.id))[0];
  const price = newData.price.toString();
  const formattedPrice =
    price.length > 3 ? `$ ${price.slice(0, -3)},${price.slice(-3)}` : `$ ${price}`;

  return (
    <div className="flex flex-col px-4 items-start justify-center py-5 gap-10">
      <Link
        className="text-black text-[13px] opacity-50 leading-6"
        href={`/${newData.category}`}
      >
        Go Back
      </Link>
      <div className="w-full flex flex-col items-start justify-center gap-12 mb-8">
        <img src={`${newData.image.mobile}`} alt="" className="rounded-md" />
        {newData.new ? (
          <p className="text-[#D87D4A] tracking-[10px] text-[14px]">NEW PRODUCT</p>
        ) : null}
        <div className="flex flex-col gap-6 items-start ustify-center ">
          <h2 className="text-black text-[28px] font-bold tracking-[1px]">
            {newData.name}
          </h2>
          <p className="text-black opacity-50 text-[15px]">{newData.description}</p>
          <p className="text-blac font-bold text-[18px] tracking-wide">
            {formattedPrice}
          </p>
          <Link href={`/product/${newData.id}`}>
            <Button />
          </Link>
        </div>
      </div>
      <Category />
      <BestGear />
    </div>
  );
}
