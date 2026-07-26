export type SkillCategory =
  | "Language"
  | "Frontend"
  | "Backend"
  | "Database"
  | "ML/Data Science"
  | "Tooling"
  | "Deployment";

export interface Skill {
  id: string;          // matches filename stem, used as React key
  name: string;         // display name
  icon: string;         // path under /public
  category: SkillCategory;
  description: string;  // shown in the info panel — placeholder, personalize these
}

export const skills: Skill[] = [
  { id: "python", name: "Python", icon: "/skills/python-original.svg", category: "Language", description: "Primary language for ML pipelines and backend services." },
  { id: "javascript", name: "JavaScript", icon: "/skills/javascript-original.svg", category: "Language", description: "Core language for interactive frontend work." },
  { id: "typescript", name: "TypeScript", icon: "/skills/typescript-original.svg", category: "Language", description: "Typed JavaScript used across all frontend projects." },
  { id: "c", name: "C", icon: "/skills/c-original.svg", category: "Language", description: "Foundational systems programming language." },
  { id: "cplusplus", name: "C++", icon: "/skills/cplusplus-original.svg", category: "Language", description: "Used for performance-critical and embedded work." },
  { id: "html5", name: "HTML5", icon: "/skills/html5-original.svg", category: "Frontend", description: "Semantic markup foundation for every web project." },
  { id: "css3", name: "CSS3", icon: "/skills/css3-original.svg", category: "Frontend", description: "Styling foundation, paired with Tailwind for velocity." },
  { id: "react", name: "React", icon: "/skills/react-original.svg", category: "Frontend", description: "Primary UI library for building interactive interfaces." },
  { id: "nextjs", name: "Next.js", icon: "/skills/nextjs-original.svg", category: "Frontend", description: "React framework powering this portfolio itself." },
  { id: "tailwindcss", name: "Tailwind CSS", icon: "/skills/tailwindcss-original.svg", category: "Frontend", description: "Utility-first styling for fast, consistent UI work." },
  { id: "nodejs", name: "Node.js", icon: "/skills/nodejs-original.svg", category: "Backend", description: "JavaScript runtime for backend services and tooling." },
  { id: "fastapi", name: "FastAPI", icon: "/skills/fastapi-original.svg", category: "Backend", description: "Python framework for building fast ML-backed APIs." },
  { id: "postgresql", name: "PostgreSQL", icon: "/skills/postgresql-original.svg", category: "Database", description: "Relational database for structured application data." },
  { id: "supabase", name: "Supabase", icon: "/skills/supabase-original.svg", category: "Database", description: "Backend-as-a-service for auth, storage, and Postgres." },
  { id: "numpy", name: "NumPy", icon: "/skills/numpy-original.svg", category: "ML/Data Science", description: "Numerical computing foundation for data pipelines." },
  { id: "pandas", name: "Pandas", icon: "/skills/pandas-original.svg", category: "ML/Data Science", description: "Data wrangling and analysis for ML pipeline work." },
  { id: "matplotlib", name: "Matplotlib", icon: "/skills/matplotlib-original.svg", category: "ML/Data Science", description: "Visualization for model results and data exploration." },
  { id: "scikitlearn", name: "scikit-learn", icon: "/skills/scikitlearn-original.svg", category: "ML/Data Science", description: "Classical ML models for prediction pipelines." },
  { id: "tensorflow", name: "TensorFlow", icon: "/skills/tensorflow-original.svg", category: "ML/Data Science", description: "Deep learning framework for model training." },
  { id: "pytorch", name: "PyTorch", icon: "/skills/pytorch-original.svg", category: "ML/Data Science", description: "Deep learning framework for research-style model work." },
  { id: "jupyter", name: "Jupyter", icon: "/skills/jupyter-original.svg", category: "Tooling", description: "Notebook environment for ML experimentation." },
  { id: "git", name: "Git", icon: "/skills/git-original.svg", category: "Tooling", description: "Version control across every project." },
  { id: "github", name: "GitHub", icon: "/skills/github-original.svg", category: "Tooling", description: "Hosting, collaboration, and CI for all repos." },
  { id: "vscode", name: "VS Code", icon: "/skills/vscode-original.svg", category: "Tooling", description: "Primary development environment." },
  { id: "vercel", name: "Vercel", icon: "/skills/vercel-original.svg", category: "Deployment", description: "Hosting and deployment for Next.js projects." },
];