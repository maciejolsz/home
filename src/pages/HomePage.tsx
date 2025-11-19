import React from "react";
import SideProjects from "../components/SideProjects";
import Experience from "../components/Experience";
import Recommendations from "../components/Recommendations";
import SocialLinks from "../components/SocialLinks";
import PersonalWork from "../components/PersonalWork";
import {
  projects,
  workHistory,
  educationHistory,
  recommendations,
  name,
  subtitle,
  personalWorkItems,
  technologiesPrimary,
  technologiesSecondary
} from "../consts/homePageData";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-paper to-paperDark px-4 py-12 md:px-8">
      {/* Header Section */}
      <header className="max-w-3xl mx-auto animate-fade-in text-brown-900">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <h2 className="text-md mt-1">{subtitle}</h2>
          </div>
          <SocialLinks />
        </div>
      </header>

      {/* Tech Stack Section */}
      <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
        <h3 className="text-brown-900 text-2xl font-semibold mb-4">Current Stack</h3>
        <div className="flex flex-wrap gap-3">
          {technologiesPrimary.map((tech, index) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-gray-700 text-sm bg-paper hover:scale-110 transition-transform duration-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}>
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-brown-900 text-md font-semibold my-4">Worked With</h3>
        <div className="flex flex-wrap gap-3">
          {technologiesSecondary.map((tech, index) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-gray-700 text-xs bg-paper hover:scale-110 transition-transform duration-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {(workHistory.length > 0 || educationHistory.length > 0) && (
        <Experience workHistory={workHistory} educationHistory={educationHistory} />
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
