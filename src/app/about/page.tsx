import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, MapPin, Calendar, FileText, Heart, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sopan Chavan',
      role: 'President',
      description: 'Leading the foundation with over 15 years of experience in banking and social work.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Amit Mehrotra',
      role: 'Vice President',
      description: 'Experienced banker with expertise in financial management and community development.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Board of Trustees',
      role: 'Governing Body',
      description: 'Senior professionals from banking and social sectors guiding our mission.',
      image: '/api/placeholder/150/150'
    }
  ];

  const achievements = [
    {
      icon: Heart,
      title: '500+ Children Helped',
      description: 'Direct impact on underprivileged children through our programs'
    },
    {
      icon: Target,
      title: '1000+ Ambulance Services',
      description: 'Emergency medical services provided to communities in need'
    },
    {
      icon: Users,
      title: '100+ Volunteers',
      description: 'Dedicated volunteers supporting our various initiatives'
    },
    {
      icon: Eye,
      title: '50+ Education Programs',
      description: 'Educational initiatives reaching children across Maharashtra'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About SARAS Foundation
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Serving Humanity with Love since 2009
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide comprehensive care and development opportunities for underprivileged children, 
                orphans, and street children while ensuring access to quality education and healthcare 
                services for all.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are committed to creating a society where every child has the opportunity to thrive, 
                regardless of their economic background or circumstances.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every child has access to education, healthcare, and opportunities 
                to reach their full potential, creating a more equitable and compassionate society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Foundation Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Registration</h3>
              <p className="text-gray-600 text-sm">Reg No: MH/1005/2009/Pune</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Founded By</h3>
              <p className="text-gray-600 text-sm">Senior Banking Professionals</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operating Areas</h3>
              <p className="text-gray-600 text-sm">Pune, Mumbai & Surrounding Regions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Established</h3>
              <p className="text-gray-600 text-sm">Serving Since 2009</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Deed Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Our Trust Deed Objectives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Child Welfare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Care for underprivileged children</li>
                <li>• Support for orphans and street children</li>
                <li>• Special care for blind children</li>
                <li>• Emotional and psychological support</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Emergency ambulance services</li>
                <li>• Medical camps and health checkups</li>
                <li>• Rural development initiatives</li>
                <li>• Anti-AIDS awareness programs</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Sports encouragement and activities</li>
                <li>• Environmental conservation</li>
                <li>• Women empowerment programs</li>
                <li>• Community health and wellness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Our Governing Body
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 text-center">
                  <div className="bg-white rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-center">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Our Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
