import Header from '../components/Header'
import Footer from '../components/Footer'
import WishlistContents from '../components/WishlistContents'

export default function Wishlist() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Your Wishlist</h2>
        <WishlistContents />
      </main>
      <Footer />
    </div>
  )
}

