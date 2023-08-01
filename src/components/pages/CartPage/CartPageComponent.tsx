'use client';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import React from 'react';
import ButtonSplitter from './components/ButtonSplitter/ButtonSplitter';
import Image from 'next/image';
import { productImg } from '../../../../assets';
import ProductCartCard from './components/ProductCartCard/ProductCartCard';

export default function CartPageComponent() {
  return (
    <div className='flex flex-column w-full mx-4'>
      <div className='flex flex-column align-items-center mt-4 text-sm '>
        <div className='align-self-end mr-2 underline'>Vaciar carrito</div>
        <div className='w-full p-2'>
          <div className='bg-white w-full border-round-sm mt-2 shadow-4'>
            <div className='flex flex-column align-items-center p-4'>
              <div className='w-full'>
                <div className='flex justify-content-between'>
                  <div className='flex flex-column align-items-center'>
                    <span>Total</span>
                    <span className='mt-2'>$2.300</span>
                  </div>
                  <div className='flex flex-column align-items-center'>
                    <span>Faltan</span>
                    <span className='mt-2'>$3.700</span>
                  </div>
                </div>
                <div className='h-1rem mt-2'>
                  <ProgressBar
                    value={10}
                    showValue={false}
                    className='h-1rem border-round-xl'
                  ></ProgressBar>
                </div>
                <div className='text-center mt-2'>Minimo $20.000</div>
              </div>
              <div className='w-full mt-4'>
                <ButtonSplitter />
              </div>
              <div className='mt-2 text-xs'>Entrega míercoles 2 de agosto</div>
              <div className='mt-4 w-full flex justify-content-center'>
                <Button label='Confirmar' className='w-10' />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 text-base'>Pago contra entrega: Efectivo</div>
      </div>
      <div className='flex flex-column align-items-center mt-4 w-full'>
        <div className='text-700'>Productos: 1</div>
        <div className='w-full'>
          <ProductCartCard />
          <ProductCartCard />
          <ProductCartCard isMaxQuantity/>
          <ProductCartCard />
        </div>
      </div>
    </div>
  );
}
