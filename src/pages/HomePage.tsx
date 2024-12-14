import React, { useState } from "react";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type TabType = "work" | "education";

const technologies = ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React", "Angular", "Next.js"];

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("work");
  const [rickRoll, setRickRoll] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-paper to-paperDark px-4 py-12 md:px-8">
      {/* Header Section */}
      <header className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800">Maciej Olszewski</h1>
        <h2 className="text-xl text-gray-600 mt-1">Software Developer, Poland</h2>
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

      {/* Experience Section */}
      <section className="max-w-3xl mx-auto mt-16 animate-fade-in">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("work")}
            className={`pb-2 px-1 border-b-2 ${
              activeTab === "work" ? "border-gray-800 text-gray-800" : "border-gray-300 text-gray-400"
            }`}>
            Work History
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`pb-2 px-1 border-b-2  ${
              activeTab === "education" ? "border-gray-800 text-gray-800" : "border-gray-300 text-gray-400"
            }`}>
            Education
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "work" ? (
            <div className="space-y-6">
              <div className="px-2 py-4">
                <h4 className="font-semibold text-gray-800">Amsterdam Standard</h4>
                <p className="text-sm text-gray-500">2015 - Present</p>
                <p className="mt-2 text-gray-700">Description of your role and achievements...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="px-2 py-4">
                <h4 className="font-semibold text-gray-800">University Name</h4>
                <p className="text-sm text-gray-500">2018 - 2022</p>
                <p className="mt-2 text-gray-700">Description of your studies...</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Side Projects Section */}
      <section className="max-w-3xl mx-auto mt-16 animate-fade-in">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Side Projects</h3>

        <div className="mt-4">
          <div className="px-2 py-4">
            <h4 className="font-semibold text-gray-800">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                Best thing you will ever see in your life.
                <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </h4>
            <p className="mt-2 text-gray-700">
              You have to see it before we go further. Once you're back{" "}
              <span
                onClick={() => setRickRoll(true)}
                className="cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-200">
                click here
              </span>
              .
            </p>
            {rickRoll && (
              <p className="mt-2 text-gray-700 animate-fade-in">
                On more serious note - I have full time job, two kids, passion and a bunch of chronic deseases, if you
                still expect me to work overtime it's time to leave this place in peace ;)
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <div className="px-2 py-4">
            <h4 className="font-semibold text-gray-800">
              <a
                href="http://cichociemni.edu.pl/"
                target="_blank"
                className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                'Silent and Unseen' paratroops
                <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </h4>
            <p className="mt-2 text-gray-700">Just another Wordpress page.</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="px-2 py-4">
            <h4 className="font-semibold text-gray-800">
              <a
                href="http://geodezjaguzik.pl/"
                target="_blank"
                className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                Geodezja Guzik
                <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </h4>
            <p className="mt-2 text-gray-700">Just a simple landing page.</p>
          </div>
        </div>
      </section>

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
