'use client';

import { FiBook, FiClock, FiFileText, FiUsers, FiDownload } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      title: 'CSE Notes',
      description: 'Access comprehensive study materials, lecture notes, and resources for all CSE subjects.',
      icon: FiBook,
      features: [
        'Subject-wise organized notes',
        'Detailed explanations',
        'Important concepts highlighted',
        'Regular updates'
      ]
    },
    {
      title: 'Exam Preparation',
      description: 'Get ready for your exams with our curated study materials and practice papers.',
      icon: FiClock,
      features: [
        'Quick revision guides',
        'Important topics coverage',
        'Practice questions',
        'Previous year papers'
      ]
    },
    {
      title: 'Previous Papers',
      description: 'Access previous year question papers and practice tests to improve your performance.',
      icon: FiFileText,
      features: [
        'Semester-wise papers',
        'Solved papers',
        'Answer keys',
        'Performance analysis'
      ]
    },
    {
      title: 'Study Groups',
      description: 'Connect with fellow students and participate in study groups for better learning.',
      icon: FiUsers,
      features: [
        'Peer discussions',
        'Resource sharing',
        'Study tips',
        'Collaborative learning'
      ]
    },
    {
      title: 'Download Resources',
      description: 'Download study materials, notes, and other resources for offline access.',
      icon: FiDownload,
      features: [
        'PDF downloads',
        'Offline access',
        'Mobile-friendly',
        'Regular updates'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h1>
          <p className="mt-2 text-gray-600">Everything you need to excel in your CSE studies</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-lg hover:border-[#2563EB] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <service.icon className="h-6 w-6 text-[#2563EB] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <svg
                        className="h-4 w-4 text-[#2563EB] mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors">
            <FiBook className="mr-2 h-5 w-5" />
            Start Learning Today
          </div>
        </div>
      </div>
    </div>
  );
} 