// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/hooks/useAuth';
// import SubjectCard from '@/components/SubjectCard';
// import SearchAndFilter from '@/components/SearchAndFilter';

// // This would typically come from an API
// const branches = ['Computer Science', 'Electronics', 'Mechanical', 'Civil'];

// // This would typically come from an API
// const subjects = [
//   {
//     id: '1',
//     name: 'Data Structures and Algorithms',
//     code: 'CS201',
//     description: 'Learn fundamental data structures and algorithms',
//     semester: 3,
//     branch: 'Computer Science',
//     notesCount: 15,
//     papersCount: 8,
//     lastDayPrepCount: 12,
//   },
//   // Add more subjects as needed
// ];

// export default function DashboardPage() {
//   const router = useRouter();
//   const { user, loading } = useAuth();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedBranch, setSelectedBranch] = useState<string>('');

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/auth/login');
//     }
//   }, [user, loading, router]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
//       </div>
//     );
//   }

//   if (!user) {
//     return null;
//   }

//   const filteredSubjects = subjects.filter((subject) => {
//     const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       subject.code.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesBranch = !selectedBranch || subject.branch === selectedBranch;
//     return matchesSearch && matchesBranch;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-extrabold text-gray-900">
//             Welcome back, {user.name}!
//           </h1>
//           <p className="mt-2 text-sm text-gray-600">
//             Here are your subjects for Semester {user.semester}
//           </p>
//         </div>

//         <SearchAndFilter
//           onSearch={setSearchQuery}
//           onBranchChange={setSelectedBranch}
//           onSemesterChange={() => {}}
//           branches={branches}
//           currentBranch={selectedBranch}
//           currentSemester={user.semester}
//         />

//         {filteredSubjects.length === 0 ? (
//           <div className="text-center py-12">
//             <h3 className="text-lg font-medium text-gray-900">No subjects found</h3>
//             <p className="mt-2 text-sm text-gray-500">
//               Try adjusting your search or filter criteria
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
//             {filteredSubjects.map((subject) => (
//               <SubjectCard key={subject.id} {...subject} />
//             ))}
//           </div>
//         )}

//         {/* Recent Activity Section */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
//           <div className="bg-white shadow rounded-lg overflow-hidden">
//             <div className="px-4 py-5 sm:p-6">
//               <div className="flow-root">
//                 <ul className="-mb-8">
//                   {/* This would typically come from an API */}
//                   <li>
//                     <div className="relative pb-8">
//                       <div className="relative flex items-start space-x-3">
//                         <div className="relative">
//                           <span className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center ring-8 ring-white">
//                             <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
//                               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
//                             </svg>
//                           </span>
//                         </div>
//                         <div className="min-w-0 flex-1">
//                           <div>
//                             <div className="text-sm">
//                               <span className="font-medium text-gray-900">You uploaded notes for Data Structures</span>
//                             </div>
//                             <p className="mt-0.5 text-sm text-gray-500">
//                               Added 2 new files
//                             </p>
//                           </div>
//                           <div className="mt-2 text-sm text-gray-700">
//                             <p>Uploaded comprehensive notes covering Binary Trees and Graph algorithms.</p>
//                           </div>
//                         </div>
//                         <div className="mt-1 text-sm text-gray-500">
//                           3h ago
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 