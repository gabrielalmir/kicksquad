import { NextResponse } from "next/server"

// This would be connected to a database in a real application
const purchases = [
  { id: 1, playerName: "Player One", price: 1.02, image: "/placeholder.svg?height=60&width=60" },
  { id: 2, playerName: "Player Two", price: 1.01, image: "/placeholder.svg?height=60&width=60" },
  { id: 3, playerName: "Player Three", price: 1.0, image: "/placeholder.svg?height=60&width=60" },
]

export async function GET() {
  return NextResponse.json(purchases)
}

