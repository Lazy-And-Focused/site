"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className='w-full bg-sidebar border-t-2 border-t-primary/70 border-dashed'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <div className='flex h-16 text-sm items-center justify-between lg:h-20'>
          <div className='text-sidebar-foreground'>
            © Все права за
            <span className='text-sidebar-foreground/70'>laf</span>лены
          </div>

          <nav className='items-center space-x-8'>
            <Link
              href='https://github.com/Lazy-And-Focused'
              className='text-primary'
            >
              GitHub
            </Link>
            <Link href='https://t.me/laf_love' className='text-primary'>
              Telegram
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
