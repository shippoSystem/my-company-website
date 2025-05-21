/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.yourcompany.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    // สำหรับเว็บไซต์หลายภาษา
    alternateRefs: [
        {
            href: 'https://www.yourcompany.com',
            hreflang: 'th',
        },
        {
            href: 'https://www.yourcompany.com/en',
            hreflang: 'en',
        },
        {
            href: 'https://www.yourcompany.com/zh',
            hreflang: 'zh',
        },
    ],
};