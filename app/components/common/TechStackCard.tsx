import Image from "next/image";
import TechStack from "../../model/techStackModel";
import React from "react";

const TechStackCard: React.FC<TechStack> = ({ title, tech }) => {
  return (
    <div className="shadow border-3 border-white rounded-md p-4">
      <h3 className="text-center mb-4 font-semibold text-lg">{title}</h3>
      <div className="flex gap-2 flex-wrap justify-center">
        {tech.map((item, index: number) => (
          <div key={index} className="flex bg-white gap-2 items-center rounded-full p-[4px]">
            <div className="shadow w-10 h-10 p-2  rounded-full flex justify-center items-center">
              <Image src={item.icon} width={50} height={50} alt="image" />
            </div>
            <p className="font-semibold me-3 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
