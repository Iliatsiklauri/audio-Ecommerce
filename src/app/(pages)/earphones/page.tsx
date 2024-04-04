'use client';
import { GlobalContext } from '@/app/Data';
import BestGear from '@/app/components/BestGear';
import Category from '@/app/components/Category';
import SingleItem from '@/app/components/SingleItem';
import { useContext } from 'react';

export default function Page() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data } = context;
  const newData = data.filter((el) => el.category === 'earphones');
  return (
    <div className="flex flex-col gap-32 items-center justify-center py-10 px-4">
      {newData.map((el) => (
        <SingleItem
          key={el.id}
          id={el.id}
          newItem={el.new}
          text={`${el.description}`}
          title={`${el.name}`}
          url={`${el.image.mobile}`}
        />
      ))}
      <Category />
      <BestGear />
    </div>
  );
}
