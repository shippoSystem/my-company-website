/** @type {import('next').NextConfig} */

// ถ้าต้องการใช้ i18n ให้เปิดใช้ข้างล่างนี้
// const { i18n } = require('./next-i18next.config.js');

const nextConfig = {

    reactStrictMode: true,
    // i18n, // เปิดใช้เมื่อมีการตั้งค่า i18n
    images: {
        domains: [], // เพิ่มโดเมนของรูปภาพที่ใช้ถ้ามี
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        path: '/samt-current/_next/image', // ✅ เพิ่มบรรทัดนี้
        unoptimized: true, // จำเป็นสำหรับ static export
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
        });

        return config;
    },

    // ✅ เพิ่ม basePath และ assetPrefix ให้รองรับ Apache + sub-directory
    /* basePath: '/samt-current',
    assetPrefix: '/samt-current', */

    // ✅ สำหรับ static export
    /* output: 'export',
    trailingSlash: true, */ // ช่วยให้ export เป็น folder + index.html
};

module.exports = nextConfig;
