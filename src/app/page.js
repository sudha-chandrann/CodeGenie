'use client';
import React, { useState } from 'react';
import Navbar from './_components/Navbar';
import HeroSection from './_components/HeroSection';
import Footer from './_components/Footer';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('features');
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      quote: "Transformed my debugging workflow completely!",
      company: "TechInnovate"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      quote: "Unprecedented accuracy in error detection and resolution.",
      company: "CodeSphere"
    }
  ];
  const features = [
    {
      id: 'features',
      title: 'Intelligent Features',
      description: 'Comprehensive AI-powered debugging and code generation',
      details: [
        'Real-time error analysis',
        'Multi-language support',
        'Intelligent code suggestions',
        'Security vulnerability scanning'
      ]
    },
    {
      id: 'technology',
      title: 'Advanced Technology',
      description: 'Cutting-edge AI technologies powering your development',
      details: [
        'GPT-4 Powered Insights',
        'Machine Learning Algorithms',
        'Natural Language Processing',
        'Continuous Learning Models'
      ]
    },
    {
      id: 'integration',
      title: 'Seamless Integration',
      description: 'Effortless implementation across development environments',
      details: [
        'IDE Plugin Support',
        'GitHub/GitLab Integration',
        'VS Code Extension',
        'Cloud Development Platforms'
      ]
    }
  ];

 

  return (
    <div className="bg-black text-white min-h-screen">\
    
     <Navbar/>
     <main>
      <HeroSection/>
     </main>
   {/* Features Navigation */}
   <div className="container mx-auto px-4 py-16 pb-28">
        <div className="flex justify-center space-x-4 mb-10">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`
                px-6 py-2 rounded-full transition duration-300
                ${activeTab === feature.id 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }
              `}
            >
              {feature.title}
            </button>
          ))}
        </div>
         {/* Active Feature Details */}
         <div className="bg-gray-900 rounded-lg p-8 text-center">
          {features.find(f => f.id === activeTab) && (
            <>
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                {features.find(f => f.id === activeTab).title}
              </h2>
              <p className="text-gray-300 mb-6">
                {features.find(f => f.id === activeTab).description}
              </p>
              <div className="flex justify-center space-x-4">
                {features.find(f => f.id === activeTab).details.map((detail, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 px-4 py-2 rounded-full text-sm flex items-center justify-center"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        </div>
          {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-28 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          What Developers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-black p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-300 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
              {/* Call to Action */}
      <div className="bg-black py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Ready to Revolutionize Your Coding?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their debugging experience with our AI-powered assistant.
          </p>
          <div className="space-x-4">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition duration-300">
              Start Free Trial
            </button>
            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

        <Footer/>
    </div>
  );
};

export default LandingPage;