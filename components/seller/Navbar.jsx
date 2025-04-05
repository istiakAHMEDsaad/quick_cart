import { assets } from '../../assets/assets';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b border-gray-300'>
      <Image
        onClick={() => router.push('/')}
        className='cursor-pointer  object-cover h-10'
        width={129}
        height={34}
        src={logo}
        alt='logo'
      />
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
