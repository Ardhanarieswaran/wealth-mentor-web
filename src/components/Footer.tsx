
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/69933a32-8e6d-4ddb-a16b-2ed90f0348c6.png" 
                alt="MR APT HARMONIC PRO" 
                className="h-8 w-auto"
              />
              <div className="text-lg font-bold">MR APT HARMONIC PRO</div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering individuals to achieve financial freedom through comprehensive share market coaching and practical investment strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/mission" className="text-gray-300 hover:text-white transition-colors">Mission</Link></li>
              <li><Link to="/vision" className="text-gray-300 hover:text-white transition-colors">Vision</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 MR APT HARMONIC PRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
