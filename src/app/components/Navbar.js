'use client';
import Image from 'next/image';
import { useState, useEffect, useRef, memo } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { getPublicPath } from '@/utils/paths';

// Memoized link component for better performance
const NavLink = memo(({ href, className, children }) => (
    <Link href={href} className={className}>
        {children}
    </Link>
));

NavLink.displayName = 'NavLink';

// Memoized dropdown link to prevent unnecessary re-renders
const DropdownLink = memo(({ href, children }) => (
    <Link
        href={href}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-shippo transition-colors duration-150"
    >
        {children}
    </Link>
));

DropdownLink.displayName = 'DropdownLink';

export default function Navbar() {
    const { t } = useTranslation('common');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Check if we're in the browser
    useEffect(() => {
        setIsBrowser(true);
    }, []);

    // Handle scroll effect
    useEffect(() => {
        if (!isBrowser) return;

        const handleScroll = () => {
            // Only check scroll position if we're not already in scrolled state
            if (!isScrolled && window.scrollY > 10) {
                setIsScrolled(true);
            } else if (isScrolled && window.scrollY <= 10) {
                setIsScrolled(false);
            }
        };

        // Use passive: true for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled, isBrowser]);

    // Handle clicks outside dropdown
    useEffect(() => {
        if (!isBrowser) return;

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsServicesDropdownOpen(false);
            }

            if (
                isMobileMenuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                !event.target.closest('button[aria-expanded]')
            ) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen, isBrowser]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Close dropdown when toggling mobile menu
        if (!isMobileMenuOpen) {
            setIsServicesDropdownOpen(false);
        }
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    // Memoize menu items for better performance - Rearranged to put dropdown in third position
    const menuItems = [
        { href: '/', label: t('home') },
        { href: '/about', label: t('about') },
        // Business dropdown will be inserted here (third position)
        { href: '/recruitment', label: t('recruitment') },
        { href: '/contact', label: t('contact') },
    ];

    const businessItems = [
        { href: '/services/die-casting', label: t('dieCasting') },
        { href: '/services/arcana-info', label: t('arcana') },
        { href: '/services/eco-cylinder', label: t('ecoCylinder') },
        { href: '/services/easy-g', label: t('easyG') },
        { href: '/services/tool-meister', label: t('tool_meister') },
    ];

    return (
        <nav
            className={`w-full z-50 transition-all duration-300 relative ${isScrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2'
                : 'bg-white py-4 shadow-md'
                }`}
        >
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo and Title - Made more responsive with proper spacing */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="flex items-center group">
                            <div className="overflow-hidden rounded">
                                <Image
                                    src={getPublicPath("/images/logo.png")}
                                    alt="Company Logo"
                                    width={100}
                                    height={32}
                                    className="h-8 w-auto transform transition-transform group-hover:scale-105"
                                    priority
                                />
                            </div>
                            {/* Title will properly hide on mobile when menu is open */}
                            <p className={`text-black font-medium ml-2 ${isMobileMenuOpen ? 'hidden sm:block' : 'block'} truncate max-w-[150px] sm:max-w-none`}>
                                <span>Shippo Asahi Moulds (Thailand) Co., Ltd.</span>
                            </p>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-6">
                        {/* First two menu items */}
                        {menuItems.slice(0, 2).map((item) => (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-shippo px-3 py-2 rounded-md text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        {/* Business dropdown with hover effect - Now third in the menu */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="text-gray-700 hover:text-shippo px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                                onClick={toggleServicesDropdown}
                                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                aria-expanded={isServicesDropdownOpen}
                            >
                                {t('business')}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown menu with improved transition and higher z-index */}
                            {isBrowser && (
                                <div
                                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                                    className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black/5 z-[100] transform transition-all duration-200 origin-top ${isServicesDropdownOpen
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-95 pointer-events-none'
                                        }`}
                                >
                                    <div className="py-1">
                                        {businessItems.map((item) => (
                                            <DropdownLink key={item.href} href={item.href}>
                                                {item.label}
                                            </DropdownLink>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Remaining menu items */}
                        {menuItems.slice(2).map((item) => (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-shippo px-3 py-2 rounded-md text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <div className="pl-2 border-l border-gray-200">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* Mobile menu button - Better positioned */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-shippo hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors relative z-[95]"
                            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu - Position absolutely with high z-index to prevent being covered by other elements */}
            {isBrowser && (
                <div
                    ref={mobileMenuRef}
                    className={`md:hidden absolute top-full w-full left-0 shadow-md z-[90] overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'
                        }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm">
                        {/* First two mobile menu items */}
                        {menuItems.slice(0, 2).map((item) => (
                            <NavLink
                                key={`mobile-${item.href}`}
                                href={item.href}
                                className="block text-gray-700 hover:text-shippo hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        {/* Business section in mobile menu - Now third in the menu with proper positioning */}
                        <div className="relative">
                            <button
                                onClick={toggleServicesDropdown}
                                className="flex w-full items-center justify-between text-gray-700 hover:text-shippo hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                            >
                                {t('business')}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Mobile dropdown items with better transition and visibility */}
                            <div
                                className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 bg-gray-50 rounded-md ${isServicesDropdownOpen ? 'max-h-96 py-2 my-2 opacity-100' : 'max-h-0 opacity-0 py-0 my-0'
                                    }`}
                            >
                                {businessItems.map((item) => (
                                    <NavLink
                                        key={`mobile-dropdown-${item.href}`}
                                        href={item.href}
                                        className="block text-gray-700 hover:text-shippo hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        {/* Remaining mobile menu items */}
                        {menuItems.slice(2).map((item) => (
                            <NavLink
                                key={`mobile-${item.href}`}
                                href={item.href}
                                className="block text-gray-700 hover:text-shippo hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <div className="px-3 py-2">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}