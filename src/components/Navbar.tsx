
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, User, Menu, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', name: t('navbar.products') },
    { path: '/resources', name: t('navbar.resources') },
    { path: '/services', name: t('navbar.services') },
    { path: '/jobs', name: t('navbar.jobs') }
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Verse
            </Link>
            <span className="hidden sm:block text-sm text-gray-500">{t('navbar.platform')}</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Languages className="h-5 w-5" />
                  <span className="ml-1 text-xs">{language.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('zh')}>
                  中文
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/upload">
              <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>{t('navbar.publish')}</span>
              </Button>
            </Link>
            <Link to="/user">
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="sm:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
