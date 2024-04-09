'use client';
import Summary from '@/app/components/Summary';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
  OnDelivery?: boolean;
  Money?: boolean;
};

const schema = yup.object().shape({
  Name: yup
    .string()
    .required('Should not be Empty')
    .matches(/^[A-Za-z]+$/, 'Enter a valid name'),
  City: yup
    .string()
    .required('Should not be Empty')
    .matches(/^[A-Za-z]+$/, 'Enter a valid City name'),
  Country: yup
    .string()
    .required('Should not be Empty')
    .matches(/^[A-Za-z]+$/, 'Enter a valid County name'),
  Email: yup
    .string()
    .required('Should not be Empty')
    .matches(/^\S+@\S+\.\S+$/, 'Enter a valid email address')
    .email('Wrong Format'),
  Phone: yup
    .string()
    .required('Should not be Empty')
    .matches(/^\d+$/, 'Enter a valid Phone Number')
    .min(9, 'Minimum Length should be 9'),
  PIN: yup.string().required('Should not be Empty').matches(/^\d+$/, 'Enter a valid PIN'),
  MoneyNumber: yup
    .string()
    .required('Should not be Empty')
    .matches(/^\d+$/, 'Enter a valid Number'),
  Address: yup.string().required('Should not be Empty'),
  ZIP: yup.string().required('Should not be Empty').matches(/^\d+$/, 'Enter a valid ZIP'),
});

