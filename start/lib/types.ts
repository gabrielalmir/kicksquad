export interface Card {
  id: number
  name: string
  position: string
  rating: number
  rarity: "Common" | "Rare" | "Epic" | "Legendary"
  image: string
}

export interface Purchase {
  id: number
  sessionId: string
  email: string
  name: string
  price: number
  card: Card
  timestamp: Date
}

export interface RecentPurchase {
  id: number
  playerName: string
  price: number
  image: string
}

