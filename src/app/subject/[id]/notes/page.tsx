'use client';

import { subjects } from '@/data/subjects';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SubjectNotesPage({ params }: { params: { id: string } }) {
  const subject = subjects.find(s => s.id === params.id);

  if (!subject) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Subject not found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-gray-500 mb-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href={`/semester/${subject.semester}`} className="hover:text-blue-600">
            Semester {subject.semester}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{subject.subject}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">{subject.subject}</h1>
        <p className="text-gray-600 mt-1">{subject.code}</p>
      </div>

      {/* Notes Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <BookOpenIcon className="h-6 w-6 mr-2 text-blue-600" />
            Chapter-wise Syllabus & Notes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chapter
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Topics
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subject.chapters.map((chapter) => (
                <tr key={chapter.number} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {chapter.number}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {chapter.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <ul className="list-disc list-inside space-y-1">
                      {chapter.topics?.map((topic, index) => (
                        <li key={index} className="text-sm">{topic}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <a
                      href={chapter.driveLinks[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View Notes
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 