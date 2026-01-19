'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { subjects } from '@/data/subjects';
import { FiSearch } from 'react-icons/fi';

export default function SubjectSearch() {
  const [query, setQuery] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState(subjects);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim() === '') {
      setFilteredSubjects(subjects);
      return;
    }

    const searchTerm = value.toLowerCase();
    const filtered = subjects.filter(subject => {
      const nameMatch = subject.name.toLowerCase().includes(searchTerm);
      const codeMatch = subject.code.toLowerCase().includes(searchTerm);
      return nameMatch || codeMatch;
    });
    setFilteredSubjects(filtered);
    setIsOpen(true);
  };

  const handleSubjectClick = (subjectId: string) => {
    router.push(`/subject/${subjectId}`);
    setQuery('');
    setFilteredSubjects(subjects);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search by subject name or code..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {isOpen && filteredSubjects.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() => handleSubjectClick(subject.id)}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50"
            >
              <div className="flex items-center">
                <span className="font-normal block truncate">{subject.name}</span>
              </div>
              <div className="mt-1">
                <span className="text-sm text-gray-500">{subject.code}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 