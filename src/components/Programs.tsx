'use client';

import { motion } from 'framer-motion';
import { Heart, BookOpen, Ambulance, Users, Leaf, Shield } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Heart,
      title: 'Child Care & Development',
      description: 'Comprehensive care for underprivileged children, orphans, and street children including shelter, nutrition, and emotional support.',
      features: [
        'Daily nutrition and healthcare',
        'Safe shelter and protection',
        'Emotional and psychological support',
        'Recreational activities and sports'
      ],
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Education Programs',
      description: 'Quality education initiatives to empower children with knowledge and skills for a better future.',
      features: [
        'Primary and secondary education',
        'Special education for blind children',
        'Vocational training programs',
        'Digital literacy and computer skills'
      ],
      color: 'green'
    },
    {
      icon: Ambulance,
      title: 'Emergency Ambulance Services',
      description: '24/7 emergency medical services with fully equipped ambulances for accidents and medical emergencies.',
      features: [
        'First-aid and emergency care',
        'Oxygen and medical equipment',
        'Trained EMT personnel',
        'Rapid response system'
      ],
      color: 'red'
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Holistic community programs including medical camps, rural development, and awareness campaigns.',
      features: [
        'Medical camps and health checkups',
        'Rural development initiatives',
        'Anti-AIDS awareness programs',
        'Women empowerment programs'
      ],
      color: 'purple'
    },
    {
      icon: Leaf,
      title: 'Environmental Conservation',
      description: 'Environmental initiatives including tree planting, waste management, and sustainability education.',
      features: [
        'Tree planting campaigns',
        'Waste management programs',
        'Environmental education',
        'Green community initiatives'
      ],
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Sports & Recreation',
      description: 'Encouraging physical activities and sports among children for holistic development.',
      features: [
        'Sports equipment and facilities',
        'Regular sports activities',
        'Tournament organization',
        'Physical fitness programs'
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colorMap[color] || 'bg-gray-50 text-gray-600 border-gray-200';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Programs & Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work across multiple domains to create a comprehensive impact on child welfare, 
            healthcare, and community development in Pune, Mumbai, and surrounding areas.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`p-6 ${getColorClasses(program.color)} border-b`}>
                <program.icon className="h-12 w-12" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to Support Our Programs?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Your donation can make a real difference in the lives of underprivileged children 
              and help us expand our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Donate Now
              </a>
              <a
                href="/volunteer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