export default function Page() {
  const [check, setCheck] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>({
    resolver: yupResolver(schema),
  });

  const hasErrors = Object.keys(errors).length !== 0;
  return (
    <form
      className="w-full flex flex-col items-start justify-center  bg-[#FAFAFA] px-4 pb-16 pt-4 gap-8 relative z-0 md:px-7"
      onSubmit={handleSubmit(() => {})}
    >
      <div className="rounded-md shadow-sm bg-white w-full flex flex-col justify-center items-start px-7 pt-6 pb-8 gap-8">
        <Link className="text-black text-[13px] text-opacity-50 leading-6" href={`/`}>
          Go Back
        </Link>
        <h2 className="text-black font-bold text-[28px]">CHECKOUT</h2>
        <div className="flex flex-col items-start justify-center w-full gap-4">
          <p className="font-bold text-[#D87D4A] text-[15px] tracking-wide ">
            Billing details
          </p>
          <div className="flex flex-col gap-6 items-start justify-center w-full">
            <div className="md:flex-row md:justify-between w-full flex flex-col items-start justify-center gap-6 md:gap-4">
              <div
                className={`${
                  errors.Name ? 'broder-[2px] border-[#CD2C2C]' : ''
                } flex flex-col relative gap-[9px] items-start justify-center w-full   max-w-[309px]`}
              >
                <p className="text-black font-bold text-[13px]">Name</p>
                <input
                  type="text"
                  placeholder="Ilia Tsiklauri"
                  className={`w-full h-14 pl-6  rounded-md text-[14px] font-bold text-opacity-50 text-black  ${
                    errors.Name
                      ? 'border-[2px] border-[#CD2C2C]'
                      : 'border-[#CFCFCF] border-[1px]'
                  }`}
                  {...register('Name')}
                />
                {errors.Name && (
                  <p className="text-[#CD2C2C] text-[12px] absolute bottom-[-20px] md:top-0 md:right-0">
                    {errors.Name?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-center w-full max-w-[309px] relative">
                <p className="text-black font-bold text-[13px]">Email Address</p>
                <input
                  type="text"
                  placeholder="Tsiklauri.ilia26@gmail.com"
                  className={`w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black ${
                    errors.Email
                      ? 'border-[2px] border-[#CD2C2C]'
                      : 'border-[#CFCFCF] border-[1px]'
                  }`}
                  {...register('Email')}
                />
                {errors.Email && (
                  <p className="text-[#CD2C2C] absolute bottom-[-20px] text-[12px] md:top-0 md:right-0">
                    {errors.Email?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="relative flex flex-col gap-[9px] items-start justify-center w-full max-w-[309px]">
              <p className="text-black  font-bold text-[13px]">Phone Number</p>
              <input
                type="text"
                placeholder="+995 555 555 555"
                className={`w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black ${
                  errors.Phone
                    ? 'border-[2px] border-[#CD2C2C]'
                    : 'border-[#CFCFCF] border-[1px]'
                }`}
                {...register('Phone')}
              />
              {errors.Phone && (
                <p className="text-[#CD2C2C] absolute md:top-0 md:right-0 bottom-[-20px] text-[12px]">
                  {errors.Phone?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-4">
          <p className="font-bold text-[#D87D4A] text-[15px] tracking-wide ">
            shipping info
          </p>
          <div className="flex flex-col gap-6 items-start justify-center w-full">
            <div className="relative flex flex-col gap-[9px] items-start justify-center w-full ">
              <p className="text-black font-bold text-[13px]">Your Address</p>
              <input
                type="text"
                placeholder="1137 Williams Avenue"
                className={`w-full h-14 pl-6 rounded-md text-[14px] font-bold text-opacity-50 text-black  ${
                  errors.Address
                    ? 'border-[2px] border-[#CD2C2C]'
                    : 'border-[#CFCFCF] border-[1px]'
                }`}
                {...register('Address')}
              />
              {errors.Address && (
                <p className="text-[#CD2C2C] md:top-0 md:right-0 absolute bottom-[-20px] text-[12px]">
                  {errors.Address?.message}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-6 md:flex-row md:gap-4 md:justify-between md:w-full">
              <div className="relative flex  flex-col gap-[9px] items-start justify-center w-full  max-w-[309px]">
                <p className="text-black font-bold text-[13px]">ZIP Code</p>
                <input
                  type="text"
                  placeholder="10001"
                  className={`w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black ${
                    errors.ZIP
                      ? 'border-[2px] border-[#CD2C2C]'
                      : 'border-[#CFCFCF] border-[1px]'
                  }`}
                  {...register('ZIP')}
                />
                {errors.ZIP && (
                  <p className="text-[#CD2C2C] absolute bottom-[-20px] text-[12px] md:top-0 md:right-0">
                    {errors.ZIP?.message}
                  </p>
                )}
              </div>
              <div className="relative flex flex-col gap-[9px] items-start justify-center w-full  max-w-[309px]">
                <p className="text-black font-bold text-[13px]">City</p>
                <input
                  type="text"
                  placeholder="New York"
                  className={`w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black ${
                    errors.City
                      ? 'border-[2px] border-[#CD2C2C]'
                      : 'border-[#CFCFCF] border-[1px]'
                  }`}
                  {...register('City')}
                />
                {errors.City && (
                  <p className="text-[#CD2C2C] absolute bottom-[-20px] text-[12px] md:top-0 md:right-0">
                    {errors.City?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="relative flex flex-col gap-[9px] items-start justify-center w-full  max-w-[309px]">
              <p className="text-black font-bold text-[13px]">Country</p>
              <input
                type="text"
                placeholder="United States"
                className={`w-full h-14 pl-6 rounded-md  text-[14px] font-bold text-opacity-50 text-black ${
                  errors.Country
                    ? 'border-[2px] border-[#CD2C2C]'
                    : 'border-[#CFCFCF] border-[1px]'
                }`}
                {...register('Country')}
              />
              {errors.Country && (
                <p className="text-[#CD2C2C] md:top-0 md:right-0 absolute bottom-[-20px] text-[12px]">
                  {errors.Country?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 justify-center w-full">
          <h2 className="font-bold text-[#D87D4A] text-[15px] tracking-wide ">
            payment details
          </h2>
          <div className="flex flex-col items-start justify-center gap-4 w-full ">
            <p className=" text-black font-bold text-[13px]">Payment Method</p>
            <div className="flex flex-col  items-end justify-center w-full gap-[9px]">
              <div
                className={`${
                  check === 1 ? 'border-[1px] border-[#D87D4A]' : ''
                } w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold   text-black border-[#CFCFCF] border-[1px] flex items-center justify-start gap-4 cursor-pointer`}
                onClick={() => {
                  setCheck(1);
                }}
              >
                <input
                  type="checkbox"
                  id=""
                  className={`checkbox w-5 h-5 border-[#CFCFCF] border-[1px] rounded-full cursor-pointer relative ${
                    check === 1 ? 'checked' : ''
                  }`}
                  defaultChecked
                  {...register('Money')}
                />
                <p>e-Money</p>
              </div>
              <div
                className={` ${
                  check === 2 ? 'border-[1px] border-[#D87D4A]' : ''
                } w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold cursor-pointer text-black border-[#CFCFCF] border-[1px] flex items-center justify-start gap-4`}
                onClick={() => {
                  setCheck(2);
                }}
              >
                <input
                  type="checkbox"
                  id=""
                  className={`checkbox w-5 h-5 border-[#CFCFCF] border-[1px] rounded-full cursor-pointer relative ${
                    check === 2 ? 'checked' : ''
                  }`}
                  {...register('OnDelivery')}
                />

                <p>Cash on Delivery</p>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col gap-6 items-start justify-center  md:gap-4 md:justify-between md:w-full md:items-center">
            <div className="flex flex-col relative items-start justify-center w-full gap-[9px] max-w-[309px]">
              <p className="text-black font-bold text-[13px]">e-Money Number</p>
              <input
                type="text"
                className={`w-full h-14 pl-6 max-w-[309px] rounded-md text-[14px] font-bold text-opacity-50 text-black ${
                  errors.MoneyNumber
                    ? 'border-[2px] border-[#CD2C2C]'
                    : 'border-[#CFCFCF] border-[1px]'
                }`}
                {...register('MoneyNumber')}
              />
              {errors.MoneyNumber && (
                <p className="text-[#CD2C2C] md:top-0 md:right-0 absolute bottom-[-20px] text-[12px]">
                  {errors.MoneyNumber?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-[9px] max-w-[309px] relative">
              <p className="text-black font-bold text-[13px]">e-Money PIN</p>
              <input
                type="text"
                className={`w-full h-14 pl-6  rounded-md text-[14px] font-bold text-opacity-50 text-black ${
                  errors.PIN
                    ? 'border-[2px] border-[#CD2C2C]'
                    : 'border-[#CFCFCF] border-[1px]'
                }`}
                {...register('PIN')}
              />
              {errors.PIN && (
                <p className="md:top-0 md:right-0 text-[#CD2C2C] absolute bottom-[-20px] text-[12px]">
                  {errors.PIN?.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Summary errors={errors} hasErrors={hasErrors} />
    </form>
  );
}
