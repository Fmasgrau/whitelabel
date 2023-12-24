'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';

export default function Footer() {
  const router = useRouter();

  return (
    <div className='surface-0 text-700 text-center border-top-1 border-300 py-4'>
    
      <div className='text-900 font-bold text-5xl mb-3'>
        Join Our Community
      </div>
      <div className='text-700 text-2xl mb-5'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam
        eligendi quos.
      </div>
      <Button
        label='Join Now'
        icon='pi pi-discord'
        className='font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap'
      />
    </div>
  );
}
