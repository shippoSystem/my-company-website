// pages/arcana_info.js
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

export default function ArcanaInfo() {
    const { t, i18n } = useTranslation('common');
    const [langCode, setLangCode] = useState('en'); // ค่าเริ่มต้น

    useEffect(() => {
        // ใช้ i18n.language เพื่อดึงภาษาปัจจุบัน
        const currentLang = i18n.language;
        if (currentLang === 'th') setLangCode('th');
        else if (currentLang === 'jp') setLangCode('jp');
        else setLangCode('en');
    }, [i18n.language]);

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


    // แก้ไขการกำหนด active menu จากค่าเริ่มต้นเป็นใช้จาก state
    const menuItems = [
        { id: 'moldDes', label: 'm1', active: false, link: '/services/die-casting' },
        { id: 'arcana_info', label: 'm3', active: true, link: '/services/arcana-info' },
        { id: 'cylinder', label: 'm4', active: false, link: '/services/eco-cylinder' },
        { id: 'easyG', label: 'easyG', active: false, link: '/services/easy-g' },
        { id: 'toolMeister', label: 'tool_meister', active: false, link: '/services/tool-meister' }
    ];
    return (
        <>
            <Navbar />
            <div className='w-full bg-shippo-soft'>
                <motion.section
                    id="aboutArcana"
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
                        className="w-full to-[#10A1E9] p-8relative"
                        variants={fadeIn}
                    >
                        <div className="relative w-full p-12 bg-cover bg-center">
                            <div className="absolute inset-0 opacity-70"></div>
                            <div className="container mx-auto relative z-10 text-center">
                                <span className="inline-block bg-blue-100 text-shippo text-sm px-3 py-1 rounded-full mb-3">Online Platform</span>
                                <motion.h1
                                    className="text-2xl text-shippo md:text-3xl font-bold mb-3"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {t('arcana')}
                                </motion.h1>
                                <motion.h4
                                    className="text-base md:text-lg text-gray-700 max-w-md mx-auto"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {t('arcana_sub')}
                                </motion.h4>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image with Text Overlay */}
                    <div className="w-full bg-white py-8">
                        {/* Social Icons */}
                        <div className="container mx-auto">
                            <div className="flex justify-end space-x-3 pt-5">
                                <Link href="https://www.facebook.com/ArcanaOnlineShop.TH" target="_blank" rel="noreferrer">
                                    <Image
                                        src={getPublicPath("/images/facebook.png")}
                                        alt="Facebook"
                                        width={30}
                                        height={30}
                                        className="hover:opacity-80 transition-opacity"
                                    />
                                </Link>
                                <Link href="https://www.instagram.com/arcana_onlineshop/" target="_blank" rel="noreferrer">
                                    <Image
                                        src={getPublicPath("/images/instagram.png")}
                                        alt="Instagram"
                                        width={30}
                                        height={30}
                                        className="hover:opacity-80 transition-opacity"
                                    />
                                </Link>
                                <Link href="https://line.me/R/ti/p/@507oiceg" target="_blank" rel="noreferrer">
                                    <Image
                                        src={getPublicPath("/images/line.png")}
                                        alt="Line"
                                        width={30}
                                        height={30}
                                        className="hover:opacity-80 transition-opacity"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="container mx-auto px-4">
                            <div className="relative">
                                <Image
                                    src={getPublicPath("/images/SAMTWEBSITE3.png")}
                                    alt="Hero Image"
                                    width={1500}
                                    height={1500}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4">
                                    <div className='bg-white/80 shadow-lg rounded-lg border-l-4 border-shippo overflow-hidden'>
                                        <h2 className="text-2xl md:text-3xl p-4 font-bold text-shippo-hard mb-1">
                                            {t('hero_h3')}
                                        </h2>
                                        <h4 className="text-lg md:text-xl px-4 pb-4 text-gray-700">
                                            {t('hero_h3_sub')}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arcana Description Section */}
                    <motion.div
                        className="w-full mx-auto px-4 py-16 bg-white"
                        variants={fadeIn}
                    >
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                className="mb-12"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold mb-6 text-shippo-hard">
                                    {t('arcana_h1')}
                                </h2>

                                <ul className="space-y-2 pl-5">
                                    <li className="flex items-baseline">
                                        <span className="text-shippo-hard mr-2">・</span>
                                        <p className="text-gray-700">{t('arcana_t1')}</p>
                                    </li>
                                    <li className="flex items-baseline">
                                        <span className="text-shippo-hard mr-2">・</span>
                                        <p className="text-gray-700">{t('arcana_t2')}</p>
                                    </li>
                                    <li className="flex items-baseline">
                                        <span className="text-shippo-hard mr-2">・</span>
                                        <p className="text-gray-700">{t('arcana_t3')}</p>
                                    </li>
                                </ul>

                                <h2 className="text-3xl font-bold mt-12 mb-6 text-shippo-hard">
                                    {t('arcana_h2')}
                                </h2>

                                <h3 className="text-xl font-semibold text-shippo ml-3 mt-6">
                                    {t('arcana_t4')}
                                </h3>
                                <p className="ml-5 mt-3 text-gray-700">
                                    {t('arcana_s4')}
                                </p>

                                <h3 className="text-xl font-semibold text-shippo ml-3 mt-10">
                                    {t('arcana_t5')}
                                </h3>
                                <p className="ml-5 mt-3 text-gray-700">
                                    {t('arcana_s5')}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Products Section */}
                    <div className="w-full bg-shippo-soft py-16">
                        <motion.div
                            className="container mx-auto px-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="max-w-4xl mx-auto">
                                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                                    <motion.div
                                        className="w-full md:w-1/2 flex flex-col"
                                        initial={{ x: -30, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex-grow">
                                            <Image
                                                src={getPublicPath("/images/deadstock.gif")}
                                                alt="Deadstock"
                                                width={500}
                                                height={300}
                                                className="w-full h-auto rounded-lg"
                                                unoptimized
                                            />
                                        </div>
                                        <div className="mt-4 max-w-[200px] mx-auto">
                                            <a href="https://arcana-onlineshop.com/th/collections/industry-tools" target="_blank" rel="noreferrer" className="block transform hover:scale-105 transition-transform">
                                                <Image
                                                    src={getPublicPath(`/images/btn-deadstock-${langCode}.png`)}
                                                    alt="Deadstock Button"
                                                    width={200}
                                                    height={40}
                                                    className="w-full h-auto hover:opacity-90 transition-opacity"
                                                    unoptimized
                                                />
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="w-full md:w-1/2 flex flex-col"
                                        initial={{ x: 30, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex-grow">
                                            <Image
                                                src={getPublicPath("/images/new-pd.gif")}
                                                alt="New Products"
                                                width={500}
                                                height={300}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                        <div className="mt-4 max-w-[200px] mx-auto">
                                            <a href="https://arcana-onlineshop.com/th/collections/new-product" target="_blank" rel="noreferrer" className="block transform hover:scale-105 transition-transform">
                                                <Image
                                                    src={getPublicPath(`/images/btn-newpd-${langCode}.png`)}
                                                    alt="New Products Button"
                                                    width={200}
                                                    height={40}
                                                    className="w-full h-auto hover:opacity-90 transition-opacity"
                                                />
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* Sell with Arcana Section */}
                    <div className="w-full bg-white py-16">
                        <motion.div
                            className="container mx-auto px-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold mb-6 text-shippo-hard">
                                        {t('arcana_h3')}
                                    </h2>
                                    <h3 className="text-xl text-gray-500 ml-5 mb-10">
                                        {t('arcana_s3')}
                                    </h3>
                                </motion.div>

                                <div className="flex justify-center mb-10">
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="w-full md:w-2/3"
                                    >
                                        <Image
                                            src={getPublicPath("/images/arcana.png")}
                                            alt="Arcana"
                                            width={600}
                                            height={400}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </motion.div>
                                </div>

                                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
                                    <motion.div
                                        className="w-full md:w-1/3"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link href="https://line.me/R/ti/p/@507oiceg" target="_blank" rel="noreferrer" className="block transform hover:scale-105 transition-transform">
                                            <Image
                                                src={getPublicPath(`/images/btn-contact-${langCode}.png`)}
                                                alt="Contact Button"
                                                width={300}
                                                height={60}
                                                className="w-full h-auto hover:opacity-90 transition-opacity"
                                            />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        className="w-full md:w-1/3"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link href="https://arcana-onlineshop.com/th/pages/consignment-with-arcana" target="_blank" rel="noreferrer" className="block transform hover:scale-105 transition-transform">
                                            <Image
                                                src={getPublicPath(`/images/btn-what-sell-${langCode}.png`)}
                                                alt="What to Sell Button"
                                                width={300}
                                                height={60}
                                                className="w-full h-auto hover:opacity-90 transition-opacity"
                                            />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

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
                                    {t('acana_cont')}
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
                                            {t('contactS3')} <Link href="tel:027067800" className=" text-black hover:text-blue-500  transition-all duration-300">02-706-7800</Link>
                                            <br />EXT. 114
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