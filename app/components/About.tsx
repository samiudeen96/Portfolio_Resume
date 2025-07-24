import React from "react";
import Title from "./common/Title";
import SubTitle from "./common/SubTitle";
import ServiceCard from "./common/ServiceCard";
import { services } from "../constant/constant";

const About = () => {
  return (
    <div className="wrapper">
      <div id="about" className="container">
        <Title text1="Introduction" text2="About Me" />

        <p>
          A passionate Frontend and Full Stack Developer with over 3 years of
          professional experience building fast, scalable, and responsive web
          applications using React.js, Node.js, Express.js, MongoDB, and MySQL.
          I bring a strong foundation in both frontend architecture and backend
          API development, ensuring seamless user experiences from end to end.
        </p>
        <p className="mt-4">
          Currently based in Dubai, I&apos;m actively seeking on-site or hybrid
          opportunities in Dubai or Abu Dhabi, where I can contribute to modern
          web platforms and collaborate with creative teams.
        </p>

        <SubTitle text="What I’m Doing" />

        <div className="flex gap-6 flex-wrap">
          {services.map((service, index: number)=>(
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <SubTitle text="Tech Stack" />
        
        <div className="flex gap-6 flex-wrap">
          
        </div>
          



      </div>
    </div>
  );
};

export default About;
