import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import useApp from './hooks/App.hook'

function App() {
  const { theme, onChangeTheme } = useApp();

  return (
    <div data-theme={theme} className='h-screen w-screen grid-template'>
      <NavBar title="Proyecto" currentTheme={theme} onChangeTheme={onChangeTheme} />
      <ItemListContainer greeting="Bienvenido a la tienda" />
      {/* Footer */}
      <footer className='area-footer bg-base-100 border-t-2 border-t-base-300 shadow-md flex items-center justify-center'>
        <p className='text-sm'>© 2025 Ale. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
