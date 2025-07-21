// src/app/api/products/route.ts

import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM products') // 👈 Make sure this table exists
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('❌ API /products error:', error)
    return NextResponse.json({ error: 'Internal Server Error', details: error }, { status: 500 })
  }
}
