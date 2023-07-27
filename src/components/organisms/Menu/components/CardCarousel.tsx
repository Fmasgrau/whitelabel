import Image from 'next/image';
import React from 'react';
import styles from './CardCarousel.module.scss';

export default function CardCarousel({ src, alt, title, isActive }: any) {
  return (
    <div
      className={`flex justify-content-center p-3 border-round-lg align-items-center w-8rem h-3rem surface-300 ${
        isActive ? 'bg-primary' : 'surface-300'
      }`}
    >
      <div
        className={`text-sm font-medium mr-2 ${
          isActive ? 'text-0' : 'text-700'
        }`}
      >
        {title}
      </div>
      <div>
        <Image
          src={src}
          alt={alt}
          width={28}
          className={`${isActive ? styles.isActive : styles.notActive}`}
        />
      </div>
    </div>
  );
}
