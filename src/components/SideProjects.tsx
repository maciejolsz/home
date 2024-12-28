import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

interface Project {
  title: string;
  url: string;
  description: string;
}

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

const SideProjects: React.FC = () => {
  const [rickRoll, setRickRoll] = useState<boolean>(false);

  return (
    <section className="max-w-3xl mx-auto mt-16 animate-fade-in">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Side Projects</h3>

      <div className="mt-4 hover:bg-paper/50 rounded-lg transition-all duration-200">
        <div className="px-2 py-4">
          <h4 className="font-semibold text-gray-800">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
              Probably the best thing you will see in your life.
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
              Let's be serious - I have "full time job", two kids, passion and a bunch of chronic deseases, if you
              still expect me to work overtime it's time to leave this place in peace ;)
              <br />
              <br />
              To be fair - I did something for friends and family, but it's not a big deal, and it was looonng time ago.
              <br />
              You can check it out below.
            </p>
          )}
        </div>
      </div>

      {rickRoll && (
        <div>
          {projects.map((project, index) => (
            <div key={index} className="mt-4 hover:bg-paper/50 rounded-lg transition-all duration-200">
              <div className="px-2 py-4">
                <h4 className="font-semibold text-gray-800">
                  <a
                    href={project.url}
                    target="_blank"
                    className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </h4>
                <p className="mt-2 text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SideProjects;
