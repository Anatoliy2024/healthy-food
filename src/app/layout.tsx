import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import localFont from "next/font/local"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Healthy Food",
  description: "Healthy Food",
}

const inter = localFont({
  src: [
    {
      path: "../assets/fonts/inter/Inter18pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/inter/Inter18pt-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
})

const nunito = localFont({
  src: [
    {
      path: "../assets/fonts/nunito/Nunito-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/nunito/Nunito-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
})

const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/poppins/Poppins-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
})

const quicksand = localFont({
  src: [
    {
      path: "../assets/fonts/quicksand/Quicksand-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/quicksand/Quicksand-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} 
        ${geistMono.variable}
        ${inter.variable}
        ${nunito.variable} 
        ${poppins.variable} 
        ${quicksand.variable}    
        antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
