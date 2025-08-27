

// src/components/layout/Navbar.jsx
import { useState } from 'react'; //useState: Hook para manejar el estado del componente
import { Menu, X } from 'lucide-react'; // Son íconos importados desde la librería lucide-react
import '../index.css'; // Importa los estilos de Tailwind CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar si el menú móvil está abierto o cerrado

  const toggleMenu = () => setIsOpen(!isOpen); // funcion que Alterna el estado del menú móvil entre abierto y cerrado

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nombre */}
        <img src="../src/assets/react.svg" className='h-12' alt="Logo Tacos Don Sergio" />
        <h1 className="text-2xl font-bold text-red-700">Carniceria Picazo</h1>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-green-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Enlaces grandes */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Acerca</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Catalogo</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Contacto</a></li>
        </ul>
      </div>

      {/* Menú móvil (desplegable) */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-inner px-4 pb-4 animate-fade-in-down">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><a href="#" onClick={toggleMenu} className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" onClick={toggleMenu} className="hover:text-green-600 transition">Acerca</a></li>
            <li><a href="#" onClick={toggleMenu} className="hover:text-green-600 transition">Catalogo</a></li>
            <li><a href="#" onClick={toggleMenu} className="hover:text-green-600 transition">Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
