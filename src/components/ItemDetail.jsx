import { useCart } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';

export default function ItemDetail({ product }) {
  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    alert(`Agregaste ${quantity} ${product.name} al carrito`);
  };

  return (
    <main className="area-main p-4 flex flex-col items-center bg-base-100 text-base-content max-w-md mx-auto rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2 text-center">{product.name}</h2>
      <p className="mb-2 text-center">{product.description}</p>
      <p className="text-lg font-semibold mb-1">Precio: ${product.price}</p>
      <p className="text-sm mb-4">Stock: {product.stock}</p>
      <ItemQuantitySelector stock={product.stock} onAdd={handleAdd} />
    </main>
  );
}

