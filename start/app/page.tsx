import PriceDisplay from "@/components/price-display"
import PurchaseButton from "@/components/purchase-button"
import RecentPurchases from "@/components/recent-purchases"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden rounded-full bg-pink-600">
            <Image
              src="/logo.png?height=40&width=40"
              alt="KickSquad Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold">
            Kick<span className="text-pink-300">Squad</span>
          </span>
        </Link>
        <Button asChild variant="default" className="bg-pink-600 hover:bg-pink-700">
          <Link href="/collection">View Collection →</Link>
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hero Image */}
          <div className="relative h-full overflow-hidden rounded">
            <Image
              src="/bg-1.png"
              alt="Soccer Player"
              fill
              className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-200 ease-out"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-6">
            <h1 className="text-5xl font-bold mb-4 text-pink-500">Collect KickSquad!</h1>
            <p className="text-xl mb-2">
              Join the excitement! Each unique player card purchase increases the price by $0.01.
            </p>
            <p className="text-lg mb-6">Get featured on the homepage and showcase your collection! ✨</p>

            {/* Price Display */}
            <div className="bg-zinc-800 rounded-lg p-6 mb-6">
              <PriceDisplay />
              <PurchaseButton />
            </div>

            {/* Recent Purchases */}
            <RecentPurchases />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto p-4 mt-12 text-center border-t border-gray-800">
        <p>© 2025 KickSquad. All rights reserved. ⚽ ✨</p>
      </footer>
    </div>
  )
}

