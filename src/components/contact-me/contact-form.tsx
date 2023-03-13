import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full">
      <div className="col-span-3 w-[95%] m-auto h-autorounded-xl">
        <div className="py-4 w-full">
          <form className="w-full">
            <div className="flex flex-col px-2">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
              />
            </div>
            <div className="flex flex-col px-2">
              <label className="uppercase text-sm py-2">Phone Number</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
              />
            </div>
            <div className="flex flex-col px-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
              />
            </div>
            <div className="flex flex-col px-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 flex border-gray-300"
                rows={10}
              />
            </div>
            <button className="w-full p-4 text-gray-100 mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
