import React from 'react';

export default function Which({ text }: { text: string }) {
  return (
    <div
      className="w-full  text-[28px] font-bold tracking-[2px]
  text-white bg-black absolute top-0 flex uppercase justify-center items-center py-8"
    >
      {text}
    </div>
  );
}
