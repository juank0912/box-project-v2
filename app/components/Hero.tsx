import Link from 'next/link';
import logo from '../../public/KamusNL.png';
import logo2 from '../../public/Kamus_logo.jpg';
import logo3 from '../../public/kamusLogo.webp';
// import BBJO from '../../public/BurpieBarJumpOver.webp';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='grid grid-cols-1 grid-rows-1 items-center gap-12'>
      <div className='flex flex-col items-center'>
        <Image src={logo3} alt='Kamus Barbell Club Logo' className='w-fit' loading='eager' />
      </div>
      <div className='flex flex-col items-center justify-center text-3xl text-[#002d60]'>
        <h2 className=''>Tu fuerza. Nuestra comunidad.</h2>
        <h3 className=''>
          En nuestro box no solo entrenas: creces, te superas y compartes el esfuerzo con personas
          que persiguen lo mismo que tú.
        </h3>
        {/* underline decoration-[#f60102] text-[#212cff] */}
        <Link href='/' className='rounded-2xl bg-[#002d60] p-2 text-white'>
          Prueba una clase gratis
        </Link>
      </div>
    </div>
  );
}
