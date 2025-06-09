import cartIcon from '../assets/icons/cart.svg';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';


export default function CartWidget() {
const { cart } = useCart();
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

return (
<Link to="/cart" className="relative">
    🛒
    {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
        {totalItems}
    </span>
    )}
  </Link>
);
}
