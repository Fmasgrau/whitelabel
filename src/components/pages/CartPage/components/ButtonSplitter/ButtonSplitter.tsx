import React from 'react';
import styles from './ButtonSplitter.module.scss';
import { Button } from 'primereact/button';

export default function ButtonSplitter() {
  return (
    <div className='flex bg-red-100 w-full'>
      <div className='w-6'>
        <Button className={`flex flex-column justify-content-center text-xs p-1 gap-1 w-full h-full border-900 border-solid border-1 border-right-none border-noround-right`}>
          <div>Entrega a domicilio</div>
          <div>$20.000</div>
        </Button>
      </div>
      <div className='w-6'>
        <Button className={`flex flex-column justify-content-center text-xs p-1 gap-1 w-full h-full border-900 border-solid border-1 border-noround-left bg-white text-700`}>
          <div>Retirar en tienda</div>
          <div>$20.000</div>
        </Button>
      </div>
    </div>
  );
}
