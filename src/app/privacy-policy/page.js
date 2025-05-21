'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function CookiePolicy() {
    const { t } = useTranslation('common');

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Header with gradient */}
                    <div className="relative h-24 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
                        <div className="absolute inset-0 bg-opacity-75 flex items-center justify-center">
                            <h1 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
                                {t('cookiePolicyTitle') || 'นโยบายการใช้คุกกี้'}
                            </h1>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        <div className="prose prose-blue max-w-none">
                            <p className="text-gray-600 mb-6">
                                {t('cookiePolicyLastUpdated') || 'อัปเดตล่าสุด: 28 มีนาคม 2025'}
                            </p>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    {t('whatAreCookiesTitle') || 'คุกกี้คืออะไร'}
                                </h2>
                                <p className="mb-4">
                                    {t('whatAreCookiesDescription') ||
                                        'คุกกี้เป็นไฟล์ข้อความขนาดเล็กที่จัดเก็บข้อมูลในเบราว์เซอร์ของคุณเมื่อคุณเข้าชมเว็บไซต์ คุกกี้มีประโยชน์มากเพราะช่วยให้เว็บไซต์จำอุปกรณ์ของคุณและการตั้งค่าที่คุณต้องการได้'}
                                </p>
                                <p>
                                    {t('whatAreCookiesDescription2') ||
                                        'คุกกี้จะถูกจัดเก็บไว้ในอุปกรณ์ของคุณและเก็บข้อมูลที่สามารถนำไปใช้โดยเว็บเซิร์ฟเวอร์เพื่อระบุตัวเบราว์เซอร์ที่คุณใช้เข้าชมเว็บไซต์ คุกกี้อาจจัดเก็บโดยเราโดยตรง ("คุกกี้ของเจ้าของ") หรือในนามของบุคคลที่สาม ("คุกกี้ของบุคคลที่สาม")'}
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    {t('cookiesWeUseTitle') || 'คุกกี้ที่เราใช้'}
                                </h2>
                                <p className="mb-4">
                                    {t('cookiesWeUseDescription') ||
                                        'เราใช้คุกกี้หลายประเภทเพื่อปรับปรุงประสบการณ์ของคุณบนเว็บไซต์ของเรา:'}
                                </p>

                                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
                                    {t('essentialCookiesTitle') || '1. คุกกี้ที่จำเป็น'}
                                </h3>
                                <p className="mb-4">
                                    {t('essentialCookiesDescription') ||
                                        'คุกกี้เหล่านี้จำเป็นต่อการทำงานของเว็บไซต์และไม่สามารถปิดใช้งานในระบบของเรา พวกเขามักจะถูกตั้งค่าเฉพาะเพื่อตอบสนองต่อการกระทำที่คุณทำซึ่งเป็นการร้องขอบริการ เช่น การตั้งค่าความเป็นส่วนตัวของคุณ การเข้าสู่ระบบ หรือการกรอกแบบฟอร์ม'}
                                </p>

                                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
                                    {t('analyticsCookiesTitle') || '2. คุกกี้วิเคราะห์'}
                                </h3>
                                <p className="mb-4">
                                    {t('analyticsCookiesDescription') ||
                                        'คุกกี้เหล่านี้ช่วยให้เราสามารถนับจำนวนผู้เข้าชมและแหล่งที่มาของการเข้าชมเพื่อวัดและปรับปรุงประสิทธิภาพของเว็บไซต์ของเรา พวกเขาช่วยเราทราบว่าหน้าไหนได้รับความนิยมมากที่สุดและน้อยที่สุด และเห็นวิธีที่ผู้เข้าชมใช้งานเว็บไซต์'}
                                </p>

                                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
                                    {t('functionalCookiesTitle') || '3. คุกกี้ฟังก์ชัน'}
                                </h3>
                                <p className="mb-4">
                                    {t('functionalCookiesDescription') ||
                                        'คุกกี้เหล่านี้ช่วยให้เว็บไซต์สามารถให้ฟังก์ชันการทำงานและการปรับแต่งส่วนบุคคลที่เพิ่มขึ้น พวกเขาอาจถูกตั้งค่าโดยเราหรือผู้ให้บริการภายนอกที่เราได้เพิ่มไว้ในหน้าของเรา'}
                                </p>

                                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
                                    {t('targetingCookiesTitle') || '4. คุกกี้เป้าหมาย'}
                                </h3>
                                <p>
                                    {t('targetingCookiesDescription') ||
                                        'คุกกี้เหล่านี้อาจถูกตั้งค่าผ่านเว็บไซต์ของเราโดยพันธมิตรโฆษณาของเรา พวกเขาอาจใช้โดยบริษัทเหล่านั้นเพื่อสร้างโปรไฟล์ความสนใจของคุณและแสดงโฆษณาที่เกี่ยวข้องบนเว็บไซต์อื่น'}
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    {t('managingCookiesTitle') || 'การจัดการคุกกี้'}
                                </h2>
                                <p className="mb-4">
                                    {t('managingCookiesDescription') ||
                                        'คุณสามารถตั้งค่าเบราว์เซอร์ของคุณให้ปฏิเสธคุกกี้ทั้งหมดหรือเพื่อแจ้งเตือนเมื่อมีการส่งคุกกี้ โปรดทราบว่าหากคุณปฏิเสธคุกกี้ คุณอาจไม่สามารถใช้บางส่วนของเว็บไซต์ของเราได้'}
                                </p>
                                <p>
                                    {t('managingCookiesDescription2') ||
                                        'คุณสามารถเรียนรู้เพิ่มเติมเกี่ยวกับคุกกี้และวิธีจัดการพวกเขาในเบราว์เซอร์ของคุณได้ที่ aboutcookies.org'}
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    {t('privacyPolicyTitle') || 'นโยบายความเป็นส่วนตัว'}
                                </h2>
                                <p>
                                    {t('privacyPolicyDescription') ||
                                        'นโยบายคุกกี้นี้เป็นส่วนหนึ่งของนโยบายความเป็นส่วนตัวของเรา และให้ข้อมูลเพิ่มเติมเกี่ยวกับการใช้คุกกี้และเทคโนโลยีการติดตามที่คล้ายกัน เรียนรู้เพิ่มเติมเกี่ยวกับวิธีที่เราใช้ แบ่งปัน และปกป้องข้อมูลส่วนบุคคลของคุณได้ในนโยบายความเป็นส่วนตัวฉบับเต็มของเรา'}
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    {t('contactUsTitle') || 'ติดต่อเรา'}
                                </h2>
                                <p>
                                    {t('contactUsDescription') ||
                                        'หากคุณมีคำถามเกี่ยวกับนโยบายคุกกี้นี้ โปรดติดต่อเราที่ privacy@example.com'}
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Footer with backlink */}
                <div className="mt-8 text-center">
                    <Link href="/" className="inline-flex items-center bg-shippo text-white p-3 rounded-2xl hover:underline">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        {t('backToHome') || 'กลับไปยังหน้าแรก'}
                    </Link>
                </div>
            </div>
        </div>
    );
}