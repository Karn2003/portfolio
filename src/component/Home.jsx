/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="relative w-full">
        <div className="lg:mx-[15%] lg:gap-[3vw]  max-w-7xl lg:flex lg:flex-row">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 ">
            <h1 className="text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl font-sans">
              Hey,I'm Karn 👋
            </h1>
            <p className="mt-5 text-2xl text-gray-800">
              I'm computer engineer and MERN Stack Developer,
              <br /> Devlop in React and Javascript. 🌱
            </p>
            <div className="mt-6 font-bold">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto"
              >
                <span className="mx-2 ">
                  <Link to="/contact">Contact Me</Link>
                </span>
              </a>
              <a
                href="#"
                className="mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:mx-2 sm:mt-0 sm:w-auto"
              >
                <span className="mx-2">Resume</span>
              </a>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 border-xl mt-20 ">
            <img
              className="rounded-[40%]  sm: h-[200px] mx-16 sm: w-[200px]"
              src="../portfolio/my.jpg"
              alt=""
              height="300"
              width="300"
            />
          </div>
        </div>
      </div>

      <div className="lg:mx-[15vw] max-w-7xl  mt-[100px] lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-4xl my-14">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4  ">
          <div className="h-52 border-2 p-8 w-52  border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                alt=""
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">HTML</h3>
          </div>
          <div className="border-2 h-52 w-52 p-8 border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                alt=""
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">CSS</h3>
          </div>
          <div className="h-52 border-2 p-8 w-52  border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                alt="Tailwind"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Tailwind</h3>
          </div>
          <div className="h-52 border-2 p-8 w-52 border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/javascript-2.svg"
                alt="Javascript"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              JavaScript
            </h3>
          </div>
          <div className="h-52 border-2 p-8 w-52 border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="Javascript"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">React</h3>
          </div>
          <div className="h-52 border-2 p-8 w-52 border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                alt="Javascript"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Mongo</h3>
          </div>
          <div className="h-52 border-2 p-8 w-52 border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"
                alt="Javascript"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Node & Express
            </h3>
          </div>
          <div className="h-52 border-2 p-8 w-52 border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/java.svg"
                alt="Javascript"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Java</h3>
          </div>
          <div className="h-52 border-2 p-8 w-52 border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
                alt="Javascript"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">DBMS</h3>
          </div>
          <div className="h-52 border-2 p-8 w-52 border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/linux-tux-3.svg"
                alt="Javascript"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Oprating System
            </h3>
          </div>
          <div className="h-52 border-2 p-8 w-52 border-gray-500 bg-slate-400 rounded-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center ">
              <img
                src="https://cdn.worldvectorlogo.com/logos/amazon-artificial-intelligence.svg"
                alt="Javascript"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">AI & ML</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
