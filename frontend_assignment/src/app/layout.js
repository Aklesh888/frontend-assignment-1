"use client"
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Inter } from 'next/font/google';
import SearchUI from './Components/Search';
import './globals.css';
import Link from 'next/link';

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
        <head></head>
        <body className={inter.className}>
        <div className="flex justify-between py-5 mx-48 max-h-[96px]">
            <div className="flex items-center">
              <Link href='/' className="text-4xl text-center h-[30px]">Ecommerce App</Link>
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
