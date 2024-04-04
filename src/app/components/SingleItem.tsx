import Link from 'next/link';
import Button from './Button';

type PropType = {
  url: string;
  title: string;
  text: string;
  newItem?: boolean;
  id: number;
};
export default function SingleItem({ url, title, text, newItem, id }: PropType) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <img src={`${url}`} alt="" className="rounded-md" />
      {newItem ? (
        <p className="text-[#D87D4A] tracking-[10px] text-[14px]">NEW PRODUCT</p>
      ) : null}
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="text-black text-[28px] font-bold tracking-[1px]">{title}</h2>
        <p className="text-black opacity-50 text-[15px]">{text}</p>
        <Link href={`/product/${id}`}>
          <Button />
        </Link>
      </div>
    </div>
  );
}
