'use client';

import { useContext } from 'react';
import { GlobalContext } from './Data';

export default function Home() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data } = context;
  return <div></div>;
}
