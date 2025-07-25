"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TimelineItemType } from "../../model/timelineModel";

const Timeline = ({ item }: { item: TimelineItemType }) => {
  return (
    <motion.li
      className="timeline-item p-4 shadow rounded-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-[35px] h-[35px] absolute -left-11 -top-2 flex justify-center items-center shadow rounded-full bg-white">
        <Image src={item.icon} width={20} height={20} alt="timeline icon" />
      </div>

      <div>
        <h4 className="text-lg font-semibold text-[#915eff]">{item.name}</h4>
        <p className="text-md timeline-item-title  font-semibold mt-2">
          {item.title}
        </p>
      </div>

      <div className="flex items-start justify-between flex-wrap">
        <span className="">{item.date}</span>
        <a
          className="text-blue-500 hover:underline cursor-pointer"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>

      {/* {item.points && (
        <ul className="mt-2 list-disc ml-5 space-y-1">
          {item.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      )} */}
    </motion.li>
  );
};

export default Timeline;
