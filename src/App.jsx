import Cart from './components/Cart'
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import useApp from './hooks/App.hook';
import Checkout from './components/Checkout';
import Brief from './components/Brief';

function App() {
  const { theme, onChangeTheme } = useApp();

  console.log("Tema actual:", theme);

  return (
    <div data-theme={theme} className='h-screen w-screen grid-template'>
      <NavBar title="Proyecto React Ale" currentTheme={theme} onChangeTheme={onChangeTheme} />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/brief" element={<Brief />} />
      </Routes>

      <footer className='area-footer bg-base-100 border-t-2 border-t-base-300 shadow-md flex items-center justify-center'>
        <p className='text-sm'>© 2025 Ale. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
export default App;

