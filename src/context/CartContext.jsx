import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
const [cart, setCart] = useState([]);

function addItem(product, quantity) {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
    const updatedCart = cart.map(item =>
        item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
    setCart(updatedCart);
    } else {
    setCart([...cart, { ...product, quantity }]);
    }
}

function clearCart() {
    setCart([]);
}

return (
    <CartContext.Provider value={{ cart, addItem, clearCart }}>
    {children}
    </CartContext.Provider>
);
}

export function useCart() {
return useContext(CartContext);
}
