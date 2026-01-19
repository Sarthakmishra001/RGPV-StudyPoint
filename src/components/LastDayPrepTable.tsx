import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';

interface Question {
  id: string;
  question: string;
  answer: string;
  videoUrl?: string;
  aiGeneratedAnswer?: string;
}

interface LastDayPrepTableProps {
  subjectId: string;
  questions: Question[];
}

export default function LastDayPrepTable({ subjectId, questions }: LastDayPrepTableProps) {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [loadingAI, setLoadingAI] = useState<Set<string>>(new Set());
  const { token } = useAuth();

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const generateAIAnswer = async (questionId: string, question: string) => {
    setLoadingAI((prev) => new Set(prev).add(questionId));
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/subjects/generate-answer`,
        { question },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Update the question with AI answer
      questions = questions.map((q) =>
        q.id === questionId ? { ...q, aiGeneratedAnswer: response.data.answer } : q
      );
    } catch (error) {
      console.error('Error generating AI answer:', error);
    } finally {
      setLoadingAI((prev) => {
        const newSet = new Set(prev);
        newSet.delete(questionId);
        return newSet;
      });
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Question
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Answer
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              AI Answer
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Video
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {questions.map((q) => (
            <tr key={q.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <button
                    onClick={() => toggleQuestion(q.id)}
                    className="mr-2 text-gray-400 hover:text-gray-500"
                  >
                    {expandedQuestions.has(q.id) ? (
                      <ChevronUpIcon className="h-5 w-5" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" />
                    )}
                  </button>
                  <div className="text-sm font-medium text-gray-900">{q.question}</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  {expandedQuestions.has(q.id) ? q.answer : 'Click to expand'}
                </div>
              </td>
              <td className="px-6 py-4">
                {q.aiGeneratedAnswer ? (
                  <div className="text-sm text-gray-900">{q.aiGeneratedAnswer}</div>
                ) : (
                  <button
                    onClick={() => generateAIAnswer(q.id, q.question)}
                    disabled={loadingAI.has(q.id)}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    {loadingAI.has(q.id) ? 'Generating...' : 'Generate AI Answer'}
                  </button>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {q.videoUrl ? (
                  <a
                    href={q.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-900"
                  >
                    Watch Video
                  </a>
                ) : (
                  <span className="text-gray-400">No video</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 