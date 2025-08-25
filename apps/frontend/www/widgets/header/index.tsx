"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className='fixed top-0 right-0 left-0 z-50 border-b-2 border-b-primary/70 border-dashed backdrop-blur-md'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <div className='flex h-16 items-center justify-between lg:h-20'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='relative flex h-9 w-9 items-center justify-center rounded-sm bg-primary overflow-hidden'>
              <Image
                alt='Logo'
                className='h-full w-full'
                src='/logo.png'
                width={64}
                height={64}
              />
            </div>
          </Link>

          <nav className='text-sm items-center space-x-8'>
            <Link href='/' className='text-primary'>
              Главная
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
