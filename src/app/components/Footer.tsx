import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full h-[655px] flex flex-col items-center justify-around bg-[#101010] relative text-center px-6">
      <div className="absolute top-0 h-1 w-1/4 bg-[#D87D4A]"></div>
      <Image
        src={'/shared/desktop/logo.svg'}
        alt="logo"
        width={143}
        height={25}
        className="cursor-pointer"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <Link href={'/'}>
          <p className="text-white font-bold text-[13px] leading-5 uppercase cursor-pointer">
            home
          </p>
        </Link>
        <Link href={'/headphones'}>
          <p className="text-white font-bold text-[13px] leading-5 uppercase cursor-pointer">
            HEADPHONES
          </p>
        </Link>
        <Link href={'/speakers'}>
          <p className="text-white font-bold text-[13px] leading-5 uppercase cursor-pointer">
            SPEAKERS
          </p>
        </Link>
        <Link href={'/earphones'}>
          <p className="text-white font-bold text-[13px] leading-5 uppercase cursor-pointer">
            EARPHONES
          </p>
        </Link>
      </div>
      <p className="opacity-50 text-white text-[15px]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team
        of music lovers and sound specialists who are devoted to helping you get the most
        out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a
        week.
      </p>
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
        />
        <Image
          alt="instagram"
          src={'/shared/desktop/icon-instagram.svg'}
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
