import { EducationHistoryItem, WorkHistoryItem } from "../components/Experience";
import { PersonalWorkItem } from "../components/PersonalWork";
import { ProudItem } from "../components/ProudSection";
import { RecommendationItem } from "../components/Recommendations";
import { Project } from "../components/SideProjects";

export const name: string = "John Doe";
export const subtitle: string = "Software Dev Based In Sample City";

export const email: string = "based@based.dev";
export const linkedin: string = "https://www.linkedin.com/in/sample-user/";
export const github: string = "https://github.com/sample-user";
export const x: string = "https://x.com/sample-user";
export const resume: string = "/cv.pdf";

export const technologiesPrimary = ["TypeScript", "JavaScript", "Angular", "React", "CSS", "Tailwind", "HTML"];
export const technologiesSecondary = ["RoR", "PHP", "Git", "GitHub", "CI/CD", "Docker", "MySQL"];

export const projects: Project[] = [
  {
    title: "Sample Project",
    url: "https://sample-project.dev",
    description: "Sample project description",
  },
];

export const workHistory: WorkHistoryItem[] = [
  {
    company: "Sample Company",
    logo: "/company-logos/sample_company.svg",
    position: "Full Stack Dev",
    startDate: "jan 2020",
    endDate: "current",
    duration: "6 years",
    description: "Sample work description",
  },
];

export const educationHistory: EducationHistoryItem[] = [
  {
    school: "Sample University",
    degree: "Master of Engineering",
    startDate: "2018",
    endDate: "2022",
    logo: "/company-logos/sample_university.svg",
    description: "Sample education description",
    duration: "4 years",
  },
];

export const recommendations: RecommendationItem[] = [
  {
    name: "Sample Name",
    position: "Sample Position",
    company: "Sample Company",
    text: "Sample recommendation text",
  },
];

export const personalWorkItems: PersonalWorkItem[] = [];

export const proudHighlights: ProudItem[] = [
  {
    badge: "Sample Badge 1",
    punchline: "Sample Punchline",
    description: "Sample description",
  },
  {
    badge: "Sample Badge 2",
    punchline: "Sample Punchline",
    description: "Sample description",
  },
  {
    badge: "Sample Badge 3",
    punchline: "Sample Punchline",
    description: "Sample description",
  },
];
