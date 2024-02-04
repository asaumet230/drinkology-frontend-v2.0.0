import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaMartiniGlass,
  FaBowlFood,
  FaAngleUp,
  FaBlender,
  FaNewspaper,
  FaBars,
  FaB,
} from 'react-icons/fa6';

import { SecondaryNavBar, NavBarSubMenu } from '.';
import styles from './navBar.module.css';

interface PrimaryItem {
  name: string;
  icon: JSX.Element;
  url: string;
  hasSubmenu: boolean;
}

const menuPrimaryItems: PrimaryItem[] = [
  {
    name: 'Cocktails',
    icon: <FaMartiniGlass className='size-4 text-icons-green' />,
    url: '/cocktails',
    hasSubmenu: true,
  },
  {
    name: 'Appetizers',
    icon: <FaBowlFood className='size-4 text-icons-green' />,
    url: '/appetizers',
    hasSubmenu: true,
  },
  {
    name: 'Barman Tools',
    icon: <FaBlender className='size-4 text-icons-green' />,
    url: '/barman-tools',
    hasSubmenu: false,
  },
  {
    name: 'News',
    icon: <FaNewspaper className='size-4 text-icons-green' />,
    url: '/news',
    hasSubmenu: false,
  },

];

export const PrimaryNavBar = () => {
  return (
    <>
      <SecondaryNavBar />
      <div className='py-2 bg-white border border-gray-100 shadow-sm px-2 md:px-8'>
        <div className='flex items-center w-11/12 mx-auto'>

          <div>
            <Link href={'/'} className='flex items-end'>
              <Image
                className='mb-1'
                height={40}
                width={40}
                src='/images/logo/drinkology-logo.png'
                alt='Drinkology-logo' />
              <h2 className='text-btn-green'>Drikology</h2>
            </Link>
          </div>

          <div className='flex-1'></div>
          <div className='hidden md:flex items-center'>
            <nav >
              <ul className={`flex ${ styles['navbar-menu'] }`}>
                {
                  menuPrimaryItems.map(item => (
                    <li className='group relative sm:mx-1 lg:mx-4 last-of-type:mr-0' key={item.url}>
                      <Link href={item.url} className='flex items-center'>
                        {item.icon}
                        <p className={`mx-2 text-btn-green ${styles.link} hover:text-icons-green`}>{item.name}</p>
                        { item.hasSubmenu && <FaAngleUp className={`size-3 ${styles.angle}`} /> }    
                      </Link>
                      { item.hasSubmenu && <NavBarSubMenu /> }
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>

          <div>
            <FaBars className='text-btn-green size-6 cursor-pointer mr-2 md:hidden'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrimaryNavBar;