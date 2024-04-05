'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

type DataType = {
  Address: string;
  City: string;
  Country: string;
  Email: string;
  Name: string;
  Phone: string;
  ZIP: string;
};
export default function Page() {
  const { register, handleSubmit } = useForm<DataType>();
  const sbmt = (data: DataType) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col items-start justify-center  bg-[#FAFAFA] px-4 pb-16 pt-4 gap-8"
      onSubmit={handleSubmit(sbmt)}
    >
      <div className="rounded-md bg-white w-full flex flex-col justify-center items-start px-4 pt-6 pb-8 gap-8">
        <Link className="text-black text-[13px] opacity-50 leading-6" href={`/`}>
          Go Back
        </Link>
        <h2 className="text-black font-bold text-[28px]">CHECKOUT</h2>
        <div className="flex flex-col items-start justify-center w-full gap-4">
          <p className="font-bold text-[#D87D4A] text-[15px] tracking-wide ">
            Billing details
          </p>
          <div className="flex flex-col gap-6 items-start justify-center w-full">
            <div className="md:flex-row w-full flex flex-col items-start justify-center gap-6 md:gap-4">
              <div className="flex flex-col gap-[9px] items-start justify-center w-full">
                <p className="text-black font-bold text-[13px]">Name</p>
                <input
                  type="text"
                  placeholder="Ilia Tsiklauri"
                  className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold opacity-50 text-black border-[#CFCFCF] border-[1px]"
                  {...register('Name')}
                />
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-center w-full">
                <p className="text-black font-bold text-[13px]">Email Address</p>
                <input
                  type="text"
                  placeholder="Tsiklauri.ilia26@gmail.com"
                  className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold opacity-50 text-black border-[#CFCFCF] border-[1px]"
                  {...register('Email')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-center w-full">
              <p className="text-black font-bold text-[13px]">Phone Number</p>
              <input
                type="text"
                placeholder="+995 555 555 555"
                className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold opacity-50 text-black border-[#CFCFCF] border-[1px]"
                {...register('Phone')}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-4">
          <p className="font-bold text-[#D87D4A] text-[15px] tracking-wide ">
            shipping info
          </p>
          <div className="flex flex-col gap-6 items-start justify-center w-full">
            <div className="flex flex-col gap-[9px] items-start justify-center w-full">
              <p className="text-black font-bold text-[13px]">Your Address</p>
              <input
                type="text"
                placeholder="1137 Williams Avenue"
                className="w-full h-14 pl-6 rounded-md text-[14px] font-bold opacity-50 text-black border-[#CFCFCF] border-[1px]"
                {...register('Address')}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-6 md:flex-row md:gap-4">
              <div className="flex flex-col gap-[9px] items-start justify-center w-full">
                <p className="text-black font-bold text-[13px]">ZIP Code</p>
                <input
                  type="text"
                  placeholder="10001"
                  className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold opacity-50 text-black border-[#CFCFCF] border-[1px]"
                  {...register('ZIP')}
                />
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-center w-full">
                <p className="text-black font-bold text-[13px]">City</p>
                <input
                  type="City"
                  placeholder="New York"
                  className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold opacity-50 text-black border-[#CFCFCF] border-[1px]"
                  {...register('City')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-center w-full">
              <p className="text-black font-bold text-[13px]">Country</p>
              <input
                type="text"
                placeholder="United States"
                className="w-full h-14 pl-6 rounded-md max-w-[309px] text-[14px] font-bold opacity-50 text-black border-[#CFCFCF] border-[1px]"
                {...register('Country')}
              />
            </div>
          </div>
        </div>
      </div>
      <button>submit</button>
    </form>
  );
}
