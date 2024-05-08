
"use client";

import React from 'react'
import Script from 'next/script';


const ThemeScript = () => {
    return (
        <meta name="google-adsense-account" content="ca-pub-7070336929107463">
        <Script id="theme-switcher" strategy="beforeInteractive">
            {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`}
        </Script>
    )
}

export default ThemeScript
