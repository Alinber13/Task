import React from 'react';
    import { Link } from 'react-router-dom';

    function Navbar() {
      return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex flex-row justify-between items-center">
            <div>
              <Link to="/" className="text-white text-2xl font-bold">Taskly</Link>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/my-tasks" className="text-white hover:text-gray-300">Mes tâches</Link>
                </li>
                <li>
                  <Link to="/my-projects" className="text-white hover:text-gray-300">Mes projets</Link>
                </li>
                <li>
                  <Link to="/profile" className="text-white hover:text-gray-300">Profil</Link>
                </li>
                <li>
                  <Link to="/settings" className="text-white hover:text-gray-300">Paramètres</Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-gray-300">À propos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }

    export default Navbar;
