"use client";
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Navbar from '../components/Navbar';
import Footer from '../footer';
import Image from 'next/image';
import { getPublicPath } from '@/utils/paths';

export default function DocumentRequestForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        customerType: '',
        companyName: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        agree: false
    });
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            // ส่งข้อมูลไปยัง API
            const response = await fetch('/api/documentReq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'การขอเอกสารล้มเหลว');
            }

            // แสดง modal เมื่อสำเร็จ
            setShowModal(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage(error.message || 'เกิดข้อผิดพลาดในการส่งแบบฟอร์ม กรุณาลองใหม่อีกครั้ง');
        } finally {
            setLoading(false);
        }
    };

    const reloadPage = () => {
        setShowModal(false);
        window.location.reload();
    };

    return (
        <>
            <Navbar />
            <section id="docReq" className="min-h-screen font-sans bg-shippo-soft pb-12">
                {/* Hero Banner with improved gradient */}
                <div className="w-full p-8 bg-gradient-to-r from-[#003471] to-[#10A1E9] shadow-lg">
                    <h1 className="text-white text-center text-3xl md:text-4xl font-bold tracking-wide">
                        {t('downloadDoc')}
                    </h1>
                </div>

                {/* Form with enhanced styling */}
                <div className="max-w-4xl mx-auto text-shippo-hard p-6 md:p-8 bg-white rounded-lg shadow-lg -mt-6 relative z-10">
                    {errorMessage && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Customer Type with custom radio styling */}
                        <div className="space-y-2">
                            <label htmlFor="customerType" className="block text-gray-700 font-medium">
                                {t('customerTypeLabel')}
                            </label>
                            <div className="flex flex-wrap gap-8">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="individual"
                                        name="customerType"
                                        value={t('individualLabel')}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="individual" className="ml-2 text-gray-700">
                                        {t('individualLabel')}
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="corporate"
                                        name="customerType"
                                        value={t('corporateLabel')}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="corporate" className="ml-2 text-gray-700">
                                        {t('corporateLabel')}
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Company Name with improved input styling */}
                        <div className="space-y-2">
                            <label htmlFor="companyName" className="block text-gray-700 font-medium">
                                {t('companyNameLabel')}
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder={t('companyNamePlaceholder')}
                                onChange={handleChange}
                            />
                        </div>

                        {/* First Name and Last Name in a responsive grid */}
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-gray-700 font-medium">
                                <span>{t('firstNameLabel')}</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder={t('firstNamePlaceholder')}
                                    required
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder={t('lastNamePlaceholder')}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-gray-700 font-medium">
                                <span>{t('phoneLabel')}</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder={t('phonePlaceholder')}
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                <span>{t('emailLabel')}</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder={t('emailPlaceholder')}
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Privacy Policy with styled textarea */}
                        <div className="space-y-2">
                            <label htmlFor="privacyPolicy" className="block text-gray-700 font-medium">
                                <span>{t('privacyPolicyLabel')}</span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <textarea
                                id="privacyPolicy"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-gray-50 text-gray-700 text-sm"
                                rows="5"
                                readOnly
                                value={t('privacyDes')}
                            ></textarea>
                        </div>

                        {/* Agreement checkbox with improved styling */}
                        <div className="flex items-start space-x-3">
                            <input
                                type="checkbox"
                                id="agree"
                                name="agree"
                                required
                                onChange={handleChange}
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="agree" className="text-gray-700 text-sm">
                                {t('agreeLabel')}
                            </label>
                        </div>

                        {/* Submit button with hover and focus states */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={loading}
                            >
                                {loading ? t('submittingButtonText') || 'กำลังส่ง...' : t('submitButtonText')}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Success Modal with improved styling */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
                        <div className="bg-white rounded-xl p-6 md:p-8 max-w-2xl w-full mx-4 shadow-2xl transform transition-all">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
                                    <Image width={1000} height={1000} src={getPublicPath("/images/btn-success-happy.gif")} className="max-w-full h-auto rounded-lg" alt="" />
                                </div>
                                <div className="w-full md:w-2/3 md:pl-6">
                                    <h3 className="text-center text-gray-800 text-xl font-bold mb-6">入力内容をご確認ください</h3>
                                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                                        <div className="w-1/4 flex justify-center">
                                            <Image width={1000} height={1000} src={getPublicPath("/images/success-animation.gif")} className="max-w-full h-auto" alt="" />
                                        </div>
                                        <div className="w-3/4 text-gray-800 pl-4">
                                            <h5 className="font-medium text-lg mb-1">資料送信しました</h5>
                                            <h5 className="font-medium text-lg">登録したアドレスをご確認ください</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <button
                                    onClick={reloadPage}
                                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Loading Overlay with animation */}
                {loading && (
                    <div className="fixed inset-0 flex flex-col items-center justify-center z-40 bg-white bg-opacity-90 transition-opacity duration-300">
                        <h2 className="mb-6 text-xl font-bold text-gray-800">Loading, please wait...</h2>
                        <div className="relative">
                            <Image width={1000} height={1000}
                                className="w-48 h-auto rounded-lg shadow-md"
                                src={getPublicPath("/images/loading.gif")}
                                alt="Loading..."
                            />
                            <div className="absolute inset-0 bg-shippo-soft bg-opacity-10 rounded-lg"></div>
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
}