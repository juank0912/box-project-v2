import Link from 'next/link';
// import logo from '../../public/KamusNL.png';
// import logo2 from '../../public/Kamus_logo.jpg';
import logo3_dark from '../../public/kamusLogo_FB_DARK.png';
import logo3 from '../../public/kamusLogo.webp';
// import BBJO from '../../public/BurpieBarJumpOver.webp';
import Image from 'next/image';
import Separator from './Separator';

export default function Hero() {
  return (
    <div
      // id='hero'
      className='dark grid grid-cols-1 grid-rows-1 items-center gap-12 p-5 dark:bg-[#002e5e]'
    >
      <div className='flex w-auto flex-col items-center'>
        <Image
          src={logo3}
          alt='Kamus Barbell Club Logo'
          className='inline-block w-2xs md:w-auto dark:hidden'
          loading='eager'
        />
        <Image
          src={logo3_dark}
          alt='Kamus Barbell Club Logo'
          className='hidden w-2xs md:w-auto dark:inline-block'
          loading='eager'
        />
      </div>
      <div className='block text-center text-2xl text-[#002d60] sm:text-2xl md:text-3xl dark:text-stone-300'>
        <h2 className=''>Tu fuerza. Nuestra comunidad</h2>
        <h3 className='my-3'>En nuestro box no solo entrenas</h3>
        <h4>
          creces, te superas y compartes el esfuerzo con personas que persiguen lo mismo que tú.
        </h4>
        {/* underline decoration-[#f60102] text-[#212cff] */}
        <Separator />
        <Link
          href='https://wa.me/34699745586'
          className='m-1.5rounded-md m-1.5 inline-block rounded-md bg-sky-950 p-3 text-white transition duration-400 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-black dark:bg-stone-300 dark:text-[#002e5e] dark:hover:bg-stone-400'
        >
          Prueba una clase gratis
        </Link>
      </div>
    </div>
  );
}
