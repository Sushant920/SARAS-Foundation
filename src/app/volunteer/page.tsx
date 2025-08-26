'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Heart, BookOpen, Ambulance, Leaf, Shield, Clock, MapPin } from 'lucide-react';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    interests: [] as string[],
    availability: '',
    experience: '',
    message: ''
  });

  const volunteerOpportunities = [
    {
      icon: Heart,
      title: 'Child Care & Development',
      description: 'Help care for underprivileged children, organize activities, and provide emotional support.',
      timeCommitment: '2-4 hours/week',
      location: 'Pune, Mumbai',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Education Programs',
      description: 'Teach children, assist with homework, conduct workshops, and support educational activities.',
      timeCommitment: '3-5 hours/week',
      location: 'Pune, Mumbai',
      color: 'green'
    },
    {
      icon: Ambulance,
      title: 'Ambulance Services Support',
      description: 'Assist with ambulance operations, coordinate emergency responses, and provide first aid support.',
      timeCommitment: 'Flexible shifts',
      location: 'Pune, Mumbai',
      color: 'red'
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Participate in medical camps, awareness programs, and community development initiatives.',
      timeCommitment: '4-6 hours/week',
      location: 'Pune, Mumbai',
      color: 'purple'
    },
    {
      icon: Leaf,
      title: 'Environmental Programs',
      description: 'Participate in tree planting, waste management, and environmental education programs.',
      timeCommitment: '2-3 hours/week',
      location: 'Pune, Mumbai',
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Sports & Recreation',
      description: 'Organize sports activities, tournaments, and physical fitness programs for children.',
      timeCommitment: '3-4 hours/week',
      location: 'Pune, Mumbai',
      color: 'orange'
    }
  ];

  const interestOptions = [
    'Child Care & Development',
    'Education Programs',
    'Ambulance Services',
    'Community Outreach',
    'Environmental Programs',
    'Sports & Recreation',
    'Administrative Support',
    'Event Organization',
    'Fundraising',
    'Medical Support'
  ];

  const availabilityOptions = [
    'Weekdays (Morning)',
    'Weekdays (Afternoon)',
    'Weekdays (Evening)',
    'Weekends',
    'Flexible',
    'Emergency Response'
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

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission
    alert('Thank you for your interest in volunteering! We will contact you soon with more details.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: '',
      city: '',
      interests: [],
      availability: '',
      experience: '',
      message: ''
    });
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Volunteer Team
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Make a direct impact in your community by volunteering with SARAS Foundation
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Why Volunteer With Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Make a Real Impact</h3>
              <p className="text-gray-600">
                Directly help underprivileged children and communities in need
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join a Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals passionate about social change
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learn & Grow</h3>
              <p className="text-gray-600">
                Gain valuable experience in social work and community development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Volunteer Opportunities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`p-6 ${getColorClasses(opportunity.color)} border-b`}>
                  <opportunity.icon className="h-12 w-12" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{opportunity.timeCommitment}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{opportunity.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Become a Volunteer
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="16"
                    max="100"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your age"
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Areas of Interest (Select all that apply) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select availability</option>
                  {availabilityOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience (Optional)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about any relevant experience you have..."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Share your motivation and what you hope to contribute..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200"
              >
                Submit Volunteer Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Current Volunteers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            What Our Volunteers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Education Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;Volunteering with SARAS Foundation has been incredibly rewarding. 
                Seeing the children&apos;s progress and smiles makes every moment worthwhile.&rdquo;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-3">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Community Outreach</p>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;The foundation&apos;s commitment to community development is inspiring. 
                I&apos;ve learned so much about social work and made lasting friendships.&rdquo;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-3">
                  <Ambulance className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Amit Patel</h4>
                  <p className="text-sm text-gray-600">Ambulance Support</p>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;Being part of the ambulance services team has taught me the importance 
                of quick response and community care. It&apos;s a truly meaningful experience.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
