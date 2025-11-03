import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export interface Project {
  title: string;
  url: string;
  description: string;
}

const SideProjects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [rickRoll, setRickRoll] = useState<boolean>(false);

  return (
    <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
      <h3 className="text-2xl text-brown-900 font-semibold mb-4">Side Projects</h3>

      <div className="mt-4 hover:bg-paper/70 rounded-lg transition-all duration-200">
        <div className="px-4 py-4">
          <h4 className="text-brown-900">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="inline-flex items-center gap-1 transition-colors duration-200">
              Probably the best thing you will see in your life!
              <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </h4>
          <p className="mt-2 text-gray-700">
            You have to see it before we go further. Once you're back{" "}
            <span
              onClick={() => setRickRoll(true)}
              className="text-brown-900 cursor-pointer transition-colors duration-200">
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
              To be fair - I did something for friends and family, I do learn "stuff", but I wouldn't say it's a big deal.
              It's ugly, it's dirty, it's not even close to perfect. But it's mine. My Precioussss.
              <br />
              You can check it out below.
            </p>
          )}
        </div>
      </div>

      {rickRoll && (
        <div>
          {projects.map((project, index) => (
            <div key={index} className="mt-4 hover:bg-paper/70 rounded-lg transition-all duration-200">
              <div className="px-4 py-4">
                <h4 className="text-brown-900">
                  <a
                    href={project.url}
                    target="_blank"
                    className="inline-flex items-center gap-1 transition-colors duration-200">
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
