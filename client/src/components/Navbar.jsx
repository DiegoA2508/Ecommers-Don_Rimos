'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, Search, Store } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'


export default function Navbar(){
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [search, setSearch] = useState('');
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.cantidad, 0);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()){
      router.push(`/resultado?q=${encodeURIComponent(search)}`);
      setMenuAbierto(false);
    }
  };

  const categorias = [
    'Chocolate en Pastilla',
    'Chocolate en Polvo',
    'Chocolatina',
    'Vaselina de cacao',
    'Nibs'
  ];

  return (
    <header className="border-b border-orange-500 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="text-2xl font-bold text-orange-500 italic">Don Rimos 🍫</span>
          </Link>
          <span className="text-black border px-2 py-1 rounded text-xs hidden sm:inline">Premium Partner</span>
        </div>

        {/* Busqueda y Categorías (escritorio) */}
        <div className="hidden md:flex flex-col items-center flex-1 mx-8">
          <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-2xl">
            <Search className="w-4 h-4 text-orange-500"/>
            <input 
              type="text"
              placeholder ="¿Qué estás buscando?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-orange-500 outline-none ml-2 w-full"
            />
          </form>
          <nav className="flex gap-6 justify-center py-2 text-sm text-gray-700 font-medium">
            {categorias.map((item) => (
              <span key={item} className="hover:text-orange-600 cursor-pointer">
                {item}
              </span>
            ))}
          </nav>
        </div>

        {/* Opciones y carrito */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-brown-800" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Menú Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuAbierto(!menuAbierto)}>
            {menuAbierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Mobile Expandido */}
      {menuAbierto && (
        <div className="md:hidden px-4 py-2 bg-white text-sm text-gray-700">
          <div className="mb-3">
            <div className="flex items-center gap-2 border p-2 rounded">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>
          <ul className="space-y-2">
            {categorias.map((item)=> (
              <li key={item} className="hover:text-orange-600 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Store className="w-4 h-4" />
              <span>Selecciona tu tienda</span>
            </div>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-brown-800" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
