import React from 'react'
import Navbar from '@/components/organisms/Navbar/Navbar'
import SearchBar from '@/components/molecules/SearchBar/SearchBar'
import Menu from '@/components/organisms/Menu/Menu'
import ProductCard from '@/components/organisms/ProductCard/ProductCard'
import Footer from '@/components/organisms/Footer/Footer'

export default function HomePageComponent() {
  return (
    <div className='flex flex-column bg-gray-200 w-full min-h-screen justify-content-around'>
    <div className='h-4rem sticky z-1 top-0'><Navbar /></div>
    <div className='h-6rem flex flex-column justify-content-center'><SearchBar /></div>
    <div className='h-4rem'><Menu /></div>
    <div className='flex flex-grow-1 flex-wrap justify-content-around mt-5 gap-3 mb-4'><ProductCard /><ProductCard /><ProductCard /> <ProductCard /></div>
    <div className='h-4rem sticky z-1 bottom-0 bg-white'><Footer /></div>
  </div>
  )
}
