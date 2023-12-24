import React, { useRef } from 'react';
import { logoArgentinaIcon } from '../../../../assets';
import Image from 'next/image';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

export default function Navbar() {
  const menuLeft: any = useRef(null);
  const menuRight: any = useRef(null);
  const itemsLeft = [
    {
      label: 'Employers',
      icon: 'pi pi-building',
    },
    {
      label: 'Professionals',
      icon: 'pi pi-user',
      url: '/login'
      
    },
  ];

  const itemsRight = [
    {
      label: 'Employers',
      icon: 'pi pi-building',
    },
    {
      label: 'Professionals',
      icon: 'pi pi-user',
    },
  ];

  return (
    <div className='flex justify-content-between bg-white h-full align-items-center px-5 border-bottom-1 border-300'>
      <div className='flex justify-content-center align-items-center'>
        <Image src={logoArgentinaIcon} alt='logo_web' width={32} />{' '}
        <span className='ml-2 font-bold text-xl'>WFA</span>
      </div>
      <div className='flex'>
        <div>
          <Menu model={itemsLeft} popup ref={menuLeft} id='popup_menu_left' />
          <Button
            iconPos='right'
            label='Sign in'
            icon='pi pi-chevron-down'
            className='mr-2'
            onClick={(event: any) => menuLeft?.current?.toggle(event)}
            aria-controls='popup_menu_left'
            aria-haspopup
          />
        </div>
        <div>
          <Menu
            model={itemsRight}
            popup
            ref={menuRight}
            id='popup_menu_right'
          />
          <Button
            iconPos='right'
            label='Sign up'
            icon='pi pi-chevron-down'
            className='mr-2'
            onClick={(event: any) => menuRight?.current?.toggle(event)}
            aria-controls='popup_menu_right'
            aria-haspopup
          />
        </div>
      </div>
    </div>
  );
}
