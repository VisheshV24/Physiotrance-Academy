import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Award, Briefcase } from 'lucide-react';
import rupamSarkarImage from '../assets/rupam_sarkar.png';
import taniyaVaidyaImage from '../assets/taniya_vaidya.jpeg';

interface CommitteeMember {
  name: string;
  title: string;
  qualifications: string;
  role: string;
  image: string;
  fallbackInitials: string;
}

const members: CommitteeMember[] = [
  {
    name: 'Dr. Rupam Sarkar',
    title: 'Founder & Director',
    qualifications: 'Ph.D Scholar, MPT (CVRPT)',
    role: 'Assistant Professor',
    image: rupamSarkarImage,
    fallbackInitials: 'RS',
  },
  {
    name: 'Dr. Taniya Vaidya',
    title: 'Co-Founder & Operations Head',
    qualifications: 'MPT (Neurology)',
    role: 'Assistant Professor',
    image: taniyaVaidyaImage,
    fallbackInitials: 'TV',
  },
];

export default function ExecutiveCommittee() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="executive-committee" className="py-20 bg-gradient-to-br from-white via-teal-50 to-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Executive Committee
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our visionary leaders dedicated to advancing research and academic excellence
          </p>
          <div className="w-24 h-1 bg-teal-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Committee Members Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {members.map((member, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                cardsVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container - Circular */}
              <div className="relative flex items-center justify-center pt-6 pb-3">
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200 shadow-lg border-3 border-white group-hover:border-teal-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                {/* Title Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="h-4 w-4 text-teal-600" />
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                    {member.title}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Qualifications */}
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <p className="text-base text-gray-700 font-medium">
                    {member.qualifications}
                  </p>
                </div>

                {/* Role */}
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-teal-500 flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    {member.role}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our executive committee brings together decades of combined experience in research,
            academia, and healthcare, driving innovation and excellence in every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
}

