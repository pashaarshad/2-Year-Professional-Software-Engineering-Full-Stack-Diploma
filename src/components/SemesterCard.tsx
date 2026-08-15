import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Wrench, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Laptop, 
  Terminal, 
  Flame, 
  Layers, 
  FolderGit2,
  Cpu,
  Target,
  FileCheck
} from 'lucide-react';
import { SemesterData, ModuleItem } from '../types/curriculum';

interface SemesterCardProps {
  semester: SemesterData;
  searchQuery?: string;
  defaultExpanded?: boolean;
}

export const SemesterCard: React.FC<SemesterCardProps> = ({
  semester,
  searchQuery = '',
  defaultExpanded = true
}) => {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    // By default, open the first 2 modules or all if searched
    const initial: Record<string, boolean> = {};
    semester.modules.forEach((mod, idx) => {
      initial[mod.id] = defaultExpanded || idx === 0 || idx === 1;
    });
    return initial;
  });

  const toggleModule = (id: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    semester.modules.forEach(mod => { all[mod.id] = true; });
    setExpandedModules(all);
  };

  const collapseAll = () => {
    const none: Record<string, boolean> = {};
    semester.modules.forEach(mod => { none[mod.id] = false; });
    setExpandedModules(none);
  };

  // Filter topics if search query is active
  const filteredModules = semester.modules.filter(mod => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const modMatch = mod.title.toLowerCase().includes(q) || mod.summary.toLowerCase().includes(q);
    const topicMatch = mod.topics.some(t => 
      t.title.toLowerCase().includes(q) || 
      t.description.toLowerCase().includes(q) ||
      t.keyConcepts.some(k => k.toLowerCase().includes(q)) ||
      (t.handsOnLab && t.handsOnLab.toLowerCase().includes(q)) ||
      (t.recommendedTools && t.recommendedTools.some(tool => tool.toLowerCase().includes(q)))
    );
    return modMatch || topicMatch;
  });

  return (
    <section 
      id={semester.id} 
      className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden scroll-mt-24 mb-10 print-card avoid-break-inside"
    >
      {/* Semester Banner */}
      <div className={`p-6 sm:p-8 bg-gradient-to-r ${
        semester.number === 1 ? 'from-emerald-950 via-slate-900 to-emerald-950 text-white' :
        semester.number === 2 ? 'from-indigo-950 via-slate-900 to-indigo-950 text-white' :
        semester.number === 3 ? 'from-amber-950 via-slate-900 to-amber-950 text-white' :
        'from-violet-950 via-slate-900 to-violet-950 text-white'
      } border-b border-slate-800 relative`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${semester.badgeBg}`}>
                Semester {semester.number} • {semester.level}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10">
                {semester.duration}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-2.5">
              {semester.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1 font-medium">
              {semester.subtitle}
            </p>

            <p className="text-slate-300/90 text-xs sm:text-sm mt-3 leading-relaxed">
              {semester.overview}
            </p>

            {/* Primary Objective Banner */}
            <div className="mt-4 p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-start gap-3">
              <Target className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Semester Core Goal: </span>
                <span className="text-xs sm:text-sm text-slate-100 font-medium">{semester.primaryGoal}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats & Controls */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0">
            <div className="text-left lg:text-right">
              <div className="text-3xl font-black text-white">
                {semester.modules.length} <span className="text-sm font-normal text-slate-400">Modules</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {semester.capstones.length} Capstone Projects
              </div>
            </div>

            <div className="flex items-center gap-2 no-print">
              <button
                onClick={expandAll}
                className="px-2.5 py-1 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-2.5 py-1 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Technology Pill Grid */}
        <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {semester.technologies.map((techGroup, tIdx) => (
            <div key={tIdx} className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                {techGroup.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {techGroup.items.map((item, iIdx) => (
                  <span 
                    key={iIdx}
                    className="px-2 py-0.5 rounded-md bg-white/10 text-white text-xs font-medium border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8 space-y-8">
        {/* Module Accordions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-slate-700" />
              <span>Detailed Course Modules & Units</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredModules.length} of {semester.modules.length} Modules
            </span>
          </div>

          <div className="space-y-4">
            {filteredModules.map((module) => {
              const isExpanded = expandedModules[module.id] ?? true;

              return (
                <div 
                  key={module.id} 
                  className="rounded-xl border border-slate-200 hover:border-slate-300 transition shadow-xs bg-slate-50/50 overflow-hidden avoid-break-inside"
                >
                  {/* Module Accordion Header */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 text-left hover:bg-slate-100/70 transition cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-mono font-bold shrink-0">
                        {module.code}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900">
                            {module.title}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[11px] font-semibold">
                            {module.duration}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 line-clamp-1">
                          {module.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-1.5 rounded-lg bg-slate-200/80 text-slate-700 shrink-0 no-print">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Module Content */}
                  {(isExpanded || searchQuery) && (
                    <div className="p-4 sm:p-6 bg-white border-t border-slate-200 space-y-6">
                      {/* Topics Breakdown */}
                      <div className="space-y-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Curriculum Topics & Practical Labs
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          {module.topics.map((topic, tIdx) => (
                            <div 
                              key={tIdx} 
                              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                <h5 className="text-sm sm:text-base font-bold text-slate-900">
                                  {topic.title}
                                </h5>
                                {topic.recommendedTools && (
                                  <div className="flex items-center gap-1.5 flex-wrap shrink-0">
                                    <span className="text-[11px] font-semibold text-slate-400">Tools:</span>
                                    {topic.recommendedTools.map((tool, toolIdx) => (
                                      <span 
                                        key={toolIdx}
                                        className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-[11px] font-mono font-medium"
                                      >
                                        {tool}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                {topic.description}
                              </p>

                              {/* Key Concepts Pills */}
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                                  Key Concepts:
                                </span>
                                {topic.keyConcepts.map((concept, cIdx) => (
                                  <span 
                                    key={cIdx}
                                    className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-2xs"
                                  >
                                    {concept}
                                  </span>
                                ))}
                              </div>

                              {/* Hands-On Lab Exercise */}
                              {topic.handsOnLab && (
                                <div className="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5">
                                  <Flame className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-bold text-emerald-950">Hands-on Lab Exercise: </span>
                                    <span className="text-emerald-900">{topic.handsOnLab}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Module Learning Outcomes */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Student Competencies & Measurable Outcomes</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                          {module.outcomes.map((outcome, oIdx) => (
                            <li key={oIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Semester Capstone Projects Showcase */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-bold text-slate-900">
              Semester {semester.number} Capstone Projects & Portfolio Proof of Work
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {semester.capstones.map((capstone, cIdx) => (
              <div 
                key={cIdx}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md border border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {capstone.type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Project 0{cIdx + 1}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {capstone.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {capstone.description}
                  </p>

                  {/* Architecture & Tech Stack */}
                  <div className="mt-4 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      System Architecture:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {capstone.architecture.map((arch, aIdx) => (
                        <span 
                          key={aIdx}
                          className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium"
                        >
                          {arch}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div className="mt-4 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Required Deliverables:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {capstone.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold">Tools Mastered:</span>
                  <span className="font-mono text-slate-200">{capstone.keyTools.join(' • ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Phase Schedule Table */}
        <div className="pt-4 border-t border-slate-200">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
            Semester {semester.number} Weekly Roadmap & Milestone Schedule
          </h4>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Timeline</th>
                  <th className="p-3">Phase Name</th>
                  <th className="p-3">Core Learning Focus</th>
                  <th className="p-3">Deliverable Milestone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {semester.weeklySchedule.map((phase, pIdx) => (
                  <tr key={pIdx} className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-mono font-semibold text-slate-900 whitespace-nowrap">{phase.weekRange}</td>
                    <td className="p-3 font-bold text-slate-800 whitespace-nowrap">{phase.phaseName}</td>
                    <td className="p-3 text-slate-600">{phase.focus}</td>
                    <td className="p-3 font-semibold text-emerald-700 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{phase.milestone}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
