import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <div
        id='contactanos'
        className='relative isolate bg-cover bg-center bg-no-repeat px-6 py-24 sm:py-32 md:bg-fixed lg:px-8'
        style={{ backgroundImage: "url('/kamusTeamComp.webp')" }}
      >
        <div className='absolute inset-0 bg-black/40 dark:bg-black/50' aria-hidden='true' />
        <p className='relative mx-auto mt-2 max-w-4xl text-center text-5xl tracking-tight text-balance text-stone-300 sm:text-6xl dark:text-stone-300'>
          Reserva tu primera clase gratis!
        </p>
      </div>

      <div className='mx-auto max-w-6xl px-6 py-12 dark:bg-[#002e5e]'>
        <section
          aria-labelledby='contact-grid'
          className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-3'
        >
          <div
            aria-labelledby='visitanos'
            className='flex flex-col justify-center gap-3 rounded-lg bg-[#002e5e] p-6 text-center shadow-sm md:text-left dark:bg-stone-300'
          >
            <h3
              id='visitanos'
              className='text-center text-3xl font-semibold text-stone-200 dark:text-[#002e5e]'
            >
              Visítanos
            </h3>
            <Link
              href='https://www.google.com/maps/place//data=!4m2!3m1!1s0xd422fec609fcce5:0xb93f095d7bdb8b73?sa=X&ved=1t:8290&ictx=111'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 inline-block text-center text-xl font-medium text-blue-600 hover:underline'
            >
              C. de Miguel Fleta, 13, San Blas-Canillejas, 28037 Madrid
            </Link>
          </div>

          <div
            aria-labelledby='llamanos'
            className='flex flex-col justify-center gap-3 rounded-lg bg-[#002e5e] p-6 text-center shadow-sm md:text-left dark:bg-stone-300'
          >
            <h3
              id='llamanos'
              className='text-center text-3xl font-semibold text-stone-200 dark:text-[#002e5e]'
            >
              Llámanos
            </h3>
            {/* <p className='text-sm text-slate-700 dark:text-stone-300'>+34 699 745 586</p> */}
            <Link
              href='tel:+34699745586'
              className='mt-2 inline-block text-center text-xl font-medium text-[#f94b4b] hover:underline'
            >
              Llamar
            </Link>
          </div>

          <div
            aria-labelledby='escribenos'
            className='flex flex-col justify-center gap-3 rounded-lg bg-[#002e5e] p-6 text-center shadow-sm md:text-left dark:bg-stone-300'
          >
            <h3
              id='escribenos'
              className='text-center text-3xl font-semibold text-stone-200 dark:text-[#002e5e]'
            >
              Escríbenos
            </h3>
            {/* <p className='text-sm text-slate-700 dark:text-stone-300'>Chat por WhatsApp</p> */}
            <Link
              href='https://wa.me/34699745586'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 inline-block text-center text-xl font-medium text-green-600 hover:underline'
            >
              Chat por WhatsApp
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
