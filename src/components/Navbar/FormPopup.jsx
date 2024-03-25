import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function FormPopup({ isOpen, onClose }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const clearFields = () => {
    setUserName("");
    setUserEmail("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qil4fd5",
        "template_9jc3tdr",
        form.current,
        "tMJdbVIN5tQmrRlSh"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    clearFields();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="mx-4 md:mx-auto w-full md:w-1/2 lg:w-2/5 xl:w-1/3 rounded-lg bg-sky-100 p-8">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-y-4">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <input
                className="block w-full p-2 border-b rounded-md text-base border-gray-300 py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600"
                placeholder="Your name"
                type="text"
                name="user_name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <input
                className="block w-full border-b p-2 rounded-md text-base border-gray-300 py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600"
                placeholder="Your email"
                type="email"
                name="user_email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
              <textarea
                className="block w-full p-2 border rounded-md text-base border-gray-300 py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600"
                name="message"
                placeholder=" Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                className="text-sm text-gray-900"
                onClick={onClose}
                type="button"
              >
                Close
              </button>
              <input
                className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer"
                type="submit"
                value="Send"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPopup;
