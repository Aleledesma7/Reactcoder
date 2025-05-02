import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ItemDetailContainer() {
const { itemId } = useParams();
const [item, setItem] = useState(null);

useEffect(() => {
    const allProducts = [
    { id: '1', name: 'Zapatilla Nike', category: 'zapatillas', description: 'Zapatilla deportiva cómoda y liviana.' },
    { id: '2', name: 'Remera Adidas', category: 'remeras', description: 'Remera de algodón con logo clásico.' },
    { id: '3', name: 'Gorra Puma', category: 'accesorios', description: 'Gorra ajustable con visera curva.' },
    { id: '4', name: 'Zapatilla Puma', category: 'zapatillas', description: 'Zapatilla moderna con excelente agarre.' },
    { id: '5', name: 'Remera Nike', category: 'remeras', description: 'Remera técnica ideal para entrenamiento.' }
    ];

    // Simula llamada acincronica
    setTimeout(() => {
    const found = allProducts.find(prod => prod.id === itemId);
    setItem(found || null);
    }, 300);
}, [itemId]);

if (!item) return <p className="p-4">Cargando producto...</p>;

return (
    <main className="area-main p-4 flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
    <p className="text-lg text-center">{item.description}</p>
    <p className="text-sm mt-2 text-gray-500">Categoría: {item.category}</p>
    </main>
);
}

