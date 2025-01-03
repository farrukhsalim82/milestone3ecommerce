import Header from '../components/Header'
import Footer from '../components/Footer'
import CartContents from '../components/CartContents'

export default function Cart() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        <CartContents />
      </main>
      <Footer />
    </div>
  )
}

