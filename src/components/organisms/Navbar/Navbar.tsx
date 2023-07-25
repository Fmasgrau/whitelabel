import React from 'react';
import { tresHermanosLogo } from '../../../../assets';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='flex justify-content-center bg-white h-full align-items-center'>
      <Image
        src={tresHermanosLogo}
        alt='Logo de la marca'
        className='h-3rem w-3rem'
      />
    </div>
  );
}
