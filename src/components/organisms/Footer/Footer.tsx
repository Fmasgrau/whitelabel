'use client';
import React from 'react';
import {
  searchIcon,
  shippingIcon,
  shoppingCartIcon,
  userIcon,
} from '../../../../assets';

import FooterButtonComponent from './components/FooterButtonComponent';
import { useRouter } from 'next/navigation';

export enum FooterTabs {
  PRODUCTS = 'products',
  CART = 'cart',
  ORDER = 'order',
  LOGIN = 'login',
}

export default function Footer({ activeTab }: { activeTab: FooterTabs }) {
  const [active, setActive] = React.useState<FooterTabs>(activeTab);
  const router = useRouter();
  const handleChangeTab = (footerTab: FooterTabs) => {
    router.push(`/${footerTab}`);
  };

  return (
    <div className='flex'>
      <FooterButtonComponent
        icon={searchIcon}
        alt='Explorar'
        text='Explorar'
        isActive={active === FooterTabs.PRODUCTS}
        onClick={() => handleChangeTab(FooterTabs.PRODUCTS)}
      />
      <FooterButtonComponent
        icon={shoppingCartIcon}
        alt='Carrito'
        text='Carrito'
        isActive={active === FooterTabs.CART}
        onClick={() => handleChangeTab(FooterTabs.CART)}
      />
      <FooterButtonComponent
        icon={shippingIcon}
        alt='Pedido'
        text='Pedido'
        isActive={active === FooterTabs.ORDER}
        onClick={() => handleChangeTab(FooterTabs.ORDER)}
      />
      <FooterButtonComponent
        icon={userIcon}
        alt='Ingresar'
        text='Ingresar'
        isActive={active === FooterTabs.LOGIN}
        onClick={() => handleChangeTab(FooterTabs.LOGIN)}
      />
    </div>
  );
}
