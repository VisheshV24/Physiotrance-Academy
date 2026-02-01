import { Target, Eye, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            ref={textRef}
            className={`transition-all duration-1000 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Physiotrance  
            </h2>
            <p className={`text-lg text-gray-700 mb-6 leading-relaxed transition-all duration-700 delay-100 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Physiotrance is a premier research and publication support
              organization dedicated to empowering researchers, scholars, and
              academic institutions worldwide.
            </p>
            <p className={`text-lg text-gray-700 mb-6 leading-relaxed transition-all duration-700 delay-200 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              With years of expertise in academic publishing, we provide
              comprehensive support services that help researchers navigate the
              complex landscape of scholarly publication and achieve their
              academic goals.
            </p>
            <p className={`text-lg text-gray-700 leading-relaxed transition-all duration-700 delay-300 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Our team of experienced professionals understands the challenges
              faced by researchers and offers personalized solutions to ensure
              your work reaches the right audience through prestigious indexed
              journals and conferences.
            </p>
          </div>

          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Research Team"
              className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: Target, title: 'Our Mission', text: 'To facilitate seamless research publication and support academic excellence globally.' },
            { icon: Eye, title: 'Our Vision', text: 'To be the most trusted partner in research and academic publication services.' },
            { icon: Award, title: 'Excellence', text: 'Committed to delivering quality services that meet international standards.' },
            { icon: Users, title: 'Support', text: 'Personalized assistance at every step of your research journey.' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                  cardsVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-teal-600 hover:scale-110">
                  <Icon className="h-8 w-8 text-teal-600 transition-colors duration-300 hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-teal-600">
                  {item.title}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
