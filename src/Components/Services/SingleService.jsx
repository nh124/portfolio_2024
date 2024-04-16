import React from "react";
import { FaGlobe, FaReact, FaLinux } from "react-icons/fa";
import { BsDatabaseAdd, BsFillCloudCheckFill } from "react-icons/bs";
import { SiFlask } from "react-icons/si";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMicrosoftazure,
  SiSpring,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

import { VscAzureDevops } from "react-icons/vsc";

const SingleService = ({ key, service }) => {
  return (
    <div
      key={key}
      className="w-[80%] h-[80%] flex flex-col items-center px-3 gap-3"
    >
      <div className="w-full h-[100%] flex flex-col justify-end items-center gap-3 py-3">
        <div>
          {service.title === "Frontend Development" && <FaGlobe size={40} />}
          {service.title === "Cloud Development" && (
            <BsFillCloudCheckFill size={40} />
          )}
          {service.title === "Backend Development" && (
            <BsDatabaseAdd size={40} />
          )}
        </div>
        <span>{service.title}</span>
        <span className="w-auto text-center">{service.description}</span>
      </div>
      <div className="w-[70%] h-[2px] bg-white"></div>
      <div className="w-full h-[100%] flex flex-col justify-start items-center py-3">
        <span>Technologies I work with</span>
        <div className="w-full h-full flex flex-row justify-center items-center gap-4">
          {service.tech.map((tech, index) => {
            return (
              <>
                <div className="group relative">
                  {tech === "React" && <FaReact size={40} />}
                  {tech === "Tailwind" && <SiTailwindcss size={40} />}
                  {tech === "NextJS" && <TbBrandNextjs size={40} />}
                  {tech === "Angular" && <FaAngular size={40} />}
                  {tech === "Flask" && <SiFlask size={40} />}

                  {tech === "SpringBoot" && <SiSpring size={40} />}
                  {tech === "MySQL" && <SiMysql size={40} />}
                  {tech === "PS/QL" && <SiPostgresql size={40} />}
                  {tech === "Linux" && <FaLinux size={40} />}
                  {tech === "AWS" && <FaAws size={40} />}
                  {tech === "DevOps" && <VscAzureDevops size={40} />}
                  {tech === "Azure" && <SiMicrosoftazure size={40} />}
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-150 duration-300  left-1/2 transform -translate-x-1/2 ">
                    {tech}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[100%] flex flex-col justify-start items-center py-3">
        <span>{service.title} Status</span>
        <ul className="w-full h-full flex flex-col justify-center items-center gap-4">
          {service.experiences.map((exp, index) => {
            return <li key={index}>{exp}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleService;
