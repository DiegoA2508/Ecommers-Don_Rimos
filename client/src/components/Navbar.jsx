'use client'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar(){
    const { cartItems } = useCart();
    const linkClass = "text-brown-800 hover:text-brown-600 transition"
    const totalItems = cartItems.reduce((sum, item) => sum + item.cantidad, 0);

    return (
        <nav className='bg-black shadow py-4 px-6 flex justify-between items-center sticky top-0 z-50'>
            <h1 className='text-2xl font-bold text-brown-800 font-serif'>
                <Link href="/">
                    Don Rimos 🍫
                </Link>
            </h1>

            <div className='flex items-center gap-6'>
                <Link href='/' className={linkClass}>Productos</Link>
                <Link href='/cart' className="relative">
                    <ShoppingCart size={28} className='text-brown-800' />
                    {cartItems.length > 0 && (
                        <span className='absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full'>
                            {totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
}