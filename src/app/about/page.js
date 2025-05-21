'use client';

import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import Footer from '../footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getPublicPath } from '@/utils/paths';

export default function About() {
    const { t } = useTranslation('common');

    const ContentSection = () => {
        // Animation variants
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2
                }
            }
        };

        const titleVariants = {
            hidden: { opacity: 0, y: -20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }
            }
        };

        return (
            <>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6"
                >
                    <motion.h2
                        variants={titleVariants}
                        className="text-shippo-hard mb-6 sm:text-3xl text-center text-2xl font-bold"
                    >
                        {t('sec1a1')}
                    </motion.h2>
                    <motion.p
                        variants={titleVariants}
                        className="text-gray-700 text-center"
                    >
                        {t('sec1a2_1')}<br /><br />
                        {t('sec1a2_2')}<br /><br />
                        {t('sec1a2_3')}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="py-6"
                >
                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-extrabold text-shippo sm:text-4xl text-center"
                    >
                        CONTENT
                    </motion.h1>
                </motion.div>

                {/* Company Content Banners */}
                <CompanyContentBanners t={t} />
            </>
        );
    };

    // Company Content Banners Component
    const CompanyContentBanners = ({ t }) => {
        // Animation variants
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2
                }
            }
        };

        const itemVariants = {
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.6
                }
            }
        };

        // Company content sections
        const companyContentSections = [
            {
                id: 1,
                title: t('greeting'),
                description: t('greeting_'),
                imageUrl: getPublicPath('/images/a_banner1.png'),
                link: '/about/message'
            },
            {
                id: 2,
                title: t('aboutCompany'),
                description: t('aboutCompany'),
                imageUrl: getPublicPath('/images/a_banner2.png'),
                link: '/about/company'
            },
            {
                id: 3,
                title: t('his'),
                description: t('his'),
                imageUrl: getPublicPath('/images/a_banner3.png'),
                link: '/about/history'
            },
            {
                id: 4,
                title: t('overseas'),
                description: t('overseas'),
                imageUrl: getPublicPath('/images/a_banner4.png'),
                link: '/about/overseas'
            }
        ];

        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {companyContentSections.map((section) => (
                        <Link href={section.link} key={section.id} className="block">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 25px 50px -12px rgba(0, 52, 113, 0.25)",
                                    transition: { duration: 0.3 }
                                }}
                                className="relative overflow-hidden rounded-lg h-80 group cursor-pointer"
                            >
                                {/* Banner Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        width={1500} height={1500}
                                        src={section.imageUrl}
                                        alt={section.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                </div>

                                {/* Text Content - Always visible for mobile */}
                                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                    <h3 className="text-xl font-bold">{section.title}</h3>

                                    <div className="md:transform md:transition-all md:duration-300 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 
                                                  opacity-100 translate-y-0">
                                        <p className="text-sm mb-4 text-white/90">{section.description}</p>
                                        <div
                                            className="inline-flex items-center px-4 py-2 bg-shippo rounded-md font-medium text-white hover:bg-shippo-hard transition-colors"
                                        >
                                            {t('readMore')}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="mx-auto pb-12 bg-shippo-soft w-full">
                <div className="w-full bg-gradient-to-l from-[#003471] to-[#10A1E9] p-12 shadow-md mb-8">
                    <h1 className="text-3xl font-extrabold text-white sm:text-4xl text-center">
                        {t('about')}
                    </h1>
                </div>
                <ContentSection />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}