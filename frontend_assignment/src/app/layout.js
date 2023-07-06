"use client"
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Inter } from 'next/font/google';
import SearchUI from './Components/Search';
import './globals.css';
import Link from 'next/link';
import {ShoppingCart} from 'react-feather'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ecommerce App',
  description: '',
};

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <title>Ecommerce Website</title>
        </head>
        <body className={inter.className}>
        <div className="flex justify-between py-5 bg-gray-700 border-b lg:px-36 px-4 max-h-[96px]">
            <div className="flex items-center">
              <ShoppingCart size={40} className='m-2'/>
              <Link href='/' className="md:text-3xl text-2xl text-center h-[30px] font-semibold">Aklesh Store</Link>
            </div>
            <div>
              <SearchUI/>
            </div>
          </div>
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
