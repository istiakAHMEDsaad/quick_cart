import { assets } from '@/assets/assets';
import Image from 'next/image';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500'>
        <div className='w-4/5'>
          <Image
            className='cursor-pointer  object-cover h-10'
            onClick={() => router.push('/')}
            width={129}
            height={34}
            src={logo}
            alt='logo'
          />
          <p className='mt-6 text-sm'>
            Monotonectally myocardinate B2B interfaces vis-a-vis cross
            functional technology. Objectively syndicate multimedia based models
            rather than plug-and-play networks. Uniquely leverage existing
            mission-critical value and plug-and-play alignments. Proactively
            utilize mission-critical solutions for.
          </p>
        </div>

        <div className='w-1/2 flex items-center justify-start md:justify-center'>
          <div>
            <h2 className='font-medium text-gray-900 mb-5'>Company</h2>
            <ul className='text-sm space-y-2'>
              <li>
                <a className='hover:underline transition' href='#'>
                  Home
                </a>
              </li>
              <li>
                <a className='hover:underline transition' href='#'>
                  About us
                </a>
              </li>
              <li>
                <a className='hover:underline transition' href='#'>
                  Contact us
                </a>
              </li>
              <li>
                <a className='hover:underline transition' href='#'>
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-1/2 flex items-start justify-start md:justify-center'>
          <div>
            <h2 className='font-medium text-gray-900 mb-5'>Get in touch</h2>
            <div className='text-sm space-y-2'>
              <p>+880-9999-999999</p>
              <p>istiakahmedsaad.official@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className='py-4 text-center text-xs md:text-sm'>
        Copyright 2025 ©{' '}
        <a
          href='https://github.com/istiakAHMEDsaad/'
          target='_blank'
          className='hover:text-blue-500 hover:underline transition-all'
        >
          Istiak Ahmed Saad
        </a>{' '}
        All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
