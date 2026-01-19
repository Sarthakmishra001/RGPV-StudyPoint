'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { subjects } from '@/data/subjects';
import Link from 'next/link';

interface ExamSession {
  id: string;
  name: string;
  notionLink: string;
}

// Actual exam sessions for Chemistry (Semester 1)
const chemistryExamSessions: ExamSession[] = [
  {
    id: '1',
    name: 'December 2024',
    notionLink: 'https://www.notion.so/December-2024-1e871000f32b80e7a7c2d3bb4acacf54?pvs=4',
  },
  {
    id: '2',
    name: 'December 2023',
    notionLink: 'https://www.notion.so/December-2023-1e871000f32b8023b357e0856336b702?pvs=4',
  },
  {
    id: '3',
    name: 'June 2023',
    notionLink: 'https://www.notion.so/June-2023-1e871000f32b802280f2d233484304cd?pvs=4',
  },
  {
    id: '4',
    name: 'November 2022',
    notionLink: 'https://www.notion.so/nov-2022-1e871000f32b8090954fd9f237da4ce3?pvs=4',
  },
  {
    id: '5',
    name: 'June 2022',
    notionLink: 'https://www.notion.so/june-2022-1ea71000f32b80b1930ce7af5ab837d9?pvs=4',
  },
  {
    id: '6',
    name: 'December 2020',
    notionLink: 'https://www.notion.so/Dec-2020-1ea71000f32b80e1a354f61e680a6ddd?pvs=4',
  },
];

export default function PreviousYearPapers() {
  const params = useParams();
  const router = useRouter();
  const subjectId = params.subjectId as string;
  const [examSessions, setExamSessions] = useState<ExamSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const subject = subjects.find(s => s.id === subjectId);

  useEffect(() => {
    if (!subject) {
      router.push('/');
      return;
    }
    
    // For now, we only have Chemistry papers
    if (subjectId === 'chemistry') {
      setExamSessions(chemistryExamSessions);
    } else {
      setExamSessions([]); // Empty array for other subjects
    }
    setIsLoading(false);
  }, [subjectId, subject, router]);

  if (!subject) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-gray-500 mb-4">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link href={`/semester/${subject.semester}`} className="hover:text-blue-600">
          Semester {subject.semester}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{subject.name}</span>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">{subject.name} - Previous Year Papers</h1>
      
      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading papers...</p>
        </div>
      ) : examSessions.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No previous year papers available for this subject yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {examSessions.map((session) => (
            <Card key={session.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{session.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(session.notionLink, '_blank')}
                >
                  View Paper <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 