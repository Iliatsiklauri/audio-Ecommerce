import React from 'react';

export default function BestGear() {
  return (
    <div className="flex justify-center items-center flex-col gap-6 w-full text-center xl:flex-row-reverse xl:justify-end xl:text-left xl:mb-20 relative xl:h-[588px]">
      <img
        src="/shared/mobile/image-best-gear.jpg"
        alt=""
        className="rounded-md md:hidden"
      />
      <img
        src="/shared/tablet/image-best-gear.jpg"
        alt=""
        className="rounded-md md:block hidden mt-10 xl:hidden"
      />
      <img
        src="/shared/desktop/image-best-gear.jpg"
        alt=""
        className="rounded-md  hidden mt-10 xl:mt-0 xl:block xl:w-[50%] absolute right-[0] h-auto"
      />
      <div className="flex items-center justify-center gap-6 md:gap-8 md:mb-10 flex-col xl:w-[40%] xl:justify-between">
        <h2 className="text-[28px] md:text-[40px] font-bold text-black tracking-[1px] uppercase md:w-[70%] xl:w-full ">
          Bringing you the
          <span className="text-[#D87D4A]"> best </span>
          audio gear
        </h2>
        <p className="text-black xl:w-full opacity-50 text-[15px] leading-5 md:w-[80%]">
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
