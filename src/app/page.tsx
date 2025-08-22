// stark-resume/app/page.tsx

import resumeData from '@/app/data/resumeData.json';

// First, let's define a TypeScript type for our resume object for type safety.
type Resume = {
  id: string;
  version: number;
  name: string;
  date: string;
  pdfUrl: string;
  isLatest: boolean;
  changelog: string[];
  easterEgg: string | null;
};

export default function HomePage() {
  const resumes: Resume[] = resumeData;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-cyan-400">Hall of Armor</h1>
        <p className="text-lg text-gray-300 mt-2">A Chronicle of Professional Evolution</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* We will map over the resume data to create a card for each version */}
        {resumes.map((resume) => (
          <div 
            key={resume.id} 
            className="w-full max-w-2xl p-6 bg-gray-800/50 border border-cyan-400/20 rounded-lg shadow-lg backdrop-blur-sm"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-cyan-400">
                Mark {resume.version}
              </h2>
              {resume.isLatest && (
                <span className="px-3 py-1 text-xs font-bold text-black bg-cyan-400 rounded-full">
                  LATEST
                </span>
              )}
            </div>
            <h3 className="text-xl text-white font-light mt-1">{resume.name}</h3>
            <p className="mt-2 text-sm text-gray-400">{resume.date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}