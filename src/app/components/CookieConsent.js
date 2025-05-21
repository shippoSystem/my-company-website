'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function CookieConsent() {
    const { t } = useTranslation('common');
    const [isVisible, setIsVisible] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    useEffect(() => {
        if (!isBrowser) return;

        // Check if user has already given consent
        const hasConsent = localStorage.getItem('cookieConsent');

        // Only show banner if consent hasn't been given
        if (!hasConsent) {
            // Slight delay to prevent banner from flashing on page load
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isBrowser]);

    const acceptCookies = () => {
        if (!isBrowser) return;

        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const declineCookies = () => {
        if (!isBrowser) return;

        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    const hideBanner = () => {
        // เพียงแค่ซ่อนแบนเนอร์โดยไม่บันทึกการตัดสินใจเกี่ยวกับคุกกี้
        setIsVisible(false);
    };

    // Don't render anything on server
    if (!isBrowser) return null;

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-[200] max-w-sm overflow-hidden
                      transition-all duration-300 ease-in-out animate-fade-in">
            <div className="bg-shippo-soft backdrop-blur-md rounded-xl shadow-lg border border-gray-100 p-5">
                {/* Close button */}
                <div className="flex justify-end -mt-2 -mr-2 mb-1">
                    <button
                        onClick={hideBanner}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                        aria-label="ซ่อน"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-800 mb-2">
                        {t('cookieTitle') || 'การใช้คุกกี้'}
                    </h3>
                    <p className="text-xs text-gray-600">
                        {t('cookie') || 'เว็บไซต์นี้ใช้คุกกี้เพื่อมอบประสบการณ์การใช้งานที่ดีที่สุดให้กับคุณ'}
                    </p>
                </div>

                <div className="flex items-center justify-between gap-3">
                    {/*  <Link href="/privacy-policy" className="text-xs text-shippo hover:underline"> */}
                    <Link href="#" className="text-xs text-shippo hover:underline">
                        {t('learnMore') || 'เรียนรู้เพิ่มเติม'}
                    </Link>

                    <div className="flex gap-2">
                        <button
                            onClick={declineCookies}
                            className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-800 
                                     focus:outline-none transition-colors duration-200"
                        >
                            {t('decline') || 'ปฏิเสธ'}
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="px-3 py-1.5 bg-shippo text-white rounded-md text-xs font-medium 
                                     hover:bg-blue-600 focus:outline-none transition-colors duration-200"
                        >
                            {t('accept') || 'ยอมรับ'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}