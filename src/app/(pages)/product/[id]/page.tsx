'use client';
import { DataType, GlobalContext } from '@/app/Data';
import BestGear from '@/app/components/BestGear';
import Category from '@/app/components/Category';
import { useSearchParams } from 'next/navigation';
import { useContext, useState } from 'react';

type ParamsType = {
  params: {
    id: string;
  };
};

export default function page({ params }: ParamsType) {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data } = context;
  const newData = data.filter((el) => el.id === Number(params.id));
  const [obj, setObj] = useState(newData[0]);

  console.log(obj);
  return (
    <div className="flex flex-col px-4 items-center justify-center">
      {newData[0].name}
      <Category />
      <BestGear />
    </div>
  );
}
