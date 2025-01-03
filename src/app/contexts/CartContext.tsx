'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  wishlist: number[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  addToWishlist: (id: number) => void
  removeFromWishlist: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<number[]>([])

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const addToWishlist = (id: number) => {
    setWishlist(prevWishlist => {
      if (!prevWishlist.includes(id)) {
        return [...prevWishlist, id]
      }
      return prevWishlist
    })
  }

  const removeFromWishlist = (id: number) => {
    setWishlist(prevWishlist => prevWishlist.filter(itemId => itemId !== id))
  }

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

