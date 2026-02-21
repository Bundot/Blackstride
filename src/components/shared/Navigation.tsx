import React from 'react';
import { ChevronRightIcon, BarChart3Icon, SearchIcon, FlaskConicalIcon } from 'lucide-react';
import { Logo } from './Logo';

interface NavigationProps {
  currentPage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage = 'home' }) => {
  const navItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: null,
      isActive: currentPage === 'home'
    },
    { 
      name: 'Dashboard', 
      href: '/dashboard', 
      icon: BarChart3Icon,
      isActive: currentPage === 'dashboard'
    },
    { 
      name: 'Explorers', 
      href: '/explorers', 
      icon: SearchIcon,
      isActive: currentPage === 'explorers'
    },
    { 
      name: 'Process', 
      href: '/process', 
      icon: null,
      isActive: currentPage === 'process'
    },
    { 
      name: 'Quality & Certification', 
      href: '/quality', 
      icon: FlaskConicalIcon,
      isActive: currentPage === 'quality'
    }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo variant="color" size="md" />
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  item.isActive
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                {item.name}
                {item.isActive && (
                  <ChevronRightIcon className="h-4 w-4 ml-2" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
