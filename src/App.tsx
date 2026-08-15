import React, { useState, useEffect } from 'react';
import { 
  Header 
} from './components/Header';
import { 
  FlowchartView 
} from './components/FlowchartView';
import { 
  SemesterCard 
} from './components/SemesterCard';
import { 
  ToolsMatrix 
} from './components/ToolsMatrix';
import { 
  EvaluationRubric 
} from './components/EvaluationRubric';
import { 
  PdfExportModal 
} from './components/PdfExportModal';
import { 
  PROGRAM_INFO, 
  SEMESTERS_DATA 
} from './data/curriculumData';
import { 
  ArrowUp, 
  BookOpen, 
  Download, 
  GraduationCap, 
  Layers, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  Globe,
  Terminal,
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'full' | 'flow' | 'tools' | 'rubric'>('full');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadPdf = () => {
    setIsPdfModalOpen(true);
  };

  const executePrint = () => {
    // Switch to full document view and trigger print
    setActiveView('full');
    setSelectedSemester(null);
    setTimeout(() => {
      window.print();
    }, 200);
  };

  const filteredSemesters = SEMESTERS_DATA.filter(sem => {
    if (selectedSemester && sem.id !== selectedSemester) {
      return false;
    }
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      sem.title.toLowerCase().includes(q) ||
      sem.subtitle.toLowerCase().includes(q) ||
      sem.overview.toLowerCase().includes(q) ||
      sem.modules.some(m => 
        m.title.toLowerCase().includes(q) ||
        m.summary.toLowerCase().includes(q) ||
        m.topics.some(t => 
          t.title.toLowerCase().includes(q) || 
          t.description.toLowerCase().includes(q) ||
          t.keyConcepts.some(k => k.toLowerCase().includes(q))
        )
      ) ||
      sem.capstones.some(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Interactive & Responsive Header */}
      <Header 
        info={PROGRAM_INFO}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedSemester={selectedSemester}
        onSelectSemester={setSelectedSemester}
        activeView={activeView}
        onViewChange={setActiveView}
        onDownloadPdf={handleDownloadPdf}
      />

      {/* Print-Only Cover Page Header (Only visible in PDF output / Print dialog) */}
      <div className="print-only p-8 bg-white border-b-2 border-slate-900 mb-6">
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-slate-500">
              OFFICIAL ACADEMIC CURRICULUM SPECIFICATION
            </div>
            <h1 className="text-2xl font-black text-slate-900 mt-1">
              {PROGRAM_INFO.courseName}
            </h1>
            <div className="text-sm font-semibold text-slate-700 mt-0.5">
              {PROGRAM_INFO.credential}
            </div>
          </div>
          <div className="text-right text-xs text-slate-600 font-mono">
            <div>Duration: 2 Years (4 Semesters)</div>
            <div>Total Effort: ~1,200 Practical Hours</div>
            <div>Generated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 text-xs bg-slate-50 p-3 rounded border">
          <div><strong>Sem 1:</strong> Foundations & Modern Web</div>
          <div><strong>Sem 2:</strong> Frontend, Backend & SQL</div>
          <div><strong>Sem 3:</strong> Next.js, Cloud & Docker</div>
          <div><strong>Sem 4:</strong> Mobile, AI & Capstone</div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active View: Visual Roadmap */}
        {activeView === 'flow' && (
          <FlowchartView 
            semesters={SEMESTERS_DATA} 
            onSelectSemester={(semId) => {
              setSelectedSemester(semId);
              setActiveView('full');
            }}
          />
        )}

        {/* Active View: Tools Matrix */}
        {activeView === 'tools' && (
          <ToolsMatrix />
        )}

        {/* Active View: Grading Rubric */}
        {activeView === 'rubric' && (
          <EvaluationRubric />
        )}

        {/* Active View: Full Syllabus Document */}
        {activeView === 'full' && (
          <div className="space-y-8">
            {/* Search result indicator if active */}
            {searchQuery && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-center justify-between no-print">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    Showing search results for &ldquo;<strong>{searchQuery}</strong>&rdquo; across all semesters.
                  </span>
                </div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold text-amber-800 hover:underline cursor-pointer"
                >
                  Clear Filter
                </button>
              </div>
            )}

            {/* Program Introduction Hero Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>2-Year Comprehensive Software Developer Curriculum</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Program Philosophy & Learning Architecture
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
                    Designed to take an absolute beginner from foundational computing, web development, and browser DevTools through to professional full-stack development, cloud deployment, cross-platform mobile apps (Flutter), and applied generative AI systems.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 no-print">
                  <button
                    onClick={handleDownloadPdf}
                    className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Download Full Syllabus (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Pedagogy & Target Roles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Pedagogical Highlights:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {PROGRAM_INFO.pedagogy.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Graduate Career Profiles:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {PROGRAM_INFO.targetRole.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-600 mt-2">
                    <strong>Prerequisites:</strong> {PROGRAM_INFO.prerequisites}
                  </div>
                </div>
              </div>
            </div>

            {/* Render Semesters */}
            {filteredSemesters.length > 0 ? (
              filteredSemesters.map(semester => (
                <SemesterCard 
                  key={semester.id} 
                  semester={semester}
                  searchQuery={searchQuery}
                />
              ))
            ) : (
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
                  ✕
                </div>
                <h3 className="text-base font-bold text-slate-800">No matching topics found</h3>
                <p className="text-xs text-slate-500 mt-1">Try adjusting your search keywords (e.g. &ldquo;React&rdquo;, &ldquo;Docker&rdquo;, &ldquo;Git&rdquo;).</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedSemester(null); }}
                  className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 mt-16 py-10 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black">
              2Y
            </div>
            <div>
              <div className="text-sm font-bold text-white">2-Year Software Developer Curriculum</div>
              <div className="text-xs text-slate-400">Semester 1 to Semester 4 • Comprehensive Syllabus Specification</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-medium transition cursor-pointer"
            >
              Back to Top
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top / PDF CTA on Mobile */}
      {showBackToTop && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2 no-print">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-11 h-11 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 border border-slate-700 flex items-center justify-center transition active:scale-95 cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* PDF Export Modal */}
      <PdfExportModal 
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        onConfirmExport={executePrint}
      />
    </div>
  );
}
