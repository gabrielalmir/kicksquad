import { NextResponse } from "next/server"

// This would be connected to a database in a real application
const currentPrice = 1.03

export async function GET() {
  return NextResponse.json({ price: currentPrice })
}

