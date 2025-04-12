
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Settings, Edit3, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container px-4">
        <nav className="flex h-16 items-center justify-between">
          <div className="logo font-bold text-xl">DREAM COACH</div>
          
          <div className="nav-links hidden md:flex items-center space-x-6">
            <Link
              to="/courses"
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded px-2 py-1 transition-colors duration-200"
            >
              Courses
            </Link>
            <Link
              to="/my-courses"
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded px-2 py-1 transition-colors duration-200"
            >
              My Learning
            </Link>
          </div>
          
          <div className="nav-actions flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="search-btn">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="cart-btn">
                <ShoppingCart className="h-5 w-5" />
                {cart.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-course-green text-xs text-white">
                    {cart.totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            <div className="profile-dropdown relative">
              <button 
                onClick={toggleProfileDropdown}
                className="flex items-center focus:outline-none"
              >
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                  alt="Profile" 
                  className="profile-img h-8 w-8 rounded-full object-cover"
                />
              </button>
              
              {isProfileOpen && (
                <div className="dropdown-content absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Link>
                  <Link to="/edit-account" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Edit3 className="mr-2 h-4 w-4" /> Edit Account
                  </Link>
                  <Link to="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Link>
                  <hr className="my-1" />
                  <Link to="/logout" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
