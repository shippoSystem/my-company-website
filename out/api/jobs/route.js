// /app/api/jobs/route.js
import mysql from 'mysql2/promise';
export const dynamic = "force-static";

// Create MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        // รับค่า type และทำการ trim เพื่อกำจัดช่องว่างทั้งหมด
        const jobType = (searchParams.get('type') || 'all').trim();

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

            // ส่วนของโค้ดสำหรับข้อมูลตัวอย่างที่ถูก comment ไว้...
        } finally {
            connection.release();
        }

        return Response.json({
            status: 'success',
            data: results
        });

    } catch (error) {
        console.error('Error fetching jobs:', error);
        return Response.json({
            status: 'error',
            message: 'An error occurred while fetching job listings',
            error: error.message
        }, { status: 500 });
    }
}