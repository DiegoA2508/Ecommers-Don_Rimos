export function getCart(){
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
}

export function addToCart(product){
    const cart = getCart();
    const index = cart.findIndex(item => item.id === product.id);

    if (index !== -1) {
        cart[index].cantidad += 1;
    } else {
        cart.push({ ...product, cantidad: 1 });
    }

    localStorage.setItem('cart',JSON.stringify(cart));
}

export function clearCart(){
    if (typeof window === 'undefined') return;
    const cart = getCart().filter(p => p.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(id){
    const cart = getCart();
    const index = cart.findIndex(item => item.id === id);

    if ( index !== -1) {
        if(cart[index].cantidad > 1){
            cart[index].cantidad -= 1;
        } else {
            cart.splice(index, 1);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}