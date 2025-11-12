import { CheckIcon } from '@heroicons/react/20/solid';
import Separator from './Separator';
import Link from 'next/link';

const tiers = [
  {
    name: 'Basic',
    id: 'Basic',
    priceMonthly: '€ 65',
    // description: "The perfect plan if you're just getting started with our product.",
    features: ['8 Accesos (1/día)', 'Open box'],
    featured: false,
  },
  {
    name: 'Medium',
    id: 'Medium',
    priceMonthly: '€ 75',
    // description: 'Dedicated support and infrastructure for your company.',
    features: ['12 Accesos (1/día)', 'Open box'],
    featured: false,
  },
  {
    name: 'Advance',
    id: 'Advance',
    priceMonthly: '€ 85',
    // description: 'Dedicated support and infrastructure for your company.',
    features: ['20 accesos', 'Open box'],
    featured: false,
  },
  {
    name: 'Kamus Total',
    id: 'Total',
    priceMonthly: '€ 95',
    // description: 'Dedicated support and infrastructure for your company.',
    features: ['Accesos Ilimitados', 'Open box'],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Prices() {
  return (
    <div
      id='pricing'
      className='relative isolate bg-[#002e5e] px-6 py-24 sm:py-32 lg:px-8 dark:bg-stone-300'
    >
      <div className='mx-auto max-w-4xl text-center'>
        {/* <h2 className='text-base/7 font-semibold text-[#002e5e]'>Tarifas</h2> */}
        <p className='mt-2 text-5xl tracking-tight text-balance text-stone-300 sm:text-6xl dark:text-[#002e5e]'>
          Escoge la tarifa adecuada para tu reto
        </p>
      </div>
      <Separator />
      {/* <p className='mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-stone-900 sm:text-xl/8'>
        Choose an affordable plan that’s packed with the best features for engaging your audience,
        creating customer loyalty, and driving sales.
      </p> */}
      <div className='mx-auto grid max-w-lg grid-cols-2 items-center gap-2 sm:mt-20 lg:max-w-5xl lg:grid-cols-4'>
        {/* {tiers.map((tier, tierIdx) => ( */}
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'bg-[#002e5e] shadow-2xl ring-stone-200' : 'bg-stone-200',
              'rounded-sm p-4 decoration-solid shadow-xs ring-1 inset-ring'
            )}
            //   tier.featured
            //     ? ''
            //     : tierIdx === 0
            //       ? 'rounded-3xl rounded-br-none lg:rounded-tr-none lg:rounded-bl-3xl'
            //       : '',
            //   tier.featured
            //     ? ''
            //     : tierIdx === 3
            //       ? 'rounded-3xl rounded-bl-none lg:rounded-tl-none lg:rounded-br-3xl'
            //       : '',
            //   'p-3 ring-1 ring-gray-900/10 sm:p-10'
            // )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-[#f94b4b]' : 'text-[#0075f3]',
                'text-base/7 font-semibold'
              )}
            >
              {tier.name}
            </h3>
            <p className='mt-2 flex items-baseline gap-x-2'>
              <span
                className={classNames(
                  tier.featured ? 'text-stone-100' : 'text-[#002e5e]',
                  'text-5xl font-semibold tracking-tight'
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? 'text-[#f94b4b]' : 'text-[#0075f3]',
                  'text-base'
                )}
              >
                /month
              </span>
            </p>
            {/* <p
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-6 text-base/7'
              )}
            >
              {tier.description}
            </p> */}
            <ul
              role='list'
              className={classNames(
                tier.featured ? 'text-white' : 'text-black',
                'md:text-1xl mt-2 sm:mt-4 sm:text-base md:text-xl'
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className='flex gap-x-3'>
                  <CheckIcon
                    aria-hidden='true'
                    className={classNames(
                      tier.featured ? 'text-[#f94b4b]' : 'text-[#0075f3]',
                      'h-6 w-5 flex-none'
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href='https://wa.me/34699745586'
              aria-describedby={tier.id}
              target='_blank'
              className={classNames(
                tier.featured
                  ? 'text-white hover:text-[#f94b4b] hover:inset-ring-white focus-visible:outline-white dark:text-white'
                  : 'text-stone-800 hover:text-[#0075f3] hover:inset-ring-[#0075f3] focus-visible:outline-[#0075f3]',
                'mt-2 block rounded-md px-3.5 py-2.5 text-center text-2xl font-semibold decoration-solid shadow-xs inset-ring transition duration-400 ease-in-out hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2'
              )}
            >
              Get started today!
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
