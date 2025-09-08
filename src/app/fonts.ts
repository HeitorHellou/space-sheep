import { Kalam, Comic_Neue, Courier_Prime, Public_Sans } from "next/font/google";

export const kalam = Kalam({
    subsets: ["latin"],
    weight: "300",
    variable: "--font-kalam"
})

export const comicNeue = Comic_Neue({
    subsets: ["latin"],
    weight: "300",
    variable: "--font-comic-neue"
})

export const courierPrime = Courier_Prime({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-courier-prime"
})

export const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-public-sans'
});