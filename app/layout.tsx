import {Roboto} from 'next/font/google';

import '../src/styles/globals.css'
import Providers from "@/src/redux/providers";

export const metadata = {
    title: 'Venue Nexus',
    description: 'Find any place you want',
}

const roboto = Roboto({
    weight: '400',
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <Providers>
            <div id={"next"}>
                {children}
            </div>
        </Providers>
        </body>
        </html>
    )
}
