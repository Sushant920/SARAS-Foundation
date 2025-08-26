import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, BookOpen, Ambulance, Users, Leaf, Shield, Target, Award } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    {
      icon: Heart,
      title: 'Child Care & Development',
      description: 'Comprehensive care for underprivileged children, orphans, and street children.',
      longDescription: 'Our child care program provides holistic support including shelter, nutrition, healthcare, emotional support, and recreational activities. We focus on creating a safe and nurturing environment where children can thrive and develop their full potential.',
      features: [
        'Daily nutrition and balanced meals',
        'Regular health checkups and medical care',
        'Safe shelter and protection',
        'Emotional and psychological counseling',
        'Recreational activities and sports',
        'Life skills development',
        'Cultural and educational activities'
      ],
      impact: '500+ children directly supported',
      color: 'blue',
      needs: ['Volunteers', 'Donations', 'Medical supplies', 'Educational materials']
    },
    {
      icon: BookOpen,
      title: 'Education Programs',
      description: 'Quality education initiatives to empower children with knowledge and skills.',
      longDescription: 'We believe education is the key to breaking the cycle of poverty. Our education programs include formal schooling, special education for blind children, vocational training, and digital literacy programs.',
      features: [
        'Primary and secondary education support',
        'Special education for blind children',
        'Vocational training programs',
        'Digital literacy and computer skills',
        'Library and study facilities',
        'Scholarship programs',
        'Career guidance and counseling'
      ],
      impact: '50+ education programs implemented',
      color: 'green',
      needs: ['Teachers', 'Educational materials', 'Computer equipment', 'Library books']
    },
    {
      icon: Ambulance,
      title: 'Emergency Ambulance Services',
      description: '24/7 emergency medical services with fully equipped ambulances.',
      longDescription: 'Our ambulance services provide critical emergency medical care to communities in need. We operate fully equipped ambulances with trained personnel, ensuring rapid response to medical emergencies.',
      features: [
        '24/7 emergency response',
        'Fully equipped ambulances',
        'First-aid and emergency care',
        'Oxygen and medical equipment',
        'Trained EMT personnel',
        'Rapid response system',
        'Coordination with hospitals'
      ],
      impact: '1000+ emergency services provided',
      color: 'red',
      needs: ['Ambulance donations', 'Medical equipment', 'Fuel support', 'Trained personnel']
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Holistic community programs including medical camps and rural development.',
      longDescription: 'We work with communities to address their specific needs through medical camps, rural development initiatives, awareness programs, and capacity building.',
      features: [
        'Medical camps and health checkups',
        'Rural development initiatives',
        'Anti-AIDS awareness programs',
        'Women empowerment programs',
        'Community health education',
        'Skill development workshops',
        'Infrastructure support'
      ],
      impact: '100+ communities served',
      color: 'purple',
      needs: ['Medical professionals', 'Community workers', 'Educational materials', 'Infrastructure support']
    },
    {
      icon: Leaf,
      title: 'Environmental Conservation',
      description: 'Environmental initiatives including tree planting and sustainability education.',
      longDescription: 'Our environmental programs focus on creating sustainable communities through tree planting, waste management, environmental education, and green initiatives.',
      features: [
        'Tree planting campaigns',
        'Waste management programs',
        'Environmental education',
        'Green community initiatives',
        'Recycling programs',
        'Water conservation',
        'Sustainable practices'
      ],
      impact: '10,000+ trees planted',
      color: 'emerald',
      needs: ['Volunteers', 'Planting materials', 'Educational resources', 'Waste management equipment']
    },
    {
      icon: Shield,
      title: 'Sports & Recreation',
      description: 'Encouraging physical activities and sports for holistic development.',
      longDescription: 'We promote physical fitness and sports among children to ensure their holistic development. Our programs include regular sports activities, tournaments, and fitness programs.',
      features: [
        'Sports equipment and facilities',
        'Regular sports activities',
        'Tournament organization',
        'Physical fitness programs',
        'Team building activities',
        'Sports coaching',
        'Recreational games'
      ],
      impact: '200+ children participating regularly',
      color: 'orange',
      needs: ['Sports equipment', 'Coaches', 'Facility support', 'Tournament sponsorships']
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
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Programs & Initiatives
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive programs designed to create lasting impact in child welfare, healthcare, and community development
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Impact Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work across multiple domains to address the complex challenges faced by underprivileged 
              communities in Pune, Mumbai, and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Targeted Approach</h3>
              <p className="text-gray-600">
                Each program is designed to address specific community needs and challenges
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful implementation and measurable impact
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Programs developed in collaboration with local communities and stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Program Details
          </h2>
          
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex`}>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className={`inline-flex items-center p-3 rounded-lg mb-6 ${getColorClasses(program.color)}`}>
                    <program.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{program.longDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">Impact:</span>
                    </div>
                    <p className="text-blue-600 font-medium">{program.impact}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Current Needs:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.needs.map((need, needIndex) => (
                          <span key={needIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {need}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">How You Can Help:</h4>
                      <div className="space-y-3">
                        <a
                          href="/donate"
                          className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                        >
                          Donate to This Program
                        </a>
                        <a
                          href="/volunteer"
                          className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                        >
                          Volunteer for This Program
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Program Impact Statistics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Children Helped</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Education Programs</div>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Ambulance className="h-12 w-12 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-gray-600">Ambulance Services</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Support Our Programs
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your support helps us continue and expand these vital programs that make a real difference 
            in the lives of underprivileged children and communities.
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
      </section>

      <Footer />
    </main>
  );
}
