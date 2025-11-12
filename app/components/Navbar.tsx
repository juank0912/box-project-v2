import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '#hero', current: true },
  { name: 'Precios', href: '#pricing', current: false },
  { name: 'Contactanos', href: '#contactanos', current: false },
  // { name: 'Team', href: '/team', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure
      as='nav'
      className='fixed top-0 right-0 left-0 z-50 bg-white/95 p-2 backdrop-blur-sm transition-colors duration-200 dark:bg-[#002e5e]'
    >
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-950 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 dark:text-white'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='block size-6 group-data-open:hidden' />
              <XMarkIcon aria-hidden='true' className='hidden size-6 group-data-open:block' />
            </DisclosureButton>
          </div>

          {/* Zona logo y menu desktop/Mid -INI*/}
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-between'>
            <div className='flex shrink-0 items-center'>
              <Link
                href={navigation[0].href}
                className='rounded-md px-3 py-2 text-4xl text-[#002e5e] decoration-solid transition duration-400 ease-in-out hover:scale-110 hover:underline dark:text-stone-300 dark:hover:text-white'
              >
                Kamus Barbell Club
              </Link>
              {/* <Image src={logo} alt='Kamus Barbell Club Logo' className='h-15 w-auto' /> */}

              {/* <img alt='Your Company' src={logo} className='h-8 w-auto' /> */}
            </div>
            {/* botones del menu */}
            <div className='hidden self-center sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={
                      'rounded-md px-3 py-2 text-3xl text-[#002e5e] transition duration-300 ease-in-out hover:scale-120 hover:underline dark:text-stone-300 dark:hover:text-white'
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Zona logo y menu desktop/Mid - FIN*/}

          {/* Zona de foto de perfil y notificaciones - INI*/}
          {/* <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button
              type='button'
              className='relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500'
            >
              <span className='absolute -inset-1.5' />
              <span className='sr-only'>View notifications</span>
              <BellIcon aria-hidden='true' className='size-6' />
            </button>
            Profile dropdown
            <Menu as='div' className='relative ml-3'>
              <MenuButton className='relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
                <span className='absolute -inset-1.5' />
                <span className='sr-only'>Open user menu</span>
                <img
                  alt=''
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  className='size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10'
                />
              </MenuButton>

              <MenuItems
                transition
                className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'
              >
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden'
                  >
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden'
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden'
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div> */}
          {/* Zona de foto de perfil y notifiaciones - FIN */}
        </div>
      </div>

      {/* links del menu movil */}
      <DisclosurePanel
        transition
        className='origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 sm:hidden'
      >
        <div className='space-y-1 px-2 pt-2 pb-3'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as='a'
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'font-bold' : 'hover:bg-white/5',
                'block rounded-md px-3 py-2 text-2xl text-[#002e5e] dark:text-white'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
