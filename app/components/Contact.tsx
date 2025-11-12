import Separator from './Separator';

export default function Contact() {
  return (
    <div
      id='contactanos'
      className='relative isolate bg-cover bg-center bg-no-repeat px-6 py-24 sm:py-32 lg:px-8'
      style={{ backgroundImage: "url('/kamusTeamComp.webp')" }}
    >
      {/* overlay to improve text contrast over the photo */}
      <div className='absolute inset-0 bg-black/30 dark:bg-black/50' aria-hidden='true' />
      {/* <div className='grid grid-cols-1 grid-rows-1 gap-3'> */}
      {/* <div className=''> */}
      {/* <h2 className='text-base/7 font-semibold text-[#002e5e]'>Tarifas</h2> */}
      <p className='relative mx-auto mt-2 max-w-4xl text-center text-5xl tracking-tight text-balance text-[#002e5e] sm:text-6xl dark:text-stone-300'>
        Reserva tu primera clase gratis!
      </p>
    </div>
    /* <Separator /> */
    // </div>
    // </div>
  );
}
