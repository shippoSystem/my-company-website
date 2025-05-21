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
import contactInfo from '@/app/contactData';
import { getPublicPath } from '@/utils/paths';

export default function ToolMeister() {
    const { i18n, t } = useTranslation('common');
    const router = useRouter();

    const currentLang = i18n.language || 'en'; // รับภาษาปัจจุบัน


    // เลือกข้อมูลตามภาษา (ถ้าไม่มีภาษาที่ต้องการให้ใช้ภาษาอังกฤษ)
    const langData = contactInfo[currentLang] || contactInfo.en;

    // Determine language based on current locale
    const getLangCode = () => {
        const { locale } = router;
        if (locale === 'th') return 'th';
        if (locale === 'jp') return 'jp';
        return 'en'; // Default
    };

    const langCode = getLangCode();
    const successVariant = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 1.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };


    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7 }
        }
    };



    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
    };

    const cardVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };
    const arrowVariant = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 200
            }
        }
    };
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

    // Set active menu
    const menuItems = [
        { id: 'moldDes', label: 'm1', active: false, link: '/services/die-casting' },
        { id: 'arcana_info', label: 'm3', active: false, link: '/services/arcana-info' },
        { id: 'cylinder', label: 'm4', active: false, link: '/services/eco-cylinder' },
        { id: 'easyG', label: 'easyG', active: false, link: '/services/easy-g' },
        { id: 'toolMeister', label: 'tool_meister', active: true, link: '/services/tool-meister' }
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
                        className="w-full to-[#10A1E9] p-8 relative"
                        variants={fadeIn}
                    >
                        <div className="relative w-full bg-cover bg-center">
                            <div className="absolute inset-0 opacity-70"></div>
                            <div className="container mx-auto relative z-10 text-center">
                                <span className="inline-block bg-blue-100 text-shippo text-sm px-3 py-1 rounded-full mb-3">{t('new_development_product')}</span>
                                <motion.h1
                                    className="font-ud text-2xl text-shippo md:text-3xl font-bold mb-3"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {t('tool_meister')}
                                </motion.h1>
                                <motion.h4
                                    className="text-base md:text-lg text-gray-700 max-w-md mx-auto"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {t('toolM_des1')}
                                    <span className='font-ud'> TOOL MEISTER </span>
                                    {t('toolM_des2')}
                                </motion.h4>
                            </div>
                        </div>
                    </motion.div>
                    {/* toolmeister section with motion */}
                    <div className='w-full bg-white p-12'>
                        <motion.div
                            className="max-w-4xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                        >
                            <h2 className="pb-3 text-gray-800 text-2xl md:text-3xl font-bold">
                                {t('tmt1')}
                            </h2>
                        </motion.div>
                        <motion.div
                            className="max-w-4xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideUp}
                        >
                            <h2 className="pt-12 pb-3 text-center text-gray-800 text-3xl md:text-5xl font-bold font-ud">
                                {t('tool_meister')}
                            </h2>
                        </motion.div>
                        <motion.div
                            className="max-w-4xl mx-auto"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Image
                                src={getPublicPath(`/images/tmt/t-peroson.png`)}
                                alt="Tool Meister"
                                width={1200}
                                height={600}
                                className="w-full h-auto rounded-lg shadow-xl"
                            />
                        </motion.div>
                    </div>

                    {/* Portfolio Section with motion */}
                    <section className="max-w-5xl mx-auto">
                        <div className="container mx-auto px-4 md:px-10 pb-12">
                            <motion.h2
                                className="pt-12 pb-3 text-gray-800 text-2xl md:text-3xl font-bold"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeIn}
                            >
                                {t('tmt2')}
                            </motion.h2>
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Image
                                    src={getPublicPath(`/images/tmt/tmt-${t('tmt3')}.png`)}
                                    alt="Tool Meister"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </motion.div>
                            <motion.div
                                className="flex justify-center my-12"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={arrowVariant}
                            >
                                <Image
                                    src={getPublicPath("/images/tmt/tmt-arrow-bottom.png")}
                                    alt="Arrow"
                                    width={60}
                                    height={60}
                                    className="h-16 w-auto"
                                />
                            </motion.div>
                            <motion.h3
                                className="text-gray-800 text-xl md:text-2xl mb-5 font-semibold"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={slideUp}
                            >
                                {t('tmt4')}
                            </motion.h3>
                            <motion.div
                                className="text-shippo flex items-center flex-col md:flex-row mb-12 text-2xl md:text-3xl"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={slideUp}
                            >
                                <span className='font-ud'>{t('tool_meister')}</span>&nbsp; {t('tmt5')}
                            </motion.div>

                            {/* YouTube Video with motion */}
                            <motion.div
                                className="max-w-4xl mx-auto py-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <div className="flex justify-center">
                                    <div className="w-full md:w-10/12">
                                        <div className="relative overflow-hidden pt-[56.25%]">
                                            <iframe
                                                className="absolute top-0 left-0 w-full h-full"
                                                src="https://www.youtube.com/embed/LHXROxc3BmY"
                                                title="EasyG YouTube video"
                                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Desktop Workflow - "Before" Cards with motion */}
                            <div className="hidden md:block">
                                <motion.div
                                    className="flex flex-wrap max-w-5xl mx-auto text-center text-gray-700"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={staggerContainer}
                                >
                                    <motion.div className="w-1/6 flex items-center" variants={cardVariant}>
                                        <div className="relative">
                                            <div className="absolute -left-5 top-1/2 -translate-y-1/2 text-white px-5 py-1 bg-gray-500">
                                                {t('Before')}
                                            </div>
                                        </div>
                                        <div className="shadow-md rounded-md overflow-hidden bg-white w-full">
                                            <div className="bg-gray-200 p-2">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t1.png")}
                                                    alt="Process 1"
                                                    width={100}
                                                    height={100}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100">
                                                <h6 className="text-left font-semibold text-sm">
                                                    {t('tmt6')}
                                                </h6>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="text-gray-400 mx-1"
                                            variants={arrowVariant}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    {/* Card 2 */}
                                    <motion.div className="w-1/6 flex items-center" variants={cardVariant}>
                                        <div className="shadow-md rounded-md overflow-hidden bg-white w-full">
                                            <div className="bg-gray-200 p-2">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t2.png")}
                                                    alt="Process 2"
                                                    width={100}
                                                    height={100}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100">
                                                <h6 className="text-left font-semibold text-sm">
                                                    {t('tmt7')}
                                                </h6>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="text-gray-400 mx-1"
                                            variants={arrowVariant}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    {/* Remaining Cards 3-6 would follow the same pattern */}
                                    {/* Card 3 */}
                                    <motion.div className="w-1/6 flex items-center" variants={cardVariant}>
                                        <div className="shadow-md rounded-md overflow-hidden bg-white w-full">
                                            <div className="bg-gray-200 p-2">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t3.png")}
                                                    alt="Process 3"
                                                    width={100}
                                                    height={100}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100">
                                                <h6 className="text-left font-semibold text-sm">
                                                    {t('tmt8')}
                                                </h6>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="text-gray-400 mx-1"
                                            variants={arrowVariant}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    {/* Card 4 */}
                                    <motion.div className="w-1/6 flex items-center" variants={cardVariant}>
                                        <div className="shadow-md rounded-md overflow-hidden bg-white w-full">
                                            <div className="bg-gray-200 p-2">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t4.png")}
                                                    alt="Process 4"
                                                    width={100}
                                                    height={100}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100">
                                                <h6 className="text-left font-semibold text-sm">
                                                    {t('tmt9')}
                                                </h6>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="text-gray-400 mx-1"
                                            variants={arrowVariant}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    {/* Card 5 */}
                                    <motion.div className="w-1/6 flex items-center" variants={cardVariant}>
                                        <div className="shadow-md rounded-md overflow-hidden bg-white w-full">
                                            <div className="bg-gray-200 p-2">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t5.png")}
                                                    alt="Process 5"
                                                    width={100}
                                                    height={100}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100">
                                                <h6 className="text-left font-semibold text-sm">
                                                    {t('tmt10')}
                                                </h6>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="text-gray-400 mx-1"
                                            variants={arrowVariant}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    {/* Card 6 */}
                                    <motion.div className="w-1/6 flex items-center" variants={cardVariant}>
                                        <div className="shadow-md rounded-md overflow-hidden bg-white w-full">
                                            <div className="bg-gray-200 p-2">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t6.png")}
                                                    alt="Process 6"
                                                    width={100}
                                                    height={100}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100">
                                                <h6 className="text-left font-semibold text-sm">
                                                    {t('tmt11')}
                                                </h6>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Desktop Workflow - "After" Cards with motion */}
                                <motion.div
                                    className="flex flex-wrap max-w-5xl text-shippo-hard mx-auto text-center mt-8"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={staggerContainer}
                                >
                                    <motion.div className="w-1/4 flex items-center" variants={cardVariant}>
                                        <div className="relative">
                                            <div className="absolute -left-4 top-1/2 text-white px-5 py-1 bg-shippo-hard">
                                                {t('After')}
                                            </div>
                                        </div>
                                        <div className="shadow-md rounded-md overflow-hidden bg-white w-full">
                                            <div className="bg-blue-100 p-2">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t7.png")}
                                                    alt="After Process 1"
                                                    width={120}
                                                    height={120}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="p-3 bg-blue-50">
                                                <h6 className="text-left font-semibold text-sm">
                                                    {t('tmt12')}
                                                </h6>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="text-shippo-hard mx-1"
                                            variants={arrowVariant}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div className="w-1/4 flex items-center" variants={cardVariant}>
                                        <div className="shadow-md rounded-md overflow-hidden bg-white w-full">
                                            <div className="bg-blue-100 p-2">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t6.png")}
                                                    alt="After Process 2"
                                                    width={120}
                                                    height={120}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="p-3 bg-blue-50">
                                                <h6 className="text-left font-semibold text-sm">
                                                    {t('tmt13')}
                                                </h6>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="text-shippo-hard mx-1"
                                            variants={arrowVariant}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="w-1/6 flex flex-col items-center"
                                        variants={successVariant}
                                    >
                                        <Image
                                            src={getPublicPath("/images/tmt/t-success.png")}
                                            alt="Success"
                                            width={120}
                                            height={120}
                                            className="w-full"
                                        />
                                        <h4 className="text-gray-800 font-bold mt-2">
                                            {t('tmt13add')}
                                        </h4>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Mobile Workflow with motion */}
                            <div className="block md:hidden">
                                <div className="flex flex-wrap text-center">
                                    {/* Before Column */}
                                    <motion.div
                                        className="w-1/2 flex flex-col items-center max-w-4xl mx-auto text-gray-700"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        variants={staggerContainer}
                                    >
                                        <motion.div className="relative mb-2" variants={fadeIn}>
                                            <div className="text-white px-3 py-1 bg-gray-500 rounded text-center">
                                                {t('before')}
                                            </div>
                                        </motion.div>

                                        {/* Mobile Before cards with motion - consistent height */}
                                        <motion.div variants={cardVariant} className="shadow-md rounded-md overflow-hidden bg-white w-full mb-3 h-36">
                                            <div className="bg-gray-200 p-2 h-20 flex items-center justify-center">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t1.png")}
                                                    alt="Process 1"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-16"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100 h-16">
                                                <h5 className="text-left text-sm">
                                                    {t('tmt6')}
                                                </h5>
                                            </div>
                                        </motion.div>
                                        <motion.div variants={arrowVariant} className="text-gray-400 mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </motion.div>

                                        {/* Remaining Before cards follow the same pattern with fixed heights */}
                                        <motion.div variants={cardVariant} className="shadow-md rounded-md overflow-hidden bg-white w-full mb-3 h-36">
                                            <div className="bg-gray-200 p-2 h-20 flex items-center justify-center">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t2.png")}
                                                    alt="Process 2"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-16"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100 h-16">
                                                <h5 className="text-left text-sm">
                                                    {t('tmt7')}
                                                </h5>
                                            </div>
                                        </motion.div>
                                        <motion.div variants={arrowVariant} className="text-gray-400 mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </motion.div>

                                        <motion.div variants={cardVariant} className="shadow-md rounded-md overflow-hidden bg-white w-full mb-3 h-36">
                                            <div className="bg-gray-200 p-2 h-20 flex items-center justify-center">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t3.png")}
                                                    alt="Process 3"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-16"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100 h-16">
                                                <h5 className="text-left text-sm">
                                                    {t('tmt8')}
                                                </h5>
                                            </div>
                                        </motion.div>
                                        <motion.div variants={arrowVariant} className="text-gray-400 mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </motion.div>

                                        <motion.div variants={cardVariant} className="shadow-md rounded-md overflow-hidden bg-white w-full mb-3 h-36">
                                            <div className="bg-gray-200 p-2 h-20 flex items-center justify-center">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t4.png")}
                                                    alt="Process 4"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-16"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100 h-16">
                                                <h5 className="text-left text-sm">
                                                    {t('tmt9')}
                                                </h5>
                                            </div>
                                        </motion.div>
                                        <motion.div variants={arrowVariant} className="text-gray-400 mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </motion.div>

                                        <motion.div variants={cardVariant} className="shadow-md rounded-md overflow-hidden bg-white w-full mb-3 h-36">
                                            <div className="bg-gray-200 p-2 h-20 flex items-center justify-center">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t5.png")}
                                                    alt="Process 5"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-16"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100 h-16">
                                                <h5 className="text-left text-sm">
                                                    {t('tmt10')}
                                                </h5>
                                            </div>
                                        </motion.div>
                                        <motion.div variants={arrowVariant} className="text-gray-400 mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </motion.div>

                                        <motion.div variants={cardVariant} className="shadow-md rounded-md overflow-hidden bg-white w-full mb-3 h-36">
                                            <div className="bg-gray-200 p-2 h-20 flex items-center justify-center">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t6.png")}
                                                    alt="Process 6"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-16"
                                                />
                                            </div>
                                            <div className="p-3 bg-gray-100 h-16">
                                                <h5 className="text-left text-sm">
                                                    {t('tmt11')}
                                                </h5>
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    {/* After Column - matched heights and spacing */}
                                    <motion.div
                                        className="w-1/2 flex flex-col items-center max-w-4xl mx-auto text-shippo-hard"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        variants={staggerContainer}
                                    >
                                        <motion.div className="relative mb-2" variants={fadeIn}>
                                            <div className="text-white px-3 py-1 bg-shippo-hard rounded text-center">
                                                {t('after')}
                                            </div>
                                        </motion.div>

                                        {/* Mobile After card with consistent height */}
                                        <motion.div variants={cardVariant} className="shadow-md rounded-md overflow-hidden bg-white w-full mb-3 h-36">
                                            <div className="bg-blue-100 p-2 h-20 flex items-center justify-center">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t7.png")}
                                                    alt="After Process 1"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-16"
                                                />
                                            </div>

                                            <div className="p-3 bg-blue-50 h-16">
                                                <h5 className="text-left text-sm">
                                                    {t('tmt12')}
                                                </h5>
                                            </div>
                                        </motion.div>
                                        <motion.div variants={arrowVariant} className="text-shippo-hard mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </motion.div>

                                        {/* Middle card with t6.png image */}
                                        <motion.div variants={cardVariant} className="shadow-md rounded-md overflow-hidden bg-white w-full mb-3 h-36">
                                            <div className="bg-blue-100 p-2 h-20 flex items-center justify-center">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t6.png")}
                                                    alt="After Process 2"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-16"
                                                />
                                            </div>

                                            <div className="p-3 bg-blue-50 h-16">
                                                <h5 className="text-left text-sm">
                                                    {t('tmt13')}
                                                </h5>
                                            </div>
                                        </motion.div>
                                        <motion.div variants={arrowVariant} className="text-shippo-hard mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </motion.div>

                                        {/* Success icon with special animation */}
                                        <motion.div
                                            className="flex flex-col items-center"
                                            variants={successVariant}
                                        >
                                            <div className="h-20 flex items-center justify-center">
                                                <Image
                                                    src={getPublicPath("/images/tmt/t-success.png")}
                                                    alt="Success"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h4 className="text-gray-800 font-bold mt-2 text-sm">
                                                {t('tmt13add')}
                                            </h4>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full bg-white py-8 md:py-12">
                        <div className="mx-auto max-w-xl mb-5 flex items-center leading-relaxed flex-col">
                            <strong className='text-gray-800 font-ud text-4xl mr-2'>
                                TOOL MEISTER
                            </strong>
                            <h2 className="text-gray-800 font-bold mt-2 max-w-4xl text-4xl">
                                {t('tmt14')}
                            </h2>
                        </div>
                        <div className="mx-auto px-3 flex flex-col items-center">
                            {/* Feature grid - now with motion */}
                            <motion.div
                                className="w-full md:w-2/5 mb-10"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <motion.div
                                    className="grid grid-cols-2 gap-0 mb-8"
                                    variants={cardVariant}
                                >
                                    <motion.h4
                                        className="text-white text-center p-4 bg-orange-400 font-custom"
                                        variants={slideIn}
                                    >
                                        {t('tmt15')}
                                    </motion.h4>
                                    <motion.h4
                                        className="p-4 text-white font-custom bg-gradient-to-r from-black to-[#c89116]"
                                        variants={slideIn}

                                    >
                                        {t('tmt16')}
                                    </motion.h4>
                                </motion.div>

                                <motion.div
                                    className="grid grid-cols-2 gap-0 mb-8"
                                    variants={cardVariant}
                                >
                                    <motion.h4
                                        className="text-white font-custom text-center p-4 bg-orange-400"
                                        variants={slideIn}

                                    >
                                        {t('tmt17')}
                                    </motion.h4>
                                    <motion.h4
                                        className="p-4 text-white font-custom bg-gradient-to-r from-black to-[#c89116]"
                                        variants={slideIn}

                                    >
                                        {t('tmt18')}
                                    </motion.h4>
                                </motion.div>

                                <motion.div
                                    className="grid grid-cols-2 gap-0 mb-8"
                                    variants={cardVariant}
                                >
                                    <motion.h4
                                        className="text-white font-custom text-center p-4 bg-orange-400"
                                        variants={slideIn}

                                    >
                                        {t('tmt19')}
                                    </motion.h4>
                                    <motion.h4
                                        className="p-4 text-white font-custom bg-gradient-to-r from-black to-[#c89116]"
                                        variants={slideIn}

                                    >
                                        {t('tmt20')}
                                    </motion.h4>
                                </motion.div>

                                <motion.div
                                    className="grid grid-cols-2 gap-0 mb-8"
                                    variants={cardVariant}
                                >
                                    <motion.h4
                                        className="text-white font-custom text-center p-4 bg-orange-400"
                                        variants={slideIn}

                                    >
                                        {t('tmt21')}
                                    </motion.h4>
                                    <motion.h4
                                        className="p-4 text-white font-custom bg-gradient-to-r from-black to-[#c89116]"
                                        variants={slideIn}

                                    >
                                        {t('tmt22')}
                                    </motion.h4>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="w-full px-4">
                            <motion.div
                                variants={successVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Image
                                    className="w-full max-w-4xl mx-auto h-auto"
                                    src={getPublicPath("/images/tmt/tmt-orange.png")}
                                    alt={t('tmtOrangeAlt')}
                                    width={1500}
                                    height={800}
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex flex-col max-w-4xl mx-auto px-4 justify-center text-center"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <motion.div
                                className="mt-12 md:mt-20"
                                variants={cardVariant}
                            >
                                <motion.h4
                                    className="text-white text-xl md:text-3xl font-custom p-2 mx-auto w-3/4 md:w-1/4 bg-orange-400"
                                    variants={arrowVariant}

                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {t('tmt15')}
                                </motion.h4>
                                <br />
                                <motion.h3
                                    className='text-black text-2xl md:text-3xl mb-5'
                                    variants={fadeIn}
                                    viewport={{ once: true }}
                                >
                                    {t('tmt16')}
                                </motion.h3>
                                <motion.div
                                    className="mx-auto w-full md:w-2/3 lg:w-1/2 relative"
                                    variants={slideUp}
                                >
                                    <Image
                                        className="h-auto mx-auto"
                                        src={getPublicPath("/images/tmt/tmt1.jpg")}
                                        alt={t('tmt1Alt')}
                                        width={600}
                                        height={400}
                                    />
                                </motion.div>
                                <motion.div
                                    className="relative max-w-xl mx-auto mt-4"
                                    variants={fadeIn}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative border-l-2 border-r-2 border-dashed border-gray-700 py-6 px-4 md:py-8 md:px-6">
                                        <p className="text-center text-gray-700 text-sm md:text-base">
                                            {t('tmt23')}
                                        </p>

                                        {/* Corner decorations */}
                                        <div className="absolute -top-1 -left-1 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-gray-700"></div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-gray-700"></div>
                                        <div className="absolute -bottom-1 -left-1 w-4 h-4 md:w-6 md:h-6 border-b-4 border-l-2 border-gray-700"></div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-6 md:h-6 border-b-4 border-r-2 border-gray-700"></div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="mt-12 md:mt-20"
                                variants={itemVariants}
                            >
                                <motion.h4
                                    className="text-white text-xl md:text-3xl font-custom p-2 mx-auto w-3/4 md:w-1/4 bg-orange-400"

                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {t('tmt17')}
                                </motion.h4>
                                <br />
                                <motion.h3
                                    className='text-black text-2xl md:text-3xl mb-5'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {t('tmt18')}
                                </motion.h3>
                                <motion.div
                                    className="mx-auto w-full md:w-2/3 lg:w-1/2 relative"
                                    variants={imageVariants}
                                >
                                    <Image
                                        className="w-full h-auto mx-auto"
                                        src={getPublicPath("/images/tmt/tmt2.jpg")}
                                        alt={t('tmt2Alt')}
                                        width={600}
                                        height={400}
                                    />
                                </motion.div>
                                <motion.div
                                    className="relative max-w-xl mx-auto mt-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative border-l-2 border-r-2 border-dashed border-gray-700 py-6 px-4 md:py-8 md:px-6">
                                        <p className="text-center text-gray-700 text-sm md:text-base">
                                            {t('tmt24')}
                                        </p>

                                        {/* Corner decorations */}
                                        <div className="absolute -top-1 -left-1 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-gray-700"></div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-gray-700"></div>
                                        <div className="absolute -bottom-1 -left-1 w-4 h-4 md:w-6 md:h-6 border-b-4 border-l-2 border-gray-700"></div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-6 md:h-6 border-b-4 border-r-2 border-gray-700"></div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="mt-12 md:mt-20"
                                variants={itemVariants}
                            >
                                <motion.h4
                                    className="text-white text-xl md:text-3xl font-custom p-2 mx-auto w-3/4 md:w-1/4 bg-orange-400"

                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {t('tmt19')}
                                </motion.h4>
                                <br />
                                <motion.h3
                                    className='text-black text-2xl md:text-3xl mb-5'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {t('tmt20')}
                                </motion.h3>
                                <motion.div
                                    className="mx-auto w-full md:w-2/3 lg:w-1/2 relative"
                                    variants={imageVariants}
                                >
                                    <Image
                                        className="w-full h-auto mx-auto"
                                        src={getPublicPath("/images/tmt/tmt3.jpg")}
                                        alt={t('tmt3Alt')}
                                        width={600}
                                        height={400}
                                    />
                                </motion.div>

                                <motion.div
                                    className="relative max-w-xl mx-auto mt-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative border-l-2 border-r-2 border-dashed border-gray-700 py-6 px-4 md:py-8 md:px-6">
                                        <p className="text-center text-gray-700 text-sm md:text-base">
                                            {t('tmt25')}
                                        </p>

                                        {/* Corner decorations */}
                                        <div className="absolute -top-1 -left-1 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-gray-700"></div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-gray-700"></div>
                                        <div className="absolute -bottom-1 -left-1 w-4 h-4 md:w-6 md:h-6 border-b-4 border-l-2 border-gray-700"></div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-6 md:h-6 border-b-4 border-r-2 border-gray-700"></div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="mt-12 md:mt-20 mb-10"
                                variants={itemVariants}
                            >
                                <motion.h4
                                    className="text-white text-xl md:text-3xl font-custom p-2 mx-auto w-3/4 md:w-1/4 bg-orange-400"

                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {t('tmt21')}
                                </motion.h4>
                                <br />
                                <motion.h3
                                    className='text-black text-2xl md:text-3xl mb-5'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {t('tmt22')}
                                </motion.h3>
                                <motion.div
                                    className="mx-auto w-full md:w-2/3 lg:w-1/2 relative"
                                    variants={imageVariants}
                                >
                                    <Image
                                        className="w-full h-auto mx-auto"
                                        src={getPublicPath("/images/tmt/tmt4.jpg")}
                                        alt={t('tmt4Alt')}
                                        width={600}
                                        height={400}
                                    />
                                </motion.div>
                                <br />

                                <motion.div
                                    className="relative max-w-xl mx-auto"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative border-l-2 border-r-2 border-dashed border-gray-700 py-6 px-4 md:py-8 md:px-6">
                                        <p className="text-center text-gray-700 text-sm md:text-base">
                                            {t('tmt26')}
                                        </p>

                                        {/* Corner decorations */}
                                        <div className="absolute -top-1 -left-1 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-gray-700"></div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-gray-700"></div>
                                        <div className="absolute -bottom-1 -left-1 w-4 h-4 md:w-6 md:h-6 border-b-4 border-l-2 border-gray-700"></div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-6 md:h-6 border-b-4 border-r-2 border-gray-700"></div>
                                    </div>
                                </motion.div>
                                <div className="container p-5 mt-5 mx-auto bg-[#EFF5FB]">
                                    <h3 className="text-center font-medium text-3xl mb-4 text-black">{t('tmt_spec')}</h3>
                                    <div className="overflow-x-auto">
                                        <table className="table-auto w-full">
                                            <tbody className='text-gray-700'>
                                                <tr className="bg-gray-100">
                                                    <th className="border px-4 py-2 text-left text-white bg-shippo-hard">{t('tmt_table1')}</th>
                                                    <td className="border px-4 py-2">H100／B50</td>
                                                    <td className="border px-4 py-2">H63-W／B40-W</td>
                                                    <td className="border px-4 py-2">H63／B40</td>
                                                </tr>
                                                <tr>
                                                    <th className="border px-4 py-2 text-left bg-gray-50 text-white bg-shippo-hard">{t('tmt_table2')}</th>
                                                    <td className="border px-4 py-2">HSK-A100／BT-50</td>
                                                    <td className="border px-4 py-2">HSK-A63／BT-40</td>
                                                    <td className="border px-4 py-2">HSK-A63／BT-40</td>
                                                </tr>
                                                <tr>
                                                    <th className="border px-4 py-2 text-left bg-gray-50 text-white bg-shippo-hard">{t('tmt_table3')}</th>
                                                    <td className="border px-4 py-2">60</td>
                                                    <td className="border px-4 py-2">40</td>
                                                    <td className="border px-4 py-2">20</td>
                                                </tr>
                                                <tr>
                                                    <th className="border px-4 py-2 text-left bg-gray-50 text-white bg-shippo-hard">{t('tmt_table4')}</th>
                                                    <td className="border px-4 py-2">160</td>
                                                    <td className="border px-4 py-2">160</td>
                                                    <td className="border px-4 py-2">64</td>
                                                </tr>
                                                <tr>
                                                    <th className="border px-4 py-2 text-left bg-gray-50 text-white bg-shippo-hard">{t('tmt_table5')}</th>
                                                    <td className="border px-4 py-2">Φ10・Φ8・Φ6・Φ4</td>
                                                    <td className="border px-4 py-2">Φ10・Φ8・Φ6・Φ4</td>
                                                    <td className="border px-4 py-2">Φ10・Φ8・Φ6・Φ4</td>
                                                </tr>
                                                <tr>
                                                    <th className="border px-4 py-2 text-left bg-gray-50 text-white bg-shippo-hard">{t('tmt_table6')}</th>
                                                    <td className="border px-4 py-2">8Kg</td>
                                                    <td className="border px-4 py-2">8Kg</td>
                                                    <td className="border px-4 py-2">8Kg</td>
                                                </tr>
                                                <tr>
                                                    <th className="border px-4 py-2 text-left bg-gray-50 text-white bg-shippo-hard">{t('tmt_table7')}</th>
                                                    <td className="border px-4 py-2">1400mm×3900mm</td>
                                                    <td className="border px-4 py-2">1400mm×3300mm</td>
                                                    <td className="border px-4 py-2">1400mm×2220mm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shippo-hard"> {t('contact')}</h2>
                                <p className="text-lg text-gray-700">
                                    {t('tmt_contact')}
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
                                    <div className="h-full bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                        <div className="bg-blue-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                                            <Mail className="text-shippo" size={24} />
                                        </div>
                                        {langData.contacts.map((person, index) => (
                                            <div key={index} className='text-shippo'>
                                                <strong className='text-shippo-hard text-lg'>{person.name}:</strong>{' '}
                                                <Link href={`mailto:${person.email}`} className="text-lg text-black  hover:text-blue-500">
                                                    {person.email}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="w-full md:w-1/3 max-w-sm mx-auto"
                                    variants={fadeIn}
                                >
                                    <div className="h-full bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                        <div className="bg-blue-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                                            <Phone className="text-shippo" size={24} />
                                        </div>
                                        {langData.phones.map((phone, index) => (
                                            <div
                                                className='flex items-center justify-center' // เพิ่ม items-center เพื่อจัดให้อยู่กึ่งกลางในแนวตั้ง
                                                key={index}
                                            >
                                                <strong className='text-lg text-shippo-hard mr-2'>{phone.name}: </strong>

                                                <Link
                                                    href={`tel:${phone.tel.replace(/[-\s]/g, '')}`}
                                                    className='text-lg text-black hover:text-blue-500'
                                                >
                                                    {phone.tel}
                                                </Link>
                                            </div>
                                        ))}
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
            `}
                </style>
            </div >
        </>
    );
}