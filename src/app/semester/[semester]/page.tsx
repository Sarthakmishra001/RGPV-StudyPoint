'use client';

import { useState, useRef } from 'react';
import { subjects } from '@/data/subjects';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SubjectCard from '@/components/SubjectCard';
import gsap from 'gsap';

export default function SemesterPage({ params }: { params: { semester: string } }) {
  const [searchQuery, setSearchQuery] = useState('');
  const semesterNumber = parseInt(params.semester);
  
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Animations removed (gsap dependency deleted). CSS transitions handle UI effects.

  const filteredSubjects = subjects.filter(subject => 
    subject.semester === semesterNumber &&
    (subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     subject.code.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center" ref={headingRef}>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Semester {semesterNumber} Subjects
        </h1>
        <p className="text-gray-600">
          Browse through all subjects for Semester {semesterNumber}
        </p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div> 
      </div>

      {filteredSubjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No subjects found for your search criteria.
          </p>
        </div>
      ) : (
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              id={subject.id}
              name={subject.name}
              code={subject.code}
              description={subject.description}
              semester={subject.semester}
              branch={subject.branch}
              chapters={subject.chapters}
            />
          ))}
        </div>
      )}
    </div>
  );
} 