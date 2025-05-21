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
import contactInfo from '@/app/contactData';
import { getPublicPath } from '@/utils/paths';

export default function EasyG() {
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
        { id: 'arcana_info', label: 'm3', active: false, link: '/services/arcana-info' },
        { id: 'cylinder', label: 'm4', active: false, link: '/services/eco-cylinder' },
        { id: 'easyG', label: 'easyG', active: true, link: '/services/easy-g' },
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
                        <div className="relative w-full mt-12 bg-cover bg-center">
                            <div className="absolute inset-0 opacity-70"></div>
                            <div className="container mx-auto pb-12 relative z-10 text-center">
                                <span className="inline-block bg-blue-100 text-shippo text-sm px-3 py-1 rounded-full mb-3">{t('new_development_product')}</span>
                                <motion.h1
                                    className="text-2xl text-shippo md:text-3xl font-bold mb-3"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {t('easyG')}
                                </motion.h1>
                                <motion.h4
                                    className="text-base md:text-lg text-gray-700 max-w-md mx-auto"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {t('es1')}
                                </motion.h4>
                            </div>
                        </div>
                    </motion.div>




                    <motion.div
                        className="w-full mx-auto px-4 py-24 bg-white"
                        variants={fadeIn}
                    >
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                className="mb-12"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold mb-6 text-shippo-hard leading-relaxed">
                                    {t('es2')}
                                </h2>
                                <h5>
                                    <span className='text-gray-700'>{t('es3')}</span>
                                </h5>
                            </motion.div>
                            <Image
                                src={getPublicPath("/images/easyG/es1.png")}
                                alt=""
                                width={1500}
                                height={1000}
                            />
                        </div>
                        {/* Card Section - Converted from PHP */}
                        <motion.div
                            className="max-w-3xl mx-auto px-4 py-12 bg-white"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-shippo">
                                {t('es4')}
                            </h2>
                            <div className="container mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    {/* First Card */}
                                    <motion.div
                                        className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-[#003471]"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="p-4 border-b border-[#003471] flex flex-col">
                                            <div className="relative h-48 w-full mb-3">
                                                <Image
                                                    src={getPublicPath("/images/easyG/s2.png")}
                                                    alt="Feature 1"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h6 className="font-semibold text-lg text-shippo-hard text-center h-full flex items-center justify-center">
                                                {t('es5')}
                                            </h6>
                                        </div>
                                        <div className="bg-shippo-hard text-white w-full h-full">
                                            <h6 className="text-left p-4">
                                                {t('es6')}
                                            </h6>
                                        </div>
                                    </motion.div>

                                    {/* Second Card */}
                                    <motion.div
                                        className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-[#003471]"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="p-4 border-b border-[#003471] flex flex-col">
                                            <div className="relative h-48 w-full mb-3">
                                                <Image
                                                    src={getPublicPath("/images/easyG/s3.png")}
                                                    alt="Feature 2"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h6 className="font-semibold text-lg text-shippo-hard text-center h-full flex items-center justify-center">
                                                {t('es7')}
                                            </h6>
                                        </div>
                                        <div className="bg-shippo-hard text-white w-full h-full">
                                            <h6 className="text-left p-4">
                                                {t('es8')}
                                            </h6>
                                        </div>
                                    </motion.div>

                                    {/* Third Card */}
                                    <motion.div
                                        className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-[#003471]"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="p-4 border-b border-[#003471] flex flex-col">
                                            <div className="relative h-48 w-full mb-3">
                                                <Image
                                                    src={getPublicPath("/images/easyG/s4.png")}
                                                    alt="Feature 3"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h6 className="font-semibold text-lg text-shippo-hard text-center h-full flex items-center justify-center">
                                                {t('esh9')}
                                            </h6>
                                        </div>
                                        <div className="bg-shippo-hard text-white w-full h-full">
                                            <h6 className="text-left p-4">
                                                {t('es9')}
                                            </h6>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/*  */}
                        <div className="max-w-4xl mx-auto">
                            {/* Feature Highlights Section */}
                            <h2 className="pt-5 pb-3 text-shippo-hard text-2xl font-bold">
                                {t('es10')}
                            </h2>
                            <div className="ml-4 mb-4 flex items-center">
                                <Image
                                    src={getPublicPath("/images/easyG/checkIcon.png")}
                                    alt="Check Icon"
                                    width={40}
                                    height={40}
                                    className="w-[5vh]"
                                />
                                <h4 className="ml-2 font-bold text-gray-700">
                                    {t('es11')}
                                </h4>
                            </div>
                            <div className="ml-4 mb-4 flex items-center">
                                <Image
                                    src={getPublicPath("/images/easyG/checkIcon.png")}
                                    alt="Check Icon"
                                    width={40}
                                    height={40}
                                    className="w-[5vh]"
                                />
                                <h4 className="ml-2 font-bold text-gray-700">
                                    {t('es12')}
                                </h4>
                            </div>
                            <div className="ml-4 mb-4 flex items-center">
                                <Image
                                    src={getPublicPath("/images/easyG/checkIcon.png")}
                                    alt="Check Icon"
                                    width={40}
                                    height={40}
                                    className="w-[5vh]"
                                />
                                <h4 className="ml-2 font-bold text-gray-700">
                                    {t('es13')}
                                </h4>
                            </div>

                            {/* YouTube Video Embed */}
                            <div className="my-10 w-full">
                                <div className="flex justify-center">
                                    <div className="w-full">
                                        <iframe
                                            className="w-full aspect-video rounded-lg shadow-md"
                                            src="https://www.youtube.com/embed/-haW4Gbcw2s"
                                            title="EasyG YouTube video"
                                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Review Cards */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* Review Card 1 */}
                                <div className="w-full p-6 mb-6 bg-shippo-soft rounded-lg shadow-md border border-gray-200">
                                    <h3 className="text-xl font-semibold mb-2 text-shippo-hard">
                                        {t('rw2')}
                                    </h3>
                                    <p className="mb-2">
                                        <span className="text-[#004682]">★★★★★</span>
                                        <span className="ml-2 text-shippo">{t('rw1')}</span>
                                    </p>
                                    <hr className="my-3 border-gray-200" />
                                    <h5 className="text-gray-700">
                                        {t('rw3')}
                                    </h5>
                                </div>

                                {/* Review Card 2 */}
                                <div className="w-full p-6 mb-6 bg-shippo-soft rounded-lg shadow-md border border-gray-200">
                                    <h3 className="text-xl font-semibold mb-2 text-shippo-hard">
                                        {t('rw4')}
                                    </h3>
                                    <p className="mb-2">
                                        <span className="text-[#004682]">★★★★★</span>
                                        <span className="ml-2 text-shippo">{t('rw55')}</span>
                                    </p>
                                    <hr className="my-3 border-gray-200" />
                                    <h5 className="text-gray-700">
                                        {t('rw5')}
                                    </h5>
                                </div>

                                {/* Review Card 3 */}
                                <div className="w-full p-6 mb-6 bg-shippo-soft rounded-lg shadow-md border border-gray-200">
                                    <h3 className="text-xl font-semibold mb-2 text-shippo-hard">
                                        {t('rw7')}
                                    </h3>
                                    <p className="mb-2">
                                        <span className="text-[#004682]">★★★★</span>
                                        <span className="ml-2 text-shippo">{t('rw6')}</span>
                                    </p>
                                    <hr className="my-3 border-gray-200" />
                                    <h5 className="text-gray-700">
                                        {t('rw8')}
                                    </h5>
                                </div>

                                {/* Review Card 4 */}
                                <div className="w-full p-6 mb-6 bg-shippo-soft rounded-lg shadow-md border border-gray-200">
                                    <h3 className="text-xl font-semibold mb-2 text-shippo-hard">
                                        {t('rw10')}
                                    </h3>
                                    <p className="mb-2">
                                        <span className="text-[#004682]">★★★★★</span>
                                        <span className="ml-2 text-shippo">{t('rw9')}</span>
                                    </p>
                                    <hr className="my-3 border-gray-200" />
                                    <h5 className="text-gray-700">
                                        {t('rw11')}
                                    </h5>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>



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
                                    {t('contact_easyG')}
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
            `}</style>
            </div>
        </>
    );
}