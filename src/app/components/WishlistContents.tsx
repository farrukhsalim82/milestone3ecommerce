'use client'

import Image from 'next/image'
import { useCart } from '../contexts/CartContext'
import { furnitureItems } from '../data'

export default function WishlistContents() {
  const { wishlist, removeFromWishlist, addToCart } = useCart()

  const wishlistItems = furnitureItems.filter(item => wishlist.includes(item.id))

  if (wishlistItems.length === 0) {
    return <p>Your wishlist is empty.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishlistItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64">
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">${item.price}</p>
            <p className="text-gray-500 mb-4">Color: {item.color}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, quantity: 1 })}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

