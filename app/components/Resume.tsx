'use client';

import React from 'react'
import Title from './common/Title'
import Image from "next/image";

import TimelineItem from "../components/common/Timeline";
import { experiences, education } from "../constant/constant";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div id='resume'className='container'>
      <Title text1="Experience & Education" text2="Resume" />

        <div className="relative text_gray">

      {/* Experience Timeline */}
      <div className="timeline relative">
        {/* Animated Line */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <div className="title-wrapper">
            <div className="w-[35px] h-[35px] rounded-md flex justify-center items-center">
              <Image src="/exp.svg" width={40} height={40} alt="Experience Icon" />
            </div>
            <h3 className="text-xl font-semibold">Experience</h3>
          </div>
          <ol className="timeline-list">
            {experiences.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </ol>
        </motion.div>
      </div>

      {/* Education Timeline */}
      <div className="timeline mt-10 relative">
        {/* Animated Line */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="title-wrapper">
            <div className="w-[35px] h-[35px] rounded-md flex justify-center items-center">
              <Image src="/degree1.svg" width={40} height={40} alt="Education Icon" />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <ol className="timeline-list">
            {education.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </ol>
        </motion.div>
      </div>

    </div>

    </div>
  )
}

export default Resume