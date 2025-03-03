import React, { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/solid";

type TabType = "work" | "education";

export interface WorkHistoryItem {
  company: string;
  logo?: string;
  position: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  duration: string;
  description?: string;
}

export interface EducationHistoryItem {
  school: string;
  logo?: string;
  degree: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
}

const Experience: React.FC<{ workHistory: WorkHistoryItem[], educationHistory: EducationHistoryItem[] }> = ({ workHistory, educationHistory }) => {
  const [activeTab, setActiveTab] = useState<TabType>("work");
  const [showAllWork, setShowAllWork] = useState(false);

  const displayedWorkHistory = showAllWork ? workHistory : workHistory.slice(0, 2);

  return (
    <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
      <h3 className="text-2xl text-brown-900 font-semibold mb-4">Career & Education</h3>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 px-4 pt-4">
        <button
          onClick={() => setActiveTab("work")}
          className={`pb-2 px-1 hover:text-brown-900 hover:opacity-100 ${
            activeTab === "work" ? "border-b-2 border-brown-900 text-brown-900" : "border-brown-800 text-brown-800 opacity-50"
          }`}>
          Professional Journey
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`pb-2 px-1 hover:text-brown-900 hover:opacity-100 ${
            activeTab === "education" ? " border-b-2 border-brown-900 text-brown-900" : "border-brown-900 text-brown-900 opacity-50"
          }`}>
          Academic Background
        </button>
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {activeTab === "work" ? (
          <>
            <div className="space-y-2">
              {displayedWorkHistory.map((job, index) => (
                <div key={index} className="group px-4 py-2 hover:bg-paper/70 rounded-lg transition-all duration-200">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-paper rounded-lg shadow-sm flex items-center justify-center p-2">
                        {job.logo ? (
                          <img 
                            src={job.logo} 
                            alt={job.company} 
                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200" 
                          />
                        ) : (
                          <span className="text-gray-500">
                            <PhotoIcon className="h-4 w-4" />
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-brown-900 text-lg">{job.position}</h4>
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
            {workHistory.length > 2 && !showAllWork && (
              <div className="px-4 pt-4">
                <button
                  onClick={() => setShowAllWork(!showAllWork)}
                  className="px-4 py-2 rounded-full text-gray-700 text-sm bg-paper hover:scale-110 transition-transform duration-200 animate-fade-in-up">
                  Show More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-2">
            {educationHistory.map((eduItem, index) => (
              <div key={index} className="group px-4 py-2 hover:bg-paper/70 rounded-lg transition-all duration-200">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-paper rounded-lg shadow-sm flex items-center justify-center p-2">
                      {eduItem.logo ? (
                        <img 
                          src={eduItem.logo} 
                          alt={eduItem.school} 
                          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200" 
                        />
                      ) : (
                        <span className="text-gray-500">
                          <PhotoIcon className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-brown-900 text-lg">{eduItem.degree}</h4>
                    <p className="text-gray-700">
                      {eduItem.school}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{eduItem.startDate} - {eduItem.endDate} · {eduItem.duration}</span>
                      </div>
                    </div>
                    {eduItem.description && (
                      <p className="mt-4 text-gray-700">{eduItem.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience; 