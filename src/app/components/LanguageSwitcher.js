// src/components/LanguageSwitcher.js
'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import i18n from '../i18n'; // path ที่คุณระบุ

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { t } = useTranslation('common');
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const languages = [
        { code: 'th', name: 'ไทย' },
        { code: 'en', name: 'English' },
        { code: 'jp', name: '日本語' }
    ];

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setCurrentLanguage(language);
        localStorage.setItem('language', language);

        // เปลี่ยน URL เป็นภาษาใหม่
        const newPath = pathname.replace(/^\/(th|en|jp)/, `/${language}`);
        router.push(newPath);
    };

    useEffect(() => {
        // ตรวจสอบภาษาจาก localStorage
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && ['th', 'en', 'jp'].includes(savedLanguage)) {
            i18n.changeLanguage(savedLanguage);
            setCurrentLanguage(savedLanguage);
        }
    }, []);

    return (
        <div className="flex items-center">
            {/* <span className="text-sm text-gray-700 mr-2">{t('language')}: </span> */}
            <div className="flex space-x-2">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`px-2 py-1 text-xs rounded-md border ${currentLanguage === lang.code
                            ? 'bg-blue-100 border-blue-300 text-blue-700 font-medium'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {lang.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;