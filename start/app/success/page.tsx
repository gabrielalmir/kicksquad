import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 rounded-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold mb-2">Purchase Successful!</h1>
        <p className="text-gray-400 mb-6">You've successfully purchased a KickSquad player card!</p>

        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <div className="relative h-60 w-full mb-4">
            <Image src="/placeholder.svg?height=240&width=180" alt="Player Card" fill className="object-contain" />
          </div>
          <h2 className="text-xl font-bold mb-1">Mia Rodriguez</h2>
          <div className="flex justify-center gap-4 mb-2">
            <span className="text-gray-400">Forward</span>
            <span className="text-yellow-500">92 OVR</span>
          </div>
          <div className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-pink-900 text-pink-300">
            Legendary
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline" className="flex-1">
            <Link href="/collection">View Collection</Link>
          </Button>
          <Button asChild className="flex-1 bg-pink-600 hover:bg-pink-700">
            <Link href="/">Get Another Card</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

