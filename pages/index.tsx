import React from "react"
import Head from "next/head"
import localFont from "@next/font/local"

import Header from "../components/Header"
import Gradient from "../components/Gradient"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import CreateBio from "../components/CreateBio"
import { platforms, vibes } from "../utils/constants"

const nunito = localFont({
  src: [
    {
      path: "../fonts/Nunito-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Nunito-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Nunito-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Nunito-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Nunito-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Nunito-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
})

const Home = () => {
  return (
    <>
      <Head>
        <title>AIBio - AI writer to craft your social bios</title>
        <meta
          name="description"
          content="AIBio - AI writer to craft your social bios for Facebook, Twitter, LinkedIn or Instagram"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/AIPen.ico" />
      </Head>
      <main
        className={`${nunito.className} bg-body dark:bg-black flex flex-col w-full justify-center items-center`}
      >
        <Header />
        <Gradient />
        <Hero platforms={platforms} />
        <CreateBio platforms={platforms} vibes={vibes} />
        <div className="h-[1px] w-full bg-light dark:bg-white max-w-4xl my-2" />
        <Footer />
        <div className="h-[1px] w-full bg-light dark:bg-white max-w-4xl my-2" />
      </main>
    </>
  )
}

export default Home
