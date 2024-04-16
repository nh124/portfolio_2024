import React from "react";

import { BsGithub } from "react-icons/bs";
import { VscLinkExternal } from "react-icons/vsc";

const Project = ({ key, span, project, CampusProject, id }) => {
  return (
    <>
      {span === "span" && (
        <div
          key={key}
          className="w-full h-full bg-white overflow-hidden relative col-span-2 text-white scale-90 hover:scale-100 ease-in duration-300 cursor-pointer group"
        >
          <div className="w-full h-full absolute top-0 right-0 z-10">
            <img
              className="w-full h-full object-cover"
              src={project.img}
              alt=""
            />
          </div>
          <div className="relative z-30 w-full h-full flex flex-col justify-between items-start px-5 py-5">
            <div className="w-full h-full">{project.type}</div>
            <div className="w-full h-full flex flex-col justify-end">
              <span className="text-4xl font-bold max-md:text-xl max-sm:text-lg">
                {project.name}
              </span>
              <span className="max-sm:text-xs">{project.description}</span>
            </div>
          </div>

          <div className="w-full h-full bg-black/60 absolute top-0 right-0 z-20"></div>
          <div className="w-full h-full bg-black/70 absolute top-0 right-0 z-40 hidden group-hover:inline-flex flex-row">
            <a
              target="_blank"
              href={project.URL.github}
              className="w-full h-full flex justify-center items-center flex-col gap-2 max-md:hidden"
            >
              <BsGithub size={70} />
              <span>Campus-Connect Github</span>
            </a>
            <a
              target="_blank"
              href={project.URL.externalLink}
              className="w-full h-full flex justify-center items-center flex-col gap-2 max-md:hidden"
            >
              <VscLinkExternal size={70} />
              <span>Campus-Connect App</span>
            </a>

            <a
              target="_blank"
              href={project.URL.github}
              className="hidden w-full h-full max-md:flex justify-center items-center flex-col gap-2"
            >
              <BsGithub size={40} />
              <span>Campus-Connect Github</span>
            </a>
            <a
              target="_blank"
              href={project.URL.externalLink}
              className="hidden w-full h-full max-md:flex justify-center items-center flex-col gap-2"
            >
              <VscLinkExternal size={40} />
              <span>Campus-Connect App</span>
            </a>
          </div>
        </div>
      )}
      {span !== "span" && (
        <div
          key={key}
          className="w-full h-full bg-white overflow-hidden relative col-span-1 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer group"
        >
          <div className="w-full h-full absolute top-0 right-0 z-10">
            <img
              className="w-full h-full object-cover"
              src={project.img}
              alt=""
            />
          </div>
          <div className="relative z-30 w-full h-full flex flex-col justify-between items-start px-5 py-5">
            <div className="w-full h-full">{project.type}</div>
            <div className="w-full h-full flex flex-col justify-end">
              <span className="text-4xl font-bold max-md:text-xl max-sm:text-lg">
                {project.name}
              </span>
              <span className="max-sm:text-xs">{project.description}</span>
            </div>
          </div>

          <div className="w-full h-full bg-black/60 absolute top-0 right-0 z-20"></div>
          <div className="w-full h-full bg-black/70 absolute top-0 right-0 z-40 hidden group-hover:inline-flex flex-row">
            <a
              target="_blank"
              href={project.URL.github}
              className="w-full h-full flex justify-center items-center flex-col gap-2 max-md:hidden"
            >
              <BsGithub size={70} />
              <span>Campus-Connect Github</span>
            </a>
            <a
              target="_blank"
              href={project.URL.externalLink}
              className="w-full h-full flex justify-center items-center flex-col gap-2 max-md:hidden"
            >
              <VscLinkExternal size={70} />
              <span>Campus-Connect App</span>
            </a>

            <a
              target="_blank"
              href={project.URL.github}
              className="hidden w-full h-full max-md:flex justify-center items-center flex-col gap-2"
            >
              <BsGithub size={40} />
              <span>Campus-Connect Github</span>
            </a>
            <a
              target="_blank"
              href={project.URL.externalLink}
              className="hidden w-full h-full max-md:flex justify-center items-center flex-col gap-2"
            >
              <VscLinkExternal size={40} />
              <span>Campus-Connect App</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
