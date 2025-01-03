'use client'

import { useCart } from '../contexts/CartContext'

export default function CartContents() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>
  }

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price} x {item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-8">
        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
        <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

