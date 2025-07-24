import React from "react";

interface TitleProps {
  text1: string;
  text2: string;
}

const Title: React.FC<TitleProps> = ({ text1, text2 }) => {
  return (
    <div className="text-center mb-5">
      <p className="text-gray-500 text-sm uppercase tracking-widest">{text1}</p>
      <h2 className="text-3xl font-bold">{text2}</h2>
    </div>
  );
};

export default Title;
