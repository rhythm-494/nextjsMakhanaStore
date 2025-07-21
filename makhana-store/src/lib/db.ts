// src/lib/db.ts
import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const connectionString = process.env.DATABASE_URL;
console.log(connectionString);

if (!connectionString) {
  throw new Error('❌ DATABASE_URL is not set');
}

// Use the Aiven CA certificate
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: true, // recommended for production
    ca: fs.readFileSync(path.join(process.cwd(), 'certificates', 'ca.pem')).toString(),
  },
});

export default pool;
