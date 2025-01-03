import ProductList from '../components/ProductList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { furnitureItems } from '../data'

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <ProductList products={furnitureItems} />
      </main>
      <Footer />
    </div>
  )
}

