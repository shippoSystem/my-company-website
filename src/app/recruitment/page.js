'use client';

// pages/recruitment.js
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { format } from 'date-fns';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Footer from '../footer';
import {
    User,
    MapPin,
    CalendarPlus,
    DollarSign,
    Banknote,
    Bus,
    Stethoscope,
    Cake,
    Wallet,
    TrendingUp,
    HeartPulse,
    PiggyBank,
    Umbrella,
    Utensils,
    Shirt,
    HandCoins,
    Plane,
    Baby,
    X
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Recruitment() {
    const { t, i18n } = useTranslation('common');
    const [selectedJob, setSelectedJob] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [generalJobs, setGeneralJobs] = useState([]);
    const [internJobs, setInternJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch job data from API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);

                // Fetch general jobs (type 1)
                const generalResponse = await fetch('/api/jobs?type=1');
                const generalData = await generalResponse.json();

                // Fetch intern jobs (type 2)
                const internResponse = await fetch('/api/jobs?type=2');
                const internData = await internResponse.json();

                console.log('General Jobs API Response:', generalData);
                console.log('Intern Jobs API Response:', internData);
                if (generalData.status === 'success') {
                    setGeneralJobs(generalData.data);
                }

                if (internData.status === 'success') {
                    setInternJobs(internData.data);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);


    // Variables for pagination
    const limit = 5;
    const totalPages = Math.ceil(generalJobs?.length / limit || 1);
    const totalPages2 = Math.ceil(internJobs?.length / limit || 1);

    // Format date function
    const formatDate = (dateString) => {
        return format(new Date(dateString), 'yyyy-MM-dd');
    };

    const handleJobDetail = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    // Pagination logic for general jobs
    const paginatedGeneralJobs = generalJobs?.slice(
        (currentPage - 1) * limit,
        currentPage * limit
    ) || [];

    // Pagination logic for intern jobs
    const paginatedInternJobs = internJobs?.slice(
        (currentPage2 - 1) * limit,
        currentPage2 * limit
    ) || [];

    // Function to change page
    const changePage = (page, isIntern = false) => {
        if (isIntern) {
            setCurrentPage2(page);
        } else {
            setCurrentPage(page);
        }
    };

    // Framer motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    const benefits = [
        { icon: DollarSign, text: t('bonus') },
        { icon: Banknote, text: t('livingAllowance') },
        { icon: Bus, text: t('passengerVan') },
        { icon: Stethoscope, text: t('annualHealthCheck') },
        { icon: Cake, text: t('birthdayCake') },
        { icon: Wallet, text: t('diligentAllowance') },
        { icon: TrendingUp, text: t('positionAllowance') },
        { icon: HeartPulse, text: t('lifeInsurance') },
        { icon: PiggyBank, text: t('providentFund') },
        { icon: Umbrella, text: t('annualLeave') },
        { icon: Utensils, text: t('foodAllowance') },
        { icon: Shirt, text: t('uniform') },
        { icon: HandCoins, text: t('socialSecurity') },
        { icon: Plane, text: t('annualTravel') },
        { icon: Baby, text: t('maternityLeave') }
    ];

    // For the carousel effect
    const [currentSlide, setCurrentSlide] = useState(0);
    const imageSlides = Array.from({ length: 11 }, (_, i) =>
        i === 2 ? "images/travel/samed3.jpg" : `images/Allowance${i === 0 ? 1 : i === 1 ? 2 : i === 3 ? 4 : i === 4 ? 5 : i === 5 ? 6 : i === 6 ? 3 : i === 7 ? 7 : i === 8 ? 8 : i === 9 ? 9 : 10}.jpg`
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imageSlides.length]);

    return (
        <>
            <Navbar />
            <div className="bg-blue-50 min-h-screen ">
                <motion.section
                    id="jobs"
                    className="pt-12 pb-16 "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-10">
                        <h2 className="text-center text-3xl font-bold text-shippo-hard">{t('recruitment')}</h2>
                    </div>

                    <motion.div
                        className="container mx-auto bg-white p-8 rounded-lg shadow-lg"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6">
                            <Link href="#jobs" className="text-gray-800 hover:text-shippo-hard transition-colors">
                                {t('samtJobPositions')}
                            </Link>
                        </motion.h2>
                        <motion.div variants={itemVariants} className="rounded-lg border border-gray-200 overflow-hidden">
                            <div className="bg-shippo-soft px-6 py-4 text-gray-700 font-medium">Jobs Vacancies</div>
                            <div className="p-0 ">
                                <div className="overflow-x-auto rounded-md border border-gray-200">
                                    <table className="w-full text-left text-sm text-gray-700">
                                        <thead className="bg-shippo-hard text-white">
                                            <tr>
                                                <th className="px-4 py-3">#</th>
                                                <th className="px-4 py-3">{t('position')}</th>
                                                <th className="px-4 py-3">{t('numberOfPositions')}</th>
                                                <th className="px-4 py-3">{t('location')}</th>
                                                <th className="px-4 py-3">{t('date')}</th>
                                                <th className="px-4 py-3">{t('details')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                                                        {t('loading')}...
                                                    </td>
                                                </tr>
                                            ) : paginatedGeneralJobs.length > 0 ? (
                                                paginatedGeneralJobs.map((job, index) => (
                                                    <motion.tr
                                                        key={job.j_id}
                                                        className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                                            }`}
                                                        whileHover={{ scale: 1.01 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <td className="py-3 px-4 font-medium">{(currentPage - 1) * limit + index + 1}</td>
                                                        <td className="py-3 px-4">{job.j_name}</td>
                                                        <td className="py-3 px-4">
                                                            <User className="inline text-shippo mr-1 h-4 w-4" /> {job.j_position} {t('positions')}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <MapPin className="inline text-shippo mr-1 h-4 w-4" /> {job.j_location}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <CalendarPlus className="inline text-shippo mr-1 h-4 w-4" /> {formatDate(job.j_add)}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <button
                                                                onClick={() => handleJobDetail(job)}
                                                                className="text-shippo-hard hover:underline focus:outline-none"
                                                            >
                                                                {t('viewDetails')}
                                                            </button>
                                                        </td>
                                                    </motion.tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                                                        0 results
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="bg-shippo-soft px-6 py-3 text-gray-600 text-sm flex justify-between items-center">
                                {t('lastUpdateOn')} {format(new Date(), 'yyyy-MM-dd')}
                                <nav>
                                    <ul className="flex gap-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <li
                                                key={page}
                                            >
                                                <button
                                                    className={`px-3 py-1 rounded ${page === currentPage ? 'bg-shippo-hard text-white' : 'bg-white text-shippo-hard hover:bg-blue-100'} transition-colors focus:outline-none`}
                                                    onClick={() => changePage(page)}
                                                >
                                                    {page}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Job Detail Modal */}
                <AnimatePresence>
                    {showModal && selectedJob && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                            <motion.div
                                className="bg-white rounded-lg max-w-lg w-full overflow-hidden"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25 }}
                            >
                                <div className="bg-shippo-hard text-white px-6 py-4 flex justify-between items-center">
                                    <h5 className="text-xl font-medium">
                                        {t('details')}
                                    </h5>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="text-white hover:text-gray-200 focus:outline-none"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="p-6">
                                    <p className="mb-4">
                                        <strong className="text-gray-700">{t('position')}:</strong>
                                        <br /> <span className="text-gray-800">{selectedJob.j_name}</span>
                                    </p>
                                    <p className="mb-4">
                                        <strong className="text-gray-700">{t('requirements')}:</strong>
                                        <br />
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: selectedJob.j_des.replace(/\n/g, '<br>'),
                                            }}
                                            className="text-gray-800"
                                        ></span>
                                    </p>
                                    <p className="mb-4">
                                        <strong className="text-gray-700">{t('numberOfPositions')}:</strong>
                                        <br /> <span className="text-gray-800">{selectedJob.j_position}</span>
                                    </p>
                                    <p className="mb-4">
                                        <strong className="text-gray-700">{t('location')}:</strong>
                                        <br /> <span className="text-gray-800">{selectedJob.j_location}</span>
                                    </p>
                                    <p className="mb-4">
                                        <strong className="text-gray-700">{t('salary')}:</strong>
                                        <br />
                                        <span className="text-gray-800">
                                            {selectedJob.j_salary
                                                ? Number(selectedJob.j_salary).toLocaleString()
                                                : t('notSpecified')}
                                        </span>
                                    </p>
                                    <p className="mb-4">
                                        <strong className="text-gray-700">{t('other')}:</strong>
                                        <br /> <span className="text-gray-800">{t('contactUsForInfo')}</span>
                                    </p>
                                </div>
                                <div className="bg-gray-100 px-6 py-3 flex justify-end">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors focus:outline-none"
                                    >
                                        {t('close')}
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <motion.section
                    id="intern"
                    className="pb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="container mx-auto bg-white p-8 rounded-lg shadow-lg"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6">
                            <Link href="#intern" className="text-gray-800 hover:text-shippo-hard transition-colors">
                                {t('internsEducation')}
                            </Link>
                        </motion.h2>
                        <motion.div variants={itemVariants} className="rounded-lg border border-gray-200 overflow-hidden">
                            <div className="bg-shippo-soft px-6 py-4 text-gray-700 font-medium">{t('internshipPositions')}</div>
                            <div className="p-0">
                                <div className="overflow-x-auto rounded-md border border-gray-200">
                                    <table className="w-full text-left text-sm text-gray-700">
                                        <thead className="bg-shippo-hard text-white">
                                            <tr>
                                                <th className="px-4 py-3">#</th>
                                                <th className="px-4 py-3">{t('position')}</th>
                                                <th className="px-4 py-3">{t('numberOfPositions')}</th>
                                                <th className="px-4 py-3">{t('location')}</th>
                                                <th className="px-4 py-3">{t('date')}</th>
                                                <th className="px-4 py-3">{t('details')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                                                        {t('loading')}...
                                                    </td>
                                                </tr>
                                            ) : paginatedInternJobs.length > 0 ? (
                                                paginatedInternJobs.map((job, index) => (
                                                    <motion.tr
                                                        key={job.j_id}
                                                        className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                                            }`}
                                                        whileHover={{ scale: 1.01 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <td className="py-3 px-4 font-medium">
                                                            {(currentPage2 - 1) * limit + index + 1}
                                                        </td>
                                                        <td className="py-3 px-4">{job.j_name}</td>
                                                        <td className="py-3 px-4">
                                                            <User className="inline text-shippo mr-1 h-4 w-4" /> {job.j_position}{' '}
                                                            {t('positions')}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <MapPin className="inline text-shippo mr-1 h-4 w-4" /> {job.j_location}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <CalendarPlus className="inline text-shippo mr-1 h-4 w-4" />{' '}
                                                            {formatDate(job.j_add)}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <button
                                                                onClick={() => handleJobDetail(job)}
                                                                className="text-blue-600 hover:underline focus:outline-none"
                                                            >
                                                                {t('viewDetails')}
                                                            </button>
                                                        </td>
                                                    </motion.tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                                                        0 results
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="bg-shippo-soft px-6 py-3 text-gray-600 text-sm flex justify-between items-center">
                                {t('lastUpdateOn')} {format(new Date(), 'yyyy-MM-dd')}
                                <nav>
                                    <ul className="flex gap-1">
                                        {Array.from({ length: totalPages2 }, (_, i) => i + 1).map((page) => (
                                            <li key={page}>
                                                <button
                                                    className={`px-3 py-1 rounded ${page === currentPage2 ? 'bg-shippo-hard text-white' : 'bg-white text-shippo-hard hover:bg-blue-100'} transition-colors focus:outline-none`}
                                                    onClick={() => changePage(page, true)}
                                                >
                                                    {page}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                <motion.section
                    id="benefit"
                    className="pb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="container mx-auto bg-white p-8 rounded-lg shadow-lg"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-10">
                            <motion.h2
                                className="text-2xl font-bold mb-2 text-black"
                                variants={itemVariants}
                            >
                                {t('benefitsAtSAMT')}
                            </motion.h2>
                            <motion.h4
                                className="text-gray-600"
                                variants={itemVariants}
                            >
                                {t('benefitsDescription')}
                            </motion.h4>
                        </div>

                        {/* Modern carousel with animation */}
                        <div className="relative max-w-md mx-auto mb-12 overflow-hidden rounded-lg">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="h-96 w-full rounded-lg"
                            >
                                {imageSlides.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="w-full h-full bg-center bg-cover"
                                            style={{ backgroundImage: `url('${src}')` }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>


                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            variants={containerVariants}
                        >
                            {[0, 1, 2].map((colIndex) => (
                                <motion.div key={colIndex} variants={itemVariants}>
                                    <ul className="space-y-2">
                                        {benefits.slice(colIndex * 5, (colIndex + 1) * 5).map((benefit, index) => (
                                            <motion.li
                                                key={index}
                                                className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg flex items-center gap-3 shadow-sm transition-colors"
                                                whileHover={{
                                                    scale: 1.03,
                                                    backgroundColor: 'rgba(219, 234, 254, 1)' // tailwind blue-100
                                                }}
                                            >
                                                <benefit.icon className="text-shippo h-5 w-5" />
                                                <span className="text-gray-700">{benefit.text}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>
            <Footer />
        </>
    );
}