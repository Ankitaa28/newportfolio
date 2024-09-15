import React, { useState } from 'react';
import { SlClose } from "react-icons/sl";
import { useEffect } from 'react';
const Contact = () => {
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(""); // To track success or error type

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d7fc311a-fd61-4053-aadc-1a8d7f414250");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMessage("Message sent successfully!");
        setMessageType("success");
        event.target.reset(); // Clear the form after successful submission
      } else {
        setMessage("Failed to send message. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      setMessageType("error");
    }
  };

  // Function to remove the notification
  const removeNotification = () => {
    setMessage(null);
    setMessageType("");
  };
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setMessageType("");
      }, 3000); // 3 seconds

      // Cleanup function to clear the timer when component unmounts or message changes
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div id="Contact" className="text-white overflow-hidden md:flex items-center md:flex-wrap justify-center bg-slate-400 
      mx-0 md:mx-20 bg-opacity-5 rounded-lg p-8 md:p-12 mt-10 flex-col">
      
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Contact Me</h1>
        <h3 className="text-sm md:text-2xl font-normal text-white">Feel free to reach out!</h3>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-5/6">
        <form onSubmit={onSubmit} className="flex flex-col items-center p-8 md:p-10 rounded-xl text-white shadow-xl shadow-black">
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your Name"  
            className="mt-4 w-72 h-10 bg-transparent border-b-2 border-gray-300 focus:outline-none text-slate-300"
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your Email" 
            className="mt-4 text-slate-300 w-72 h-10 bg-transparent border-b-2 border-gray-300 focus:outline-none" 
            required 
          />
          <textarea 
            name="message" 
            cols="31" 
            rows="5"  
            className="mt-4 text-slate-300 rounded-xl focus:outline-none border-2 border-gray-300 bg-transparent p-4 focus:rounded-none"
            placeholder="Write your message" 
            required
          ></textarea>
          <input 
            type="submit" 
            value="Send Message"  
            className="mt-4 border-2 border-teal-600 bg-teal-600 h-10 rounded-lg text-white hover:bg-teal-700 cursor-pointer w-40 text-center"
          />
        </form>
        <img 
          src="images\social-media-illustration.png" 
          alt="Social Media Illustration" 
          className="md:h-96 mt-8 md:mt-0 w-full md:w-1/2 object-cover"
        />
      </div>

      {/* Notification for form submission */}
      {message && (
        <div
          className={`mt-4 p-4 w-full md:w-5/6 text-center rounded-lg flex justify-between ${
            messageType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <p>{message}</p>
          <SlClose size={25} color="white"
            onClick={removeNotification} 
            className="  bg-transparent  rounded-lg cursor-pointer "
         />
           
         
        </div>
      )}
    </div>
  );
};

export default Contact;
