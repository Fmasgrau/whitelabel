"use client"
import Footer, { FooterTabs } from '@/components/organisms/Footer/Footer';
import Navbar from '@/components/organisms/Navbar/Navbar';
import React from 'react';


export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-column bg-gray-200 w-full min-h-screen justify-content-around'>
      <div className='h-4rem sticky z-1 top-0'>
        <Navbar />
      </div>
      <div className='flex flex-grow-1 flex-wrap justify-content-around mb-4'>
        {children}
      </div>
      <div className='h-4rem sticky z-1 bottom-0 bg-white'>
        <Footer activeTab={FooterTabs.CART}/>
      </div>
    </div>
  );
}
