import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Welcome to our Furniture Store</h2>
        <p className="mb-4">Discover our wide range of high-quality furniture for your home.</p>
        <Link href="/products" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          View All Products
        </Link>
      </main>
      <Footer />
    </div>
  )
}
