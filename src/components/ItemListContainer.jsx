import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
    const { categoryId } = useParams(); // lee el parámetro de la URL
    const [productos, setProductos] = useState([]);

  // Simulación de async-mock
    useEffect(() => {
    const allProducts = [
    { id: '1', name: 'Zapatilla Nike', category: 'zapatillas' },
    { id: '2', name: 'Remera Adidas', category: 'remeras' },
    { id: '3', name: 'Gorra Puma', category: 'accesorios' },
    { id: '4', name: 'Zapatilla Puma', category: 'zapatillas' },
    { id: '5', name: 'Remera Nike', category: 'remeras' }
    ];

    // Simulamos carga con setTimeout
    setTimeout(() => {
    const filtered = categoryId
        ? allProducts.filter(p => p.category === categoryId)
        : allProducts;
    setProductos(filtered);
    }, 300);
}, [categoryId]);

return (
    <main className="area-main p-4">
    <h1 className="text-4xl font-bold">{greeting || 'Catálogo'}</h1>
    <ul className="mt-4 space-y-2">
        {productos.map(prod => (
        <li key={prod.id} className='p-4 bg-base-100 shadow rounded'>
            <Link to={`/item/${prod.id}`} className="text-blue-500 hover:underline">
            {prod.name}
            </Link>
        </li>
        ))}
        {productos.length === 0 && (
        <p className="mt-4 text-center text-sm text-gray-500">No hay productos en esta categoría.</p>
        )}
    </ul>
    </main>
);
}

