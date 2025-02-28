
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ChevronDown, Sun, Moon, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real implementation, this would toggle dark mode
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Post-Harvest Solutions', path: '/post-harvest' },
    { name: 'Yield Prediction', path: '/yield-prediction' },
    { name: 'Government Schemes', path: '/schemes' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="GreenWise Harvest Saver"
          >
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-primary">GreenWise</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-foreground/70'}`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="btn-hover-slide bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              onClick={() => window.location.href = '/#chatbot'}
            >
              Chat with AI
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="rounded-full hover:bg-gray-100"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          {/* Mobile navigation toggle */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className={`md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-16 left-0 right-0 bottom-0 bg-background z-40`}>
        <div className="flex flex-col space-y-6 p-6 pt-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-foreground/70'}`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="w-full mt-4 btn-hover-slide bg-gradient-to-r from-green-500 to-green-600"
            onClick={() => window.location.href = '/#chatbot'}
          >
            Chat with AI
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleTheme}
            className="mt-2 flex items-center justify-center"
          >
            {isDarkMode ? <Sun size={16} className="mr-2" /> : <Moon size={16} className="mr-2" />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
