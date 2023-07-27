import { Card } from 'primereact/card';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardCarousel from './components/CardCarousel';
import { alfajorIcon, candiesIcon, chocolateIcon, cigarettesIcon, cookiesIcon, fireIcon, shippingIcon, storeIcon } from '../../../../assets';

export default function Menu() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 3,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={['mobile']}
      itemClass='mr-3'
    >
      <CardCarousel title='Todos' src={storeIcon} isActive alt="Categoria Todos"/>
      <CardCarousel title='Destacados' src={fireIcon} alt="Categoria Destacados" />
      <CardCarousel title='Golosinas' src={candiesIcon} alt="Categoria Golosinas" />
      <CardCarousel title='Chocolates' src={chocolateIcon} alt="Categoria Chocolates" />
      <CardCarousel title='Galletitas' src={cookiesIcon} alt="Categoria Galletitas" />
      <CardCarousel title='Alfajores' src={alfajorIcon} alt="Categoria Alfajores" />
      <CardCarousel title='Cigarrillos' src={cigarettesIcon} alt="Categoria Cigarrillos" />
      <div></div>
    </Carousel>
  );
}
