'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { getCart, addToCart as add, removeFromCart as remove } from "@/utils/cart"

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(getCart());
    }, []);

    const addToCart = (producto) => {
        add(producto);
        setCartItems(getCart());
    };

    const removeFromCart = (id) => {
        remove(id);
        setCartItems(getCart());
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}