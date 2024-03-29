import { Inter } from 'next/font/google'
import { Lusitana } from 'next/font/google'
import { Roboto } from 'next/font/google'

export const inter = Inter({subsets: ['latin']})
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: '700'
})

export const roboto = Roboto({
    weight: ['400','700'],
    subsets: ['latin'],
    style: ['normal','italic'],
    display: 'swap',
})