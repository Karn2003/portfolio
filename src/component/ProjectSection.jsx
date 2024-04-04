/* eslint-disable react/prop-types */

import ProjectCard from "./ProjectCard";

function Card({
  title,
  image1,
  image2,
  cardTitle1,
  cardTitle2,
  animatedImage,
  type1,
  type2,
  projectLink1,
  projectLink2,
}) {
  return (
    <>
      <h1 className=" text-3xl  font-bold tracking-tight text-gray-900 md:text-4xl lg:text-[40px] text-center my-14 underline ">
        {title}
      </h1>
      <div className=" max-w-5xl lg:mx-[15vw]  lg:flex lg:flex-row gap-y-2 text-center sm:grid sm:grid-cols-1 sm:gap-12 lg:grid-cols-2 ">
        <div className={type2}>
          <img
            className="sm:hidden md:hidden lg:block mr-10 xl:block w-[350px] h-[350px] pt-20 lg:my-[-40px] rounded-[20%]"
            src={animatedImage}
            alt=""
          />
        </div>

        <div
          className={`lg:flex lg:flex-row gap-y-2 text-center sm:grid sm:grid-cols-1 sm:gap-12 lg:grid-cols-2  `}
        >
          <ProjectCard
            cardTitle={cardTitle1}
            image={image1}
            projectLink={projectLink1}
          />
          <ProjectCard
            cardTitle={cardTitle2}
            image={image2}
            projectLink={projectLink2}
          />
        </div>

        <div className={type1}>
          <img
            className="w-[350px] h-[350px]  lg:m-10 lg:my-[-40px] rounded-[20%]  sm:hidden pt-20 md:hidden lg:block xl:block "
            src={animatedImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Card;
