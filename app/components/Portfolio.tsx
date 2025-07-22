import React from "react";
import { projects } from "../constant/constant";
import Title from "./Title";

const Portfolio = () => {
  return (
    <div id="portfolio" className="wrapper scroll-mt-12">
      <Title text1="Projects" text2="Portfolio" />
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7 pb-10">
        {/* {projects.map((project: string, index: number) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))} */}
      </div>
    </div>
  );
};

export default Portfolio;
