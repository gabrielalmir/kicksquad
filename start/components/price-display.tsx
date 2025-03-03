"use client"

import { useState, useEffect } from "react"

export default function PriceDisplay() {
  const [currentPrice, setCurrentPrice] = useState(1.03)

  // In a real app, you would fetch the current price from the API
  useEffect(() => {
    // Simulating API call to get current price
    const fetchCurrentPrice = async () => {
      // Replace with actual API call
      // const response = await fetch('/api/current-price')
      // const data = await response.json()
      // setCurrentPrice(data.price)
    }

    fetchCurrentPrice()
  }, [])

  const nextPrice = (currentPrice + 0.01).toFixed(2)

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400">Current Price</span>
        <span className="text-green-500 text-sm flex items-center">
          <span className="inline-block bg-green-900 rounded-full p-1 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </span>
          +$0.01 per purchase
        </span>
      </div>
      <div className="flex items-baseline">
        <span className="text-5xl font-bold text-pink-500">${currentPrice.toFixed(2)}</span>
        <span className="ml-4 text-gray-400">Next buyer pays ${nextPrice}</span>
      </div>
    </div>
  )
}

