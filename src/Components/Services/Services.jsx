import React from "react";
import { experienceData } from "../experienceData";
import Experience from "../Experience";

import SingleService from "./SingleService";
import { serviceDescription } from "./ServiceDescription";
// const workExperience = experienceData;

const Services = () => {
  return (
    <div
      name="services"
      className="bg-[#040d1b] flex flex-col w-full h-screen justify-end items-center text-white max-md:h-[200vh] max-md:relative max-sm:h-[250vh] max-[375px]:h-[300vh]"
    >
      <div className="w-[1200px] h-[100%] absolute flex flex-col justify-center items-center max-lg:w-[750px] max-xl:w-[1000px] max-md:w-[100%]">
        <div className="w-full h-[700px] flex flex-row items-center bg-[#102341] rounded-lg max-md:h-[90%] max-md:flex-col max-md:gap-4 max-md:w-[90%] py-3 shadow-3xl">
          {serviceDescription.map((service, index) => {
            return (
              <>
                <SingleService key={index} service={service} />
                {index !== 2 && (
                  <div className="w-[5px] h-[70%] max-md:w-[80%] max-md:h-[5px] max-sm:w-[80%] max-sm:h-[7px] bg-white"></div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[70vh] flex flex-row justify-center bg-[#0a192f] max-md:h-[200vh] max-[375px]:h-[250vh]"></div>
    </div>
  );
};

export default Services;
