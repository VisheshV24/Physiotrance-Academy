import isoCertification from '../assets/iso_physiotrance.jpg';
import msmeRegistration from '../assets/msme_physiotrance.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Certifications() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} ref={sectionRef}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold mb-3 text-gray-900">
              Certifications & Registrations
            </h3>
            <p className="text-gray-600 text-lg">
              Our commitment to quality and compliance
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { src: isoCertification, alt: 'ISO 9001 Certified', label: 'ISO 9001 Certified' },
              { src: msmeRegistration, alt: 'MSME Registration - Government of India', label: 'MSME Registered' },
            ].map((cert, index) => (
              <div
                key={index}
                className={`flex flex-col items-center transition-all duration-700 ${
                  sectionVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-32 w-32 md:h-40 md:w-40 object-contain hover:scale-110 transition-all duration-300 shadow-md rounded-lg hover:shadow-xl"
                />
                <p className="text-gray-700 text-sm mt-3 text-center font-medium">
                  {cert.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

