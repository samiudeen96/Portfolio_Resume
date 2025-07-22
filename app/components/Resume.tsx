'use client';

import React from 'react'
import Title from './Title'
import Image from "next/image";

import TimelineItem from "./Timeline";
import { experiences, education } from "../constant/constant";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div id='resume'className='wrapper scroll-mt-12'>
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
            <p className="text-lg font-semibold">Experience</p>
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
            <p className="text-lg font-semibold">Education</p>
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