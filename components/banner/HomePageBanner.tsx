import { FC } from 'react'

import styles from './banner.module.css';


const HomePageBanner:FC = () => {
  return (
    <div className={`w-full h-40 sm:h-72 aspect-auto bg-center bg-no-repeat bg-cover ${ styles['banner-container'] } ${ styles['banner-image'] } md:h-96`}></div>
  )
}

export default HomePageBanner;