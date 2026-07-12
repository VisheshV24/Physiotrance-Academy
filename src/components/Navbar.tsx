import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import specialtyGroupsImage from '../assets/Join Speciality Groups Button Design.png';

const aboutLinks = [
  { id: 'about', label: 'About Us' },
  { id: 'executive-committee', label: 'Executive Committee' },
  { id: 'certifications', label: 'Approval & Affiliations' },
];

function NavLink({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="text-gray-700 hover:text-teal-600 transition-all duration-300 relative group whitespace-nowrap"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full" />
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
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

    setIsOpen(false);
    setAboutOpen(false);
  };

  return (
    <>
      {/* TOP SLIM ISO BANNER */}
      <div className="w-full bg-teal-600 text-white text-center text-sm py-1 fixed top-0 z-50 shadow">
        ✔️ ISO Certified &nbsp; | &nbsp; ✔️ Govt. Registered &nbsp; | &nbsp; ✔️ Trusted by 5000+ Researchers
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed w-full top-6 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <button
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  scrollToSection('home');
                }
              }}
              className="flex items-center space-x-3 hover:opacity-80 transition shrink-0"
            >
              <img src={logo} alt="PhysioTrance Logo" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold text-gray-800 whitespace-nowrap">
                Physiotrance Academy
              </span>
            </button>

            <div className="hidden lg:flex items-center space-x-8 ml-auto shrink-0">
              <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
              <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>

              {/* About dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  onClick={() => setAboutOpen((open) => !open)}
                  className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-all duration-300 relative group whitespace-nowrap"
                  aria-expanded={aboutOpen}
                  aria-haspopup="true"
                >
                  About
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      aboutOpen ? 'rotate-180' : ''
                    }`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full" />
                </button>

                {aboutOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                      {aboutLinks.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => scrollToSection(link.id)}
                          className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        >
                          {link.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink onClick={() => scrollToSection('process')}>Process</NavLink>
              <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>

              <button
                onClick={() => scrollToSection('speciality-groups')}
                className="transition transform hover:scale-105 shrink-0"
              >
                <img
                  src={specialtyGroupsImage}
                  alt="Join Speciality Groups"
                  className="h-12 object-contain cursor-pointer"
                />
              </button>
            </div>

            <button
              className="lg:hidden text-gray-700 ml-auto"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
              >
                Services
              </button>

              <div className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                About
              </div>
              {aboutLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left pl-6 pr-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection('process')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
              >
                Contact
              </button>

              <button
                onClick={() => scrollToSection('speciality-groups')}
                className="transition transform hover:scale-105 w-full flex justify-center pt-2"
              >
                <img
                  src={specialtyGroupsImage}
                  alt="Join Speciality Groups"
                  className="h-12 object-contain cursor-pointer"
                />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
