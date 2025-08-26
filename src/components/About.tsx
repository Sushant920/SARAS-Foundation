'use client';

import { motion } from 'framer-motion';
import { Award, Users, MapPin, Calendar, FileText, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Registered NGO',
      description: 'Reg No: MH/1005/2009/Pune',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Founded by Senior Bankers',
      description: 'Experienced professionals leading the foundation',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Operating Areas',
      description: 'Pune, Mumbai, and surrounding regions',
      color: 'purple'
    },
    {
      icon: Calendar,
      title: 'Established',
      description: 'Serving communities since 2009',
      color: 'orange'
    }
  ];

  const trustDeedPoints = [
    'Care and education for underprivileged children',
    'Support for orphans and street children',
    'Special care for blind children',
    'Emergency ambulance services',
    'Medical camps and rural development',
    'Anti-AIDS awareness programs',
    'Sports encouragement and activities',
    'Environmental conservation initiatives',
    'Women empowerment programs',
    'Community health and wellness'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About SARAS Foundation
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              SARAS Foundation is a registered non-governmental organization committed to creating 
              positive change in the lives of underprivileged children and communities across 
              Maharashtra, India.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by senior banking professionals, we bring financial expertise and 
              professional management to our humanitarian efforts, ensuring transparency, 
              accountability, and sustainable impact in all our programs.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className={`p-2 rounded-lg bg-${highlight.color}-100 text-${highlight.color}-600`}>
                    <highlight.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Deed Points */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-blue-600 mr-2" />
                Our Trust Deed Objectives
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {trustDeedPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Serving Humanity with Love
              </h3>
              <p className="text-gray-600">
                Our commitment to child welfare and community development drives everything we do.
              </p>
            </div>

            {/* Impact Statistics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Children Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Ambulance Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Education Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Volunteers</div>
                </div>
              </div>
            </div>

            {/* Tax Status Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Tax Status</h4>
                  <p className="text-sm text-yellow-700">
                    Donations are not yet 80G tax-exempt. We are in the process of obtaining 
                    tax exemption status. Please consult your tax advisor for current regulations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
