import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="container p-4 pt-0">
      <div className="">
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
              <h4 className="text-mainColor">
                Tashkent city, Upper Chirchik district, Qorasuv MFY, Y.Rajabiy
                street.
              </h4>
            </div>
          </div>
          <div>
            <iframe
              src="https://yandex.uz/map-widget/v1/-/CDh-rVzn"
              className="w-full h-[250px] border rounded-xl border-mainColor border-opacity-40"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div></div>
        </div>
        <div>
          <form className="grid grid-cols-1 text-mainColor">
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal">First Name:</span>
              <input
                type="text"
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type first your name ..."
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal">Last Name:</span>
              <input
                type="text"
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type last your name ..."
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal">Your Email:</span>
              <input
                type="email"
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type your email address ..."
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal">Your Message:</span>
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
