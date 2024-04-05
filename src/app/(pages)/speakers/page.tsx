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
  const newData = data.filter((el) => el.category === 'speakers');
  return (
    <div className="px-4 flex flex-col items-center justify-center py-10 gap-24 bg-[#FAFAFA]">
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
