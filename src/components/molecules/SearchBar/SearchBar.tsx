import { AutoComplete } from 'primereact/autocomplete';
import React from 'react';

export default function SearchBar() {
  return (
    <div className='p-2 flex justify-content-center h-4-rem'>
      <AutoComplete placeholder='🔍 Buscar productos' inputClassName='w-11 border-round-lg' className='w-full flex justify-content-center'/>
      </div>
  );
}
