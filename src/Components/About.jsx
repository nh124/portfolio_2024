import React from "react";
import Nur from "../Assets/Nur.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[70vh] bg-[#040d1b] text-gray-300 px-5 gap-3"
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-9 overflow-hidden max-[375px]:gap-1 max-sm:gap-7">
        <div className="w-[300px] h-[300px] flex justify-center items-center  max-[375px]:w-[150px] max-[375px]:h-[150px]">
          <div className="w-[70%] h-[70%] rounded-full flex justify-center items-center bg-white relative">
            {/* square */}
            <div className="w-[300px] h-[150px] absolute bg-[#040d1b] animate-spinning max-[375px]:w-[130px] max-[375px]:h-[70px]"></div>
            <div className="w-[95%] h-[95%] rounded-full flex justify-center items-center bg-[#040d1b] relative z-10">
              {" "}
              {/*ring system end image box below*/}
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden">
                <img className="object-cover mt-[-25%]" src={Nur} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[800px] flex flex-col items-center gap-3 max-md:w-full">
          <h2 className="text-3xl font-mono max-sm:text-lg">
            Hi, I’m Nur. Nice to meet you!
          </h2>
          <div className="flex items-center justify-center text-xl max-sm:text-base text-center">
            <span>
              As a seasoned full-stack developer, I've collaborated with
              esteemed clients and companies, starting from my time at Georgia
              State University. Through hackathons and internships, I achieved
              remarkable projects. At Belcan as a Frontend Engineer, I drove
              advancements for clients like John Deere. I aim to leverage my
              experiences to create meaningful impact for future companies and
              clients.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
