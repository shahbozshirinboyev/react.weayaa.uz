import React, { forwardRef, useRef, useEffect, useState } from "react";
// import { ContactInfo } from "../data/data";
import { http } from "../services/telegramApi";
import { chatId } from "../services/telegramApi";
import toast, { Toaster } from "react-hot-toast";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Contact = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const contacts = t('contacts', { returnObjects: true });

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

    const currentDate = new Date().toLocaleDateString('uz-UZ', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const messageText = `WeaYaa.Uz Contact Form\nDate: ${currentDate}\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`;

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
    <section ref={ref} className="container mb-[25px]">
      <Toaster position="top-right" />
      <div>
        <p className="font-semibold text-2xl lg:text-4xl text-center my-[25px] text-mainColor">
        {t(`menus.4.name`)}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-full">
        <div ref={formRef} className="h-full">
          <div
            ref={addressRef}
            className="flex justify-start bg-mainColor bg-opacity-5 items-center border rounded-xl border-mainColor border-opacity-20 mb-4 py-4 px-2"
          >
            <div className="flex justify-center items-center border-0 text-mainColor w-24 h-20">
              <i className="bi bi-geo-alt-fill text-[30px]"></i>
            </div>
            <div className="col-span-3">
              <h1 className="font-bold text-mainColor">{t(`contacts.0.title`)}</h1>
              <h4 className="text-mainColor">{t(`contacts.0.address`)}</h4>
            </div>
          </div>

          <div
            className="h-[200px] lg:h-auto"
            style={{
              height: window.innerWidth >= 1024 ? `${iframeHeight}px` : "200px",
            }}
          >
            <iframe
              src={t(`contacts.0.location`)}
              className="w-full h-full border rounded-xl border-mainColor border-opacity-20"
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
              <span className="font-medium text-[16px]">First Name:</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border rounded-lg border-mainColor border-opacity-40 py-2 px-3 bg-mainColor bg-opacity-5 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type first your name ..."
                required
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-medium text-[16px]">Last Name:</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded-lg border-mainColor border-opacity-40 py-2 px-3 bg-mainColor bg-opacity-5 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type last your name ..."
                required
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-medium text-[16px]">Your Email:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg border-mainColor border-opacity-40 py-2 px-3 bg-mainColor bg-opacity-5 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type your email address ..."
                required
              />
            </label>
            <label className="grid grid-cols-1 mb-2">
              <span className="font-medium text-[16px]">Your Message:</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="border rounded-lg border-mainColor border-opacity-40 py-2 px-3 bg-mainColor bg-opacity-5 placeholder:text-mainColor placeholder:text-opacity-40 focus:outline-none"
                placeholder="Type your message ..."
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="border-0 rounded-lg border-mainColor bg-mainColor bg-opacity-20 border-opacity-40 px-3 py-2 w-full font-semibold hover:text-white hover:bg-mainColor transition-all duration-300"
            >
              {t('submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
