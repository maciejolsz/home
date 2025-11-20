import { Project } from "../components/SideProjects";
import { WorkHistoryItem, EducationHistoryItem } from "../components/Experience";
import { RecommendationItem } from "../components/Recommendations";
import { PersonalWorkItem } from "../components/PersonalWork";

export const technologiesPrimary = ["TypeScript", "JavaScript", "Angular", "React", "CSS", "Tailwind", "HTML"];
export const technologiesSecondary = ["RoR", "PHP", "Electron", "Capacitor", "Git", "GitHub", "CI/CD", "Docker", "MySQL"];

export const projects: Project[] = [
  {
    title: "Tech Innovation Hub",
    url: "https://example.com/project1",
    description: "A modern web application built with WordPress."
  },
  {
    title: "Digital Solutions Portal",
    url: "https://example.com/project2",
    description: "A responsive landing page for digital services."
  }
];

export const workHistory: WorkHistoryItem[] = [
  {
    company: "TechCorp Solutions",
    position: "Full Stack Developer",
    startDate: "sep 2015",
    endDate: "current",
    duration: "9+ years",
    description: "Developed and maintained multiple long-term projects using various frameworks including Laravel, Ruby on Rails, Angular, and React. Currently focusing on modern front-end technologies."
  },
  {
    company: "FreelanceDev",
    position: "Full Stack Developer",
    employmentType: "Self-employed",
    startDate: "dec 2014",
    endDate: "current",
    duration: "10 years 1 month",
  },
  {
    company: "MobileTech Inc.",
    position: "Backend Developer",
    startDate: "jan 2015",
    endDate: "jul 2015",
    duration: "7 months",
    description: "Developed CRM system for digital services industry using custom PHP framework."
  },
  {
    company: "WebSolutions Ltd.",
    position: "Backend Developer",
    startDate: "jun 2014",
    endDate: "jan 2015",
    duration: "8 months",
  },
  {
    company: "Digital Agency",
    position: "Web Developer",
    startDate: "apr 2013",
    endDate: "may 2014",
    duration: "1 year 2 months",
  }
];

export const educationHistory: EducationHistoryItem[] = [
  {
    school: "State University",
    degree: "Master of Engineering",
    startDate: "2007",
    endDate: "2012",
    description: "Computer Science and Software Engineering",
    duration: "5 years",
  }
];

export const recommendations: RecommendationItem[] = [
  {
    name: "John Smith",
    position: "CTO",
    company: "Tech Solutions Inc.",
    text: "An exceptional developer with great attention to detail and strong problem-solving skills."
  }
];

export const name: string = "John Doe";
export const subtitle: string = "Software Developer";

export const email: string = "example@email.com";
export const linkedin: string = "https://linkedin.com/in/example";
export const github: string = "https://github.com/example";
export const x: string = "https://x.com/example";
export const resume: string = "/resume.pdf";

export const personalWorkItems: PersonalWorkItem[] = [
  {
    title: "Personal Project",
    url: "https://example.com/personal-project",
    description: "A comprehensive web application showcasing modern front-end development practices using React and TypeScript."
  },
  {
    title: "Open Source Contribution",
    url: "https://example.com/open-source",
    description: "Contributing to open source projects focused on improving developer experience and accessibility."
  },
  {
    title: "Learning Experiment",
    url: "https://example.com/learning-experiment",
    description: "Exploring new technologies and frameworks through hands-on experimentation and side projects."
  }
];