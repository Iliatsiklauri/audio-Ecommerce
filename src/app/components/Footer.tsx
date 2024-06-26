import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full h-[655px] flex flex-col items-center justify-around bg-[#101010] xl:px-[12%] relative text-center px-6  md:items-start md:h-[400px] xl:h-[365px]">
      <div className="absolute top-0 h-1 w-1/4 bg-[#D87D4A] xl:w-[10%]"></div>
      <Image
        src={'/shared/desktop/logo.svg'}
        alt="logo"
        width={143}
        height={25}
        className="cursor-pointer"
      />
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-[54px] xl:absolute xl:top-[40px] xl:right-[12%] ">
        <Link href={'/'}>
          <p className="text-white font-bold text-[13px] leading-5 uppercase cursor-pointer hover:text-[#D87D4A] hover:opacity-100">
            home
          </p>
        </Link>
        <Link href={'/category/headphones'}>
          <p className="text-white font-bold text-[13px] leading-5 uppercase cursor-pointer">
            HEADPHONES
          </p>
        </Link>
        <Link href={'/category/speakers'}>
          <p className="text-white font-bold text-[13px] leading-5 uppercase cursor-pointer hover:text-[#D87D4A] hover:opacity-100">
            SPEAKERS
          </p>
        </Link>
        <Link href={'/category/earphones'}>
          <p className="text-white font-bold text-[13px] leading-5 uppercase cursor-pointer hover:text-[#D87D4A] hover:opacity-100">
            EARPHONES
          </p>
        </Link>
      </div>
      <p className="opacity-50 text-white text-[15px] md:text-left xl:w-[50%] ">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small
        team of music lovers and sound specialists who are devoted to helping you get the
        most out of personal audio. Come and visit our demo facility - we&apos;re open 7
        days a week.
      </p>
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:justify-between md:w-full md:pr-5 md:pb-4">
        <p className="font-bold text-white text-[15px] opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex items-center justify-center gap-4">
          <Image
            alt="facebook"
            src={'/shared/desktop/icon-facebook.svg'}
            width={24}
            height={24}
          />
          <Image
            alt="twitter"
            src={'/shared/desktop/icon-twitter.svg'}
            width={24}
            height={24}
            className=""
          />
          <div className="w-6 h-6 relative">
            <Image alt="instagram" src={'/shared/desktop/icon-instagram.svg'} fill />
          </div>
        </div>
      </div>
    </div>
  );
}
