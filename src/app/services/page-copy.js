'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Services() {
    const { t } = useTranslation('common');

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {t('services')}
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">บริการที่ครอบคลุมทุกความต้องการ</p>
                </div>

                <div className="space-y-16">
                    {/* Service 1 */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="lg:self-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                บริการวางแผนธุรกิจ
                            </h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    เราให้คำปรึกษาและวางแผนกลยุทธ์ธุรกิจที่ครอบคลุม ช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน
                                </p>
                            </div>
                            <div className="mt-5 space-y-2">
                                <p className="text-gray-600 flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    การวิเคราะห์ตลาดและคู่แข่ง
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    การวางแผนกลยุทธ์องค์กร
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    การบริหารการเงินและการลงทุน
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 bg-blue-100 rounded-lg p-6">
                            <div className="h-64 bg-blue-200 rounded-lg flex items-center justify-center text-blue-800">
                                <svg className="h-24 w-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="lg:col-start-2 lg:self-center mt-10 lg:mt-0">
                            <h2 className="text-2xl font-bold text-gray-900">
                                บริการพัฒนาเว็บไซต์
                            </h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    ออกแบบและพัฒนาเว็บไซต์ที่ทันสมัย รองรับทุกอุปกรณ์ และเป็นมิตรกับ SEO
                                </p>
                            </div>
                            <div className="mt-5 space-y-2">
                                <p className="text-gray-600 flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    ออกแบบเว็บไซต์ที่ตอบโจทย์แบรนด์
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    พัฒนาด้วยเทคโนโลยีล่าสุด
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    ปรับแต่ง SEO ให้ติดอันดับใน Google
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-start-1 lg:row-start-1 bg-purple-100 rounded-lg p-6">
                            <div className="h-64 bg-purple-200 rounded-lg flex items-center justify-center text-purple-800">
                                <svg className="h-24 w-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="lg:self-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                บริการการตลาดดิจิตอล
                            </h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    ทำการตลาดออนไลน์ที่ตรงกลุ่มเป้าหมายและสร้าง ROI ที่คุ้มค่า
                                </p>
                            </div>
                            <div className="mt-5 space-y-2">
                                <p className="text-gray-600 flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    การทำ SEO และ SEM
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    การตลาดผ่านโซเชียลมีเดีย
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    การทำ Content Marketing
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 bg-green-100 rounded-lg p-6">
                            <div className="h-64 bg-green-200 rounded-lg flex items-center justify-center text-green-800">
                                <svg className="h-24 w-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-blue-700 rounded-lg shadow-xl overflow-hidden">
                    <div className="px-6 py-12 sm:px-12 lg:px-16 text-center text-white">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            พร้อมยกระดับธุรกิจของคุณ?
                        </h2>
                        <p className="mt-4 text-lg leading-6">
                            ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี พร้อมข้อเสนอพิเศษสำหรับลูกค้าใหม่
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                            >
                                ติดต่อเรา
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 mt-20">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <p>© {new Date().getFullYear()} บริษัทของเรา. สงวนลิขสิทธิ์.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}