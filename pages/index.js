import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import SecoundSection from '../components/SecoundSection'
import Profile from '../components/Profile'
import FourSection from '../components/FourSection'

export default function Home() {
  return (
    <> 
      <Header />
      <MainSection />
      <SecoundSection />
      <Profile />
      <FourSection />
      <Footer/>
    </>
  )
}
