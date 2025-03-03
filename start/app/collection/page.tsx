import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Mock data for user's collection
const mockCollection = [
  {
    id: 1,
    name: "Mia Rodriguez",
    position: "Forward",
    rating: 92,
    rarity: "Legendary",
    image: "/logo.png?height=300&width=200",
  },
  {
    id: 2,
    name: "Sofia Chen",
    position: "Midfielder",
    rating: 88,
    rarity: "Epic",
    image: "/bg-1.png?height=300&width=200",
  },
  {
    id: 3,
    name: "Leila Patel",
    position: "Defender",
    rating: 85,
    rarity: "Rare",
    image: "/bg-2.png?height=300&width=200",
  },
]

export default function CollectionPage() {
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
            Kick<span className="text-pink-500">Squad</span>
          </span>
        </Link>
        <Button asChild variant="outline" className="text-black">
          <Link href="/">Back to Home</Link>
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-pink-500">Your Collection</h1>

        {mockCollection.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockCollection.map((card) => (
              <div
                key={card.id}
                className="bg-zinc-800 rounded-lg overflow-hidden border border-gray-800 hover:border-pink-500 transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image src={card.image || "/placeholder.svg"} alt={card.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-1">{card.name}</h2>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">{card.position}</span>
                    <span className="text-yellow-500">{card.rating} OVR</span>
                  </div>
                  <div className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-pink-900 text-pink-300">
                    {card.rarity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">No cards in your collection yet</h2>
            <p className="text-gray-400 mb-6">Purchase your first card to start your collection!</p>
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link href="/">Get Your First Card</Link>
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="container mx-auto p-4 mt-12 text-center border-t border-gray-800">
        <p>© 2025 KickSquad. All rights reserved. ⚽ ✨</p>
      </footer>
    </div>
  )
}

