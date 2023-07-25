import { Card } from 'primereact/card';
import React from 'react';
import styles from './HomeComponent.module.scss';
import Navbar from '@/components/organisms/Navbar/Navbar';
import SearchBar from '@/components/molecules/SearchBar/SearchBar';
import Menu from '@/components/organisms/Menu/Menu';
import ProductCard from '@/components/organisms/ProductCard/ProductCard';

export default function HomePageContainer() {
  return (
    <div className='flex flex-column bg-gray-100 w-full min-h-screen justify-content-around'>
      <div className='h-4rem'><Navbar /></div>
      <div className='h-6rem flex flex-column justify-content-center'><SearchBar /></div>
      <div className='h-4rem'><Menu /></div>
      <div className='flex flex-grow-1 flex-wrap justify-content-around mt-5 gap-3'><ProductCard /><ProductCard /><ProductCard /> <ProductCard /></div>
      <div className='h-4rem'>Footer</div>
    </div>
  );
}
