import React from 'react';
import { 
  GraduationCap, 
  Download, 
  Search, 
  Calendar, 
  Clock, 
  Layers, 
  Award, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  Compass,
  Wrench,
  BarChart3,
  Printer
} from 'lucide-react';
import { ProgramOverview } from '../types/curriculum';

interface HeaderProps {
  info: ProgramOverview;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedSemester: string | null;
  onSelectSemester: (id: string | null) => void;
  activeView: 'full' | 'flow' | 'tools' | 'rubric';
  onViewChange: (view: 'full' | 'flow' | 'tools' | 'rubric') => void;
  onDownloadPdf: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  info,
  searchQuery,
  onSearchChange,
  selectedSemester,
  onSelectSemester,
  activeView,
  onViewChange,
  onDownloadPdf
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-lg">
      {/* Top Banner / Program Credential */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center shadow-md shrink-0 ring-2 ring-white/10">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Official Curriculum
                </span>
                <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  2-Year Program • 4 Semesters
                </span>
                <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Zero to Industry Ready
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                {info.courseName}
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                {info.credential} • Comprehensive 96-Week Full-Stack, Mobile & AI Engineering Syllabus
              </p>
            </div>
          </div>

          {/* Action Buttons: Download PDF & Print */}
          <div className="flex items-center gap-2.5 shrink-0 no-print">
            <button
              onClick={onDownloadPdf}
              id="download-pdf-btn"
              className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-emerald-500/20 active:scale-98 transition flex items-center gap-2 border border-emerald-400/30 cursor-pointer"
              title="Export complete 4-semester curriculum as PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Syllabus</span>
            </button>
            <button
              onClick={() => window.print()}
              id="print-btn"
              className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700 text-sm transition active:scale-98 cursor-pointer"
              title="Print syllabus"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Program Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-4 pt-4 border-t border-slate-800/80">
          <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/60 flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Duration</div>
              <div className="text-sm font-bold text-white">4 Semesters (24 Mo.)</div>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/60 flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-indigo-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Total Effort</div>
              <div className="text-sm font-bold text-white">~1,200 Practical Hours</div>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/60 flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Capstone Projects</div>
              <div className="text-sm font-bold text-white">7 Production Builds</div>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/60 flex items-center gap-2.5">
            <Award className="w-5 h-5 text-violet-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Outcome</div>
              <div className="text-sm font-bold text-white">Job-Ready Engineer</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs & Search Controls */}
        <div className="mt-4 pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 no-print">
          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => { onViewChange('full'); onSelectSemester(null); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeView === 'full' && selectedSemester === null
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Syllabus Document</span>
            </button>
            <button
              onClick={() => onViewChange('flow')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeView === 'flow'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Visual Roadmap & Journey</span>
            </button>
            <button
              onClick={() => onViewChange('tools')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeView === 'tools'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Tech Stack & Tools</span>
            </button>
            <button
              onClick={() => onViewChange('rubric')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeView === 'rubric'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Grading & Evaluation</span>
            </button>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search topics (e.g., React, DevTools, Docker)..."
              className="w-full bg-slate-800/90 text-slate-200 placeholder-slate-400 text-xs rounded-lg pl-9 pr-3 py-1.5 border border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Semester Filter Pills */}
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 no-print">
          <span className="text-xs text-slate-400 font-medium whitespace-nowrap mr-1">Quick Jump:</span>
          <button
            onClick={() => onSelectSemester(null)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer ${
              selectedSemester === null
                ? 'bg-slate-700 text-white font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            All 4 Semesters
          </button>
          <button
            onClick={() => onSelectSemester('sem-1')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center gap-1 cursor-pointer ${
              selectedSemester === 'sem-1'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-emerald-300 hover:bg-emerald-950/50'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Sem 1: Web & Foundations
          </button>
          <button
            onClick={() => onSelectSemester('sem-2')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center gap-1 cursor-pointer ${
              selectedSemester === 'sem-2'
                ? 'bg-indigo-500 text-white font-bold'
                : 'text-indigo-300 hover:bg-indigo-950/50'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Sem 2: Frontend, Backend & SQL
          </button>
          <button
            onClick={() => onSelectSemester('sem-3')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center gap-1 cursor-pointer ${
              selectedSemester === 'sem-3'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-amber-300 hover:bg-amber-950/50'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Sem 3: Next.js, Cloud & Docker
          </button>
          <button
            onClick={() => onSelectSemester('sem-4')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center gap-1 cursor-pointer ${
              selectedSemester === 'sem-4'
                ? 'bg-violet-500 text-white font-bold'
                : 'text-violet-300 hover:bg-violet-950/50'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Sem 4: Architecture, Mobile & AI
          </button>
        </div>
      </div>
    </header>
  );
};
