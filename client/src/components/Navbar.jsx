'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar(){
    const pathname = usePathname()

    const linkClass = (path) =>
        `px-4 py-2 rounded hover:bg-brown-800 hover:text-white transition ${
            pathname === path ? 'bg-brown-700 text-white' : 'text-brown-800'
        }`

    return (
        <nav className='bg-black shadow p-4 flex justify-between items-center sticky top-0 z-50'>
            <h1 className='text-2xl font-bold '>
                <Link href="/">
                    Don Rimos 🍫
                </Link>
            </h1>

            <div className='space-x-4'>
                <Link href='/' className={linkClass('/')}>Productos</Link>
                <Link href='/cart' className={linkClass('/cart')}>Carrito</Link>
                <Link href='/admin' className={linkClass('/admin')}>Admin</Link>
                <Link href='/contacto' className={linkClass('/contacto')}>Contacto</Link>
            </div>
        </nav>
    )
}