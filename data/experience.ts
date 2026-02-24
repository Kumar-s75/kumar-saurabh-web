export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "experience" | "education";
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "SDE-Founding Team",
    company: "Kagaar",
    period: "May 2025 - Present",
    description:
      "Working with founding team and  building features on the main website.",
    type: "experience",
  },
  {
    id: 2,
    role: "Software  Engineer ",
    company: "CyberxDelta· Internship",
    period: "Oct 2025 - Jan 2025",
    description: "Revamped their whole website, improving layout and Ui consistency.",
    type: "experience",
  },
  {
    id: 3,
    role: "FullStack Developer",
    company: "Suvidha Foundation · Internship",
    period: "July 2025 - Sept 2025",
    description:
      "Built End to End features with the team contributing in frontend as well as backend systems.",
    type: "experience",
  },
  {
    id: 4,
    role: "Backend Developer",
    company: "Byteoski Developers · Internship",
    period: "May 2024 - June 2024",
    description:
      "Worked as a Backend Developer,building Apis in Django.",
    type: "experience",
  },
];

export const educationData: Experience[] = [
  {
    id: 1,
    role: "Bachelor's degree",
    company: "Dr. B.R.Ambedkar National Institute Of Technology Jalandhar",
    period: "Nov 2022 — April 2026",
    description: "Grade: 7.5(till 6th sem)\nActivities and societies: Finance Head at Ecell",
    type: "education",
  },
  {
    id: 2,
    role: "PCM",
    company: "Loyola High School,Patna",
    period: "Apr 2019 — Apr 2021",
    description: "Grade: 89.2%",
    type: "education",
  },
];
