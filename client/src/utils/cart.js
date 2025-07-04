export function getCart(){
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
}

export function addToCart(product){
    if (typeof window === 'undefined') return;
    const cart = getCart();
    cart.push(product);
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function clearCart(){
    if (typeof window === 'undefined') return;
    const cart = getCart().filter(p => p.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(productId){
    if (typeof window === 'undefined') return;
    const cart = getCart().filter(p => p.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}