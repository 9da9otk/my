import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-teal-700">
              سعد
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-teal-700 transition-colors">الرئيسية</Link>
            <Link to="/courses" className="text-gray-700 hover:text-teal-700 transition-colors">الدورات</Link>
            <a href="#contact" className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-colors">تواصل معي</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-teal-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-teal-700">الرئيسية</Link>
            <Link to="/courses" className="block px-3 py-2 text-gray-700 hover:text-teal-700">الدورات</Link>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-teal-700">تواصل معي</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;