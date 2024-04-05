type PropType = {
  backgroud?: string;
  text?: string;
};
export default function Button({ backgroud, text }: PropType) {
  return (
    <div
      className={`h-12 w-[160px] flex items-center justify-center ${
        backgroud
          ? backgroud === 'black'
            ? 'bg-black'
            : 'bg-transparent border-[1px] border-black text-black font-bold'
          : 'bg-[#D87D4A] text-white'
      }
       z-10 cursor-pointer`}
    >
      <p className="font-bold text-[13px] tracking-[1px] uppercase ">
        {text ? text : 'see product'}
      </p>
    </div>
  );
}
