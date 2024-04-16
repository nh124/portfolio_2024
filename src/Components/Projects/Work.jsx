import React from "react";
import Project from "./Project.jsx";
import { projectData } from "./ProjectData.js";
import { useState } from "react";

const Work = () => {
  const [size, setSize] = useState(70);
  return (
    <div
      name="projects"
      className="w-full h-[100vh] bg-[#040d1b] flex justify-center items-center text-white"
    >
      <div
        className={`w-[90%] grid grid-cols-3 h-[90%] justify-start items-start gap-5 px-3 max-md:flex max-md:flex-col`}
      >
        {projectData.map((project, index) => {
          return (
            <>
              {(index === 0 || index === 3) && (
                <Project
                  key={index}
                  id={index}
                  span={"span"}
                  project={project}
                />
              )}
              {(index === 1 || index === 2) && (
                <Project key={index} project={project} />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
