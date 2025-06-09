import { useLocation } from 'react-router-dom';

export default function Brief() {
const { state: order } = useLocation();

if (!order) return <p className="p-4">No hay orden para mostrar.</p>;

return (
    <main className="area-main p-4 max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Resumen de tu compra</h1>
    <p><strong>Nombre:</strong> {order.buyer.name}</p>
    <p><strong>Email:</strong> {order.buyer.email}</p>
    <p><strong>Teléfono:</strong> {order.buyer.phone}</p>
    <p><strong>Fecha:</strong> {order.date}</p>
    <h2 className="text-xl font-semibold mt-4">Productos:</h2>
    <ul className="mt-2 space-y-2">
        {order.items.map(item => (
        <li key={item.id} className="bg-base-100 p-2 rounded shadow">
            {item.name} x{item.quantity} — ${item.price * item.quantity}
        </li>
        ))}
    </ul>
    <p className="mt-4 font-bold text-lg">Total: ${order.total}</p>
    </main>
);
}
