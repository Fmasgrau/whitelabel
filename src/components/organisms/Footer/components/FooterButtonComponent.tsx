import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.scss'

export default function FooterButtonComponent({icon, alt, text, isActive}: any) {
  const ButtonClassname = `col-3 h-4rem flex flex-column align-items-center justify-content-between p-0`;
 
  return (
    <div className={`${ButtonClassname} ${isActive ? styles.isActive : ''}`}>
    <Image
      src={icon}
      alt={alt}
      className={`w-2rem ${isActive ? styles.invertSvgColor : ''}`}
    />
    <span className={`text-xs m-0 ${isActive ? 'text-0' : ''}`}>
      {text}
    </span>
  </div>
  )
}
