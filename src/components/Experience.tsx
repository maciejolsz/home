import React, { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/solid";

type TabType = "work" | "education";

interface WorkHistoryItem {
  company: string;
  logo: string | null;
  position: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  duration: string;
  description?: string;
}

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
    logo: null,
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

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("work");

  return (
    <section className="max-w-3xl mx-auto mt-16 animate-fade-in">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("work")}
          className={`pb-2 px-1 border-b-2 hover:text-gray-800 ${
            activeTab === "work" ? "border-gray-800 text-gray-800" : "border-gray-300 text-gray-400"
          }`}>
          Work History
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`pb-2 px-1 border-b-2 hover:text-gray-800 ${
            activeTab === "education" ? "border-gray-800 text-gray-800" : "border-gray-300 text-gray-400"
          }`}>
          Education
        </button>
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {activeTab === "work" ? (
          <div className="space-y-2">
            {workHistory.map((job, index) => (
              <div key={index} className="group px-2 py-2 hover:bg-paper/50 rounded-lg transition-all duration-200">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-paper rounded-lg shadow-sm flex items-center justify-center p-2">
                      {job.logo ? (
                        <img src={job.logo} alt={job.company} className="w-full h-full object-contain filter grayscale" />
                      ) : (
                        <span className="text-gray-500">
                          <PhotoIcon className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-800 text-lg">{job.position}</h4>
                    <p className="text-gray-700">
                      {job.company}
                      {job.employmentType && ` · ${job.employmentType}`}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{job.startDate} - {job.endDate} · {job.duration}</span>
                      </div>
                    </div>
                    {job.description && (
                      <p className="mt-4 text-gray-700">{job.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
  );
};

export default Experience; 