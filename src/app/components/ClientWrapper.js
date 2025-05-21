'use client';
import { useState, useEffect } from 'react';
import CookieConsent from './CookieConsent';

export default function ClientWrapper() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return <CookieConsent />;
}