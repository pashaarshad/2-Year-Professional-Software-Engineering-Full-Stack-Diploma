import React from 'react';
import { Wrench, CheckCircle, Terminal, Layers, Globe, Shield, Sparkles } from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/curriculumData';

export const ToolsMatrix: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-indigo-500/30">
          <Wrench className="w-3.5 h-3.5" />
          <span>Industry Tooling & Ecosystem Matrix</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          The Modern Software Developer Toolkit
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Students do not just learn programming syntax. They master the end-to-end tooling used by top tech companies: DevTools, Git/GitHub/GitLab, Docker, Postman, Next.js, Flutter, Google Gemini AI SDK, and Linux cloud infrastructure.
        </p>
      </div>

      {/* Categorized Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TOOL_CATEGORIES.map((category, cIdx) => (
          <div 
            key={cIdx}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{category.category}</span>
              </h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                {category.tools.length} Technologies
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {category.tools.map((tool, tIdx) => (
                <div 
                  key={tIdx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition flex items-start justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-slate-900">{tool.name}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        {tool.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
