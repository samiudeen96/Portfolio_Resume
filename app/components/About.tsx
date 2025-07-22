import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <div id="about" className="wrapper scroll-mt-12">
      <Title text1="Introduction" text2="About Me" />
      {/* <p className="">
        Passionate developer with 3+ years of experience building responsive,
        high-performance web applications. Skilled in crafting intuitive user
        interfaces using React.js, JavaScript, and Tailwind CSS, with solid
        backend expertise in Node.js, Express, MySQL, and MongoDB.
      </p>
      <p className="mt-4">
        Committed to writing clean code, delivering seamless user experiences,
        and creating scalable solutions. Thrive in fast-paced, collaborative
        environments and driven by continuous learning and growth.
      </p> */}
      <p>
        A passionate Frontend and Full Stack Developer with over 3 years of
        professional experience building fast, scalable, and responsive web
        applications using React.js, Node.js, Express.js, MongoDB, and MySQL. I
        bring a strong foundation in both frontend architecture and backend API
        development, ensuring seamless user experiences from end to end.
      </p>
      <p className="mt-4">
        Currently based in Dubai, I'm actively seeking on-site or hybrid
        opportunities in Dubai or Abu Dhabi, where I can contribute to modern
        web platforms and collaborate with creative teams.
      </p>
    </div>
  );
};

export default About;
