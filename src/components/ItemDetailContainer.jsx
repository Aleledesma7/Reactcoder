import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products } from '../mocks/products';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
const { itemId } = useParams();
const [item, setItem] = useState(null);

useEffect(() => {
    // Simula llamada asincrónica
    setTimeout(() => {
    const found = products.find(prod => prod.id === itemId);
    setItem(found || null);
    }, 300);
}, [itemId]);

if (!item) return <p className="p-4">Cargando producto...</p>;

return <ItemDetail product={item} />;
}

