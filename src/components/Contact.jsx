import React, { forwardRef } from "react";
import { ContactInfo } from "../data/data";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="container p-4 pt-0 pb-[25px]">
      <div>
        <p className="font-semibold text-[24px] text-center my-[25px] text-mainColor">
          Contact Us
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div>
          <div className="grid grid-cols-4 border rounded-xl border-mainColor border-opacity-40 mb-4 py-4 px-2">
            <div className="flex justify-center items-center text-mainColor">
              <i className="bi bi-geo-alt text-[30px]"></i>
            </div>
            <div className="col-span-3">
              <h1 className="font-bold text-mainColor">Address</h1>
              <h4 className="text-mainColor">{ContactInfo[0].address}</h4>
            </div>
          </div>
          <div className="h-[260px]">
            <iframe
              src={ContactInfo[0].location}
              className="w-full h-full border rounded-xl border-mainColor border-opacity-40"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>

        <div>
          <form className="grid grid-cols-1 text-mainColor">
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal text-[14px]">First Name:</span>
              <input
                type="text"
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type first your name ..."
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal  text-[14px]">Last Name:</span>
              <input
                type="text"
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type last your name ..."
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal  text-[14px]">Your Email:</span>
              <input
                type="email"
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type your email address ..."
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal  text-[14px]">Your Message:</span>
              <textarea
                name=""
                id=""
                rows={4}
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type your message ..."
              ></textarea>
            </label>
            <button className="border rounded-lg border-mainColor border-opacity-40 px-2 py-1 w-full font-semibold hover:text-white hover:bg-mainColor transition-all duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
