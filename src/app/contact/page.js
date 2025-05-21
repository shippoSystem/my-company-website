'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../footer';
import { getPublicPath } from '@/utils/paths';

const Contact = () => {
    const { t } = useTranslation('common');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        email: '',
        message: ''
    });
    const [openQuestions, setOpenQuestions] = useState([]);

    const toggleQuestion = (index) => {
        setOpenQuestions(prev => {
            const newOpenQuestions = [...prev];
            // Toggle the selected question
            if (newOpenQuestions.includes(index)) {
                // Remove from open questions if already open
                return newOpenQuestions.filter(item => item !== index);
            } else {
                // Add to open questions if closed
                return [...newOpenQuestions, index];
            }
        });
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show loading spinner
        Swal.fire({
            title: 'Loading',
            html: 'Please wait while Loading...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            // Create FormData object for API submission
            const formDataToSubmit = new FormData();
            for (const key in formData) {
                formDataToSubmit.append(key, formData[key]);
            }

            // Submit to Next.js API route
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formDataToSubmit,
            });

            const data = await response.json();

            if (data.status === 'success') {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    html: 'If you have any further questions,<br> please contact 02-706-7800.'
                });
                // Reset form
                setFormData({
                    name: '',
                    phone: '',
                    service: '',
                    email: '',
                    message: ''
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    html: data.message || 'Something went wrong. Please try again later.'
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Something went wrong. Please try again later.'
            });
            console.error('Error:', error);
        }
    };

    // Animations
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const qaItems = [
        { question: t('q1'), answer: t('a1') },
        { question: t('q2'), answer: t('a2') },
        { question: t('q3'), answer: t('a3') },
        { question: t('q4'), answer: t('a4') },
        { question: t('q5'), answer: t('a5') + t('a5Link') },
        { question: t('q6'), answer: t('a6') },
        { question: t('q7'), answer: t('a7') }
    ];

    return (
        <div className='w-full bg-shippo-soft'>
            <Navbar />
            <div className="w-full pt-12 pb-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <h2 className="text-shippo-hard text-3xl text-center font-semibold">{t('Contact Us')}</h2>
                </motion.div>
            </div>
            <div className="container mx-auto bg-white p-8 rounded-lg shadow-md text-black mb-10">
                <motion.h3
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-2xl font-bold mb-2"
                >
                    {t('Contact Us')}
                </motion.h3>
                <div className="h-1 w-24 bg-gradient-to-l from-[#003471] to-[#10A1E9] mb-8"></div>
                <motion.div
                    className="grid md:grid-cols-2 gap-8 mt-8"
                    variants={staggerChildren}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeIn} className="bg-white rounded-l-lg">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-6 text-[#003471]">{t('Contact Us')}</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('Name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003471] focus:border-transparent transition-all"
                                        placeholder={t('Your Name')}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('Phone')}
                                        </label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003471] focus:border-transparent transition-all"
                                            placeholder={t('Phone Number')}
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('Service')}
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                name="service"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003471] focus:border-transparent appearance-none transition-all"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">{t('Select Service')}</option>
                                                <option value="1">{t('mouldsService')}</option>
                                                <option value="2">{t('arcanaOnline')}</option>
                                                <option value="3">{t('cylinderService')}</option>
                                                <option value="4">{t('other')}</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('Email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003471] focus:border-transparent transition-all"
                                        placeholder={t('Email')}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('Message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003471] focus:border-transparent min-h-32 transition-all"
                                        placeholder={t('Message')}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="bg-[#003471] hover:bg-[#004694] text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-md hover:shadow-lg"
                                    >
                                        {t('SEND')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>


                    <motion.div variants={fadeIn} className="h-80 md:h-full min-h-80">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.593487445366!2d100.7929681631413!3d13.560511013788284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5b67d63b191d%3A0xff34231d8372979b!2sSHIPPO%20ASAHI%20MOULDS(THAILAND)!5e0!3m2!1sth!2sth!4v1604043443675!5m2!1sth!2sth"
                            width="100%"
                            height="100%"
                            className="border-0 rounded"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-10"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                >
                    <div>
                        <h5 className="text-shippo-hard font-semibold text-lg mb-2">
                            {t('salesDes')}
                        </h5>
                        <Link href="mailto:sales@samt.co.th,sales2@samt.co.th" className="text-blue-500 hover:text-black">
                            sales@samt.co.th<br />sales2@samt.co.th
                        </Link>

                        <h5 className="text-shippo-hard font-semibold text-lg mt-6 mb-2">
                            {t('hrDes')}
                        </h5>
                        <Link href="mailto:personnel@samt.co.th" className="text-blue-500 hover:text-black">
                            personnel@samt.co.th
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-10 mb-10"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="w-full flex justify-center">
                        <Image width={900} height={300} className="max-w-full" src={getPublicPath("/images/contact-map/round_big_fac.png")} alt="Factory map" />
                    </div>
                </motion.div>

                <motion.h3
                    id="question"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl font-bold mb-2"
                >
                    {t('Q&A')}
                </motion.h3>
                <div className="h-1 w-24 bg-shippo-hard mb-8"></div>
                <motion.div
                    className="w-full"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="space-y-4">
                        {qaItems.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <span className="font-semibold text-shippo-hard">{item.question}</span>
                                    <span className="text-shippo-hard text-xl">
                                        {openQuestions.includes(index) ? '−' : '+'}
                                    </span>
                                </button>
                                {openQuestions.includes(index) && (
                                    <div className="px-6 py-4 bg-shippo-soft border-t border-gray-200">
                                        <p className="text-gray-700">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;