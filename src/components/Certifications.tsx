import iso9001 from '../assets/iso_physiotrance.jpg';
import iso21001 from '../assets/iso_21001.png';
import iso27001 from '../assets/iso_27001.svg';
import msmeRegistration from '../assets/msme_physiotrance.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const certifications = [
  {
    src: msmeRegistration,
    alt: 'MSME Registration - Government of India',
    label: 'MSME, Govt. of India, Registered',
  },
  {
    src: iso9001,
    alt: 'ISO 9001:2015 Quality Management System',
    label: 'ISO 9001:2015 Quality Management System',
  },
  {
    src: iso21001,
    alt: 'ISO 21001:2025 Educational Organizations Management System',
    label: 'ISO 21001:2025 – Educational Organizations Management System',
  },
  {
    src: iso27001,
    alt: 'ISO/IEC 27001:2022 Information Security Management System',
    label: 'ISO/IEC 27001:2022 – Information Security Management System',
  },
];

export default function Certifications() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} ref={sectionRef}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-3 text-gray-900">
              Approval & Affiliations
            </h3>
            <p className="text-gray-600 text-lg">
              Our commitment to quality, security, and compliance
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {certifications.map((cert, index) => (
              <div
                key={cert.label}
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
                  className="h-32 w-32 md:h-36 md:w-36 object-contain hover:scale-110 transition-all duration-300 shadow-md rounded-lg hover:shadow-xl bg-white p-2"
                />
                <p className="text-gray-700 text-sm mt-4 text-center font-medium leading-snug max-w-[220px]">
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
