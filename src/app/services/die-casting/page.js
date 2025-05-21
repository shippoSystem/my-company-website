// pages/mold.js
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

export default function Mold() {
    const [activeSection, setActiveSection] = useState('moldDes');

    const { t } = useTranslation('common');
    const router = useRouter();

    // Determine image language based on current locale
    const getImageLang = () => {
        const { locale } = router;
        if (locale === 'th') return 'th';
        if (locale === 'jp') return 'jp';
        return 'en'; // Default
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

    // 2. แก้ไข useEffect ให้สมบูรณ์
    useEffect(() => {
        const handleScrollEvent = () => {
            // รายการส่วนที่ต้องติดตาม
            const sections = [
                'moldDes',
                'moldMachine'
                // เพิ่มส่วนอื่นๆ ที่ต้องการติดตามได้ตามต้องการ
            ];

            // หาส่วนที่กำลังแสดงอยู่ในขณะนี้
            const currentSection = sections.find(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // ส่วนจะถือว่า active เมื่อขอบบนของส่วนอยู่ใกล้กับขอบบนของหน้าจอหรืออยู่ในช่วงที่มองเห็นได้
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScrollEvent);
        handleScrollEvent(); // เรียกใช้ทันทีเมื่อโหลดหน้า

        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    // 3. แก้ไขฟังก์ชัน handleScroll ให้สมบูรณ์
    const handleScroll = (e, targetId) => {
        e.preventDefault();

        // อัพเดท activeSection ทันทีเมื่อคลิกที่เมนู
        setActiveSection(targetId);

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // คำนวณตำแหน่ง offset เพื่อชดเชยความสูงของ navigation bar
            const navbarHeight = 60; // ปรับตามความสูงจริงของ navbar
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };


    // แก้ไขการกำหนด active menu จากค่าเริ่มต้นเป็นใช้จาก state
    const menuItems = [
        { id: 'moldDes', label: 'm1', active: activeSection === 'moldDes' },
        { id: 'moldMachine', label: 'm2', active: activeSection === 'moldMachine' },
        { id: 'arcana_info', label: 'm3', active: false, link: '/services/arcana-info' },
        { id: 'cylinder', label: 'm4', active: false, link: '/services/eco-cylinder' },
        { id: 'easyG', label: 'easyG', active: false, link: '/services/easy-g' },
        { id: 'toolMeister', label: 'tool_meister', active: false, link: '/services/tool-meister' }
    ];

    return (
        <>
            <Navbar />
            <div className='w-full bg-shippo-soft'>
                <motion.section
                    id="aboutComp"
                    className="w-full"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    {/* Hero Section - Modern Full Width with Tailwind */}
                    <motion.div
                        className="w-full bg-gradient-to-l from-[#003471] to-[#10A1E9] p-12  text-white relative"
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
                    {/* Modern Tabbed Navigation Menu with Tailwind */}
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
                                                <a
                                                    href={`#${item.id}`}
                                                    onClick={(e) => handleScroll(e, item.id)}
                                                    className={`inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${item.active
                                                        ? 'bg-blue-100 text-shippo font-bold'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {t(item.label)}
                                                </a>
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="w-full mx-auto p-12 bg-shippo-soft"
                        id="moldDes"
                        variants={fadeIn}
                    >
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                className="text-center mb-12"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <span className="inline-block bg-blue-100 text-shippo text-sm px-3 py-1 rounded-full mb-4">Our Expertise</span>
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold mb-4 text-shippo"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {t('mold_h2')}
                                </motion.h2>

                                <motion.h3
                                    className="text-xl text-gray-700 font-light"
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    {t('mold_t2')}
                                </motion.h3>

                            </motion.div>
                        </div>

                    </motion.div>
                    {/* Description Section with Tailwind */}
                    <motion.div
                        className="w-full mx-auto px-4 py-16 bg-white"
                        variants={fadeIn}
                    >

                        <motion.div
                            className="flex flex-col md:flex-row gap-8 px-12"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="overflow-hidden rounded-xl">
                                    <Image
                                        src={getPublicPath("/images/mold.png")}
                                        alt="Mold"
                                        width={1500}
                                        height={1400}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="bg-shippo-soft p-4 leading-relaxed">
                                        <p className="text-gray-700">{t('mold_t3')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="h-full flex flex-col justify-center">
                                    <h4 className="text-2xl text-shippo-hard font-bold mb-6">{t('sec1H2')}</h4>

                                    <div className="flex items-start mb-6">
                                        <div className="bg-shippo-soft rounded-full p-3 mr-4 flex-shrink-0">
                                            <Image
                                                src={getPublicPath("/images/service-icon-01.png")}
                                                alt="Service 1"
                                                width={30}
                                                height={30}
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-lg mb-2 text-black">{t('sec2b1h1')}</h5>
                                            <p className="text-gray-600">{t('sec2b1s1')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start mb-6">
                                        <div className="bg-shippo-soft rounded-full p-3 mr-4 flex-shrink-0">
                                            <Image
                                                src={getPublicPath("/images/service-icon-02.png")}
                                                alt="Service 2"
                                                width={30}
                                                height={30}
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-lg mb-2 text-black">{t('sec2b1h2')}</h5>
                                            <p className="text-gray-600">{t('sec2b1s2')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-shippo-soft rounded-full p-3 mr-4 flex-shrink-0">
                                            <Image
                                                src={getPublicPath("/images/service-icon-03.png")}
                                                alt="Service 3"
                                                width={30}
                                                height={30}
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-lg mb-2 text-black">{t('sec2b1h3')}</h5>
                                            <p className="text-gray-600">{t('sec2b1s3')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Machine Section with Tailwind */}
                    <div className="w-full bg-shippo-soft py-16" id="moldMachine">
                        <motion.div
                            className="container mx-auto px-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="max-w-4xl mx-auto text-center mb-12">
                                <motion.span
                                    className="inline-block bg-blue-100 text-shippo text-sm px-3 py-1 rounded-full mb-4"
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    Our Machines
                                </motion.span>
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold mb-4 text-shippo"
                                    initial={{ y: -20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {t('f_h11')}
                                </motion.h2>
                                <motion.p
                                    className="text-xl text-gray-700"
                                    initial={{ y: 10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {t('mold_t4')}
                                </motion.p>
                            </div>

                            <motion.div
                                className="max-w-4xl mx-auto mb-10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="overflow-hidden rounded-xl shadow-lg">
                                    <Image
                                        src={getPublicPath("/images/moulds/photolist.png")}
                                        alt="Photo List"
                                        width={1500}
                                        height={1500}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="bg-white p-6 text-center">
                                        <Link
                                            href="/doc-req"
                                            target="_blank"
                                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#003471] to-[#10A1E9] text-white font-medium rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <span className="mr-2">{t('request_document')}</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Contact Section with Tailwind */}
                    <motion.section
                        className="w-full bg-white py-16"
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
                                    {t('contactS1')}
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