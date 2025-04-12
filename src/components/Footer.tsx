
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#333333]">DREAM COACH</h3>
            <p className="text-gray-600 mb-4">
              Empowering learners worldwide with high-quality online courses and personalized coaching experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-500 hover:text-[#00BFA6]" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-[#00BFA6]" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-[#00BFA6]" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-500 hover:text-[#00BFA6]" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#333333]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-[#00BFA6]">All Courses</Link>
              </li>
              <li>
                <Link to="/my-courses" className="text-gray-600 hover:text-[#00BFA6]">My Learning</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#00BFA6]">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#00BFA6]">Contact</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-[#00BFA6]">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#333333]">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-[#00BFA6]">FAQ</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-600 hover:text-[#00BFA6]">Support Center</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-[#00BFA6]">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-[#00BFA6]">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookie" className="text-gray-600 hover:text-[#00BFA6]">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#333333]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#00BFA6] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">123 Education Avenue, Learning City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#00BFA6] mr-2 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#00BFA6] mr-2 flex-shrink-0" />
                <span className="text-gray-600">info@dreamcoach.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Dream Coach. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-[#00BFA6] text-sm">Terms</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-[#00BFA6] text-sm">Privacy</Link>
                </li>
                <li>
                  <Link to="/security" className="text-gray-600 hover:text-[#00BFA6] text-sm">Security</Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-gray-600 hover:text-[#00BFA6] text-sm">Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
