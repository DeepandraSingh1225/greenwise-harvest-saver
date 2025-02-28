
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
            <span className="font-bold text-xl text-primary">GreenWise</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-foreground/70'}`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="btn-hover-slide">Get Started</Button>
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
          <Button className="w-full mt-4 btn-hover-slide">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
