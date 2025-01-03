'use client'

import Link from 'next/link'
import { useCart } from '../contexts/CartContext'

export default function Header() {
  const { cart, wishlist } = useCart()

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Furniture Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
            <li><Link href="#" className="hover:text-gray-300">About</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Contact</Link></li>
            <li><Link href="/cart" className="hover:text-gray-300">Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</Link></li>
            <li><Link href="/wishlist" className="hover:text-gray-300">Wishlist ({wishlist.length})</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

