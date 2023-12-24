'use client';

import { Inter } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';

//theme
import 'primereact/resources/themes/lara-light-blue/theme.css';
import '../../styles/global.scss';

//core
import 'primereact/resources/primereact.min.css';
import '/node_modules/primeflex/primeflex.css';

//icons
import 'primeicons/primeicons.css';
import Navbar from '@/components/organisms/Navbar/Navbar';
import Footer from '@/components/organisms/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });
import styles from './layout.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <PrimeReactProvider>
          <div className='flex flex-column w-full min-h-screen'>
            <div className='h-4rem sticky z-1 top-0'>
              <Navbar />
            </div>
            <div className={styles.body}>
            {children}
            </div>
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
