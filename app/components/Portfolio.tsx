"use client";
import React, { useEffect, useState } from "react";
import { projects } from "../constant/constant";
import Title from "./common/Title";
import ProjectCard from "../components/common/ProjectCard";
import Project from "../model/projectModel"

const Portfolio = () => {
  const [tab, setTab] = useState<"All" | "Frontend" | "Full Stack">("All");
  const [content, setContent] = useState<Project[]>([]);

  const tabHeader = [
    { name: "All" },
    { name: "Frontend" },
    { name: "Full Stack" },
  ] as const;

  useEffect(() => {
    if (tab === "All") {
      setContent(projects);
    } else {
      const filtered = projects.filter((item) => item.category === tab);
      setContent(filtered);
    }
  }, [tab]);

  const onTabHandler = (tabItem: (typeof tabHeader)[number]) => setTab(tabItem.name);

  return (
    <div className="wrapper">
      <div id="portfolio" className="container">
        <Title text1="Projects" text2="Portfolio" />
        <div className="w-full flex">
          <p className=" text-secondary text-[17px] leading-[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>

        <div>
          {/* Tabs */}
          <div className="flex gap-3 text-sm mt-8 border-b-2 border-[#c2a5ff]">
            {tabHeader.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer py-[6px] px-4 rounded-md border-2 mb-3 border-[#915eff] ${
                  item.name === tab
                    ? "bg-[#915eff] text-sm text-white"
                    : "bg-white hover:bg-[#915eff] hover:text-white"
                }`}
                onClick={() => onTabHandler(item)}
              >
                {item.name}
              </div>
            ))}
          </div>

          {/* Project Cards */}
          <div className="mt-5 flex flex-wrap gap-8 pb-10">
            {content.map((project, index) => (
              <ProjectCard key={`project-${index}`} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
