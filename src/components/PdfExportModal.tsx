import React from 'react';
import { Download, Printer, CheckCircle2, Sparkles, X, FileText, Check } from 'lucide-react';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmExport: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  onConfirmExport
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs no-print">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Download 2-Year Syllabus PDF
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Full 4-Semester Course Specification Document
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions */}
        <div className="p-6 space-y-4 text-sm text-slate-700">
          <p className="text-xs text-slate-500">
            Clicking <strong className="text-slate-900">Generate & Save PDF</strong> opens your browser&apos;s native high-resolution print-to-PDF engine. For optimal layout:
          </p>

          <div className="space-y-2.5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Destination: Choose <strong>&quot;Save as PDF&quot;</strong></span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Layout: <strong>Portrait (A4 / Letter)</strong></span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>More Settings &gt; Check <strong>&quot;Background graphics&quot;</strong> (for badge colors)</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-50 text-emerald-900 text-xs flex items-center gap-2 border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Includes all 4 semesters, weekly breakdowns, Chrome DevTools labs, Docker, Flutter, Gemini AI, & Capstones.</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onClose();
              onConfirmExport();
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-lg shadow-md hover:shadow-emerald-500/20 transition flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Generate & Save PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
