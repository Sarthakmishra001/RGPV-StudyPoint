'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SemesterSelector() {
  const router = useRouter();
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSemesterChange = (semester: number) => {
    setSelectedSemester(semester);
    router.push(`/semester/${semester}`);
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Semester</h2>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {semesters.map((semester) => (
          <button
            key={semester}
            onClick={() => handleSemesterChange(semester)}
            className={`w-16 h-16 rounded-lg flex items-center justify-center text-lg font-medium transition-colors duration-200 
              ${selectedSemester === semester
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300'
              }`}
          >
            {semester}
          </button>
        ))}
      </div>
    </div>
  );
}
