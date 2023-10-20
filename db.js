import pg from 'pg';
const { Pool } = pg;
let localPoolConfig = {
    user: 'postgres',
    password: '123456',
    port: '5432',
    database: 'authak'
};

const poolConfig = process.env.DATABASE_URL ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: falsae } } : localPoolConfig;

const pool = new Pool(poolConfig);
export default pool;