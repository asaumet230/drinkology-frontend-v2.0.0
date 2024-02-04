import { FC } from 'react';
import Link from 'next/link';

export const NavBarSubMenu: FC = () => {
  return (
    <div className='mt-2 bottom-0 w-full'>
        <ul className='invisible absolute bg-white p-4 shadow border border-slate-100 rounded-md w-64 group-hover:visible transition duration-300 ease-in'>
            <li className='py-2 px-3 font-medium'>
                <Link href={'/'} className='hover:text-icons-green'>opción 1</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBarSubMenu;
