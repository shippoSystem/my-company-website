import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronUp } from 'lucide-react';
import { getPublicPath } from '@/utils/paths';

const Footer = () => {
    const { t } = useTranslation('common');
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className="bg-gray-800">
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Navigation Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 p-5">
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('home')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="#strengths" className="text-gray-300 hover:text-white">{t('strengths')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('about')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about/company" className="text-gray-300 hover:text-white">{t('aboutCompany')}</Link></li>
                            <li><Link href="/about/message" className="text-gray-300 hover:text-white">{t('message')}</Link></li>
                            <li><Link href="/about/history" className="text-gray-300 hover:text-white">{t('companyHistory')}</Link></li>
                            <li><Link href="/about/overseas" className="text-gray-300 hover:text-white">{t('overseasBranches')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('business')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services/die-casting" className="text-gray-300 hover:text-white">{t('dieCasting')}</Link></li>
                            <li><Link href="/services/die-casting#moldDes" className="text-gray-300 hover:text-white">{t('machinery')}</Link></li>
                            <li><Link href="/services/arcana-info" className="text-gray-300 hover:text-white">{t('arcana')}</Link></li>
                            <li><Link href="/services/eco-cylinder" className="text-gray-300 hover:text-white">{t('ecoCylinder')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('contact')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="text-gray-300 hover:text-white">{t('contact')}</Link></li>
                            <li><Link href="/contact#question" className="text-gray-300 hover:text-white">{t('faq')}</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Contact Links with Icons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 p-5 pt-8">
                    <div className="flex items-center">
                        <div className="border border-gray-600 rounded-full p-2 mr-3">
                            <MapPin className="text-gray-300" size={20} />
                        </div>
                        <Link href="https://maps.app.goo.gl/Axv3u5B97GuMGMgo9" target='blank' className="text-gray-300 hover:text-white">
                            Location
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="border border-gray-600 rounded-full p-2 mr-3">
                            <Phone className="text-gray-300" size={20} />
                        </div>
                        <Link href="tel:027067800" className="text-gray-300 hover:text-white">
                            02-706-7800
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="border border-gray-600 rounded-full p-2 mr-3">
                            <Mail className="text-gray-300" size={20} />
                        </div>
                        <Link href="mailto:sales@samt.co.th, sales2@samt.co.th" className="text-gray-300 hover:text-white">
                            {t('sales')}
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="border border-gray-600 rounded-full p-2 mr-3">
                            <Mail className="text-gray-300" size={20} />
                        </div>
                        <Link href="mailto:personnel@samt.co.th" className="text-gray-300 hover:text-white">
                            {t('hr')}
                        </Link>
                    </div>
                </div>
                {/* arcana */}

                {/* Company Logo, Email and Social Media Links */}
                <div className="border-t border-gray-600 mb-8 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-evenly">
                        {/* Logo Column */}
                        <div className="mb-6 md:mb-0 text-white">
                            <Image width={1000} height={1000} src={getPublicPath("/images/arcanastory.png")} alt="Company Logo" className="w-30 h-auto" />
                            Arcana Online
                        </div>

                        {/* Email Column */}
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center">
                                <div className="border border-gray-600 rounded-full p-2 mr-3 hover:border-white transition-colors">
                                    <Mail className="text-gray-300" size={20} />
                                </div>
                                <Link href="mailto:info_arcana@samt.co.th" className="text-gray-300 hover:text-white transition-colors">
                                    info_arcana@samt.co.th
                                </Link>
                            </div>
                        </div>

                        {/* Social Media Column */}
                        <div>
                            <div className="flex items-center">
                                <span className="text-gray-300 mr-4 font-medium">FOLLOW US</span>
                                <div className="flex items-center space-x-3">
                                    <Link href="https://line.me/R/ti/p/@507oiceg" target="_blank" className="text-gray-300 hover:text-white">
                                        <div className="border border-gray-600 rounded-full p-2 hover:border-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                    </Link>
                                    <Link href="https://www.facebook.com/ArcanaOnlineShop.TH" target="_blank" className="text-gray-300 hover:text-white">
                                        <div className="border border-gray-600 rounded-full p-2 hover:border-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                            </svg>
                                        </div>
                                    </Link>
                                    <div className="text-gray-300 hover:text-white">
                                        <div className="border border-gray-600 rounded-full p-2 hover:border-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Address and Copyright */}
                <div className="text-center text-white border-t border-gray-700 pt-8">
                    <p>438 หมู่ 17 ตำบลบางเสาธง อำเภอบางเสาธง จังหวัดสมุทรปราการ 10570 ประเทศไทย</p>
                    <p>© 2025 Shippo Asahi Moulds (Thailand) Co., Ltd. All Rights Reserved.</p>
                    <p>Powered by R&D Department</p>
                </div>
            </div>
            {/* Back to Top Button */}
            {showTopBtn && (
                <div className="fixed bottom-6 right-6 z-50 transition-opacity duration-300 opacity-100 animate-fade-in">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-gradient-to-t from-[#10A1E9] to-[#003471] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
                        aria-label="Back to Top"
                    >
                        <ChevronUp size={20} />
                    </button>
                </div>
            )}


        </footer>
    );
};

export default Footer;