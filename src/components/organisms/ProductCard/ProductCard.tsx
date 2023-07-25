import Image from 'next/image';
import { Card } from 'primereact/card';
import React from 'react';
import { productImg } from '../../../../assets';
import styles from './ProductCard.module.scss';
import { Button } from 'primereact/button';

export default function ProductCard() {
  return (
    <div className='col-5 border-round-xl bg-white p-0'>
      <span
        className={`absolute bg-red-500 text-white text-sm p-2 ${styles.ProductCard}`}
      >
        15%
      </span>
      <div className='p-0'>
        <Image
          src={productImg}
          alt='palito de la selva'
          className='w-full h-6rem border-round-xl'
        />
      </div>
      <div className='pl-2 pr-2 m-0'>
        <h1 className='text-base m-0'>Dropsy</h1>
        <p className='m-0'>Caramelos Selva</p>
        <p className='m-0'>700gr</p>
        <p className='text-xs m-0'>Unidades mínimas: 2</p>
        <p className='text-xs m-0'>Unidades máximas: 10</p>
        <p className='text-xs m-0'>Stock disponible: 37</p>
      </div>
      <div className='pl-2 mr-2'>
        <p className='text-sm line-through mb-0'>$807,06</p>
        <p className='font-bold m-0'>$686,05</p>
      </div>
      <div className='p-2 flex justify-content-center'>
        <Button label='Agregar' className='w-full'/>
      </div>
    </div>
  );
}
