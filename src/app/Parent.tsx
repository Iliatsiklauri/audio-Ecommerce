'use client';
import { ReactNode, useState } from 'react';
import { DataType, GlobalContext } from './Data';
import res from '@/app/data.json';

export default function Parent({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataType[]>(res);
  return (
    <GlobalContext.Provider value={{ data, setData }}>{children}</GlobalContext.Provider>
  );
}
