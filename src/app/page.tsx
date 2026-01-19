'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { AcademicCapIcon, BookOpenIcon, ClockIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const semesters = [
    { number: 1, title: "1st Semester" },
    { number: 2, title: "2nd Semester" },
    { number: 3, title: "3rd Semester" },
    { number: 4, title: "4th Semester" },
    { number: 5, title: "5th Semester" },
    { number: 6, title: "6th Semester" },
    { number: 7, title: "7th Semester" },
    { number: 8, title: "8th Semester" }
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const semesterCardsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Animations removed (gsap dependency deleted). CSS transitions handle UI effects.

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center" ref={heroRef}>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-[#2563EB]" style={{ fontFamily: "'Grenze Gotisch', cursive" }}>RGPV StudyPoint</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your ultimate resource for B.Tech CSE study materials at RGPV
            </p>
            <div className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-[#2563EB] bg-blue-100">
              Exclusively for Computer Science & Engineering Students
            </div>
          </div>
        </div>
      </div>

      {/* Semester Selection */}
      <div id="semesters" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Select Your Semester</h2>
          <p className="mt-2 text-gray-600">Access CSE study materials for your semester</p>
        </div>

        <div ref={semesterCardsRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {semesters.map((sem) => (
            <Link
              key={sem.number}
              href={`/semester/${sem.number}`}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-[#2563EB] hover:ring-1 hover:ring-[#2563EB] transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <AcademicCapIcon className="h-6 w-6 text-[#2563EB] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{sem.title}</h3>
                  <p className="text-sm text-gray-500">View study materials</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/80 backdrop-blur-sm border-t mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div ref={featuresRef} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="group relative">
              <div className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <BookOpenIcon className="h-6 w-6 text-[#2563EB] group-hover:scale-110 transition-transform" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">CSE Notes</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Access comprehensive notes for all CSE subjects
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <ClockIcon className="h-6 w-6 text-[#2563EB] group-hover:scale-110 transition-transform" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Exam Preparation</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Quick revision guides and important topics for exams
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <AcademicCapIcon className="h-6 w-6 text-[#2563EB] group-hover:scale-110 transition-transform" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Previous Papers</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Practice with previous year CSE question papers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 