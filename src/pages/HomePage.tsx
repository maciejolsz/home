import React from "react";
import SideProjects from "../components/SideProjects";
import Experience from "../components/Experience";

const technologies = ["HTML", "CSS", "JS", "TypeScript", "Angular", "React", "Next.js", "Tailwind"];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-paper to-paperDark px-4 py-12 md:px-8">
      {/* Header Section */}
      <header className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800">Maciej Olszewski</h1>
        <h3 className="text-l text-gray-600 mt-1">Software Developer, Poland</h3>
      </header>

      {/* Tech Stack Section */}
      <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full text-gray-700 text-sm bg-paper hover:scale-110 transition-transform duration-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      <Experience />

      <SideProjects />

      {/* Personal Work Section */}
      <section className="max-w-3xl mx-auto mt-16 animate-fade-in">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Work</h3>

        <div className="mt-4">
          <div className="px-2 py-4">
            <h4 className="font-semibold text-gray-800">Personal Project</h4>
            <p className="mt-2 text-gray-700">Project description...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
