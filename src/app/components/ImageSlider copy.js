// components/AdvancedImageSlider.jsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion'; // ต้องติดตั้ง framer-motion เพิ่ม
import { useTranslation } from 'react-i18next';

// นำเข้า Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';

const TypewriterText = ({ text, className }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 100); // ความเร็วในการพิมพ์ (มิลลิวินาที)

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    // รีเซ็ตเมื่อข้อความเปลี่ยน
    useEffect(() => {
        setDisplayedText('');
        setCurrentIndex(0);
    }, [text]);

    return (
        <h2 className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-1 border-r-2 border-white h-8"
            ></motion.span>
        </h2>
    );
};
const AdvancedImageSlider = () => {
    const { t } = useTranslation('common');
    const [activeIndex, setActiveIndex] = useState(0);

    // ข้อมูลสไลด์ตัวอย่าง
    const slides = [
        {
            id: 1,
            image: './images/SAMTWEBSITE1.gif', // หรือ '/SAMTWEBSITE1.gif' ขึ้นอยู่กับตำแหน่งไฟล์
            title: t('slogan'),
            description: '',
            buttonText: 'เริ่มต้นเลย',
        },
        {
            id: 2,
            image: './images/SAMTWEBSITE2.gif',
            title: 'Dead Stock',
            description: t('hero_h2') + " " + t('hero_h2_sub'),
            buttonText: 'ดูเพิ่มเติม',
        },
        {
            id: 3,
            image: './images/SAMTWEBSITE3.png',
            title: t('hero_h3'),
            description: t('hero_h3_sub'),
            buttonText: 'More',
        },
    ];

    return (
        <div className="relative w-full h-[600px] overflow-hidden shadow-sm">
            {/* Custom navigation buttons */}
            {/* <div className="absolute inset-y-0 left-4 z-10 flex items-center">
                <button
                    className="p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-40 transition-all transform hover:scale-110 hover:shadow-lg cursor-pointer"
                    onClick={() => document.querySelector('.swiper-button-prev').click()}
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div> */}

            {/* <div className="absolute inset-y-0 right-4 z-10 flex items-center">
                <button
                    className="p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-40 transition-all transform hover:scale-110 hover:shadow-lg cursor-pointer"
                    onClick={() => document.querySelector('.swiper-button-next').click()}
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div> */}

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                slidesPerView={1}
                navigation={false}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className} w-4 h-4 bg-white bg-opacity-50 inline-block rounded-full mx-2 transition-all duration-300 hover:bg-opacity-100 cursor-pointer"></span>`;
                    }
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1.5,
                    slideShadows: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full cursor-grab active:cursor-grabbing">
                            {/* รูปภาพพื้นหลัง */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-3000"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    animation: activeIndex === index ? 'slowZoom 10s infinite alternate' : 'none'
                                }}
                            />

                            {/* เลเยอร์ไล่ระดับสี - ปรับตามแต่ละสไลด์ */}
                            {slide.id === 1 && (
                                <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50"></div>
                            )}
                            {slide.id === 2 && (
                                <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50"></div>
                            )}
                            {slide.id === 3 && (
                                <div className="absolute inset-0 bg-white/30"></div>
                            )}

                            {/* ข้อความบนรูปภาพ - แต่ละสไลด์มีสไตล์ต่างกัน */}
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <>
                                        {/* สไลด์ที่ 1: มีเพียง title border spoke สีขาว ไม่มีปุ่ม */}
                                        {slide.id === 1 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.8 }}
                                                className="absolute inset-0 flex flex-col items-center justify-center p-6"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.7, delay: 0.2 }}
                                                    className=" p-8 bg-white/30 rounded-lg max-w-2xl"
                                                >
                                                    <TypewriterText text={slide.title} className="text-5xl font-bold text-center text-gray-700 drop-shadow-lg" />
                                                </motion.div>
                                            </motion.div>
                                        )}

                                        {/* สไลด์ที่ 2: ไม่มีปุ่ม */}
                                        {slide.id === 2 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -30 }}
                                                transition={{ duration: 0.8 }}
                                                className="absolute inset-0 flex flex-col items-center justify-center text-black p-6"
                                            >
                                                <motion.h2
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="text-5xl font-bold mb-6 text-center drop-shadow-xl"
                                                >
                                                    {slide.title}
                                                </motion.h2>

                                                <motion.p
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.4 }}
                                                    className="text-xl max-w-xl text-center drop-shadow-lg"
                                                >
                                                    {slide.description}
                                                </motion.p>
                                            </motion.div>
                                        )}

                                        {/* สไลด์ที่ 3: มีพื้นหลังสีขาว padding 2 และมีปุ่ม */}
                                        {slide.id === 3 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -30 }}
                                                transition={{ duration: 0.8 }}
                                                className="absolute inset-0 flex flex-col items-center justify-center p-6"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6 }}
                                                    className="bg-white/80 p-8 rounded-xl shadow-xl max-w-2xl"
                                                >
                                                    <h2 className="text-4xl font-bold mb-4 text-center text-black">
                                                        {slide.title}
                                                    </h2>
                                                    <p className="text-xl text-center text-gray-700">
                                                        {slide.description}
                                                    </p>
                                                </motion.div><br></br>
                                                <div className="flex justify-center">
                                                    <Link
                                                        href="/arcana"
                                                        className="px-8 py-3 bg-black text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                                                    >
                                                        {slide.buttonText}
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Hidden navigation elements for custom buttons to target */}
                <div className="swiper-button-prev hidden"></div>
                <div className="swiper-button-next hidden"></div>
            </Swiper>

            {/* สไตล์สำหรับแอนิเมชั่นและการปรับแต่ง */}
            <style jsx global>{`
        @keyframes slowZoom {
            from { transform: scale(1); }
            to { transform: scale(1.15); }
        }
        
        .swiper-button-next, .swiper-button-prev {
            opacity: 0;
            pointer-events: auto;
        }
        
        .swiper-pagination {
            position: absolute;
            bottom: 20px !important;
            z-index: 10;
        }
        
        .swiper-pagination-bullet {
            transition: all 0.3s ease;
            opacity: 0.7;
        }
        
        .swiper-pagination-bullet-active {
            background: white;
            transform: scale(1.3);
            opacity: 1;
        }
        
        .swiper-container {
            overflow: hidden;
        }
        
        /* เอฟเฟกต์เมื่อชี้ที่สไลด์ */
        .swiper-slide:hover {
            cursor: grab;
        }
        
        .swiper-slide:active {
            cursor: grabbing;
        }
    `}</style>
        </div>
    );
};

export default AdvancedImageSlider;