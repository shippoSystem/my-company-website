// /app/api/contact/route.js
import nodemailer from 'nodemailer';
import mysql from 'mysql2/promise';

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
        const formData = await request.formData();
        const name = formData.get('name');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const email = formData.get('email');
        const message = formData.get('message');

        // ตรวจสอบข้อมูลที่จำเป็น
        if (!name || !phone || !email) {
            return Response.json({
                status: 'error',
                message: 'Please provide all required fields'
            }, { status: 400 });
        }

        // ตรวจสอบรูปแบบอีเมล
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return Response.json({
                status: 'error',
                message: 'Invalid email format'
            }, { status: 400 });
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
                user: process.env.EMAIL_USER || 'system@samt.co.th',
                pass: process.env.EMAIL_PASSWORD || 'Shippo@2025!'
            },
            tls: {
                rejectUnauthorized: false // อาจจำเป็นต้องใช้สำหรับบางเซิร์ฟเวอร์
            }
        });

        // กำหนดผู้รับอีเมลและกรองอีเมลที่ว่างออก
        const recipients = [sendMail, sendMail2, sendMail3, sendMail4].filter(email => email);

        // ส่งอีเมล
        await transporter.sendMail({
            from: '"SHIPPO ASAHI MOULDS (THAILAND) CO.,LTD." <system@samt.co.th>',
            to: recipients.join(','),
            subject: emailSubject,
            html: emailContent,
            // attachments: [
            //   {
            //     filename: 'SAMT BROCHURE.pdf',
            //     path: './public/files/SAMT BROCHURE.pdf'
            //   }
            // ]
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

        return Response.json({
            status: 'success',
            message: 'New record created successfully'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return Response.json({
            status: 'error',
            message: 'An error occurred while processing your request'
        }, { status: 500 });
    }
}