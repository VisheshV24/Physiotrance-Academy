import { Mail, Phone, MapPin, LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactItem {
  icon: LucideIcon;
  title: string;
  content: string | JSX.Element;
}

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    title: 'Email',
    content: 'director@physiotranceacademy.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 9564736713',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: (
      <a
        href="https://maps.app.goo.gl/pXBUNAVBWMkWmFWGA"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 font-medium hover:text-teal-600 hover:underline transition-colors duration-300"
      >
        Locate Us on Google Maps
      </a>
    ),
  },
];

export default function Contact() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help you succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-500 transform hover:scale-105 hover:shadow-xl min-w-[300px] ${
                  sectionVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-teal-600 hover:scale-110">
                  <Icon className="h-8 w-8 text-teal-600 transition-colors duration-300 hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-teal-600">
                  {item.title}
                </h3>
                <div className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
