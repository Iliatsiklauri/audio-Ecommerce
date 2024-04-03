'use client';
import { ReactNode, useState } from 'react';
import { DataType, GlobalContext } from './Data';
import res from '@/app/data.json';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Parent({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataType[]>(res);
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      <div className="flex flex-col items-center justify-center w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}
