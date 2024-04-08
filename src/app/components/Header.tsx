import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useContext } from 'react';
import { GlobalContext } from '../Data';

export default function Heade() {
  const params = useParams();
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { burger, setBurger, cartMode, setCartMode, cart } = context;
  return (
    <div
      className={`w-full ${
        params.id ? 'bg-black' : 'bg-[#191919]'
      } flex items-center justify-between px-6
     py-8 z-30`}
    >
      <Image
        alt="hamburger"
        src={'/shared/tablet/icon-hamburger.svg'}
        width={16}
        height={15}
        className="cursor-pointer"
        onClick={() => {
          if (cartMode === true) {
            setCartMode(false);
          }
          setBurger(!burger);
        }}
      />
      <Link href={'/'}>
        <Image
          alt="logo"
          src={'/shared/desktop/logo.svg'}
          width={143}
          height={25}
          className="cursor-pointer"
        />
      </Link>
      <div className="relative">
        <Image
          alt="cart"
          src={'/shared/desktop/icon-cart.svg'}
          width={23}
          height={20}
          className="cursor-pointer"
          onClick={() => {
            if (burger === true) {
              setBurger(false);
            }
            setCartMode(!cartMode);
          }}
        />
        {cart.length > 0 ? (
          <div className="absolute h-3 w-3 rounded-full bg-white top-[-5px] right-[-5px] flex items-center justify-center">
            <p className="text-[10px] text-red-600 font-bold">{cart.length}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
