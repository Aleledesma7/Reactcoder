import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
const { cart, clearCart } = useCart();
const navigate = useNavigate();

const [form, setForm] = useState({ name: '', email: '', phone: '' });

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    // Validación s
    if (!form.name || !form.email || !form.phone) {
    alert('Por favor completá todos los campos');
    return;
    }

    // Simulamos generación de orden
    const order = {
    buyer: form,
    items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    date: new Date().toLocaleString()
    };

    console.log('ORDEN GENERADA:', order); 

    clearCart(); 
    navigate('/brief', { state: order });
setTimeout(() => {
clearCart();
}, 100); 
};

return (
    <main className="area-main p-4 max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">Finalizar compra</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
        <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        className="input input-bordered w-full"
        />
        <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="input input-bordered w-full"
        />
        <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleChange}
        className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
        Confirmar pedido
        </button>
    </form>
    </main>
);
}
