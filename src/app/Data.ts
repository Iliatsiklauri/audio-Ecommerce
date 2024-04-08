import { Dispatch, SetStateAction, createContext } from 'react';

export type DataType = {
  id: number;
  forCart: string;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ItemType[];
  gallery: {
    first: ImagesType;
    second: ImagesType;
    third: ImagesType;
  };
  others: OthersType[];
};
type ItemType = {
  quantity: number;
  item: string;
};
type OthersType = {
  slug: string;
  name: string;
  image: ImagesType;
};
type ImagesType = {
  mobile: string;
  tablet: string;
  desktop: string;
};
export type CartType = {
  id: number;
  price: number;
  forCart: string;
  quantity: number;
  image: string;
  total: number;
};
type PropType = {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  cart: CartType[] | [];
  setCart: Dispatch<SetStateAction<CartType[] | []>>;
  burger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
  cartMode: boolean;
  setCartMode: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  num: any;
  setNum: Dispatch<SetStateAction<any>>;
  checkout: boolean;
  setCheckout: Dispatch<SetStateAction<boolean>>;
};
export const GlobalContext = createContext<null | PropType>(null);
