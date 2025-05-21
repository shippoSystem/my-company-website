'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';
import ImageSlider from './components/ImageSlider';
import SliderPageWork from './components/SliderPageWork';
import Footer from './footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation('common');

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container-fluid mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ImageSlider />
        </motion.div>
      </main>

      {/* Hero Section with Animation */}
      <div className="bg-shippo-soft">
        <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.h1
              className="text-center text-xl font-extrabold text-shippo sm:text-1xl sm:tracking-tight lg:text-4xl"
              variants={itemVariants}
            >
              {t('tagline')}
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-500 max-w-lg mx-auto"
              variants={itemVariants}
            >
              {t('subTagline')}
            </motion.p>

            {/* Banner Cards */}
            <motion.div
              className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
              variants={containerVariants}
            >
              {/* Banner Card 1 */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg w-full group"
                variants={itemVariants}
              >
                <Link href="/banner-page-1" className="absolute inset-0 z-30">
                  <span className="sr-only">ดูรายละเอียดแบนเนอร์ 1</span>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20 z-10"></div>
                <Image alt='banner1'
                  width={1200}
                  height={500}
                  unoptimized
                  src="./images/bannerS1.gif"
                  className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                  <h3 className="text-xl font-semibold mb-2">{t('sec1b1h1')}</h3>
                  <p className="text-sm">{t('sec1b1s1')}</p>
                  <div className="mt-3 inline-flex items-center text-sm font-medium text-white">
                    ดูเพิ่มเติม
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Banner Card 2 */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg w-full group"
                variants={itemVariants}
              >
                <Link href="/banner-page-2" className="absolute inset-0 z-30">
                  <span className="sr-only"></span>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
                <Image alt='banner2'
                  unoptimized
                  width={1200}
                  height={500}
                  src="./images/bannerS3.gif"
                  className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                  <h3 className="text-xl font-semibold mb-2">{t('sec1b1h2')}</h3>
                  <p className="text-sm">{t('sec1b1s2')}</p>
                  <div className="mt-3 inline-flex items-center text-sm font-medium text-white">
                    ดูเพิ่มเติม
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Banner Card 3 */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg w-full group"
                variants={itemVariants}
              >
                <Link href="/banner-page-3" className="absolute inset-0 z-30">
                  <span className="sr-only">ดูรายละเอียดแบนเนอร์ 3</span>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
                <Image alt='banner3'
                  unoptimized
                  width={1200}
                  height={500}
                  src="./images/bannerS2.gif"
                  className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                  <h3 className="text-xl font-semibold mb-2">{t('sec1b1h3')}</h3>
                  <p className="text-sm">{t('sec1b1s3')}</p>
                  <div className="mt-3 inline-flex items-center text-sm font-medium text-white">
                    ดูเพิ่มเติม
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-center text-xl mt-12 font-extrabold text-shippo sm:text-1xl sm:tracking-tight lg:text-4xl"
              variants={itemVariants}
            >
              {t('sec1H2')}
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-500 max-w-lg mx-auto"
              variants={itemVariants}
            >
              {t('sec1T2')}
            </motion.p>
          </motion.div>
        </div>
      </div>
      {/* Services Section with Animation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SliderPageWork />
          {/* <h2 className="text-3xl font-extrabold text-gray-900">{t('services')}</h2>
          <p className="mt-4 text-lg text-gray-500">บริการของเราครอบคลุมทุกความต้องการของคุณ</p> */}
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="p-6">
              <Image alt='s1'
                width={48}
                height={43}
                src="./images/service-icon-01.png"
              />
              <h3 className="text-lg font-medium text-gray-900 mt-2">{t('sec2b1h1')}</h3>
              <p className="mt-2 text-gray-500">{t('sec2b1s1')}</p>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6">
              <Image alt='s2'
                width={48}
                height={43}
                src="./images/service-icon-02.png"
              />
              <h3 className="text-lg font-medium text-gray-900 mt-2">{t('sec2b1h2')}</h3>
              <p className="mt-2 text-gray-500">{t('sec2b1s2')}</p>
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: 0.4 }}
          >
            <div className="p-6">
              <Image alt='s3'
                width={48}
                height={43}
                src="./images/service-icon-03.png"
              />
              <h3 className="text-lg font-medium text-gray-900 mt-2">{t('sec2b1h3')}</h3>
              <p className="mt-2 text-gray-500">{t('sec2b1s3')}</p>
            </div>
          </motion.div>
        </div>
        <div className="flex  items-center justify-center mt-12 gap-1 mb-12">
          {/* Service Card 1 - Speech Bubble */}
          <motion.div
            className="bg-shippo-soft rounded-lg relative max-w-fit"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="py-8 px-8 relative border-2 border-gray-300 rounded-lg">
              <h3 className="text-2xl font-medium text-shippo-hard">{t('recruitH1')}</h3>
              <Link
                href="/recruitment"
                className="mt-1 text-gray-500 text-lg hover:underline"
              >
                {t('recruits1')}
              </Link>
            </div>
            {/* Speech bubble tail (triangle) with border */}
            <div className="absolute w-6 h-6 -right-3 top-10 overflow-hidden">
              <div className="absolute w-4 h-4 bg-shippo-soft rotate-307 border-r-2 border-b-2 border-gray-300"></div>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="flex items-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <Image alt='sale photo'
              width={500}
              height={700}
              src="./images/sale_banner-removebg.png"
              className="max-h-100"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-center text-xl font-extrabold text-shippo sm:text-1xl sm:tracking-tight lg:text-4xl"
            variants={itemVariants}
          >
            {t('contact')}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-500 max-w-lg mx-auto"
            variants={itemVariants}
          >
            {t('contactS1')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 container mx-auto mb-12 mt-12">
          {/* Service Card 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="p-6 flex items-center justify-center">
              <Image alt='emailicon'
                width={1200}
                height={500}
                src="./images/email.png"
                className="mr-4 h-20 w-20"
              />
              <h3 className="text-xl font-medium text-gray-900">
                <Link href="/contact" className="hover:text-blue-600">
                  {t('contactS2')}
                </Link>
              </h3>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 flex items-center justify-center">
              <Image alt='phone icon'
                width={1200}
                height={500}
                src="./images/phone.png"
                className="mr-4 h-20 w-20"
              />
              <h3 className="text-lg font-medium text-gray-900">{t('contactS3')}<br></br><Link href="tel:027067800" className=" hover:text-blue-800">02-706-7800</Link></h3>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}