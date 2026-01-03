import logo from "../assets/logo.png";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AllServices() {
  const allServices = [
    "BPT UG Coaching Class- 3000/Month (full course 6 months), if only 1 Subject (1200/month)",
    "BPT UG Exam Preparation Class-2000 for a month",
    "MPT PG Coaching Class- 3000/Month (full course 6 months), if only 1 Subject (1200/month)",
    "MPT PG Exam Preparation Class-2000 for a month",
    "MPT Thesis Guidance- to be discussed on call Others- to be discussed on call",
    "Research/Articles/Case Report Publication- to be discussed on call (Min Charges 4k to 5.5k)",
    "Job Exam Preparation National (India) (Depends On Duration Min 4-5k Onwards)",
    "Job Exam Preparation International (Overseas) (Depends On Duration Min 5-6k Onwards)",
    "Research/Project Work/Thesis Topic Selection & Support UG,PG,Ph.D (800-1000k Onwards)",
    "Authorship Position & Academic contributions for various Journals",
    "CRE DRA AIIMS Central Govt. Job Prepration (Depends On Duration Min 4-5k Onwards)",
    "CUET, CET, NEET UG (Depends On Duration Min 4-5k Onwards)",
    "CAPF DEFENCE PHYSIOTHERAPY (Central) ,DSSB, NHM (State)",
    "Data & Statistical Analysis (UG,PG & PhD Phase Wise)",
    "Indian Govt Design Patent",
    "Indian Govt Utility Patent upto IPR Publication",
    "Indian Govt Copyright",
    "UK Govt Design Patent",
    "Canadian Govt Copyright",
    "South Africa Govt Utility Patent",
    "German Govt Utility Patent",
    "Indian Govt Utility Patent up to Grant",
    "Europe Govt Patent",
    "Clinical Trial Registry (CTRI) Registration",
    "Book Publication with ISBN (Amazon, Flipkart)",
    "Other (Customized Services)"
  ];

  const otherEServices = [
    "Logo Trademark Registration",
    "ISO Registration",
    "MSME/UDYAM Registration",
    "Company Registration , Pvt. Ltd, Section 8",
    "ITR/ IT Returns & Filing",
    "Website Development"
  ];

  const specialityGroups = [
    {
      name: "PhysioRehab Job Updates 6",
      link: "https://chat.whatsapp.com/IAqMsLf9gRHAt0s96QHkuR?mode=hqrt1"
    },
    {
      name: "PHYSIO_RESEARCH_HUB 03",
      link: "https://chat.whatsapp.com/Jm6Plj1iMYFKe6ExqAORDK?mode=hqrt1"
    },
    {
      name: "Physiotrance Academy E-Learning & Webinars",
      link: "https://chat.whatsapp.com/CtkYKqZMIxfKxXNwBkc7pf"
    },
    {
      name: "Physio Rehab Study Materials",
      link: "https://chat.whatsapp.com/HGZ8RDwOzOcIP85LCdUBAd?mode=hqrt1"
    }
  ];

  // Animation hooks for different sections
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLUListElement>({ threshold: 0.1 });
  const { ref: otherServicesRef, isVisible: otherServicesVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: groupsRef, isVisible: groupsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 
          ref={titleRef}
          className={`text-4xl font-bold text-gray-900 mb-8 text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          Complete Academic Services
        </h1>

        <ul 
          ref={servicesRef}
          className="space-y-4 text-lg text-gray-700"
        >
          {allServices.map((service, index) => (
            <li
              key={index}
              className={`p-4 bg-gray-100 rounded-lg hover:bg-teal-50 border border-gray-200 transition-all duration-500 hover:scale-[1.02] hover:shadow-md ${
                servicesVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{
                transitionDelay: servicesVisible ? `${index * 50}ms` : '0ms'
              }}
            >
              {index + 1}. {service}
            </li>
          ))}
        </ul>

        <div 
          ref={otherServicesRef}
          className={`mt-16 transition-all duration-1000 ${
            otherServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Other E-Services
          </h2>
          <ul className="space-y-4 text-lg text-gray-800">
            {otherEServices.map((service, index) => (
              <li
                key={index}
                className={`p-4 bg-gray-100 rounded-lg hover:bg-teal-50 border border-gray-200 transition-all duration-500 hover:scale-[1.02] hover:shadow-md ${
                  otherServicesVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{
                  transitionDelay: otherServicesVisible ? `${index * 50}ms` : '0ms'
                }}
              >
                {index + 1}. {service}
              </li>
            ))}
          </ul>
        </div>

        <div 
          ref={buttonRef}
          className={`text-center mt-12 transition-all duration-1000 ${
            buttonVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBNhMxLokXhG8VEbRT1sJrQxJKGXtX7b1C4y45yeZjc7c62g/viewform?vc=0&c=0&w=1&flr=0"
            className="inline-block px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-teal-500/50"
          >
            Register for a Service
          </a>
        </div>

        <div 
          id="speciality-groups" 
          ref={groupsRef}
          className="mt-16 scroll-mt-32"
        >
          <h2 
            className={`text-3xl font-semibold text-gray-900 mb-6 text-center transition-all duration-1000 ${
              groupsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            Join Speciality Groups Now
          </h2>
          <p 
            className={`text-center text-gray-600 mb-8 transition-all duration-1000 delay-200 ${
              groupsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Connect with peers, stay updated on jobs, research, education, and webinars.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {specialityGroups.map((group, index) => (
              <div
                key={group.link}
                className={`flex items-center p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-500 hover:scale-[1.03] hover:border-teal-300 ${
                  groupsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: groupsVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={logo}
                    alt={`${group.name} logo`}
                    className="h-16 w-16 object-contain rounded-full border border-gray-100 transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {group.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tap to join the official WhatsApp group.
                  </p>
                </div>
                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  Join
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
