'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, CreditCard, Banknote, Gift, Users, Ambulance, BookOpen, Leaf } from 'lucide-react';

export default function DonatePage() {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('general');

  const donationPrograms = [
    {
      id: 'general',
      name: 'General Fund',
      description: 'Support our overall mission and programs',
      icon: Heart,
      color: 'blue'
    },
    {
      id: 'ambulance',
      name: 'Ambulance Services',
      description: 'Help us provide emergency medical services',
      icon: Ambulance,
      color: 'red'
    },
    {
      id: 'education',
      name: 'Education Programs',
      description: 'Support children\'s education and development',
      icon: BookOpen,
      color: 'green'
    },
    {
      id: 'childcare',
      name: 'Child Care & Development',
      description: 'Help underprivileged children thrive',
      icon: Users,
      color: 'purple'
    },
    {
      id: 'environment',
      name: 'Environmental Conservation',
      description: 'Support our green initiatives and tree planting',
      icon: Leaf,
      color: 'emerald'
    }
  ];

  const presetAmounts = [
    { value: '500', label: '₹500' },
    { value: '1000', label: '₹1,000' },
    { value: '2500', label: '₹2,500' },
    { value: '5000', label: '₹5,000' },
    { value: '10000', label: '₹10,000' },
    { value: '25000', label: '₹25,000' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    };
    return colorMap[color] || 'bg-gray-50 text-gray-600 border-gray-200';
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with payment gateway
    alert('Thank you for your donation! This would integrate with Razorpay/PayU in production.');
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Your donation helps us provide care, education, and emergency services to those in need
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Choose Your Donation
            </h2>

            <form onSubmit={handleDonate} className="space-y-8">
              {/* Donation Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Donation Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'one-time', label: 'One-time', icon: CreditCard },
                    { id: 'monthly', label: 'Monthly', icon: Banknote },
                    { id: 'gift', label: 'Gift Donation', icon: Gift }
                  ].map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        donationType === type.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="donationType"
                        value={type.id}
                        checked={donationType === type.id}
                        onChange={(e) => setDonationType(e.target.value)}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <type.icon className={`h-8 w-8 mx-auto mb-2 ${
                          donationType === type.id ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                        <span className={`font-medium ${
                          donationType === type.id ? 'text-blue-600' : 'text-gray-700'
                        }`}>
                          {type.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Choose a Program (Optional)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {donationPrograms.map((program) => (
                    <label
                      key={program.id}
                      className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedProgram === program.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="program"
                        value={program.id}
                        checked={selectedProgram === program.id}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className={`p-2 rounded-lg ${getColorClasses(program.color)}`}>
                            <program.icon className="h-5 w-5" />
                          </div>
                          <span className="font-semibold text-gray-900">{program.name}</span>
                        </div>
                        <p className="text-sm text-gray-600">{program.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Donation Amount
                </label>
                
                {/* Preset Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset.value}
                      type="button"
                      onClick={() => setAmount(preset.value)}
                      className={`p-3 border-2 rounded-lg font-medium transition-all duration-200 ${
                        amount === preset.value
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter a custom amount (₹)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="1"
                  />
                </div>
              </div>

              {/* Tax Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Important Tax Information</h4>
                    <p className="text-sm text-yellow-700">
                      Donations to SARAS Foundation are not yet 80G tax-exempt. We are in the process 
                      of obtaining tax exemption status. Please consult your tax advisor for current 
                      regulations regarding charitable donations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <button
                type="submit"
                disabled={!amount}
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {donationType === 'monthly' ? 'Start Monthly Donation' : 'Donate Now'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Your Donation Makes a Real Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">₹500</h3>
              <p className="text-gray-600">Provides nutritious meals for a child for a week</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">₹1,000</h3>
              <p className="text-gray-600">Supports a child's education for a month</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Ambulance className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">₹5,000</h3>
              <p className="text-gray-600">Helps maintain our ambulance services for a day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Other Ways to Help
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join our team of dedicated volunteers and make a direct impact in your community.
              </p>
              <a
                href="/volunteer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Volunteer Now
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-6">
                Help us reach more people by sharing our mission on social media and with your network.
              </p>
              <div className="flex space-x-3">
                <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Share on Facebook
                </button>
                <button className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors duration-200">
                  Share on Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
