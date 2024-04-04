/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
function ProjectCard({ cardTitle, image, projectLink }) {
  return (
    <>
      <div className="card lg:ml-[30px] lg:m-10 sm: m-6 display-flex justify-end items-center">
        <div className="w-[100%] h-[200px]">
          <img src={image} alt="h-[165px]" className=" h-[165px]  rounded-xl" />
        </div>
        <p className="heading">{cardTitle}</p>
        <button className="w-20 h-9 text-center bg-[#d046ab] hover:bg-[#ff00ff] border-2 border-black rounded-xl  font-bold">
          <Link to={projectLink} target="_blank">
          Check
          </Link>
        </button>
      </div>
    </>
  );
}

export default ProjectCard;
