"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

// Mock data for recent purchases
const mockPurchases = [
  { id: 1, playerName: "Player One", price: 1.02, image: "/logo.png?height=60&width=60" },
  { id: 2, playerName: "Player Two", price: 1.01, image: "/bg-1.png?height=60&width=60" },
  { id: 3, playerName: "Player Three", price: 1.0, image: "/bg-2.png?height=60&width=60" },
]

export default function RecentPurchases() {
  const [purchases, setPurchases] = useState(mockPurchases)

  // In a real app, you would fetch recent purchases from the API
  useEffect(() => {
    // Simulating API call to get recent purchases
    const fetchRecentPurchases = async () => {
      // Replace with actual API call
      // const response = await fetch('/api/recent-purchases')
      // const data = await response.json()
      // setPurchases(data)
    }

    fetchRecentPurchases()
  }, [])

  return (
    <div className="bg-zinc-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recent Purchases</h2>
        <Link href="/marketplace" className="text-pink-500 hover:text-pink-400 text-sm">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {purchases.map((purchase) => (
          <div key={purchase.id} className="flex items-center justify-between p-3 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full bg-pink-600">
                <Image
                  src={purchase.image || "/placeholder.svg"}
                  alt={purchase.playerName}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{purchase.playerName}</h3>
                <p className="text-sm text-gray-400">Purchased for ${purchase.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link href="/marketplace" className="text-pink-500 hover:text-pink-400 text-sm">
          Browse Marketplace
        </Link>
      </div>
    </div>
  )
}

