"use client";

import React from "react";
import github from "../../../public/github.svg";
import live from "../../../public/live.png";
import Image from "next/image";
import Project from "../../model/projectModel";
import useUiStore from "@/app/store/uiStore";

const ProjectCard: React.FC<Project> = (
//   {
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   live_link,
// }
props
) => {
  const { openModal } = useUiStore();

  return (
    <div>
      <div
        className="p-4 rounded-lg w-full shadow-md bg-white cursor-pointer"
        onClick={() => openModal(props)}
      >
        <div className="">
          <div className="flex justify-between items-end">
            <h3 className="font-semibold text-[20px]">{props.name}</h3>

            <div className=" inset-0 flex justify-end card-img_hover gap-2">
              {/* GitHub */}
              <div
                onClick={() => window.open(props.source_code_link, "_blank")}
                className="w-7 h-7 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={github}
                  alt="github"
                  className="w-3/3 h-3/3 object-contain"
                />
              </div>

              {/* Live */}
              <div
                onClick={() => window.open(props.live_link, "_blank")}
                className="bg-primary w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={live}
                  alt="live"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full sm:h-[180px] mt-4">
          <Image
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
