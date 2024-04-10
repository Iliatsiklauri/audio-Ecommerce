import Link from 'next/link';
import Button from './Button';

type PropType = {
  url: string;
  url1?: string;
  url2?: string;
  title: string;
  text: string;
  newItem?: boolean;
  id: number;
};
export default function SingleItem({
  url,
  title,
  text,
  newItem,
  id,
  url1,
  url2,
}: PropType) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-8  ${
        title === 'XX99 Mark I Headphones' ? 'xl:flex-row-reverse' : 'xl:flex-row'
      } ${title === 'ZX7 Speaker' ? 'xl:flex-row-reverse' : 'xl:flex-row'}  xl:gap-24 `}
    >
      <img src={`${url}`} alt="" className="rounded-md block md:hidden" />
      <img
        src={`${url1}`}
        alt=""
        className="rounded-md hidden md:block h-auto
      w-full xl:hidden"
      />
      <img
        src={`${url2}`}
        alt=""
        className="rounded-md hidden xl:block h-auto
      w-full xl:w-[50%]"
      />
      <div className="flex flex-col gap-4 items-center justify-center text-center md:gap-6 xl:items-start xl:text-left  w-full ">
        {newItem ? (
          <p className="text-[#D87D4A] tracking-[10px] text-[14px]">NEW PRODUCT</p>
        ) : null}
        <h2 className="text-black text-[28px] font-bold tracking-[1px] md:text-[44px] md:leading-[44px] w-">
          {title}
        </h2>
        <p className="text-black opacity-50 text-[15px] md:w-[75%] xl:w-full">{text}</p>
        <Link href={`/product/${id}`}>
          <Button />
        </Link>
      </div>
    </div>
  );
}
