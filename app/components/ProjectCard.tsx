"use client";

import React from "react";
import github from "../../public/github.svg";
import live from "../../public/live.png";
import Image, { StaticImageData } from "next/image";

interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  name: string;
  description: string;
  tags: Tag[];
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
      <div className="bg-[#f9f9f9] p-4 rounded-lg sm:w-[290px] w-full shadow">
        <div className="">
          <div className="flex justify-between items-end">
            <h3 className="font-semibold text-[20px]">{name}</h3>

            <div className=" inset-0 flex justify-end card-img_hover gap-1">
              {/* GitHub */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={github}
                  alt="github"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>

              {/* Live */}
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="bg-[#009b2d] w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={live}
                  alt="live"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </div>
          </div>

          {/* <p className="mt-2 text-secondary text-[14px]">{description}</p> */}
        </div>
        <div className="relative w-full sm:h-[160px] mt-4">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
