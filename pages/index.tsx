import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Button, TabsFeature } from '../components'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <div className=''>
        <div className="lg:px-20 md:px-8 px-1 my-4 ">
          <TabsFeature />
        </div>
      </div>
    </React.Fragment>
  )
}
