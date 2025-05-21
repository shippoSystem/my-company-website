// AboutSection.jsx
"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/footer';
import { ArrowLeft } from 'lucide-react';
import { getPublicPath } from '@/utils/paths';

export default function AboutSection() {
    const { t } = useTranslation('common');

    // For fade-in scroll animations
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => {
            observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <section className="bg-shippo-soft">
                    <div className="p-12">
                        <Link href="/about" className="w-fit flex items-center px-4 py-2 bg-shippo rounded text-white hover:bg-shippo-hard transition-colors flex items-center gap-2 cursor-pointer">
                            <ArrowLeft size={16} className='mr-2' />
                            {t('f_h4')}
                        </Link>
                    </div>
                    <div className="container mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl font-bold text-shippo-hard text-center mb-8"
                        >
                            {t('aboutFac')}
                        </motion.h2>
                    </div>

                    <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 mt-6">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl font-bold text-shippo-hard mb-4"
                        >
                            {t('aboutFac')}
                        </motion.h3>

                        <div className="h-1 w-20 bg-gradient-to-l from-[#003471] to-[#10A1E9] mb-10"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 fade-in">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="overflow-hidden rounded-lg shadow-md">
                                        <div className="relative h-80 w-full">
                                            <Image
                                                src={getPublicPath("/images/a_banner2.png")}
                                                alt={t('bangplee_factory')}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden rounded-lg shadow-md">
                                        <div className="relative h-80 w-full">
                                            <Image
                                                src={getPublicPath("/images/bangplee_kor2.jpg")}
                                                alt={t('korat_factory')}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="overflow-hidden rounded-lg border border-gray-200">
                                    <table className="w-full  text-black">
                                        <tbody>
                                            <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                                <th className="text-left py-4 px-4 font-semibold bg-gray-50 whitespace-nowrap">{t('name')}</th>
                                                <td className="py-4 px-4">{t('name_')}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                                <th className="text-left py-4 px-4 font-semibold bg-gray-50 whitespace-nowrap">{t('date_start')}</th>
                                                <td className="py-4 px-4">{t('date_start_')}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                                <th className="text-left py-4 px-4 font-semibold bg-gray-50 whitespace-nowrap">{t('date_process')}</th>
                                                <td className="py-4 px-4">{t('date_process_')}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                                <th className="text-left py-4 px-4 font-semibold bg-gray-50 whitespace-nowrap">{t('cost')}</th>
                                                <td className="py-4 px-4">{t('cost_')}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                                <th className="text-left py-4 px-4 font-semibold bg-gray-50 whitespace-nowrap">{t('president')}</th>
                                                <td className="py-4 px-4">{t('president_')}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                                <th className="text-left py-4 px-4 font-semibold bg-gray-50 whitespace-nowrap">{t('employees')}</th>
                                                <td className="py-4 px-4">{t('employees_')}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                                <th className="text-left py-4 px-4 font-semibold bg-gray-50 whitespace-nowrap">{t('product')}</th>
                                                <td className="py-4 px-4">
                                                    {t('product_1')}<br /><br />
                                                    {t('product_2')}<br /><br />
                                                    {t('product_3')}<br /><br />
                                                    {t('product_4')}
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-blue-50 transition-colors">
                                                <th className="text-left py-4 px-4 font-semibold bg-gray-50 align-top whitespace-nowrap">{t('address')}</th>
                                                <td className="py-4 px-4">
                                                    <div className="mb-4">
                                                        <p className="font-bold mb-2">{t('fac_bangplee')}</p>
                                                        <p className="mb-2">{t('fac_bangplee_addr')}</p>
                                                        <p className="mb-2">{t('fac_bangplee_tel')}</p>
                                                        <Link
                                                            href="https://maps.app.goo.gl/jfstD6zjhY6uyHH17"
                                                            target="_blank"
                                                            className="text-shippo-hard transition-colors"
                                                        >
                                                            Google Map Bangplee
                                                        </Link>
                                                    </div>

                                                    <div>
                                                        <p className="font-bold mb-2">{t('fac_korat')}</p>
                                                        <p className="mb-2">{t('fac_korat_addr')}</p>
                                                        <p className="mb-2">{t('fac_korat_tel')}</p>
                                                        <Link
                                                            href="https://maps.app.goo.gl/ANbV6i68xTR5CXYh7"
                                                            target="_blank"
                                                            className="text-shippo-hard  transition-colors"
                                                        >
                                                            Google Map Korat
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>

                        {/* Locations Section */}
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-2xl font-bold text-shippo-hard mt-16 mb-4"
                        >
                            {t('addr_h1')}
                        </motion.h3>

                        <div className="h-1 w-20 bg-gradient-to-l from-[#003471] to-[#10A1E9] mb-10"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="p-6 bg-white rounded-lg shadow-md"
                            >
                                <h4 className="text-xl font-bold text-shippo-hard mb-6">{t('fac_bangplee')}</h4>

                                <div className="overflow-hidden rounded-lg shadow-md mb-6 h-80 w-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.593487445366!2d100.7929681631413!3d13.560511013788284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5b67d63b191d%3A0xff34231d8372979b!2sSHIPPO%20ASAHI%20MOULDS(THAILAND)!5e0!3m2!1sth!2sth!4v1604043443675!5m2!1sth!2sth"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                        className="w-full h-full"
                                    ></iframe>
                                </div>

                                <h6 className="text-gray-700">{t('fac_bangplee_addr')}</h6>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="p-6 bg-white rounded-lg shadow-md"
                            >
                                <h4 className="text-xl font-bold text-shippo-hard mb-6">{t('fac_korat')}</h4>

                                <div className="overflow-hidden rounded-lg shadow-md mb-6 h-80 w-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.593487445366!2d100.7929681631413!3d13.560511013788284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311eaf189bd08683%3A0xf288ac03e09afb5d!2z4LiC4Lin4Lix4LiXIOC4quC4suC4mSDguJ7guKPguLLguK3guKrguJjguLLguKvguKnguKI!5e0!3m2!1sth!2sth!4v1604043443675!5m2!1sth!2sth"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                        className="w-full h-full"
                                    ></iframe>
                                </div>

                                <h6 className="text-gray-700">{t('fac_korat_addr')}</h6>
                            </motion.div>
                        </div>

                        {/* Certificates Section */}
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-2xl font-bold text-shippo-hard mt-16 mb-4"
                        >
                            {t('cer_h1')}
                        </motion.h3>

                        <div className="h-1 w-20 bg-gradient-to-l from-[#003471] to-[#10A1E9] mb-10"></div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="text-center fade-in  text-black"
                        >
                            <h3 className="text-2xl font-bold mb-4">{t('cer_h1')}</h3>
                            {/* <h6 className="text-lg mb-8">{t('cer_s1')}</h6> */}

                            <div className="flex justify-center">
                                <div className="overflow-hidden rounded-lg transition-transform duration-500 hover:scale-105">
                                    <Image
                                        src={getPublicPath("/images/cer.png")}
                                        alt="Certificates"
                                        width={800}
                                        height={400}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <Footer />

                    <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
                </section>
            </div>
        </>
    );
}