// สร้างไฟล์ utils/paths.js
export function getPublicPath(path) {
    const basePath = process.env.NODE_ENV === 'production' ? '/samt-current' : '';
    return `${basePath}${path}`;
}