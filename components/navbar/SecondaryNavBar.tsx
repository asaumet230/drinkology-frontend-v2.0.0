import { FC } from 'react';
import Link from 'next/link';

import {
  FaUser,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube
} from 'react-icons/fa6';

interface SecondaryItem {
  icon: JSX.Element;
  url: string;
}

const menuSecondaryItems: SecondaryItem[] = [
  {
    icon: <FaInstagram className='secondary-icon-menu' />,
    url: 'https://www.instagram.com'
  },
  {
    icon: <FaFacebook className='secondary-icon-menu' />,
    url: 'https://www.facebook.com/'
  },
  {
    icon: <FaXTwitter className='secondary-icon-menu' />,
    url: 'https://twitter.com/?lang=en'
  },
  {
    icon: <FaYoutube className='secondary-icon-menu' />,
    url: 'https://www.youtube.com/'
  },
];

export const SecondaryNavBar: FC = () => {

  return (
    <div className='bg-btn-green py-3 px-2 md:px-8'>
      <div className='flex w-11/12 mx-auto'>
        <div className='flex items-center text-icons-green hover:text-white ease-in-out duration-300'>
          <Link href={'/login'} className='flex ml-2' >
            <FaUser className='size-4' />
            <p className='mx-2 font-semibold'>Login</p>
          </Link>
        </div>

        <div className='flex-1'></div>

        <div className='flex items-center'>
          <nav>
            <ul className='flex'>
              {
                menuSecondaryItems.map(item => (
                  <li key={item.url}>
                    <Link href={item.url} prefetch={false}>
                      {item.icon}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </div>

  )
}

export default SecondaryNavBar;