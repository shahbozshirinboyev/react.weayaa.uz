import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-sky-100"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Contact Page</h1>
        <p className="text-lg text-gray-700">
          This is the Home section of the website. Scroll down to explore more!
        </p>
      </div>
    </section>
  );
});

export default Contact;
