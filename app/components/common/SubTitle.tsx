import React from "react";

interface TitleProps {
  text: string;
}

const SubTitle: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className=" mt-15 mb-5">
      <h3 className="text-2xl font-bold text-primary">{text}</h3>
    </div>
  );
};

export default SubTitle;