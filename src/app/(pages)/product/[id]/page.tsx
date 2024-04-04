'use client';
import { DataType, GlobalContext } from '@/app/Data';
import BestGear from '@/app/components/BestGear';
import Category from '@/app/components/Category';
import { useContext, useState } from 'react';

type ParamsType = {
  params: {
    id: string;
  };
};

export default function page({ params }: ParamsType) {
  const [obj, setObj] = useState();
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data } = context;
  const newData = data.filter((el) => el.id === Number(params.id));

  return (
    <div className="flex flex-col px-4 items-center justify-center">
      {newData[0].name}
      <Category />
      <BestGear />
    </div>
  );
}
