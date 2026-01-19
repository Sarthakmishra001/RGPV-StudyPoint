'use client';

import { useState } from 'react';
import { BookOpenIcon, DocumentTextIcon, ClockIcon } from '@heroicons/react/24/outline';
import { subjects } from '@/data/subjects';
import { useParams } from 'next/navigation';

export default function SubjectPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('notes');
  const subject = subjects.find(s => s.id === params.id);

  if (!subject) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900">Subject Not Found</h1>
            <p className="mt-2 text-gray-600">The subject you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900">{subject.name}</h1>
          <p className="mt-2 text-xl text-gray-600">{subject.code}</p>
          <p className="mt-1 text-sm text-gray-500">Semester {subject.semester}</p>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">{subject.description}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                <BookOpenIcon className="h-6 w-6 text-[#2563EB]" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Notes</h3>
                <p className="text-sm text-gray-500">{subject.chapters.length} chapters</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                <DocumentTextIcon className="h-6 w-6 text-[#2563EB]" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Previous Papers</h3>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                <ClockIcon className="h-6 w-6 text-[#2563EB]" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Exam Preparation</h3>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('notes')}
                className={`${
                  activeTab === 'notes'
                    ? 'border-[#2563EB] text-[#2563EB]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Notes
              </button>
              <button
                onClick={() => setActiveTab('papers')}
                className={`${
                  activeTab === 'papers'
                    ? 'border-[#2563EB] text-[#2563EB]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Previous Papers
              </button>
              <button
                onClick={() => setActiveTab('prep')}
                className={`${
                  activeTab === 'prep'
                    ? 'border-[#2563EB] text-[#2563EB]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Exam Preparation
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'notes' && (
              <div className="space-y-6">
                {subject.chapters.map((chapter) => (
                  <div key={chapter.id} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900">{chapter.name}</h3>
                    <div className="mt-2 space-y-2">
                      {chapter.topics.map((topic) => (
                        <div key={topic.id} className="flex items-center justify-between bg-white p-3 rounded-md">
                          <div className="flex-1">
                            <span className="text-sm text-gray-600">{topic.name}</span>
                            {topic.description && (
                              <p className="text-xs text-gray-500 mt-1">{topic.description}</p>
                            )}
                          </div>
                          <a
                            href={topic.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 text-sm text-[#2563EB] hover:text-blue-700 font-medium"
                          >
                            View Notes
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'papers' && (
              <div className="text-center py-12">
                <p className="text-gray-500">Previous year papers coming soon...</p>
              </div>
            )}

            {activeTab === 'prep' && (
              <div className="text-center py-12">
                <p className="text-gray-500">Exam preparation materials coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 