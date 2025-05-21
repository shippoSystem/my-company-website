import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import ClientWrapper from './components/ClientWrapper';
import { getPublicPath } from '@/utils/paths';

const inter = Inter({ subsets: ['latin'] });

// ฟอนต์ไทย Sarabun
const thaiSarabun = localFont({
  src: [
    {
      path: '../../public/fonts/Sarabun-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sarabun-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-thai-sarabun',
});

// ฟอนต์ญี่ปุ่น Noto Sans JP
const jpFont = localFont({
  src: [
    {
      path: '../../public/fonts/NotoSansJP-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NotoSansJP-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-jp',
});

export const metadata = {
  title: 'SAMT | SHIPPO ASAHI MOULDS',
  description: 'ผลิตแม่พิมพ์ฉีดอลูมิเนียม และส่งมอบชิ้นส่วนแม่พิมพ์คุณภาพสูงทั่วโลก',
  icons: {
    icon: getPublicPath('/images/samt_icon.png'),
  },
  keywords: [
    // แบรนด์และบริษัท
    'Shippo Asahi Moulds Thailand',
    'ชิปโป อาซาฮี โมลด์ส',
    'บริษัทผลิตแม่พิมพ์ ไทย-ญี่ปุ่น',
    'โรงงานผลิตแม่พิมพ์ในประเทศไทย',
    'ผู้ผลิตแม่พิมพ์ญี่ปุ่นในไทย',

    // สินค้า / บริการ
    'ผลิตแม่พิมพ์อลูมิเนียม',
    'แม่พิมพ์อลูมิเนียมคุณภาพสูง',
    'แม่พิมพ์ฉีดอลูมิเนียม',
    'precision mold parts',
    'small hole EDM',
    'core pin แม่พิมพ์',
    'mold insert',
    'aluminum die casting mold',
    'แม่พิมพ์ไดคาสติ้ง',

    // กระบวนการ / เทคนิค
    'wire cut EDM',
    'CNC milling mold',
    'EDM แม่พิมพ์',
    'การกลึงแม่พิมพ์',
    'เจาะรูเล็กแม่พิมพ์',
    'machining mold parts',
    'custom mold making',
    'precision machining services',

    // ลูกค้าเป้าหมาย
    'โรงงานผลิตชิ้นส่วน',
    'บริษัทผลิตอะไหล่',
    'บริษัทญี่ปุ่นในไทย',
    'รับผลิตแม่พิมพ์ตามสั่ง',
    'ชิ้นส่วนแม่พิมพ์ส่งออก',
    'แม่พิมพ์อุตสาหกรรมยานยนต์',
    'mold maker for automotive industry',

    // ภาษาอังกฤษทั่วไปที่เกี่ยวข้อง
    'high precision molds',
    'aluminum mold maker thailand',
    'Japanese mold company',
    'custom core pin manufacturer',
    'industrial mold supplier thailand'
  ],
  openGraph: {
    title: 'SHIPPO ASAHI MOULDS (Thailand)',
    description: 'ผลิตและจัดจำหน่ายแม่พิมพ์ฉีดอลูมิเนียมคุณภาพสูง ส่งออกทั่วโลก',
    url: 'https://samt.co.th/',
    siteName: 'SHIPPO ASAHI MOULDS',
    images: [
      {
        url: getPublicPath('/images/samt-company-seo.png'), // แนบภาพขนาด 1200x630
        width: 1200,
        height: 630,
        alt: 'SHIPPO ASAHI MOULDS',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://samt.co.th/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`w-full ${thaiSarabun.variable} ${jpFont.variable}`}>
      <body className={`${inter.className} w-full min-h-screen`}>
        {children}
        <ClientWrapper />
      </body>
    </html>
  );
}