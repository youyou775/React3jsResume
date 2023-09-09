import React from "react";
import { SectionWrapper } from "../hoc";
import { cv } from "../assets";

const Download = () => {
  return (
    <>
      <div
        className=" hidden  sm:flex items-center justify-center
    "
      >
        <a
          className="text-primary-text bg-secondary py-3 px-8 rounded-xl outline-none w-fit 
         font-bold shadow-md shadow-primary"
          href={cv}
          download="YoussefAbouelgharResume.pdf"
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Download;
