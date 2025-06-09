import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../mocks/products';


export default function ItemListContainer({ greeting }) {
    const { categoryId } = useParams(); 
    const [productos, setProductos] = useState([]);

useEffect(() => {
    setTimeout(() => {
    const filtered = categoryId
        ? products.filter(p => p.category === categoryId)
        : products;
    setProductos(filtered);
    }, 300);
}, [categoryId]);

return (
    <main className="area-main p-4">
    <h1 className="text-4xl font-bold">{greeting || 'Catálogo'}</h1>
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map(prod => (
    <li key={prod.id} className="bg-base-100 p-4 rounded-lg shadow hover:shadow-xl transition">
    <Link to={`/item/${prod.id}`}>
        <img src={prod.image} alt={prod.name} className="w-full h-40 object-cover rounded mb-3" />
        <h3 className="font-bold text-lg">{prod.name}</h3>
        <p className="text-sm text-gray-500">${prod.price}</p>
    </Link>
    </li>
))}
    </ul>
</main>
);
}

