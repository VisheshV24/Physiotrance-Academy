import { Users, FileCheck, Award, Globe, LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface StatCardProps {
  stat: Stat;
  index: number;
  isVisible: boolean;
}

function StatCard({ stat, index, isVisible }: StatCardProps) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, 2000, 0, isVisible);

  return (
    <div
      className={`text-center transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-center mb-4">
        <div
          className={`w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-500 ${
            isVisible
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-75 -rotate-12'
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        >
          <Icon className="h-8 w-8 text-white transition-transform duration-300 hover:scale-125" />
        </div>
      </div>
      <div className="text-5xl font-bold text-white mb-2 transition-all duration-500">
        {count}
      </div>
      <div className="text-xl text-teal-100 transition-colors duration-300 hover:text-white">
        {stat.label}
      </div>
    </div>
  );
}

const stats: Stat[] = [
  {
    icon: Users,
    value: '5000+',
    label: 'Satisfied Researchers',
  },
  {
    icon: FileCheck,
    value: '10000+',
    label: 'Publications Supported',
  },
  {
    icon: Award,
    value: '500+',
    label: 'PhD Candidates Assisted',
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Served',
  },
];

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
