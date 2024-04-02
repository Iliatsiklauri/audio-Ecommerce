import { Dispatch, SetStateAction, createContext } from 'react';

export type DataType = {
  id: number;
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
  others: OthersType[];
};
type ItemType = {
  quantity: number;
  item: string;
};
type OthersType = {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};
type PropType = {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
};
export const GlobalContext = createContext<null | PropType>(null);
