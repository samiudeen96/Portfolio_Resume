import React from "react";

interface TitleProps {
  text: string;
}

const SubTitle: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className=" mt-10 mb-5">
      <h3 className="text-2xl font-bold">{text}</h3>
    </div>
  );
};

export default SubTitle;