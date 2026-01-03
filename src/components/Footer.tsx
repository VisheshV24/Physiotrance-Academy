import { Instagram, Linkedin, Star, Youtube } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const isSpeciality = id === 'speciality-groups';

    if (isSpeciality && location.pathname !== '/all-services') {
      navigate('/all-services');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (!isSpeciality && location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={ref}
      className={`bg-gray-900 text-white pt-16 pb-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="PhysioTrance Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold">Physiotrance Academy</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in research publication and academic
              excellence. Empowering researchers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="/all-services"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  All Services
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Research Publication</li>
              <li>Copyright Services</li>
              <li>Thesis Writing</li>
              <li>Topic Suggestion</li>
              <li>Plagiarism Check & Removal</li>
              <li>Patent Services</li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.youtube.com/@AIMPHYSIOENTRANCE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Youtube className="h-5 w-5 transition-transform duration-300 hover:scale-125" />
              </a>
              <a
                href="https://www.instagram.com/physio_research_hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300 hover:scale-125" />
              </a>
              <a
                href="https://www.linkedin.com/company/physiotrance-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-300 hover:scale-125" />
              </a>
            </div>

            {/* ⭐ Write a Review Button */}
            <a
            href="https://g.page/r/CSOBms1ed-cqEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leave a Google review"
            className="
              group inline-flex items-center px-5 py-3
              bg-gradient-to-r from-teal-500 to-blue-500
              text-white rounded-full font-semibold
              transition-transform duration-300
              hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40
              focus:outline-none focus:ring-2 focus:ring-teal-300
              mb-4
            "
          >
            <Star className="h-5 w-5 mr-3 transform transition-transform duration-300 group-hover:-rotate-12" />
            Review Us on Google
          </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Physiotrance Academy. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
