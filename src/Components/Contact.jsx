// import React from "react";
// import { IoCloseOutline } from "react-icons/io";

const Contact = ({ setContactStatus }) => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 absolute top-0 right-0 z-10 max-sm:items-end"
    >
      <form
        method="POST"
        action="https://getform.io/f/0ad6f7aa-5096-44f6-9de8-dcb0c39f2cdb"
        className="flex flex-col w-[60%] justify-center items-center max-sm:w-full"
      >
        <div className="pb-1">
          <p className="text-4xl font-bold text-gray-300 text-center max-sm:text-xl">
            Thanks for taking the time to reach out. How can I help you today?
          </p>
          <p className="text-gray-300 py-1 flex justify-center item-center max-sm:text-center">
            // Submit the form below or shoot me an email -
            nur.haque99@gmail.com
          </p>
        </div>
        <div className="w-[60%] flex justify-center items-center gap-6 px-3 max-sm:w-full">
          <input
            className="bg-[#0a192f] py-2 px-2 text-gray-300 w-full rounded-md border border-[#5a6e8f] focus:outline-none"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#0a192f] py-2 text-gray-300 w-full rounded-md border border-[#5a6e8f] focus:outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="w-[60%] flex justify-center items-center px-3 max-sm:w-full">
          <textarea
            name="message"
            rows="10"
            className="bg-[#0a192f]  py-2 px-2 text-gray-300 w-full rounded-md border border-[#5a6e8f] focus:outline-none"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex flex-row gap-6">
          <button
            className="text-white border-2 hover:bg-[#061429] hover:border-blue-400 px-3 py-3 my-8 mx-auto flex items-center w-[140px] justify-center"
            duration={500}
          >
            Submit
          </button>
          <button
            className="text-white border-2 border-pink-600 hover:bg-pink-700 bg-pink-600 hover:border-pink-700 px-3 py-3 my-8 mx-auto flex items-center w-[140px] justify-center"
            duration={500}
            onClick={() => setContactStatus(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
