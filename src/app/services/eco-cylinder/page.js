// pages/cylinder.js
'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Phone } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getPublicPath } from '@/utils/paths';

export default function Cylinder() {
    const { t } = useTranslation('common');
    const router = useRouter();

    // Determine language based on current locale
    const getLangCode = () => {
        const { locale } = router;
        if (locale === 'th') return 'th';
        if (locale === 'jp') return 'jp';
        return 'en'; // Default
    };

    const langCode = getLangCode();

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 1, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const slideIn = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    // Menu items with proper active state for this page
    const menuItems = [
        { id: 'moldDes', label: 'm1', active: false, link: '/services/die-casting' },
        { id: 'arcana_info', label: 'm3', active: false, link: '/services/arcana-info' },
        { id: 'cylinder', label: 'm4', active: true, link: '/services/eco-cylinder' },
        { id: 'easyG', label: 'easyG', active: false, link: '/services/easy-g' },
        { id: 'toolMeister', label: 'tool_meister', active: false, link: '/services/tool-meister' }
    ];

    return (
        <>
            <Navbar />
            <div className='w-full bg-shippo-soft'>
                <motion.section
                    id="aboutCylinder"
                    className="w-full"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    {/* Hero Section */}
                    <motion.div
                        className="w-full bg-gradient-to-l from-[#003471] to-[#10A1E9] p-12 text-white relative"
                        variants={fadeIn}
                    >
                        <div className="relative w-full bg-cover bg-center">
                            <div className="absolute inset-0 opacity-70"></div>
                            <div className="container mx-auto relative z-10 text-center">
                                <motion.h1
                                    className="text-3xl md:text-4xl font-bold mb-6"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {t('business')}
                                </motion.h1>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation Menu */}
                    <div className="w-full bg-white py-2 shadow-md sticky top-0 z-20">
                        <div className="container mx-auto px-4">
                            <div className="md:overflow-x-auto md:no-scrollbar">
                                <ul className="flex flex-wrap md:flex-nowrap justify-center mx-auto">
                                    {menuItems.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="mr-2 mb-2 md:mb-0 last:mr-0"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                        >
                                            {item.link ? (
                                                <Link
                                                    href={item.link}
                                                    className={`inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${item.active
                                                        ? 'bg-blue-100 text-shippo font-bold'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {t(item.label)}
                                                </Link>
                                            ) : (
                                                <span
                                                    className={`inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${item.active
                                                        ? 'bg-blue-100 text-shippo font-bold'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {t(item.label)}
                                                </span>
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Hero Section */}
                    <motion.div
                        className="w-full to-[#10A1E9] p-8 relative"
                        variants={fadeIn}
                    >
                        <div className="relative w-full bg-cover bg-center">
                            <div className="absolute inset-0 opacity-70"></div>
                            <div className="container mx-auto relative z-10 text-center">
                                <span className="inline-block bg-blue-100 text-shippo text-sm px-3 py-1 rounded-full mb-3">{t('manufacturing')}</span>
                                <motion.h1
                                    className="text-2xl text-shippo md:text-3xl font-bold mb-3"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {t('ecoCylinder')}
                                </motion.h1>
                                <motion.h4
                                    className="text-base md:text-lg text-gray-700 max-w-md mx-auto"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {t('cy_s1')}
                                </motion.h4>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content Section - You can modify this to fit your content */}
                    <div className="w-full bg-white p-12">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <motion.div
                                    className="mb-12"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <h2 className="text-3xl font-bold mb-6 text-shippo-hard">
                                        {t('cy_h2')}
                                    </h2>

                                    <ul className="space-y-2 pl-5">
                                        <li className="mb-10">
                                            <p className="text-gray-700">{t('cy_s2_1')}</p>
                                        </li>
                                        <li className="mb-10">
                                            <p className="text-gray-700">{t('cy_s2_2')}</p>
                                        </li>
                                        <li>
                                            <p className="text-gray-700">{t('cy_s2_3')}</p>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            className="container mx-auto px-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="max-w-4xl mx-auto">
                                <div className="flex justify-center">
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="w-full md:w-2/3"
                                    >
                                        <Image
                                            src={getPublicPath("/images/cylinder-a.gif")}
                                            alt="Cylinder"
                                            width={600}
                                            height={400}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Image Section */}
                    {/*  <div className="w-full bg-white pb-16">

                    </div> */}

                    {/* Contact Section */}
                    <motion.section
                        className="w-full bg-shippo-soft py-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="container mx-auto px-4">
                            <motion.div
                                className="max-w-2xl mx-auto text-center mb-12"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shippo-hard">{t('contact')}</h2>
                                <p className="text-lg text-gray-700">
                                    {t('cy_des')}
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-col md:flex-row justify-center items-stretch gap-6"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="w-full md:w-1/3 max-w-sm mx-auto"
                                    variants={fadeIn}
                                >
                                    <Link href="/contact" className="block h-full">
                                        <div className="h-full bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                            <div className="bg-blue-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                                                <Mail className="text-shippo" size={24} />
                                            </div>
                                            <h5 className="text-xl font-bold text-gray-800 hover:text-blue-500">{t('contactS2')}</h5>
                                        </div>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    className="w-full md:w-1/3 max-w-sm mx-auto"
                                    variants={fadeIn}
                                >
                                    <div className="h-full bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                        <div className="bg-blue-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                                            <Phone className="text-shippo" size={24} />
                                        </div>
                                        <h5 className="text-xl font-bold text-gray-800">
                                            {t('contactS3')} <Link href="tel:027067800" className="text-black transition-all duration-300  hover:text-blue-500">02-706-7800</Link>
                                        </h5>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.section>
                </motion.section>

                <Footer />

                <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            </div>
        </>
    );
}