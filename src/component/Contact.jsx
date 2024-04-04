import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [msg, setmsg] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7xznukq", "contact_form", form.current, {
        publicKey: "h01nxge1qG6lsaqbg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setmsg("Response taken successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setmsg("Failed to send mail: ", error);
        }
      );

      
  };

  return (
    <>
      <section className="">
        <div className="flex items-center bg-white justify-center flex-col px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-10 ">
          <div className="xl:mx-auto xl:w-full border-solid border-black border-[6px] rounded-xl xl:max-w-sm 2xl:max-w-md px-8 py-4">
            <h2 className="text-center text-3xl font-bold leading-tight text-black">
              Contact me 🤝
            </h2>

            <form
              onSubmit={handleSubmit}
              ref={form}
              onChange={() => setmsg("")}
              className="mt-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Name"
                      id="name"
                      name="from_name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="sender_mail"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Comments
                    </label>
                  </div>
                  <div className="mt-2">
                    <textarea
                      rows="5"
                      name="message"
                      className=" flex  w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Comments"
                      id="password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Connect Me
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
                <p>{msg ? msg : ""}</p>
              </div>
            </form>
          </div>
          <div className="mx-auto max-w-7xl pt-14 px-2 lg:px-8">
            <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
              <div className="border-gray-500 border-4   rounded-xl bg-gray-300 p-4 ">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full  text-5xl">
                  <Link
                    onClick={() =>
                      (window.open = `mailto: keraliyakarn@gmail.com`)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[50px] w-[50px]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
                    </svg>
                  </Link>
                </div>
                <h3 className="mt-8 text-lg font-bold text-black">Mail</h3>
                <p className="mt-4 text-sm font-bold">
                  keraliyakarn1610@gmail.com
                </p>
              </div>
              <div className="border-gray-500 border-4   rounded-xl bg-gray-300 p-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full ">
                  <svg
                    className="h-[50px] w-[50px]"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m21.9803 11.4104c-.34-5.79996-5.61-10.26995-11.68-9.26995-4.18001.69-7.53001 4.07998-8.18001 8.25995-.38 2.42.12002 4.71 1.21002 6.6l-.89001 3.31c-.2.75.48998 1.43 1.22998 1.22l3.26001-.9c1.48.87 3.21001 1.37 5.06001 1.37 5.64 0 10.32-4.97 9.99-10.59zm-5.1 4.31c-.09.18-.2.35-.34.51-.25.27-.52.47-.82.59-.3.13-.63.19-.98.19-.51 0-1.06-.1199-1.63-.3699-.58-.25-1.15-.5801-1.72-.9901-.58-.42-1.12-.89-1.64-1.4-.52-.52-.98003-1.07-1.40003-1.64-.41-.57-.73998-1.14-.97998-1.71s-.35998-1.11995-.35998-1.63995c0-.34001.05999-.67001.17999-.97001.12-.31.31002-.58999.58002-.83999.32-.32.66998-.47 1.03998-.47.13999 0 .27997.02999.40997.08999s.25002.15.34003.28l1.16 1.63999c.09.13.16.24.2.35.05.11.07.21.07.31 0 .12-.04.24002-.11.35997-.07.12-.16.24-.28.36l-.38.4c-.06.06-.08.12-.08.2 0 .04.01.08.02.12.02.04.03.07.04.1.09.17.25.38.47.64.23.26.47.53.73.79.27.27.53.51.8.74.26.22.48.37.65.46.03.01.06.03.09.04.04.02.08.02.13.02.09 0 .15-.03.21-.09l.38-.38c.13-.13.25-.22.36-.28.12-.07.23-.11.36-.11.1 0 .2.02.31.07s.23.11.35.2l1.66 1.18c.13.09.22.2.28.32.05.13.08.25.08.39-.06.17-.1.36-.18.54z"
                      fill="#000"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-bold text-black">
                  Contact Number
                </h3>
                <p className="mt-4 text-sm font-bold">+91 9510436833</p>
              </div>
              <div className="border-gray-500 border-4  rounded-xl bg-gray-300 p-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full">
                  <Link
                    to="https://www.linkedin.com/in/karn-keraliya-1b457b219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <svg
                      className=" h-[50px] w-[50px] fill-black cursor-pointer"
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
                <h3 className="mt-8 text-lg font-bold text-black">Linked In</h3>
                <p className="mt-4 text-sm font-bold text-gray-600"></p>
              </div>
              <div className="border-gray-500 border-4   rounded-xl bg-gray-300 p-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full ">
                  <Link to="https://github.com/Karn2003" target="_blank">
                    <svg
                      className="fill-black   h-[50px] w-[50px]"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m400 32h-352c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-352c0-26.5-21.5-48-48-48zm-122.7 383.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                    </svg>
                  </Link>
                </div>
                <h3 className="mt-8 text-lg font-bold text-black">
                  <Link to="https://github.com/Karn2003" target="_blank">
                    Github
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
