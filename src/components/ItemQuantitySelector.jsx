import { useState } from 'react';

export default function ItemQuantitySelector({ stock, onAdd }) {
const [count, setCount] = useState(1);
const increase = () => {
    if (count < stock) setCount(count + 1);
};

const decrease = () => {
    if (count > 1) setCount(count - 1);
};

return (
    <div className="flex items-center gap-4">
    <button onClick={decrease} className="btn btn-sm">-</button>
    <span className="text-lg">{count}</span>
    <button onClick={increase} className="btn btn-sm">+</button>
    <button
        onClick={() => onAdd(count)}
        className="btn btn-primary btn-sm ml-4"
    >
        Agregar al carrito
    </button>
    </div>
);
}
