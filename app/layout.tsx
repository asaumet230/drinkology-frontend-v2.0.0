import type { Metadata } from 'next';

import '@/styles/globals.css';

import { quick } from '@/fonts';
import { PrimaryNavBar } from '@/components/navbar';


export const metadata: Metadata = {
  title: 'Drinkology | Best Cocktails Recipes',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en-Us' className= {quick.className}>
      <body>
          <PrimaryNavBar />
          {children}
      </body>
    </html>
  )
}
