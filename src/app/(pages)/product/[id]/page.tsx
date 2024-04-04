'use client';
import { GlobalContext } from '@/app/Data';
import { useContext } from 'react';

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
  return <div>{newData[0].name}</div>;
}
