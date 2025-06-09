import { Facebook, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/bb2f3804-f9d4-4170-83b6-9b3ed54de9e8.png" 
                alt="Gudsky Research Foundation" 
                className="h-12 w-12 shadow-lg rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3 className="font-bold text-lg bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Gudsky Research</h3>
                <p className="text-sm text-gray-300">Foundation</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advancing knowledge through innovative research programs and comprehensive educational initiatives for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-110 cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-110 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all transform hover:scale-110 cursor-pointer">
                <XIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-300 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
                  Research Programs
                </Link>
              </li>
              <li>
                <Link to="/dr-sita-rani" className="text-gray-300 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
                  Dr. Sita Rani
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent">
                  Research Methodology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent">
                  Technology Innovation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent">
                  Academic Writing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent">
                  Professional Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  1/11 Anandnagar Vidyasagar, Dhanbad, Jharkhand
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  contact@gudsky.org
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Gudsky Research Foundation. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
