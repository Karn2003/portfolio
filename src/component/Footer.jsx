import { Link, NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className=" relative overflow-hidden max-w-5xl mx-28 lg:mx-[15vw] bg-white pt-8 mt-5 ]">
        <div className="container relative z-10  px-4">
          <div className=" flex flex-wrap items-center justify-between">
            <div className="font-bold text-2xl text-gray-700">
              Karn Keraliya
            </div>
            <div className="w-auto p-8">
              <ul className="-m-5 flex flex-wrap items-center">
                <li className="p-5">
                  <NavLink
                    end
                    to=""
                    className={({ isActive }) =>
                      `font-bold text-md block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-blue-600" : "text-gray-700"
                      }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="p-5">
                  <NavLink
                    to="mywork"
                    className={({ isActive }) =>
                      `font-bold text-md block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-blue-600" : "text-gray-700"
                      }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
                    }
                  >
                    Project
                  </NavLink>
                </li>

                <li className="p-5">
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      `font-bold text-md block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-blue-600" : "text-gray-700"
                      }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="w-auto  p-8">
              <div className="m-1.5 flex flex-wrap">
                <div className="  mt-[-3px]   flex flex-row gap-2 justify-end">
                  <Link to="https://github.com/Karn2003" target="_blank">
                    <svg
                      className="fill-gray-600 hover:fill-gray-800 mt-[2px] h-[25px] w-[25px]"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m400 32h-352c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-352c0-26.5-21.5-48-48-48zm-122.7 383.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                    </svg>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/karn-keraliya-1b457b219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <svg
                      className=" h-[29px] w-[29px] fill-gray-600 hover:fill-gray-800   cursor-pointer"
                      enableBackground="new 0 0 100 100"
                      height="100"
                      viewBox="0 0 100 100"
                      width="100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m80.667 14h-61.352c-2.934 0-5.315 2.325-5.315 5.188v61.617c0 2.867 2.381 5.195 5.315 5.195h61.352c2.936 0 5.333-2.328 5.333-5.195v-61.617c0-2.863-2.397-5.188-5.333-5.188zm-45.313 61.354h-10.684v-34.359h10.684zm-5.342-39.057c-3.423 0-6.19-2.774-6.19-6.194 0-3.415 2.767-6.189 6.19-6.189 3.415 0 6.189 2.774 6.189 6.189 0 3.42-2.774 6.194-6.189 6.194zm45.338 39.057h-10.667v-16.708c0-3.986-.078-9.111-5.551-9.111-5.558 0-6.405 4.341-6.405 8.822v16.998h-10.675v-34.36h10.245v4.692h.146c1.426-2.7 4.91-5.549 10.106-5.549 10.806 0 12.802 7.114 12.802 16.369v18.847z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-700  text-right mb-4 mr-[30px]">
          Created By <span className="font-bold">Karn Keraliya</span> with 🩶
        </p>
      </section>
    </>
  );
}

export default Footer;
