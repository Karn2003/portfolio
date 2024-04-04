import ProjectSection from "./ProjectSection.jsx";
import {
  netflixImage,
  amazonImage,
  bgChangerImage,
  numberGuessImage,
  todoImage,
  currencyConverterImage,
  blogImage,
  portfolioImage,
  project1,
  project2,
  project3,
  project4,
} from "./index.js";

function Mywork() {
  return (
    <>
      <link rel=" stylesheet " href="../App.css" />
      <ProjectSection
        title="HTML & CSS"
        image1={netflixImage}
        image2={amazonImage}
        cardTitle1="Netflix Clone"
        cardTitle2="Amazon Clone"
        animatedImage={project1}
        type1=""
        type2="hidden"
        projectLink1="https://github.com/Karn2003/amazon_clone"
        projectLink2="https://github.com/Karn2003/Netflixclone.website"
      />
      <ProjectSection
        title="JAVASCRIPT"
        image1={numberGuessImage}
        image2={bgChangerImage}
        cardTitle1="Guess Number Game"
        cardTitle2="BG changer"
        animatedImage={project2}
        type1="hidden"
        type2=""
        projectLink1="https://github.com/Karn2003/Javascript_project/tree/main/01_bgchanger"
        projectLink2="https://github.com/Karn2003/Javascript_project/tree/main/02GuessNumber"
      />

      <ProjectSection
        title="REACT"
        image1={currencyConverterImage}
        image2={todoImage}
        cardTitle1="Currency converter"
        cardTitle2="TO-DO App"
        animatedImage={project3}
        type1=""
        type2="hidden"
        projectLink1="https://Karn2003.github.io/currency_convertor"
        projectLink2="https://Karn2003.github.io/ToDo_App"
      />

      <ProjectSection
        title="FULL-STACK"
        image1={blogImage}
        image2={portfolioImage}
        cardTitle1="Blog Site"
        cardTitle2="Portfolio site"
        animatedImage={project4}
        type1="hidden"
        type2=""
        
      />
    </>
  );
}

export default Mywork;
