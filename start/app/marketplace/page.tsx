import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Mock data for marketplace
const mockMarketplace = [
  {
    id: 1,
    name: "Hana Sato",
    position: "Forward",
    rating: 94,
    price: 5.99,
    image: "/bg-1.png?height=300&width=200",
  },
  {
    id: 2,
    name: "Yui Tanaka",
    position: "Midfielder",
    rating: 91,
    price: 4.5,
    image: "/bg-2.png?height=300&width=200",
  },
  {
    id: 3,
    name: "Aoi Suzuki",
    position: "Forward",
    rating: 89,
    price: 3.75,
    image: "/bg-3.png?height=300&width=200",
  },
  {
    id: 4,
    name: "Rin Yamamoto",
    position: "Defender",
    rating: 88,
    price: 3.25,
    image: "/bg-4.png?height=300&width=200",
  },
  {
    id: 5,
    name: "Mio Watanabe",
    position: "Defender",
    rating: 90,
    price: 4.25,
    image: "/bg-5.png?height=300&width=200",
  },
  {
    id: 6,
    name: "Sakura Kobayashi",
    position: "Foward",
    rating: 87,
    price: 3.0,
    image: "/bg-6.png?height=300&width=200",
  },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
            Kick<span className="text-pink-500">Squad</span>
          </span>
        </Link>
        <div className="flex gap-4">
          <Button asChild variant="outline" className="text-black">
            <Link href="/collection">View Collection</Link>
          </Button>
          <Button asChild variant="default" className="bg-pink-600 hover:bg-pink-700">
            <Link href="/">Get Random Card</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-pink-500">Marketplace</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockMarketplace.map((card) => (
            <div
              key={card.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-pink-500 transition-all"
            >
              <div className="relative h-100 overflow-hidden">
                <Image src={card.image || "/placeholder.svg"} alt={card.name} fill className="object-cover object-top" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{card.name}</h2>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">{card.position}</span>
                  <span className="text-yellow-500">{card.rating} OVR</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-pink-500">${card.price.toFixed(2)}</span>
                  <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto p-4 mt-12 text-center border-t border-gray-800">
        <p>© 2025 KickSquad. All rights reserved. ⚽ ✨</p>
      </footer>
    </div>
  )
}

