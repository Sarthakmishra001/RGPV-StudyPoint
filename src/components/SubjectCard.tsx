'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpenIcon, 
  DocumentTextIcon, 
  ClockIcon
} from '@heroicons/react/24/outline';

interface SubjectCardProps {
  id: string;
  name: string;
  code: string;
  description: string;
  semester: number;
  branch: string;
  chapters: {
    number: number;
    title: string;
    topics: string[];
    driveLinks: string[];
  }[];
}

export default function SubjectCard({ 
  id, 
  name, 
  code, 
  description, 
  semester, 
  branch,
  chapters = []
}: SubjectCardProps) {
  const [activeTab, setActiveTab] = useState<'papers' | 'prep' | null>(null);

  const totalTopics = chapters?.reduce((acc, chapter) => 
    acc + (chapter?.topics?.length || 0), 0) || 0;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2">
        <h3 className="text-base font-bold text-white leading-tight line-clamp-2">{name}</h3>
        <p className="text-blue-100 text-xs mt-0.5">{code}</p>
      </div>

      {/* Content Section */}
      <div className="p-3">
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">{description}</p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="text-center">
            <div className="text-base font-bold text-blue-600">{chapters?.length || 0}</div>
            <div className="text-[10px] text-gray-500 leading-none">Chapters</div>
          </div>
          <div className="text-center border-l border-gray-200">
            <div className="text-base font-bold text-blue-600">
              {totalTopics}
            </div>
            <div className="text-[10px] text-gray-500 leading-none">Topics</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-1">
          <Link
            href={`/subject/${id}/notes`}
            className="w-full inline-flex items-center justify-center px-2 py-1 border border-transparent text-xs font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <BookOpenIcon className="h-3.5 w-3.5 mr-1" />
            View Notes
          </Link>
          <Link
            href={`/previous-year-papers/${id}`}
            className="w-full inline-flex items-center justify-center px-2 py-1 border border-gray-300 text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <DocumentTextIcon className="h-3.5 w-3.5 mr-1" />
            Previous Papers
          </Link>
          <button
            onClick={() => setActiveTab(activeTab === 'prep' ? null : 'prep')}
            className="w-full inline-flex items-center justify-center px-2 py-1 border border-gray-300 text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <ClockIcon className="h-3.5 w-3.5 mr-1" />
            Exam Preparation
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'prep' && (
          <div className="mt-2 p-2 bg-gray-50 rounded-lg text-center text-gray-500 text-xs">
            Exam preparation materials coming soon...
          </div>
        )}
      </div>
    </div>
  );
} 