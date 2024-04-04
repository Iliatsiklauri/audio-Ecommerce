import React from 'react';

export default function BestGear() {
  return (
    <div className="flex justify-center items-center flex-col gap-6 w-full text-center">
      <img src="shared\mobile\image-best-gear.jpg" alt="" className="rounded-md" />
      <div className="flex items-center justify-center gap-6 flex-col ">
        <h2 className="text-[28px] font-bold text-black tracking-[1px] uppercase">
          Bringing you the
          <span className="text-[#D87D4A]"> best </span>
          audio gear
        </h2>
        <p className="text-black opacity-50 text-[15px] leading-5">
          Located at the heart of New York City, Audiophile is the premier store for high
          end headphones, earphones, speakers, and audio accessories. We have a large
          showroom and luxury demonstration rooms available for you to browse and
          experience a wide range of our products. Stop by our store to meet some of the
          fantastic people who make Audiophile the best place to buy your portable audio
          equipment.
        </p>
      </div>
    </div>
  );
}
