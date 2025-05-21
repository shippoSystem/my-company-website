'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getPublicPath } from '@/utils/paths';

export default function HistoryPage() {
    const { t } = useTranslation('common');
    const [activeYear, setActiveYear] = useState(null);
    const timelineRef = useRef(null);
    const yearsRef = useRef({});

    // ประวัติบริษัท 3 ภาษา (ไทย, ญี่ปุ่น, อังกฤษ) จาก i18n
    const historyData = React.useMemo(() => {
        // ใช้ข้อมูลที่เริ่มต้นด้วย history_ จาก i18n
        const years = [];
        const history = [];

        // ข้อความที่เริ่มต้นด้วย history_year_ เป็นปีที่สำคัญ
        // ข้อความที่เริ่มต้นด้วย history_word_ เป็นหัวข้อสำหรับปีนั้นๆ
        // ข้อความที่เริ่มต้นด้วย history_date_ เป็นวันที่
        // ข้อความที่เริ่มต้นด้วย history_event_ เป็นเหตุการณ์
        // ข้อความที่เริ่มต้นด้วย history_img_ เป็นรูปภาพ

        // เอาไว้ใช้งานจริงเมื่อมีข้อมูลใน i18n
        // ระหว่างนี้ใช้ข้อมูลจำลองก่อน
        return [
            { year: '1993', word: t('history_founding'), date: t('dateHistory1993Aug'), event: t('history_founding_detail'), img: getPublicPath('/images/1993.jpg') },
            { date: t('dateHistory1994Jun'), event: t('history_opening') },
            { year: '2000', word: t('history_capital'), date: t('dateHistory2000Oct'), event: t('history_capital_detail'), img: getPublicPath('/images/2000(1).jpg'), img2: getPublicPath('/images/2000(2).jpg') },
            { year: '2001', word: t('history_factory'), date: t('dateHistory2001Mar'), event: t('history_factory_detail'), img: getPublicPath('/images/2001(1).jpg'), img2: getPublicPath('/images/2001(2).jpg') },
            { date: t('dateHistory2001May'), event: t('history_opening_bangplee'), img: getPublicPath('/images/2001.jpg') },
            { year: '2002', word: t('history_office'), date: t('dateHistory2002Dec'), event: t('history_office_detail'), img: getPublicPath('/images/2002(4).jpg'), img2: getPublicPath('/images/2002(3).jpg'), /* img3: getPublicPath('/images/2002(1).jpg') */ },
            { year: '2007', word: t('history_expansion'), date: t('dateHistory2007Jan'), event: t('history_expansion_detail'), img: getPublicPath('/images/2007.jpg') },
            { date: t('dateHistory2008Sep'), event: t('history_design_room') },
            { year: '2012', date: t('dateHistory2012Dec'), event: t('history_capital_increase') },
            { year: '2013', word: t('history_korat'), date: t('dateHistory2013Jun'), event: t('history_korat_detail'), img: getPublicPath('/images/bangplee_kor2.jpg') },
            { date: t('dateHistory2013Aug'), event: t('history_korat_operation') },
            { date: t('dateHistory2013Oct'), event: t('history_opening_korat') },
            { year: '2023', word: t('history_arcana'), date: t('dateHistory2023Apr'), event: t('history_arcana_detail'), img: getPublicPath('/images/arcana-open.jpg') },
        ];
    }, [t]);

    // Get unique years for navigation
    const uniqueYears = historyData
        .filter(item => item.year)
        .map(item => item.year);

    // Scroll to the selected year section
    const scrollToYear = (year) => {
        setActiveYear(year);
        if (yearsRef.current[year]) {
            yearsRef.current[year].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    // Handle scroll and update active year
    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const scrollPosition = window.scrollY + window.innerHeight / 3;

            // Find the year section that is currently visible
            let currentActiveYear = null;
            for (const year of uniqueYears) {
                const element = yearsRef.current[year];
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    const elementTop = top + window.scrollY;
                    const elementBottom = bottom + window.scrollY;

                    if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
                        currentActiveYear = year;
                        break;
                    }
                }
            }

            if (currentActiveYear && currentActiveYear !== activeYear) {
                setActiveYear(currentActiveYear);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeYear, uniqueYears]);

    return (
        <div className="min-h-screen bg-shippo-soft">
            <Navbar />
            <div className="pt-12 ps-12 pb-3 bg-shippo-soft">
                <Link href="/about" className="w-fit flex items-center px-4 py-2 bg-shippo rounded text-white hover:bg-shippo-hard transition-colors flex items-center gap-2 cursor-pointer">
                    <ArrowLeft size={16} className='mr-2' />
                    {t('f_h4')}
                </Link>
            </div>

            {/* Header */}
            <div className="w-full pb-12 shadow-md bg-shippo-soft">
                <h1 className="text-3xl font-extrabold text-shippo-hard sm:text-3xl text-center">
                    {t('companyHistory')}
                </h1>
            </div>
            {/* Years Navigation */}
            <div className="sticky top-0 bg-white shadow-md z-20 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center flex-wrap gap-4">
                            {uniqueYears.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => scrollToYear(year)}
                                    className={`px-4 py-2 rounded-full transition-all ${activeYear === year
                                        ? 'bg-shippo text-white font-bold scale-110'
                                        : 'bg-gray-200 hover:bg-gray-300 text-shippo-hard'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="max-w-6xl mx-auto px-4 py-12 relative" ref={timelineRef}>
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-shippo" style={{ zIndex: 1 }}></div>

                    {/* Timeline Items */}
                    {historyData.map((item, index) => {
                        // Determine if this is a year entry (with word property)
                        const isYearEntry = !!item.year;

                        return (
                            <div
                                key={index}
                                ref={el => {
                                    if (isYearEntry && item.year) {
                                        yearsRef.current[item.year] = el;
                                    }
                                }}
                                className={`relative ${index > 0 ? 'mt-16' : ''}`}
                            >
                                {/* Year Marker for main entries */}
                                {isYearEntry && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                                        style={{ zIndex: 15 }}
                                    >
                                        <div className="bg-shippo text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-xl shadow-lg">
                                            {item.year}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className={`relative bg-white rounded-lg shadow-md p-6 mx-4 ${isYearEntry ? 'pt-12 border-t-4 border-shippo' : ''
                                        } ${index % 2 === 0 ? 'ml-auto mr-12 md:mr-[60px]' : 'mr-auto ml-12 md:ml-[60px]'} w-auto md:w-[45%]`}
                                    style={{ zIndex: 5 }}
                                >
                                    {/* Year Title */}
                                    {isYearEntry && (
                                        <h3 className="text-2xl font-bold text-shippo-hard mb-2">
                                            {item.word}
                                        </h3>
                                    )}

                                    {/* Date */}
                                    <div className="text-lg font-semibold text-gray-700 mb-2">
                                        {item.date}
                                    </div>

                                    {/* Event Description */}
                                    <p className="text-gray-600 mb-4">
                                        {item.event}
                                    </p>

                                    {/* Images */}
                                    {item.img && (
                                        <motion.div
                                            className="mt-4 space-y-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                            <div className="overflow-hidden rounded-lg">
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Image
                                                        src={item.img}
                                                        alt={`${item.year || item.date} - ${item.event}`}
                                                        width={500}
                                                        height={300}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                </motion.div>
                                            </div>

                                            {item.img2 && (
                                                <div className="overflow-hidden rounded-lg">
                                                    <motion.div
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <Image
                                                            src={item.img2}
                                                            alt={`${item.year || item.date} - ${item.event} (2)`}
                                                            width={500}
                                                            height={300}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    </motion.div>
                                                </div>
                                            )}

                                            {item.img3 && (
                                                <div className="overflow-hidden rounded-lg">
                                                    <motion.div
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <Image
                                                            src={item.img3}
                                                            alt={`${item.year || item.date} - ${item.event} (3)`}
                                                            width={500}
                                                            height={300}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    </motion.div>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </motion.div>

                                {/* Circle for timeline for non-year entries */}
                                {!isYearEntry && (
                                    <div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ zIndex: 15 }}>
                                        <div className="bg-white border-4 border-shippo rounded-full h-5 w-5"></div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </div>
    );
}