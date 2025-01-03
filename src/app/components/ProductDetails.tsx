'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../contexts/CartContext'

type Product = {
  id: number
  name: string
  price: number
  image: string
  color: string
}

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart, addToWishlist, wishlist } = useCart()

  return (
    <>
      <Link href="/products" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Products</Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-2xl text-gray-600 mb-4">${product.price}</p>
          <p className="text-gray-500 mb-4">Color: {product.color}</p>
          <p className="mb-4">This beautiful {product.name.toLowerCase()} will be a perfect addition to your home. Its {product.color.toLowerCase()} color complements various interior styles, and the high-quality materials ensure durability and comfort.</p>
          <div className="flex space-x-4">
            <button
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product.id)}
              className={`px-6 py-3 rounded-lg transition-colors ${
                wishlist.includes(product.id)
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {wishlist.includes(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

