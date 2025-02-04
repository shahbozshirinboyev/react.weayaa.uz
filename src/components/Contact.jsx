import React, { forwardRef, useRef, useEffect, useState } from "react";
import { ContactInfo } from "../data/data";
import { http } from "../services/telegramApi";
import { chatId } from "../services/telegramApi";
import toast, { Toaster } from "react-hot-toast";

const Contact = forwardRef((props, ref) => {
  const formRef = useRef(null);
  const addressRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (formRef.current && addressRef.current) {
      const formHeight = formRef.current.offsetHeight;
      const addressHeight = addressRef.current.offsetHeight;
      setIframeHeight(formHeight - addressHeight - 16);
    }
  }, []);

  const sendContact = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      toast.error("Please fill all fields!");
      return;
    }

    const messageText = `WeaYaa.Uz Contact Form\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`;

    toast.promise(
      http.post(
        "/sendMessage",
        {
          chat_id: chatId,
          text: messageText,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ),
      {
        loading: "Sending message...",
        success: () => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          return "Message sent successfully!";
        },
        error: "Failed to send message",
      }
    );
  };

  return (
    <section ref={ref} className="container p-4 pt-0 pb-[25px]">
      <Toaster position="top-right" />
      <div>
        <p className="font-semibold text-2xl lg:text-4xl text-center my-[25px] text-mainColor">
          Contact Us
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-full">
        <div ref={formRef} className="h-full">
          <div
            ref={addressRef}
            className="grid grid-cols-4 border rounded-xl border-mainColor border-opacity-40 mb-4 py-4 px-2"
          >
            <div className="flex justify-center items-center text-mainColor">
              <i className="bi bi-geo-alt-fill text-[30px]"></i>
            </div>
            <div className="col-span-3">
              <h1 className="font-bold text-mainColor">Address</h1>
              <h4 className="text-mainColor">{ContactInfo[0].address}</h4>
            </div>
          </div>

          <div
            className="h-[200px] lg:h-auto"
            style={{
              height: window.innerWidth >= 1024 ? `${iframeHeight}px` : "200px",
            }}
          >
            <iframe
              src={ContactInfo[0].location}
              className="w-full h-full border rounded-xl border-mainColor border-opacity-40"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>

        <div className="h-full">
          <form
            onSubmit={sendContact}
            className="grid grid-cols-1 text-mainColor h-full"
          >
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal text-[14px]">First Name:</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type first your name ..."
                required
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal text-[14px]">Last Name:</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type last your name ..."
                required
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal text-[14px]">Your Email:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type your email address ..."
                required
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-normal text-[14px]">Your Message:</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="border rounded-lg border-mainColor border-opacity-40 py-1 px-2 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type your message ..."
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="border rounded-lg border-mainColor border-opacity-40 px-2 py-1 w-full font-semibold hover:text-white hover:bg-mainColor transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
