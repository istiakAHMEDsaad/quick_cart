'use client';

import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from '@/assets/assets';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import logo from '../assets/logo.png';
import { useClerk, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <nav className='flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700'>
      {/* w-28 md:w-32 md:h-16 */}
      <Image
        className='cursor-pointer  object-cover h-10'
        onClick={() => router.push('/')}
        width={129}
        height={34}
        src={logo}
        alt='logo'
      />
      <div className='flex items-center gap-4 lg:gap-8 max-md:hidden'>
        <Link href='/' className='hover:text-gray-900 transition'>
          Home
        </Link>
        <Link href='/all-products' className='hover:text-gray-900 transition'>
          Shop
        </Link>
        <Link href='/' className='hover:text-gray-900 transition'>
          About Us
        </Link>
        <Link href='/' className='hover:text-gray-900 transition'>
          Contact
        </Link>

        {isSeller && (
          <button
            onClick={() => router.push('/seller')}
            className='text-xs border border-gray-400 px-4 py-1.5 rounded-full hover:bg-gray-600 hover:text-white cursor-pointer transition-colors'
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Large Device */}
      <ul className='hidden md:flex items-center gap-4 '>
        <Image className='w-4 h-4' src={assets.search_icon} alt='search icon' />
        {user ? (
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label='Cart'
                  labelIcon={<CartIcon />}
                  onClick={() => router.push('/cart')}
                />
              </UserButton.MenuItems>

              <UserButton.MenuItems>
                <UserButton.Action
                  label='My Orders'
                  labelIcon={<BagIcon />}
                  onClick={() => router.push('/my-orders')}
                />
              </UserButton.MenuItems>
            </UserButton>
          </>
        ) : (
          <button
            onClick={openSignIn}
            className='flex items-center gap-2 hover:text-gray-900 hover:shadow-md transition cursor-pointer border border-gray-400 px-2 py-1 rounded-md'
          >
            <Image src={assets.user_icon} alt='user icon' />
            Account
          </button>
        )}
      </ul>

      {/* Mobile Device */}
      <div className='flex items-center md:hidden gap-3'>
        {isSeller && (
          <button
            onClick={() => router.push('/seller')}
            className='text-xs border border-gray-400 p-1 rounded-full'
          >
            Seller Dashboard
          </button>
        )}
        {user ? (
          <>
            <UserButton>
              {/* home */}
              <UserButton.MenuItems>
                <UserButton.Action
                  label='Home'
                  labelIcon={<HomeIcon />}
                  onClick={() => router.push('/')}
                />
              </UserButton.MenuItems>

              {/* products */}
              <UserButton.MenuItems>
                <UserButton.Action
                  label='Products'
                  labelIcon={<BoxIcon />}
                  onClick={() => router.push('/product')}
                />
              </UserButton.MenuItems>
              
              {/* cart */}
              <UserButton.MenuItems>
                <UserButton.Action
                  label='Cart'
                  labelIcon={<CartIcon />}
                  onClick={() => router.push('/cart')}
                />
              </UserButton.MenuItems>

              {/* my-order */}
              <UserButton.MenuItems>
                <UserButton.Action
                  label='My Orders'
                  labelIcon={<BagIcon />}
                  onClick={() => router.push('/my-orders')}
                />
              </UserButton.MenuItems>
            </UserButton>
          </>
        ) : (
          <button
            onClick={openSignIn}
            className='flex items-center gap-2 hover:text-gray-900 hover:shadow-md transition cursor-pointer border border-gray-400 px-2 py-1 rounded-md'
          >
            <Image src={assets.user_icon} alt='user icon' />
            Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
/* 
yeweba2169@bariswc.com
Yeweba2169
*/
