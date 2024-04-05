'use client';
import Link from 'next/link';
import Button from './Button';
import { useEffect, useState } from 'react';

type PropType = {
  url: string;
  title: string;
};
export default function Alsolike({ title, url }: PropType) {
  const [id, setId] = useState<null | number>(null);
  useEffect(() => {
    if (title === 'YX1 Wireless Earphones') {
      console.log('YX1 Wireless Earphones');
      setId(1);
    } else if (title === 'XX99 Mark II') {
      setId(2);
    } else if (title === 'XX99 Mark I') {
      setId(3);
    } else if (title === 'XX59') {
      setId(4);
    } else if (title === 'ZX9 Speaker') {
      setId(5);
    } else if (title === 'ZX7 Speaker') {
      setId(6);
    }
  }, [title]);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <img src={`${url}`} alt="" className="rounded-[8px]" />
      <p className="text-black text-[24px] font-bold tracking-[1.5px]">{title}</p>
      <Link href={`/product/${id}`}>
        <Button />
      </Link>
    </div>
  );
}
