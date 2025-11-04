import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export interface PersonalWorkItem {
  title: string;
  url: string;
  description: string;
}

const PersonalWork: React.FC<{ personalWorkItems: PersonalWorkItem[] }> = ({ personalWorkItems }) => {
  return (
    <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
      <h3 className="text-2xl text-brown-900 font-semibold mb-4">Personal Work</h3>

      <div className="mt-4">
        {personalWorkItems.map((item, index) => (
          <div key={index} className="hover:bg-paper/70 rounded-lg transition-all duration-200">
            <div className="px-4 py-4">
              <h4 className="text-brown-900">
                <a
                  href={item.url}
                  target="_blank"
                  className="inline-flex items-center gap-1 transition-colors duration-200">
                  {item.title}
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </h4>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalWork;

