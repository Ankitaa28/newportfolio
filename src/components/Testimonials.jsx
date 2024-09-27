import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Ankita is an outstanding developer! Her work exceeded our expectations, delivering quality results on time.",
    name: "Sarah Lewis",
    role: "CTO, NextGen Solutions",
    image: "images/testimonial1.jpg", // Placeholder image
  },
  {
    quote: "We are thoroughly impressed with Ankita’s work ethic and creativity. She brought our ideas to life beautifully.",
    name: "Mark Johnson",
    role: "CEO, Startup Hub",
    image: "images/testimonial2.jpg",
  },
  {
    quote: "Ankita's ability to understand the project requirements and implement them in a stunning design was exceptional.",
    name: "Lisa Evans",
    role: "Project Lead, WebDevCo",
    image: "images/testimonial3.jpg",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Detect swipe direction
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (touchStart - touchEnd > 50) {
      nextSlide(); // Swipe left
    }
    if (touchStart - touchEnd < -50) {
      prevSlide(); // Swipe right
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Automatic slide after 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="Testimonials"
      className="my-20 px-6 py-16 bg-[#0b0d13] text-center text-white overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12" data-aos="fade-up">
        Client Testimonials
      </h2>

      <div
        className="relative w-full md:w-3/4 mx-auto overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full p-4 flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-2 w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Manual Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
      >
        &#9654;
      </button>
    </section>
  );
}

export default Testimonials;
