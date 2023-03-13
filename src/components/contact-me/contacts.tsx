import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactForm from "./contact-form";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contacts = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          CONTACT
        </p>
        <h2>Get In Touch</h2>
        <div className="lg:flex">
          <div className="grid h-min">
            <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <img
                    src="/static/contact.jpg"
                    alt="/"
                    className="rounded-xl hover:scale-105 ease-in duration-300 w-[400px] h-[300px]"
                  />
                </div>
                <div>
                  <h2 className="py-2"></h2>
                  <p> Font-end Developer</p>
                  <p className="py-2">
                    I am available for full-time or contract positions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="flex justify-center pt-12 pb-4">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#5651e5]">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
