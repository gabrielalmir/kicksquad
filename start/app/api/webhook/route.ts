import { NextResponse } from "next/server"

// This would be connected to a database in a real application
let currentPrice = 1.03
const purchases: any[] = []
const cards = [
  { id: 1, name: "Mia Rodriguez", position: "Forward", rating: 92, rarity: "Legendary" },
  { id: 2, name: "Sofia Chen", position: "Midfielder", rating: 88, rarity: "Epic" },
  { id: 3, name: "Leila Patel", position: "Defender", rating: 85, rarity: "Rare" },
  // Add more cards here
]

export async function POST(request: Request) {
  try {
    // In a real app, this would verify the Stripe webhook signature
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    // const signature = headers().get('stripe-signature')
    // const body = await request.text()

    // let event
    // try {
    //   event = stripe.webhooks.constructEvent(
    //     body,
    //     signature,
    //     process.env.STRIPE_WEBHOOK_SECRET
    //   )
    // } catch (err) {
    //   return NextResponse.json({ error: `Webhook signature verification failed.` }, { status: 400 })
    // }

    // For demo purposes, we'll just simulate a successful payment
    const event = {
      type: "checkout.session.completed",
      data: {
        object: {
          id: `demo_session_${Date.now()}`,
          customer_details: {
            email: "user@example.com",
            name: "Demo User",
          },
          amount_total: Math.round(currentPrice * 100),
        },
      },
    }

    // Handle the event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object

      // Assign a random card to the user
      const randomCard = cards[Math.floor(Math.random() * cards.length)]

      // Record the purchase
      const purchase = {
        id: purchases.length + 1,
        sessionId: session.id,
        email: session.customer_details.email,
        name: session.customer_details.name,
        price: currentPrice,
        card: randomCard,
        timestamp: new Date(),
      }

      purchases.unshift(purchase)

      // Increase the price for the next purchase
      currentPrice = Number.parseFloat((currentPrice + 0.01).toFixed(2))

      // In a real app, you would save this to a database
      console.log("Purchase recorded:", purchase)
      console.log("New price:", currentPrice)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error handling webhook:", error)
    return NextResponse.json({ error: "An error occurred while handling the webhook." }, { status: 500 })
  }
}

