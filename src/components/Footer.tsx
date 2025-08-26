'use client';

import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Ambulance Services', href: '/ambulance' },
    { name: 'Donate', href: '/donate' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' },
  ];

  const programs = [
    'Child Care & Development',
    'Education Programs',
    'Emergency Ambulance Services',
    'Community Development',
    'Environmental Conservation',
    'Sports & Recreation',
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Foundation Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SARAS Foundation</h3>
                <p className="text-sm text-blue-300">Serving Humanity with Love</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Committed to the care & development of underprivileged children, 
              blind children, and providing emergency ambulance services.
            </p>
            <div className="text-sm text-gray-400">
              <p>Reg No: MH/1005/2009/Pune</p>
              <p>Established: 2009</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-gray-300 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Yerwada, Pune<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a 
                  href="tel:+919823605330" 
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-sm"
                >
                  +91-9823605330
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a 
                  href="mailto:sarasfoundation.org.in@gmail.com" 
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-sm"
                >
                  sarasfoundation.org.in@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-blue-300">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} SARAS Foundation. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Tax Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              ⚠️ Donations are not yet 80G tax-exempt. We are in the process of obtaining tax exemption status.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
