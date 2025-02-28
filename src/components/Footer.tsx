
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-bold text-xl text-primary">GreenWise</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Reducing post-harvest losses through technology innovation and sustainable solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/post-harvest" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Storage Solutions
                </Link>
              </li>
              <li>
                <Link to="/post-harvest" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Transportation
                </Link>
              </li>
              <li>
                <Link to="/post-harvest" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Processing Technology
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/yield-prediction" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Crop Prediction
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Government Schemes
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Agricultural News
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} GreenWise Harvest Saver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
