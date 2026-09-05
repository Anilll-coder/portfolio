export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  score: string;
  scoreLabel: string;
  period?: string;
};

export const education: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech",
    institution: "MVSR Engineering College",
    location: "Hyderabad, Telangana",
    score: "9.04 / 10",
    scoreLabel: "CGPA",
  },
  {
    id: "intermediate",
    degree: "Intermediate (Class XII)",
    institution: "SR Junior College",
    score: "96.1%",
    scoreLabel: "Score",
  },
  {
    id: "ssc",
    degree: "SSC (Class X)",
    institution: "Sri Sai Siddhartha High School",
    score: "100%",
    scoreLabel: "Score",
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  note?: string;
};

export const certifications: Certification[] = [
  {
    id: "nptel-ml",
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    note: "Completed",
  },
  {
    id: "li-python-ml-ai",
    title: "Python, Machine Learning & Artificial Intelligence",
    issuer: "LinkedIn Learning",
    note:"Python, AI-ML",
  },
  {
    id: "li-java",
    title: "Java Application Development",
    issuer: "LinkedIn Learning",
    note: "Java",
  },
  {
    id: "li-github",
    title: "GitHub",
    issuer: "LinkedIn Learning",
    note: "GitHub",
  },
];
