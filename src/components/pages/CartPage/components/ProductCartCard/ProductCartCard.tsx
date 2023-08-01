import Image from 'next/image'
import { Button } from 'primereact/button'
import React from 'react'
import { productImg } from '../../../../../../assets'

export default function ProductCartCard({isMaxQuantity = false}) {
  return (
    <div className='bg-white w-full border-round-sm mt-3 shadow-4'>
            <div className='h-5rem flex pt-1'>
              <div className='h-5rem'>
                <Image
                  src={productImg}
                  alt='palito de la selva'
                  className='h-5rem w-full'
                />
              </div>
              <div className='flex flex-column justify-content-center'>
                <h1 className='text-sm m-0'>DROPSY</h1>
                <p className='text-xs m-0 mt-1'>Caramelos Selva 700gr</p>
                <p className='text-xs text-500 m-0 mt-1'>$686,00 x 4 un</p>
              </div>
            </div>
            <hr className='w-11 text-500' />
            <div className='h-5rem flex flex-column align-items-end pr-4 mt-2'>
              <div className='text-xl text-700 font-semibold'>$2.500,25</div>
              <div className='flex align-items-center gap-2 mt-1'>
                <Button icon='pi pi-minus' className='w-2rem h-2rem' />{' '}
                <span className='text-sm'>4u.</span>{' '}
                <Button className='w-2rem h-2rem' icon='pi pi-plus' />
              </div>
            </div>
            {isMaxQuantity && (
              <div className='h-3rem text-red px-3'>
                <span className='text-sm text-red-500'>
                  Alcanzaste el máximo de compra para este producto
                </span>
              </div>
            )}
          </div>
  )
}
