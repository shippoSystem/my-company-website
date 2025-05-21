'use client';

import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Footer from '@/app/footer';
import { ArrowLeft } from 'lucide-react';
import { getPublicPath } from '@/utils/paths';

export default function Page() {
    const { t } = useTranslation('common');

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar />

                <div className="mx-auto p-12  bg-shippo-soft w-full">
                    <Link href="/about" className="w-fit flex items-center px-4 py-2 bg-shippo rounded text-white hover:bg-shippo-hard transition-colors flex items-center gap-2 cursor-pointer">
                        <ArrowLeft size={16} className='mr-2' />
                        {t('f_h4')}
                    </Link>
                    <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-md p-8 mb-8">
                        <motion.div
                            className="text-center mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h1
                                className="text-3xl font-bold text-shippo-hard mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                {t('greeting')}
                            </motion.h1>

                            <motion.p
                                className="text-gray-700 text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                {t('greeting_')}
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center gap-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <motion.div
                                className="w-full overflow-hidden rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src={getPublicPath(t('imageMessage1'))}
                                    alt="รูปภาพที่ 1"
                                    width={1000}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>

                            <motion.div
                                className="w-full overflow-hidden rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src={getPublicPath(t('imageMessage2'))}
                                    alt="รูปภาพที่ 2"
                                    width={1000}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}