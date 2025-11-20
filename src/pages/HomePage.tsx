import React from "react";
import StackIcon from "tech-stack-icons";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import capacitorIcon from "../assets/capacitor.png";
import SideProjects from "../components/SideProjects";
import Experience from "../components/Experience";
import Recommendations from "../components/Recommendations";
import SocialLinks from "../components/SocialLinks";
import PersonalWork from "../components/PersonalWork";
import ProudSection from "../components/ProudSection";
import {
  projects,
  workHistory,
  educationHistory,
  recommendations,
  name,
  subtitle,
  personalWorkItems,
  technologiesPrimary,
  technologiesSecondary,
  proudHighlights
} from "../consts/homePageData";

const getTechIcon = (tech: string) => {
  const className = "w-5 h-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200";
  
  // Exact matches preferred
  switch (tech) {
    case "JavaScript": return <StackIcon name="js" className={className} />;
    case "TypeScript": return <StackIcon name="typescript" className={className} />;
    case "Angular": return <StackIcon name="angular" className={className} />;
    case "React": return <StackIcon name="react" className={className} />;
    case "CSS": return <StackIcon name="css3" className={className} />;
    case "Tailwind": return <StackIcon name="tailwindcss" className={className} />;
    case "HTML": return <StackIcon name="html5" className={className} />;
    case "RoR": return <StackIcon name="rails" className={className} />;
    case "PHP": return <StackIcon name="php" className={className} />;
    case "Next.js": return <StackIcon name="nextjs2" className={className} />;
    case "Electron": return <StackIcon name="electron" className={className} />;
    case "Capacitor": return <img src={capacitorIcon} alt="Capacitor" className={className} />;
    case "Git": return <StackIcon name="git" className={className} />;
    case "GitHub": return <StackIcon name="github" className={className} />;
    case "CI/CD": return <ArrowPathIcon className={`w-5 h-5 text-gray-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200`} />;
    case "Docker": return <StackIcon name="docker" className={className} />;
    case "MySQL": return <StackIcon name="mysql" className={className} />;
    default: return null;
  }
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-paper to-paperDark px-4 py-12 md:px-8">
      {/* Header Section */}
      <header className="max-w-3xl mx-auto animate-fade-in text-brown-900">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-7xl font-bold">{name}</h1>
            <h2 className="text-md mt-1">{subtitle}</h2>
          </div>
          <SocialLinks />
        </div>
      </header>

      {/* Tech Stack Section */}
      <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
        <h3 className="text-brown-900 text-2xl font-semibold mb-4">Current Stack</h3>
        <div className="flex flex-wrap gap-3 justify-between">
          {technologiesPrimary.map((tech, index) => (
            <span
              key={tech}
              className="group px-2 py-1 rounded-md text-gray-700 text-sm bg-paper hover:scale-110 transition-transform duration-200 animate-fade-in-up flex items-center gap-2"
              style={{ animationDelay: `${index * 100}ms` }}>
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-brown-900 text-md font-semibold my-4">Worked With</h3>
        <div className="flex flex-wrap gap-2 justify-between">
          {technologiesSecondary.map((tech, index) => (
            <span
              key={tech}
              className="group px-2 py-1 rounded-md text-gray-700 text-xs bg-paper hover:scale-110 transition-transform duration-200 animate-fade-in-up flex items-center gap-2"
              style={{ animationDelay: `${index * 100}ms` }}>
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>
      </section>

      {(workHistory.length > 0 || educationHistory.length > 0) && (
        <Experience workHistory={workHistory} educationHistory={educationHistory} />
      )}

      {proudHighlights.length > 0 && (
        <ProudSection items={proudHighlights} />
      )}

      {recommendations.length > 0 && (
        <Recommendations recommendations={recommendations} />
      )}

      {projects.length > 0 && (
        <SideProjects projects={projects} />
      )}

      {personalWorkItems.length > 0 && (
        <PersonalWork personalWorkItems={personalWorkItems} />
      )}
    </div>
  );
};

export default HomePage;
