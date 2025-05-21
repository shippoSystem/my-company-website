// /app/api/documentReq/route.js
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs/promises';
import { getPublicPath } from '@/utils/paths';

// สร้าง MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function POST(request) {
    try {
        // รับข้อมูลจาก form
        const formData = await request.json();
        const {
            customerType,
            companyName,
            firstName,
            lastName,
            phone,
            email,
            agree
        } = formData;

        // ตรวจสอบข้อมูลที่จำเป็น
        if (!firstName || !lastName || !phone || !email || !agree) {
            return Response.json({
                status: 'error',
                message: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน'
            }, { status: 400 });
        }

        // ตรวจสอบรูปแบบอีเมล
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return Response.json({
                status: 'error',
                message: 'รูปแบบอีเมลไม่ถูกต้อง'
            }, { status: 400 });
        }

        // รวมชื่อและนามสกุล
        const fullName = `${firstName} ${lastName}`;

        // เตรียมข้อความสำหรับเก็บในฐานข้อมูล
        const message = `ประเภทลูกค้า: ${customerType || 'ไม่ระบุ'}`;

        // สร้างเนื้อหาอีเมล
        const emailSubject = "SAMT - Document Request";
        const emailContent = `
      <html>
      <head>
        <meta charset='UTF-8'>
        <title>Document Request</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #003471; }
          .details { background-color: #f5f5f5; padding: 15px; border-radius: 5px; }
          .footer { margin-top: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>คำขอเอกสาร</h1>
          <div class="details">
            <p><strong>ชื่อ-นามสกุล:</strong> ${fullName}</p>
            <p><strong>ประเภทลูกค้า:</strong> ${customerType || 'ไม่ระบุ'}</p>
            <p><strong>บริษัท:</strong> ${companyName || 'ไม่ระบุ'}</p>
            <p><strong>เบอร์โทรศัพท์:</strong> ${phone}</p>
            <p><strong>อีเมล:</strong> ${email}</p>
          </div>
          <div class="footer">
            <p>ขอบคุณที่สนใจในบริการของเรา</p>
            <p>SHIPPO ASAHI MOULDS (THAILAND) CO.,LTD.</p>
          </div>
        </div>
      </body>
      </html>
    `;

        // กำหนดผู้รับอีเมล
        const recipients = [
            'system1.samt@gmail.com',
            'system@samt.co.th'
        ].filter(email => email);

        // หาเส้นทางไฟล์แบบเต็ม
        const projectRoot = process.cwd(); // ได้ path ของ root directory ของโปรเจ็ค
        const filePath = path.join(projectRoot, 'public', 'files', 'SAMT BROCHURE.pdf');

        // ถ้ามีการใช้งานในเว็บ URL จะเป็น
        const publicUrl = getPublicPath('/files/SAMT BROCHURE.pdf');
        console.log('URL สำหรับการเข้าถึงไฟล์บนเว็บ:', publicUrl);

        // ตรวจสอบว่าไฟล์มีอยู่จริงหรือไม่
        try {
            await fs.access(filePath);
            console.log('เอกสารพร้อมส่ง:', filePath);
        } catch (error) {
            console.error('ไม่พบเอกสาร:', filePath);
            // ยังคงดำเนินการต่อแม้ไม่พบเอกสาร
        }

        // ตั้งค่า Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'mailawn.thaicloudsolutions.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // เตรียม attachments
        const attachments = [];
        try {
            await fs.access(filePath);
            attachments.push({
                filename: 'SAMT BROCHURE.pdf',
                path: filePath
            });
        } catch (error) {
            console.warn('ไม่สามารถแนบเอกสารได้:', error.message);
        }

        // ส่งอีเมล
        await transporter.sendMail({
            from: '"SHIPPO ASAHI MOULDS (THAILAND) CO.,LTD." <system@samt.co.th>',
            to: recipients.join(','),
            cc: email, // ส่งสำเนาให้ผู้ขอเอกสารด้วย
            subject: emailSubject,
            html: emailContent,
            attachments: attachments
        });

        // บันทึกข้อมูลลงฐานข้อมูล
        const connection = await pool.getConnection();
        try {
            await connection.execute(
                'INSERT INTO contact (c_name, c_phone, c_comp_name, c_service, c_email, c_message, c_status) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [fullName, phone, companyName || '', 'เอกสาร', email, message, '1']
            );
        } finally {
            connection.release();
        }

        return Response.json({
            status: 'success',
            message: 'บันทึกคำขอเอกสารเรียบร้อยแล้ว'
        });

    } catch (error) {
        console.error('Error processing document request:', error);
        return Response.json({
            status: 'error',
            message: 'เกิดข้อผิดพลาดในการดำเนินการ',
            error: error.message
        }, { status: 500 });
    }
}