'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Ambulance, Phone, Clock, MapPin, Shield, Users, AlertTriangle, Heart, Zap, Car } from 'lucide-react';

export default function AmbulancePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    emergencyType: '',
    additionalInfo: ''
  });

  const ambulanceFeatures = [
    {
      icon: Shield,
      title: 'Fully Equipped',
      description: 'First-aid kits, oxygen cylinders, and emergency medical equipment',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Trained Personnel',
      description: 'Experienced EMTs and medical professionals on board',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick response time with GPS tracking and optimized routes',
      color: 'orange'
    },
    {
      icon: Heart,
      title: '24/7 Service',
      description: 'Round-the-clock emergency medical services',
      color: 'red'
    }
  ];

  const serviceAreas = [
    'Pune City',
    'Mumbai',
    'Pimpri-Chinchwad',
    'Hinjewadi',
    'Kharadi',
    'Viman Nagar',
    'Koregaon Park',
    'Baner',
    'Aundh',
    'And surrounding areas'
  ];

  const emergencyTypes = [
    'Accident/Trauma',
    'Heart Attack/Stroke',
    'Respiratory Emergency',
    'Pregnancy/Labor',
    'Severe Bleeding',
    'Unconsciousness',
    'Other Medical Emergency'
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmergencyRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle emergency request
    alert('Emergency request submitted! Our team will contact you immediately.');
    setFormData({
      name: '',
      phone: '',
      location: '',
      emergencyType: '',
      additionalInfo: ''
    });
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Emergency Ambulance Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            24/7 emergency medical services with fully equipped ambulances and trained personnel
          </p>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3">
              <Phone className="h-8 w-8" />
              <div>
                <div className="text-2xl font-bold">Emergency Hotline</div>
                <div className="text-xl">+91-9823605330</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8" />
              <div>
                <div className="text-2xl font-bold">24/7 Service</div>
                <div className="text-xl">Always Available</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-8 w-8" />
              <div>
                <div className="text-2xl font-bold">Service Areas</div>
                <div className="text-xl">Pune, Mumbai & Surroundings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambulance Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Why Choose Our Ambulance Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ambulanceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center ${getColorClasses(feature.color)}`}>
                  <feature.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Emergency Care
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Medical Equipment</h3>
                    <p className="text-gray-600">
                      Our ambulances are equipped with state-of-the-art medical equipment including 
                      defibrillators, ventilators, and monitoring devices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Medical Team</h3>
                    <p className="text-gray-600">
                      Trained EMTs, paramedics, and medical professionals provide immediate 
                      care during transport to the hospital.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response System</h3>
                    <p className="text-gray-600">
                      GPS-enabled tracking and optimized routing ensure the fastest possible 
                      response time to emergency situations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Service Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Expansion Plans</span>
                </div>
                <p className="text-sm text-blue-700">
                  We are expanding to establish 2 dedicated centers in Pune to provide 
                  even faster response times and better coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Request Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Request Emergency Ambulance
            </h2>
            
            <form onSubmit={handleEmergencyRequest} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Patient/Requester Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter pickup address/location"
                  />
                </div>
                
                <div>
                  <label htmlFor="emergencyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Emergency *
                  </label>
                  <select
                    id="emergencyType"
                    name="emergencyType"
                    value={formData.emergencyType}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select emergency type</option>
                    {emergencyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Any additional details about the emergency situation..."
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Important Notice</h4>
                    <p className="text-sm text-yellow-700">
                      For immediate emergency response, please call our hotline directly: 
                      <strong className="text-yellow-800"> +91-9823605330</strong>. 
                      This form is for non-emergency requests and will be processed during business hours.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-200"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Ambulance Fleet */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Our Ambulance Fleet
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-red-100 p-6 text-center">
                <Ambulance className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Basic Life Support</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li>• First-aid equipment</li>
                  <li>• Oxygen supply</li>
                  <li>• Basic monitoring</li>
                  <li>• Stretcher and wheelchair</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-orange-100 p-6 text-center">
                <Car className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Advanced Life Support</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li>• All BLS equipment</li>
                  <li>• Advanced monitoring</li>
                  <li>• Ventilator support</li>
                  <li>• Emergency medications</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-100 p-6 text-center">
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Specialized Care</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li>• Cardiac monitoring</li>
                  <li>• Defibrillator</li>
                  <li>• Specialized equipment</li>
                  <li>• Expert medical team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Support Our Ambulance Services
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your donations help us maintain and expand our ambulance fleet, ensuring 
            emergency medical care is always available to those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Donate for Ambulance
            </a>
            <a
              href="/volunteer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
