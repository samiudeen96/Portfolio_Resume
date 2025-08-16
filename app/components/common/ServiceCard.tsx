import Image, { StaticImageData } from "next/image";
import React from "react";
import Service from "../../model/serviceModel";

// interface

const ServiceCard: React.FC<Service> = ({ label, description, icon }) => {
  return (
    <div className="bg-white rounded-md duration-300 p-5 overflow-hidden shadow-lg">
      <div className="w-16 h-16 flex items-center justify-center shadow-lg shadow-[#b69def] rounded-md">
        <Image src={icon} width={50} height={50} alt={label} />
      </div>
      <h3 className="text-xl font-semibold mt-4">{label}</h3>
      <p className="mb-4 text-secondary mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
