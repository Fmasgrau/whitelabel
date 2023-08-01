"use client"

import { Inter } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';

//theme
import 'primereact/resources/themes/md-light-indigo/theme.css';
import '../../styles/global.scss';

//core
import 'primereact/resources/primereact.min.css';
import '/node_modules/primeflex/primeflex.css'

//icons
import 'primeicons/primeicons.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
