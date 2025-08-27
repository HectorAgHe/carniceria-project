import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
     <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-600">
              Carniceria Picazo
            </h1>
          </div>

          {/* Menú de navegación */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Inicio
            </Link>
            <Link
              to="/acerca"
              className="text-gray-700 hover:text-red-600 font-medium transition duration-300"
            >
              Acerca de Nosotros
            </Link>
            <Link
              to="/productos"
              className="text-gray-700 hover:text-red-600 font-medium transition duration-300"
            >
              Productos
            </Link>
            <Link
              to="/contacto"
              className="text-gray-700 hover:text-red-600 font-medium transition duration-300"
            >
              Contacto
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-red-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar