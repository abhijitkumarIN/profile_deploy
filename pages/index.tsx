import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Button } from '../components'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <Button name="abhijeet" age={90032}>children </Button>
    </React.Fragment>
  )
}
