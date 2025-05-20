// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs/promises');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// สำหรับ form-data
const upload = multer();

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

// Helper function สำหรับ path ของไฟล์
const getPublicPath = (filePath) => {
    return `/samt-current${filePath}`;
};

// 1. API route สำหรับฟอร์มติดต่อ
app.post('/api/contact', upload.none(), async (req, res) => {
    try {
        // รับข้อมูลจาก form
        const { name, phone, service, email, message } = req.body;

        // ตรวจสอบข้อมูลที่จำเป็น
        if (!name || !phone || !email) {
            return res.status(400).json({
                status: 'error',
                message: 'Please provide all required fields'
            });
        }

        // ตรวจสอบรูปแบบอีเมล
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid email format'
            });
        }

        // กำหนดอีเมลผู้รับตามประเภทบริการ
        let sendMail = 'system1.samt@gmail.com';
        let sendMail2 = '';
        let sendMail3 = '';
        let sendMail4 = '';
        let newService = '';

        if (service === '1') {
            newService = 'Moulds Service';
            sendMail2 = 'sales@samt.co.th';
            sendMail3 = 'sales2@samt.co.th';
        } else if (service === '2') {
            newService = 'Arcana Online';
            sendMail2 = 'interpreter2@samt.co.th';
            sendMail3 = 'info.arcana@samt.co.th';
        } else if (service === '3') {
            newService = 'Cylinder';
            sendMail2 = 'sales@samt.co.th';
            sendMail3 = 'sales2@samt.co.th';
        } else {
            newService = 'Other';
            sendMail2 = 'sales@samt.co.th';
            sendMail3 = 'sales2@samt.co.th';
            sendMail4 = 'info.arcana@samt.co.th';
        }

        // สร้างเนื้อหาอีเมล
        const emailSubject = "SAMT Contact from website";
        const emailContent = `
      <html>
      <head>
          <meta charset='UTF-8'>
          <title></title>
      </head>
      <body>
          <h1>New contact From, ${name}</h1>
          <p>Service: ${newService}</p>
          <p>Phone number: ${phone}</p>
          <p>E-mail: ${email}</p>
          <p>Message: ${message}</p>
      </body>
      </html>
    `;

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

        // กำหนดผู้รับอีเมลและกรองอีเมลที่ว่างออก
        const recipients = [sendMail, sendMail2, sendMail3, sendMail4].filter(email => email);

        // ส่งอีเมล
        await transporter.sendMail({
            from: '"SHIPPO ASAHI MOULDS (THAILAND) CO.,LTD." <system@samt.co.th>',
            to: recipients.join(','),
            subject: emailSubject,
            html: emailContent
        });

        // บันทึกข้อมูลลงฐานข้อมูล
        const connection = await pool.getConnection();
        try {
            await connection.execute(
                'INSERT INTO contact (c_name, c_phone, c_service, c_email, c_message) VALUES (?, ?, ?, ?, ?)',
                [name, phone, newService, email, message]
            );
        } finally {
            connection.release();
        }

        res.status(200).json({
            status: 'success',
            message: 'New record created successfully'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while processing your request'
        });
    }
});

// 2. API route สำหรับขอเอกสาร
app.post('/api/documentReq', async (req, res) => {
    try {
        // รับข้อมูลจาก form
        const {
            customerType,
            companyName,
            firstName,
            lastName,
            phone,
            email,
            agree
        } = req.body;

        // ตรวจสอบข้อมูลที่จำเป็น
        if (!firstName || !lastName || !phone || !email || !agree) {
            return res.status(400).json({
                status: 'error',
                message: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน'
            });
        }

        // ตรวจสอบรูปแบบอีเมล
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                status: 'error',
                message: 'รูปแบบอีเมลไม่ถูกต้อง'
            });
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

        res.status(200).json({
            status: 'success',
            message: 'บันทึกคำขอเอกสารเรียบร้อยแล้ว'
        });

    } catch (error) {
        console.error('Error processing document request:', error);
        res.status(500).json({
            status: 'error',
            message: 'เกิดข้อผิดพลาดในการดำเนินการ',
            error: error.message
        });
    }
});

// 3. API route สำหรับข้อมูลงาน
app.get('/api/jobs', async (req, res) => {
    try {
        // รับค่า type และทำการ trim เพื่อกำจัดช่องว่างทั้งหมด
        const jobType = (req.query.type || 'all').trim();

        const connection = await pool.getConnection();
        let results;

        try {
            // สร้าง query โดยไม่มีเงื่อนไข j_status
            let query = 'SELECT * FROM jobs WHERE j_status = 1';
            let params = [];

            // เพิ่มเงื่อนไข job type ถ้ามีการระบุ
            if (jobType !== 'all') {
                query += ' AND TRIM(j_type) = ?';  // ใช้ TRIM ในฝั่ง SQL ด้วย
                params.push(jobType);
            }

            // เพิ่มการเรียงลำดับตามวันที่ (ล่าสุดก่อน)
            query += ' ORDER BY j_add DESC';

            console.log('Query:', query, 'Params:', params);

            // ดำเนินการ query
            [results] = await connection.execute(query, params);
            console.log(`Found ${results.length} jobs`);
        } finally {
            connection.release();
        }

        res.status(200).json({
            status: 'success',
            data: results
        });

    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching job listings',
            error: error.message
        });
    }
});

// เริ่ม server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});