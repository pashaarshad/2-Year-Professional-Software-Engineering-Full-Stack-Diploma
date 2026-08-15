export interface TopicItem {
  title: string;
  description: string;
  keyConcepts: string[];
  handsOnLab?: string;
  recommendedTools?: string[];
}

export interface ModuleItem {
  id: string;
  code: string;
  title: string;
  duration: string; // e.g. "Weeks 1-4 (40 Hours)"
  summary: string;
  topics: TopicItem[];
  outcomes: string[];
}

export interface CapstoneProject {
  title: string;
  type: string; // "Milestone Project" | "Grand Capstone"
  description: string;
  architecture: string[];
  deliverables: string[];
  keyTools: string[];
}

export interface SemesterData {
  id: string;
  number: number;
  roman: string;
  title: string;
  subtitle: string;
  duration: string; // "6 Months • 24 Weeks • ~300 Hours"
  level: string; // "Beginner Foundations" | "Intermediate Engineering" | "Advanced Full-Stack & Cloud" | "Industry Professional & AI"
  themeColor: string;
  badgeBg: string;
  borderColor: string;
  accentColor: string;
  overview: string;
  primaryGoal: string;
  modules: ModuleItem[];
  capstones: CapstoneProject[];
  technologies: {
    category: string;
    items: string[];
  }[];
  weeklySchedule: {
    weekRange: string;
    phaseName: string;
    focus: string;
    milestone: string;
  }[];
}

export interface ProgramOverview {
  courseName: string;
  credential: string;
  duration: string;
  totalSemesters: number;
  totalWeeks: number;
  totalHours: number;
  targetRole: string[];
  prerequisites: string;
  pedagogy: string[];
}
