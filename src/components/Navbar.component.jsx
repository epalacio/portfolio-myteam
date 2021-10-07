import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

import navLogo from '../img/logo.svg'
import navMenu from '../img/navMenu.svg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='max-w-screen-xl mx-auto'>
      <nav className='relative'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center w-full justify-between'>
                <div className='flex items-center justify-start'>
                    <div className='flex-shrink-0'>
                        <img src={navLogo} alt='Company Logo and Bookmark word'/>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <a href='/' className='text-white hover:text-lightCoral px-3 py-2 text-baseText font-semibold'>home</a>
                            <a href='/' className='text-white hover:text-lightCoral px-3 py-2 text-baseText font-semibold'>about</a>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <a href='/' className='text-white hover:text-sacramentoGreen hover:bg-white px-4 py-2 text-baseText font-semibold rounded-full border-2 border-white'>contact us</a>
                </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-valhalla hover:text-carnation'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='#ffffff'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='#ffffff'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
          className='z-10 h-screen w-full bg-darkGreen opacity-70'
        >
          {(ref) => (
            <div className='md:hidden flex flex-col justify-between w-4/5 absolute right-0 bg-midnightGreen h-screen' id='mobile-menu'>
                <div ref={ref} className='pt-2 pb-3 divide-y-1 divide-graySuit text-center flex flex-col mt-10'>
                    <a href='/' className='text-white hover:text-lightCoral px-3 py-2 text-baseText font-semibold'>home</a>
                    <a href='/' className='text-white hover:text-lightCoral px-3 py-2 text-baseText font-semibold mt-6 mb-10'>about</a>
                    <div className='block px-3 py-2 w-full'>
                        <a href='/' className='text-white hover:text-sacramentoGreen hover:bg-white px-4 py-2 text-baseText font-semibold rounded-full border-2 border-white'>contact us</a>
                    </div>
                </div>
                <div className='flex justify-end -mr-24'>
                    <img className='' src={navMenu} alt="navMenu icon" />
                </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
