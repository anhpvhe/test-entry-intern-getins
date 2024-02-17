import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "./ui/landing-page/header";
import HeroSection from "./ui/landing-page/hero-section";
import Feature from './ui/landing-page/feature';
import About from './ui/landing-page/about';
import Contact from './ui/landing-page/contact';
import Review from './ui/landing-page/reviews';
import Statistic from './ui/landing-page/statistic';
import Footer from './ui/landing-page/footer';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Your Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      <Statistic />
      
      {/* Testimonials/Reviews */}
      <Review />

      {/* Features */}
      <Feature />
      
      <About />
      
      {/* Call-to-Action (CTA) */}
      <Contact />

      {/* Footer */}
      <Footer />
      </div>
  )
}
