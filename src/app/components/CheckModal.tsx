import { useContext } from 'react';
import { GlobalContext } from '../Data';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function CheckModal() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { checkout, setCheckout, setCart, cart } = context;
  return (
    <div
      className={`${
        checkout ? 'block' : 'hidden'
      } absolute left-0 top-0 bottom-0 right-0 h-full w-full `}
    >
      <div className="w-full h-full relative">
        <div className="left-[5%] fixed w-[90%]  top-20 z-40 bg-white rouded-md p-8 flex items-start justify-center rounded-md flex-col gap-6">
          <Image
            alt="check"
            src={'/checkout/icon-order-confirmation.svg'}
            width={64}
            height={64}
          />
          <h2 className="font-bold text-[24px] text-black">THANK YOU FOR YOUR ORDER</h2>
          <div className="w-full flex flex-col">
            <div className=" bg-[#F1F1F1] w-full py-7 px-2 rounded-md">
              <div className="flex gap-3 items-center justify-between  w-full">
                <div className="flex gap-4">
                  <Image
                    alt="product"
                    src={cart ? cart[0]?.image : ''}
                    height={64}
                    width={64}
                    className="rounded-md"
                  />
                  <div className="flex flex-col items-start justify-center text-left w-[75px]">
                    <p className="text-black font-bold text-[15px]">{cart[0]?.forCart}</p>
                    <p className="text-black font-bold opacity-50 text-[14px]">
                      $ {cart[0]?.price}
                    </p>
                  </div>
                </div>
                <p className="text-black font-bold text-[15px] text-opacity-50">
                  x{cart[0]?.quantity}
                </p>
              </div>
              <p></p>
            </div>
            <div className="w-full bg-black h-[92px] pl-6 gap-2 flex flex-col items-start justify-center ss">
              <p className="text-[15px] text-white opacity-50 ">GRAND TOTAL</p>
            </div>
          </div>
          <Link
            href={'/'}
            className="w-full"
            onClick={() => {
              setCart([]), setCheckout(false);
            }}
          >
            <Button width="1" text="BACK TO HOME" />
          </Link>
        </div>
        <div className="absolute h-full w-full bg-black z-30 opacity-25"></div>
      </div>
    </div>
  );
}
