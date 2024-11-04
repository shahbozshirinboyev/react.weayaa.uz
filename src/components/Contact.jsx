import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="container">

      <div className="border">
        <p className="font-semibold text-[24px] text-center my-[25px] text-mainColor">Contact Us</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
      <div>
          <div className="grid grid-cols-4 border mb-4">
            <div className="flex justify-center items-center">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="col-span-3">
              <h1>Address</h1>
              <h4>
                Tashkent city, Upper Chirchik district, Qorasuv MFY, Y.Rajabiy
                street.
              </h4>
            </div>
          </div>
          <div>
            <iframe
              src="https://yandex.uz/map-widget/v1/-/CDh-rVzn"
              className="w-full h-[300px]"
              frameborder="1"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div></div>
        </div>
        <div>
          <form className="grid grid-cols-1">
            <label className="grid grid-cols-1">
              <span>First Name:</span>
              <input type="text" className="border" />
            </label>
            <label className="grid grid-cols-1">
              <span>Last Name:</span>
              <input type="text" className="border" />
            </label>
            <label className="grid grid-cols-1">
              <span>Your Email:</span>
              <input type="email" className="border" />
            </label>
            <label className="grid grid-cols-1">
              <span>Your Message:</span>
              <textarea name="" id="" rows={4} className="border"></textarea>
            </label>
            <button className="btn border px-2 py-1 w-full">Submit</button>
          </form>
        </div>
        
      </div>
    </section>
  );
});

export default Contact;
