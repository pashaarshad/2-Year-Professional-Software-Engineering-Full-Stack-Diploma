import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Database, 
  Cloud, 
  Sparkles, 
  Smartphone, 
  Code2, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Rocket,
  Compass,
  ArrowDown
} from 'lucide-react';
import { SemesterData } from '../types/curriculum';

interface FlowchartViewProps {
  semesters: SemesterData[];
  onSelectSemester: (id: string) => void;
}

export const FlowchartView: React.FC<FlowchartViewProps> = ({
  semesters,
  onSelectSemester
}) => {
  return (
    <div className="space-y-10">
      {/* Introduction Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-indigo-900/50 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/30">
            <Compass className="w-3.5 h-3.5" />
            <span>2-Year Learning Progression Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            From Zero Coding to Professional Software Architect
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            A meticulously sequenced 4-semester curriculum. Each semester establishes foundational capabilities that directly feed into the next, culminating in cross-platform mobile development, cloud systems, and applied AI.
          </p>
        </div>

        {/* High-Level Horizontal Flow Indicator */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-3.5">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>SEM 1 • MONTHS 1–6</span>
              <Globe className="w-4 h-4" />
            </div>
            <div className="text-sm font-semibold text-white mt-1">Web & Foundations</div>
            <div className="text-xs text-slate-400 mt-1">HTML • CSS • JS • DevTools • Git</div>
          </div>

          <div className="bg-indigo-950/60 border border-indigo-500/40 rounded-xl p-3.5">
            <div className="flex items-center justify-between text-xs font-bold text-indigo-400">
              <span>SEM 2 • MONTHS 7–12</span>
              <Database className="w-4 h-4" />
            </div>
            <div className="text-sm font-semibold text-white mt-1">Full-Stack Core & SQL</div>
            <div className="text-xs text-slate-400 mt-1">React • Node.js • Express • PostgreSQL</div>
          </div>

          <div className="bg-amber-950/60 border border-amber-500/40 rounded-xl p-3.5">
            <div className="flex items-center justify-between text-xs font-bold text-amber-400">
              <span>SEM 3 • MONTHS 13–18</span>
              <Cloud className="w-4 h-4" />
            </div>
            <div className="text-sm font-semibold text-white mt-1">Next.js, Cloud & DevOps</div>
            <div className="text-xs text-slate-400 mt-1">WebSockets • Docker • CI/CD • Stripe</div>
          </div>

          <div className="bg-violet-950/60 border border-violet-500/40 rounded-xl p-3.5">
            <div className="flex items-center justify-between text-xs font-bold text-violet-400">
              <span>SEM 4 • MONTHS 19–24</span>
              <Rocket className="w-4 h-4" />
            </div>
            <div className="text-sm font-semibold text-white mt-1">Mobile, AI & Capstone</div>
            <div className="text-xs text-slate-400 mt-1">Flutter • Gemini AI • Clean Code • Jobs</div>
          </div>
        </div>
      </div>

      {/* Detailed Flowchart Pipeline */}
      <div className="relative">
        <div className="space-y-8">
          {semesters.map((sem, index) => {
            const isFirst = index === 0;
            const isLast = index === semesters.length - 1;

            return (
              <div key={sem.id} className="relative">
                {/* Connecting Line between Semesters */}
                {!isLast && (
                  <div className="hidden lg:flex absolute left-10 -bottom-8 w-1 h-8 bg-gradient-to-b from-slate-400 to-slate-600 z-0 items-center justify-center">
                    <ArrowDown className="w-4 h-4 text-slate-400 translate-y-4" />
                  </div>
                )}

                <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition overflow-hidden">
                  {/* Card Header */}
                  <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg text-white shadow-sm shrink-0 ${
                        sem.number === 1 ? 'bg-emerald-600' :
                        sem.number === 2 ? 'bg-indigo-600' :
                        sem.number === 3 ? 'bg-amber-600' : 'bg-violet-600'
                      }`}>
                        {sem.roman}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${sem.badgeBg}`}>
                            Semester {sem.number} • {sem.level}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {sem.duration}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                          {sem.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                          {sem.subtitle}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectSemester(sem.id)}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shrink-0 self-start md:self-auto cursor-pointer"
                    >
                      <span>Explore Modules</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Flow Stages & Timeline Grid */}
                  <div className="p-5 sm:p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Sequential Learning Phases & Milestones
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {sem.weeklySchedule.map((phase, pIdx) => (
                        <div 
                          key={pIdx}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition"
                        >
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                            <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-mono text-[11px] text-slate-700">
                              {phase.weekRange}
                            </span>
                            <span className="text-[11px] font-bold text-slate-400">Step 0{pIdx + 1}</span>
                          </div>
                          <div className="text-sm font-bold text-slate-900">
                            {phase.phaseName}
                          </div>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                            {phase.focus}
                          </p>
                          <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                            <span className="truncate">{phase.milestone}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Capstone Spotlight Bar */}
                    <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                          Semester {sem.number} Capstone Goal
                        </div>
                        <div className="text-sm font-bold text-white mt-0.5">
                          {sem.capstones[0]?.title}
                        </div>
                        <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                          {sem.capstones[0]?.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap shrink-0">
                        {sem.capstones[0]?.keyTools.map((tool, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
