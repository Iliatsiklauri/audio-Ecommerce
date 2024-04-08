'use client';
import { GlobalContext } from '@/app/Data';
import Summary from '@/app/components/Summary';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type DataType = {
  Address: string;
  City: string;
  Country: string;
  Email: string;
  Name: string;
  Phone: string;
  ZIP: string;
  MoneyNumber: string;
  PIN: string;
  OnDelivery: boolean;
  Money: boolean;
};
export default function Page() {
  const [check, setCheck] = useState(1);
  const { register, handleSubmit } = useForm<DataType>();
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { checkout, setCheckout } = context;
  const sbmt = (data: DataType) => {
    console.log(data);
  };

  return (
    <form
      className="w-full flex flex-col items-start justify-center  bg-[#FAFAFA] px-4 pb-16 pt-4 gap-8 relative z-0"
      onSubmit={handleSubmit(sbmt)}
    >
      <div className="rounded-md bg-white w-full flex flex-col justify-center items-start px-7 pt-6 pb-8 gap-8">
        <Link className="text-black text-[13px] text-opacity-50 leading-6" href={`/`}>
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
                  className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black border-[#CFCFCF] border-[1px]"
                  {...register('Name')}
                />
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-center w-full max-w-[309px]">
                <p className="text-black font-bold text-[13px]">Email Address</p>
                <input
                  type="text"
                  placeholder="Tsiklauri.ilia26@gmail.com"
                  className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black border-[#CFCFCF] border-[1px]"
                  {...register('Email')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-center w-full">
              <p className="text-black font-bold text-[13px]">Phone Number</p>
              <input
                type="text"
                placeholder="+995 555 555 555"
                className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black border-[#CFCFCF] border-[1px]"
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
                className="w-full h-14 pl-6 rounded-md text-[14px] font-bold text-opacity-50 text-black border-[#CFCFCF] border-[1px]"
                {...register('Address')}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-6 md:flex-row md:gap-4">
              <div className="flex flex-col gap-[9px] items-start justify-center w-full">
                <p className="text-black font-bold text-[13px]">ZIP Code</p>
                <input
                  type="text"
                  placeholder="10001"
                  className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black border-[#CFCFCF] border-[1px]"
                  {...register('ZIP')}
                />
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-center w-full max-w-[309px]">
                <p className="text-black font-bold text-[13px]">City</p>
                <input
                  type="text"
                  placeholder="New York"
                  className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black border-[#CFCFCF] border-[1px]"
                  {...register('City')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-center w-full max-w-[309px]">
              <p className="text-black font-bold text-[13px]">Country</p>
              <input
                type="text"
                placeholder="United States"
                className="w-full h-14 pl-6 rounded-md  text-[14px] font-bold text-opacity-50 text-black border-[#CFCFCF] border-[1px]"
                {...register('Country')}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 justify-center w-full">
          <h2 className="font-bold text-[#D87D4A] text-[15px] tracking-wide ">
            payment details
          </h2>
          <div className="flex flex-col items-start justify-center gap-4 w-full ">
            <p className="text-black font-bold text-[13px]">Payment Method</p>
            <div className="flex flex-col  items-end justify-center w-full gap-[9px]">
              <div className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold   text-black border-[#CFCFCF] border-[1px] flex items-center justify-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  id=""
                  className={`checkbox w-5 h-5 border-[#CFCFCF] border-[1px] rounded-full cursor-pointer relative ${
                    check === 1 ? 'checked' : ''
                  }`}
                  onClick={() => {
                    setCheck(1);
                  }}
                  defaultChecked
                  {...register('Money')}
                />
                <p>e-Money</p>
              </div>
              <div className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold cursor-pointer text-black border-[#CFCFCF] border-[1px] flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  id=""
                  className={`checkbox w-5 h-5 border-[#CFCFCF] border-[1px] rounded-full cursor-pointer relative ${
                    check === 2 ? 'checked' : ''
                  }`}
                  {...register('OnDelivery')}
                  onClick={() => {
                    setCheck(2);
                  }}
                />

                <p>Cash on Delivery</p>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col gap-6 items-start justify-center  md:gap-0">
            <div className="flex flex-col items-start justify-center w-full gap-[9px]">
              <p className="text-black font-bold text-[13px]">e-Money Number</p>
              <input
                type="text"
                className="w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black border-[#CFCFCF] border-[1px]"
                {...register('MoneyNumber')}
              />
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-[9px] max-w-[309px]">
              <p className="text-black font-bold text-[13px]">e-Money PIN</p>
              <input
                type="text"
                className="w-full h-14 pl-6  rounded-md text-[14px] font-bold text-opacity-50 text-black border-[#CFCFCF] border-[1px]"
                {...register('PIN')}
              />
            </div>
          </div>
        </div>
      </div>
      <Summary />
    </form>
  );
}
