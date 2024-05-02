import type { Metadata } from "next";
import Link from 'next/link'
import { Blinker } from "next/font/google";
import "./globals.css";

const blinker = Blinker({ weight: ['100', '300', '400', '600', '700', '900'], 
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BigTomCodes",
  description: "Welcome to my developer portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
        crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col bg-slate-900 text-slate-400 ' + blinker.className}>
        <header className='flex border-b p-4 sm:p-5 border-green-600'>
          <div className='flex font-semibold text-xs sm:text-sm items-center max-w-[900px] mx-auto w-full'>
            <Link href={'/'} className='text-slate-200 hidden sm:inline'>Tom Simpson</Link>
            <Link href={'/'} className='text-slate-200 sm:hidden'>TS</Link>
          </div>
        </header>
        {children}
        <footer className='flex p-4 py-16 text-xs sm:text-s text-green-400 border-t border-green-600 items-center justify-content flex-col gap-6'>
          <div className='flex items-center justify-center gap-4'>
            <a download href={''} className='cursor-pointer hover:opacity-60 duration-200'>CV PDF</a>
            <p>|</p>
            <Link href={'/projects'} className='cursor-pointer hover:opacity-60 duration-200'>Projects</Link>
          </div>
          <div className='flex items-center justify-center gap-4 text-lg sm:text-xl'>
            <a className='cursor-pointer hover:opacity-60 duration-200' href={'https://www.linkedin.com/in/tom-simpson-20505545/'} target='_blank'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className='cursor-pointer hover:opacity-60 duration-200' href={'https://github.com/MrSkaro'} target='_blank'>
              <i className="fa-brands fa-square-github"></i>  
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
