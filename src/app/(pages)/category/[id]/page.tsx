'use client';
import React, { useContext } from 'react';
import { IdType } from '../../product/[id]/page';
import Category from '@/app/components/Category';
import BestGear from '@/app/components/BestGear';
import { GlobalContext } from '@/app/Data';
import SingleItem from '@/app/components/SingleItem';
import Which from '@/app/components/Which';
import DifCategory from '@/app/components/DifCategory';
import { motion } from 'framer-motion';

export default function Page({ params }: IdType) {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data, burger, setBurger } = context;
  const newData = data.filter((el) => el.category === params.id);
  return (
    <div className="flex relative flex-col gap-32  items-center justify-center py-10 px-4 bg-[#FAFAFA] xl:px-[12%]">
      <Which text={params.id} />
      <div className="flex flex-col items-center justify-center gap-28 mt-28">
        {newData.map((el) => (
          <SingleItem
            key={el.id}
            id={el.id}
            newItem={el.new}
            text={`${el.description}`}
            title={`${el.name}`}
            url={`${el.image.mobile}`}
            url1={`${el.categoryImage.tablet}`}
            url2={`${el.categoryImage.desktop}`}
          />
        ))}
      </div>
      <Category />
      <motion.div className="hidden md:block w-full mb-[-40px]">
        <DifCategory setBurger={setBurger} home={false} />
      </motion.div>
      <BestGear />
    </div>
  );
}
