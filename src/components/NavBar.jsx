import { Link } from 'react-router-dom';
import darkIcon from '../assets/icons/dark-mode.svg';
import lightIcon from '../assets/icons/light-mode.svg';
import homeIcon from '../assets/icons/home.svg';
import CartWidget from './CartWidget';

export default function NavBar({ title, currentTheme, onChangeTheme }) {
const classNameInvert = `w-10 h-10 ${currentTheme === "dark" ? "invert" : ""}`;

return (
    <div className="bg-base-100 flex items-center justify-between px-4 area-header border-b-2 border-b-base-300 shadow-md">
    
      {/* Brand que lleva al home */}
    <Link to='/' className="text-2xl font-bold">
        {title}
    </Link>

    <div className="flex items-center space-x-4">
        
        {/* Ícono de home que también lleva a '/' */}
        <Link to='/'>
        <img src={homeIcon} alt="Home" className={classNameInvert} />
        </Link>

        {/* Categorías del NavBar */}
        <Link to='/category/zapatillas' className='btn btn-sm'>Zapatillas</Link>
        <Link to='/category/remeras' className='btn btn-sm'>Remeras</Link>
        <Link to='/category/accesorios' className='btn btn-sm'>Accesorios</Link>

        {/* Carrito */}
        <CartWidget badgeAmount={5} theme={currentTheme} />

        {/* Botón para cambiar tema */}
        <button className='btn btn-circle p-2' onClick={onChangeTheme}>
        {
            currentTheme === "dark"
            ? <img src={lightIcon} alt="Light Mode" className={classNameInvert} />
            : <img src={darkIcon} alt="Dark Mode" className={classNameInvert} />
        }
        </button>
    </div>
    </div>
);
}
