import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='border-b border-gray-200 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/' className='text-lg font-semibold text-gray-900'>
              BoxProject
            </Link>
          </div>

          {/* Desktop links */}
          <div className='hidden md:flex md:items-center md:space-x-6'>
            <Link href='/pricing' className='text-sm text-gray-700 hover:text-gray-900'>
              Pricing
            </Link>
            <Link href='/contact' className='text-sm text-gray-700 hover:text-gray-900'>
              Contact
            </Link>
            <Link href='/classes' className='text-sm text-gray-700 hover:text-gray-900'>
              Classes
            </Link>
          </div>

          {/* Mobile placeholder (no JS menu implemented) */}
          <div className='md:hidden'>
            <button
              type='button'
              aria-label='Open menu'
              className='rounded-md p-2 text-gray-700 hover:bg-gray-100'
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
