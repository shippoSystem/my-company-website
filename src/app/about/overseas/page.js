'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { getPublicPath } from '@/utils/paths';

const OverseasBranch = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <Navbar />
            <div className="w-full bg-shippo-soft p-12 text-black">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/about" className="w-fit flex items-center px-4 py-2 bg-shippo rounded text-white hover:bg-shippo-hard transition-colors gap-2 cursor-pointer">
                        <ArrowLeft size={16} className='mr-2' />
                        {t('f_h4')}
                    </Link>
                </motion.div>

                <motion.div
                    className="container text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="p-3">
                        <h2 className="text-shippo-hard text-3xl">
                            {t('overseasBranchTitle')}
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    className="container p-5 mt-5 bg-white mx-auto rounded-2xl shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-shippo-hard text-2xl font-semibold">{t('overseasBranchTitle')}</h3>
                    <div className="h-[3px] w-20 bg-gradient-to-l from-[#003471] to-[#10A1E9] my-5"></div>

                    {/* Japan Section */}
                    <motion.h3
                        className="text-shippo-hard text-xl font-semibold mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {t('japan')}
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Image
                                src={getPublicPath("/images/smc.jpg")}
                                alt="Shippo Moulds Co., Ltd."
                                width={400}
                                height={300}
                                className="w-full object-cover rounded-lg"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <table className="w-full border border-gray-300 text-left text-black">
                                <tbody>
                                    <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200 w-1/3">{t('name')}</th><td className="p-2 border-b border-gray-200">{t('shippoMouldsName')}</td></tr>
                                    <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('establishment')}</th><td className="p-2 border-b border-gray-200">{t('shippoMouldsEstablishment')}</td></tr>
                                    {t('language') === 'ja' && (<tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('founding')}</th><td className="p-2 border-b border-gray-200">{t('shippoMouldsFounding')}</td></tr>)}
                                    <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('capital')}</th><td className="p-2 border-b border-gray-200">{t('shippoMouldsCapital')}</td></tr>
                                    <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('president')}</th><td className="p-2 border-b border-gray-200">{t('shippoMouldsPresident')}</td></tr>
                                    <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('employees')}</th><td className="p-2 border-b border-gray-200">{t('shippoMouldsEmployees')}</td></tr>
                                    <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('products')}</th><td className="p-2 border-b border-gray-200">{t('shippoMouldsProducts')}</td></tr>
                                    <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('address')}</th><td className="p-2 border-b border-gray-200" dangerouslySetInnerHTML={{ __html: t('shippoMouldsAddress') }}></td></tr>
                                </tbody>
                            </table>
                        </motion.div>
                    </div>

                    {/* S.I. Precision Company */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Image
                            src={getPublicPath("/images/sip.jpg")}
                            alt="S.I.PRECISION Co., Ltd."
                            width={400}
                            height={300}
                            className="w-full object-cover rounded-lg"
                        />
                        <table className="w-full border border-gray-300 text-left text-black">
                            <tbody>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200 w-1/3">{t('name')}</th><td className="p-2 border-b border-gray-200">{t('siPrecisionName')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('establishment')}</th><td className="p-2 border-b border-gray-200">{t('siPrecisionEstablishment')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('capital')}</th><td className="p-2 border-b border-gray-200">{t('siPrecisionCapital')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('president')}</th><td className="p-2 border-b border-gray-200">{t('siPrecisionPresident')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('employees')}</th><td className="p-2 border-b border-gray-200">{t('siPrecisionEmployees')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('products')}</th><td className="p-2 border-b border-gray-200">{t('siPrecisionProducts')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('address')}</th><td className="p-2 border-b border-gray-200" dangerouslySetInnerHTML={{ __html: t('siPrecisionAddress') }}></td></tr>
                            </tbody>
                        </table>
                    </motion.div>

                    {/* Mexico Section */}
                    <motion.h3
                        className="text-shippo-hard text-xl font-semibold mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        {t('mexico')}
                    </motion.h3>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Image
                            src={getPublicPath("/images/Mexico_picture.jpg")}
                            alt="Shippo Molds México, S.A. DE C.V"
                            width={400}
                            height={300}
                            className="w-full object-cover rounded-lg"
                        />
                        <table className="w-full border border-gray-300 text-left text-black">
                            <tbody>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200 w-1/3">{t('name')}</th><td className="p-2 border-b border-gray-200">{t('shippoMexicoName')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('establishment')}</th><td className="p-2 border-b border-gray-200">{t('shippoMexicoEstablishment')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('capital')}</th><td className="p-2 border-b border-gray-200">{t('shippoMexicoCapital')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('president')}</th><td className="p-2 border-b border-gray-200">{t('shippoMexicoPresident')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('employees')}</th><td className="p-2 border-b border-gray-200">{t('shippoMexicoEmployees')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('products')}</th><td className="p-2 border-b border-gray-200">{t('shippoMexicoProducts')}</td></tr>
                                <tr className="even:bg-gray-50"><th className="p-2 border-b border-gray-200">{t('address')}</th><td className="p-2 border-b border-gray-200" dangerouslySetInnerHTML={{ __html: t('shippoMexicoAddress') }}></td></tr>
                            </tbody>
                        </table>
                    </motion.div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default OverseasBranch;