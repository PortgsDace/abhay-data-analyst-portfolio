export type ProjectCategory = 'All' | 'Power BI' | 'SQL' | 'Python' | 'Excel' | 'Machine Learning';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'dashboard' | 'report' | 'casestudy' | 'download';
  isVerified: boolean;
  notes?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ('Power BI' | 'SQL' | 'Python' | 'Excel' | 'Machine Learning')[];
  shortDescription: string;
  technologies: string[];
  problem: string;
  whatIDid: string[];
  findings: string[];
  businessRecommendations: string[];
  limitationsAndFuture: string[];
  featured: boolean;
  isTechnicalProject?: boolean;
  metrics?: ProjectMetric[];
  thumbnailGradient: string;
  iconName: string;
  links: ProjectLink[];
  caseStudy: {
    overview: string;
    businessObjective: string;
    datasetDetails: {
      source: string;
      schema: string[];
      cleaningSteps: string[];
    };
    analyticalMethodology: string[];
    technicalImplementation: {
      type: 'sql' | 'python' | 'dax' | 'excel' | 'blockchain';
      codeTitle: string;
      codeSnippet: string;
      codeExplanation: string;
    };
    visualizationsDescription: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'internship' | 'training' | 'education';
  highlights: string[];
  technologies: string[];
  gradeOrPercentage?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface AnalyticsInsight {
  id: string;
  title: string;
  readTime: string;
  category: string;
  summary: string;
  keyTakeaway: string;
  content: string[];
}
