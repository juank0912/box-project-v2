// import Link from 'next/link';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Prices from './components/Prices';
export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section id='hero' className='scroll-mt-20'>
          <Hero />
        </section>
        <section>
          <Prices />
        </section>
        <section className='bg-stone-300 dark:bg-[#002e5e]'>
          <Contact />
        </section>
      </main>
    </>
  );
}
