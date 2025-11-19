import { Project } from "../components/SideProjects";
import { WorkHistoryItem, EducationHistoryItem } from "../components/Experience";
import { RecommendationItem } from "../components/Recommendations";
import { PersonalWorkItem } from "../components/PersonalWork";

export const name: string = "Maciek Olszewski";
export const subtitle: string = "Software Dev Based In Poland";

export const email: string = "maciejolsz@gmail.com";
export const linkedin: string = "https://www.linkedin.com/in/maciej-olszewski-a68b7068/";
export const github: string = "https://github.com/maciejolsz";
export const x: string = "https://x.com/maciejolszDev";
export const resume: string = "/cv.pdf";

export const technologiesPrimary = ["JavaScript/TypeScript", "Angular", "React", "CSS, SCSS, Tailwind", "HTML"];
export const technologiesSecondary = ["Ruby (on Rails)", "PHP", "Next.js", "Electron", "Capacitor", "Git/GitHub", "CI/CD", "Docker", "MySQL", "And more..."];

export const projects: Project[] = [
  {
    title: "Silent and Unseen paratroops",
    url: "http://cichociemni.edu.pl/",
    description: "Just another Wordpress page."
  },
  {
    title: "Geodezja Guzik",
    url: "https://geodezjaguzik.pl/",
    description: "Just another landing page."
  }
];

export const workHistory: WorkHistoryItem[] = [
  {
    company: "Amsterdam Standard",
    logo: "/company-logos/amsterdam_standard.jpeg",
    position: "Full Stack Dev",
    startDate: "sep 2015",
    endDate: "current",
    duration: "10+ years",
    description: "Multiple long-term projects implemented with help of Zend, Laravel, Ruby on Rails, Angular and React. Recently leaning towards front-end stack."
  },
  {
    company: "codeFX",
    position: "Full Stack Dev",
    employmentType: "Self-employed",
    startDate: "dec 2014",
    endDate: "current",
    duration: "10 years 1 month",
  },
  {
    company: "Inteon Mobile Sp. z o.o.",
    logo: "/company-logos/inteon.jpeg",
    position: "Backend Dev",
    startDate: "jan 2015",
    endDate: "jul 2015",
    duration: "7 months",
    description: "Implementing CRM for DTP industry using custom framework based on PHP."
  },
  {
    company: "EDGE Technology PL",
    logo: "/company-logos/edge.jpeg",
    position: "Backend Dev",
    startDate: "jun 2014",
    endDate: "jan 2015",
    duration: "8 months",
  },
  {
    company: "Ideo Sp. z o.o.",
    logo: "/company-logos/ideo.jpeg",
    position: "Web Dev",
    startDate: "apr 2013",
    endDate: "may 2014",
    duration: "1 year 2 months",
  }
];

export const educationHistory: EducationHistoryItem[] = [
  {
    school: "AGH University of Krakow",
    degree: "Master of Engineering",
    startDate: "2007",
    endDate: "2012",
    logo: "/company-logos/agh.jpeg",
    description: "Modelling and Computer Systems in Geophysics",
    duration: "5 years",
  }
];

export const recommendations: RecommendationItem[] = [
  {
    name: "John Doe",
    position: "CTO",
    company: "Example Company",
    text: "Maciek is an exceptional developer with great attention to detail and strong problem-solving skills."
  }
];

export const personalWorkItems: PersonalWorkItem[] = [];

