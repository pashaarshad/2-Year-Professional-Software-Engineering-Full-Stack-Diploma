import React from 'react';
import { BarChart3, CheckCircle2, Award, BookOpen, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { EVALUATION_CRITERIA } from '../data/curriculumData';

export const EvaluationRubric: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Overview Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-500/30">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Academic & Industry Evaluation Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Grading Rubric & Continuous Competency Assessment
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Graduation is based on demonstrable proof of work. Students are evaluated on production code quality, test coverage, weekly lab completions, live architectural defense presentations, and Git commit discipline.
        </p>
      </div>

      {/* Criteria Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EVALUATION_CRITERIA.map((criterion, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-3 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-slate-900">{criterion.weight}</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Evaluation Weight
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {criterion.category}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {criterion.description}
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900">Minimum Benchmark: </span>
                <span>{criterion.benchmark}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Course Policy & Graduation Requirements */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-600" />
          <span>Diploma Graduation & Certification Checklist</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Prerequisite 1</div>
            <div className="text-sm font-bold text-slate-900">All 4 Capstone Submissions</div>
            <p className="text-xs text-slate-600">Must successfully deploy and defend Capstones from Semester 1, 2, 3, and the Grand Capstone in Sem 4.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Prerequisite 2</div>
            <div className="text-sm font-bold text-slate-900">Public GitHub Portfolio</div>
            <p className="text-xs text-slate-600">Minimum 500+ meaningful git commits across team and individual repositories with detailed READMEs.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Prerequisite 3</div>
            <div className="text-sm font-bold text-slate-900">Technical Interview Clearance</div>
            <p className="text-xs text-slate-600">Pass 2 live panel mock technical interviews evaluating DSA, Full-Stack Architecture, and System Design.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
