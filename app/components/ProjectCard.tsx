"use client";

import React from "react";
import github from "../../public/github.svg";
import live from "../../public/live.png";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: [];
  image: string | StaticImageData;
  source_code_link: string;
  live_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <div>
      <div className="bg-[#f6f2ff] p-5 rounded-2xl sm:w-[360px] w-full shadow">
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            {/* GitHub */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="relative bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="github"
                className="w-2/3 h-2/3 object-contain absolute"
              />
            </div>

            {/* Live */}
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="bg-[#009b2d] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={live}
                alt="live"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag: any) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
