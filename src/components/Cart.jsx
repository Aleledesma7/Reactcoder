import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
const { cart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

if (cart.length === 0) {
    return <p className="p-4 text-center">El carrito está vacío.</p>;
}

return (
    <main className="area-main p-4">
    <h1 className="text-2xl font-bold mb-4">Carrito de compras</h1>

    <button onClick={clearCart} className="btn btn-error mb-4">
        Vaciar carrito
    </button>

    <ul className="space-y-4">
        {cart.map(item => (
        <li key={item.id} className="p-4 bg-base-100 rounded shadow flex gap-4 items-center">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                <p className="text-sm text-gray-500">Precio unitario: ${item.price}</p>
            </div>
                <p className="text-right font-bold">${item.price * item.quantity}</p>
        </li>
        ))}
    </ul>
        <div className="mt-6 text-right text-xl font-bold">
        Total: ${total}
        </div>
        <div className="mt-4 text-right">
        <Link to="/checkout" className="btn btn-success">
        Finalizar compra
        </Link>
        </div>
    </main>
);
}

