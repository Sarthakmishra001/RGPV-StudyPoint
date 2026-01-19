'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface ChapterCardProps {
  subject: string;
  chapters: string[];
}

export default function ChapterCard({ subject, chapters }: ChapterCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{subject}</h3>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUpIcon className="h-4 w-4 mr-1" />
                Hide Chapters
              </>
            ) : (
              <>
                <ChevronDownIcon className="h-4 w-4 mr-1" />
                View Chapters
              </>
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-4 border-t pt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Chapter-wise Syllabus:</h4>
            <ul className="space-y-2">
              {chapters.map((chapter, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 mr-2">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-600">{chapter}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
