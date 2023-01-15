import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Layout } from '../components';
import { Switch } from "@material-tailwind/react";
export default function App({ Component, pageProps }: AppProps) {
  const [isDark, SetBackground] = React.useState(false)
  const toggle = React.useCallback(() => {
    document.documentElement.classList.toggle('dark')
    let isExistClass = document.documentElement.classList.contains('dark')
    SetBackground(isExistClass)
  }, [])

  return (
    <Layout>
      <div className='relative block pb-16 '>
        <div className='absolute border dark:border-dark right-5 top-4 w-[48px] h-[48px] grid rounded-full cursor-pointer text-white dark:bg-bg-dark' onClick={toggle}>{isDark ? <img src="https://img.icons8.com/color/48/null/summer--v1.png" className="w-[35px] h-[35px] m-auto" /> : <img src="https://img.icons8.com/color-glass/48/null/bright-moon--v1.png" className="w-[35px] h-[35px] m-auto" />}
        </div>
      </div>
      <Component {...pageProps} />
    </Layout>
  )
}
