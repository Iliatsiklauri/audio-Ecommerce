type PropType = {
  backgroud?: string;
  text?: string;
  width?: string;
};
export default function Button({ backgroud, text, width }: PropType) {
  return (
    <div
      className={`h-12 ${
        width ? 'w-full' : 'w-[160px]'
      } flex items-center justify-center ${
        backgroud
          ? backgroud === 'black'
            ? 'bg-black hover:bg-[#4C4C4C]'
            : 'bg-transparent border-[1px] bg-black hover:bg-[black] hover:text-white border-black text-black font-bold'
          : 'bg-[#D87D4A] hover:bg-[#FBAF85] text-white'
      }
       z-10 cursor-pointer`}
    >
      <p className="font-bold text-[13px] tracking-[1px] uppercase ">
        {text ? text : 'see product'}
      </p>
    </div>
  );
}
