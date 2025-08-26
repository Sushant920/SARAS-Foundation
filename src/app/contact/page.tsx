'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Ambulance } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

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
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Yerwada, Pune, Maharashtra, India',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91-9823605330',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'sarasfoundation.org.in@gmail.com',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      color: 'orange'
    }
  ];

  const emergencyContacts = [
    {
      icon: Ambulance,
      title: 'Emergency Ambulance',
      number: '+91-9823605330',
      description: '24/7 Emergency Services',
      color: 'red'
    },
    {
      icon: Users,
      title: 'General Inquiries',
      number: '+91-9823605330',
      description: 'Monday - Friday, 9 AM - 6 PM',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            We'd love to hear from you. Contact us for any inquiries, support, or to learn more about our programs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Contact Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center ${getColorClasses(info.color)}`}>
                  <info.icon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Emergency Contacts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center ${getColorClasses(contact.color)}`}>
                  <contact.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{contact.number}</p>
                <p className="text-gray-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="donation">Donation Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="ambulance">Ambulance Services</option>
                    <option value="education">Education Programs</option>
                    <option value="childcare">Child Care Programs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please describe your inquiry or message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Find Us
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Yerwada, Pune</h3>
              <p className="text-gray-600 mb-6">
                Located in the heart of Pune, Maharashtra, we serve the local community 
                and surrounding areas with our various programs and services.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> For security and privacy reasons, we don't display our exact address publicly. 
                  Please contact us directly for specific location details or to schedule a visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I volunteer with SARAS Foundation?
              </h3>
              <p className="text-gray-600">
                You can volunteer by filling out our volunteer form on the website, calling us directly, 
                or sending us an email. We have various opportunities in education, healthcare, and community development.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are donations tax-deductible?
              </h3>
              <p className="text-gray-600">
                Currently, donations are not yet 80G tax-exempt. We are in the process of obtaining 
                tax exemption status. Please consult your tax advisor for current regulations.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I request ambulance services?
              </h3>
              <p className="text-gray-600">
                For emergency ambulance services, call our emergency number: +91-9823605330. 
                We provide 24/7 emergency medical services in Pune and surrounding areas.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I sponsor a specific child or program?
              </h3>
              <p className="text-gray-600">
                Yes, you can choose to support specific programs or make general donations. 
                Contact us to learn more about sponsorship opportunities and program-specific support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
