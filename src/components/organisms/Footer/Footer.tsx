import Image from 'next/image';
import React from 'react';
import {
  searchIcon,
  shippingIcon,
  shoppingCartIcon,
  userIcon,
} from '../../../../assets';

import FooterButtonComponent from './components/FooterButtonComponent';

export default function Footer() {

  return (
    <div className='flex'>
      <FooterButtonComponent
        icon={searchIcon}
        alt='Explorar'
        text='Explorar'
        isActive={true}
      />
      <FooterButtonComponent
        icon={shoppingCartIcon}
        alt='Carrito'
        text='Carrito'
        isActive={false}
      />
      <FooterButtonComponent
        icon={shippingIcon}
        alt='Pedido'
        text='Pedido'
        isActive={false}
      />
      <FooterButtonComponent
        icon={userIcon}
        alt='Ingresar'
        text='Ingresar'
        isActive={false}
      />
    </div>
  );
}
