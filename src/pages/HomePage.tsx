import React from "react";
import SideProjects, { Project } from "../components/SideProjects";
import Experience, { WorkHistoryItem, EducationHistoryItem } from "../components/Experience";
import Recommendations, { RecommendationItem } from "../components/Recommendations";

const technologies = ["JavaScript/TypeScript", "Angular", "React", "CSS/Tailwind", "HTML"];

const projects: Project[] = [
  {
    title: "Silent and Unseen paratroops",
    url: "http://cichociemni.edu.pl/",
    description: "Just another Wordpress page."
  },
  {
    title: "Geodezja Guzik",
    url: "http://geodezjaguzik.pl/",
    description: "Just another landing page."
  }
];

const workHistory: WorkHistoryItem[] = [
  {
    company: "Amsterdam Standard",
    logo: "/company-logos/amsterdam_standard.jpeg",
    position: "Full Stack Dev",
    startDate: "sep 2015",
    endDate: "current",
    duration: "9+ years",
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

const educationHistory: EducationHistoryItem[] = [
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

const recommendations: RecommendationItem[] = [
  {
    name: "John Doe",
    position: "CTO",
    company: "Example Company",
    text: "Maciek is an exceptional developer with great attention to detail and strong problem-solving skills."
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-paper to-paperDark px-4 py-12 md:px-8">
      {/* Header Section */}
      <header className="max-w-3xl mx-auto animate-fade-in text-brown-900">
        <h1 className="text-4xl font-bold">Maciek Olszewski</h1>
        <h2 className="text-xl mt-1">Software Dev Based In Poland</h2>
      </header>

      {/* Tech Stack Section */}
      <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
        <h3 className="text-brown-900 text-2xl font-semibold mb-4">Current Stack</h3>
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

      <Experience workHistory={workHistory} educationHistory={educationHistory} />

      <Recommendations recommendations={recommendations} />

      <SideProjects projects={projects} />

      {/* Personal Work Section */}
      {/* todo: copy from side projects */}
      {/* <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
        <h3 className="text-2xl text-brown-900 font-semibold mb-4">Personal Work</h3>

        <div className="mt-4">
          <div className="px-4 py-4">
            <h4 className="text-brown-900">Personal Project</h4>
            <p className="mt-2 text-gray-700">Project description...</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
