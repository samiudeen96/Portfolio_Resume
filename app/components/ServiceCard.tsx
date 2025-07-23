import Image, { StaticImageData } from "next/image";
import React from "react";
import Service from "../model/serviceModel";

// interface

const ServiceCard: React.FC<Service> = ({ label, description, icon }) => {
  return (
    <div className="bg-white rounded-md duration-300 p-5 overflow-hidden sm:w-100 shadow-lg">
      <div className="w-8 h-8 bg-red-300">
        <Image src={icon} width={24} height={24} alt={label} />
      </div>
      <h3 className="text-xl font-semibold mt-4">{label}</h3>
      <p className="mb-4 text-secondary mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
