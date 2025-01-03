import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductDetails from '../../components/ProductDetails'
import { furnitureItems } from '../../data'
import { notFound } from 'next/navigation'

export default function Product({ params }: { params: { id: string } }) {
  const product = furnitureItems.find(item => item.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  )
}
