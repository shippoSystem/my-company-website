import { useEffect, useState } from 'react';
import Image from 'next/image';
// import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { getPublicPath } from '@/utils/paths';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SliderPageWork = () => {
    // ข้อมูลสไลด์ 3 รูป
    const slides = [
        {
            image: getPublicPath("/images/index/samt1.png"),
        },
        {
            image: getPublicPath("/images/index/samt2.png"),
        },
        {
            image: getPublicPath("/images/index/samt3.png"),
        }
    ];

    return (
        <div className="relative w-full h-full">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active swiper-pagination-bullet-shippo',
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            width={2000}
                            height={1500}
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* สามารถเพิ่ม custom styles สำหรับ pagination dots ดังนี้ */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #d1d5db; /* bg-gray-300 */
                    opacity: 1;
                }
                
                .swiper-pagination-bullet-shippo {
                    background: var(--color-shippo, #0070f3); /* ใช้ custom color --color-shippo หรือใช้สีฟ้าเป็นค่าเริ่มต้น */
                }
            `}</style>
        </div>
    );
};

export default SliderPageWork;