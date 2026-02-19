import React, { useEffect, useRef } from "react";
import user from "../assets/images/profile.jpg";

const TestimonialSection = () => {
  const slider = useRef(null);
  const tx = useRef(0);
  const intervalRef = useRef(null);

  const step = 25;
  const end = -50;
  const start = 0;

  const slideForward = () => {
    if (tx.current <= end) {
      tx.current = start;
    } else {
      tx.current -= step;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current >= start) {
      tx.current = end;
    } else {
      tx.current += step;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(slideForward, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  });

  return (
    <section
      id="testimonials"
      className="scroll-mt-30 max-w-7xl mx-auto min-h-80 px-6 sm:px-12 py-25 text-center mt-10"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto">
        <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
        Testimonials
      </div>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-black">
        What Clients{" "}
        <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
          Say
        </span>
      </h2>

      {/* Testimonials Wrapper */}
      <div className="relative mt-20 px-6 sm:px-12">
        {/* Next Button */}
        <button
          onClick={slideForward}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-9 sm:h-9 flex items-center justify-center bg-purple-700 text-white rounded-full hover:bg-purple-800 transition"
        >
          →
        </button>

        {/* Back Button */}
        <button
          onClick={slideBackward}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-9 sm:h-9 flex items-center justify-center bg-purple-700 text-white rounded-full hover:bg-purple-800 transition"
        >
          ←
        </button>

        {/* Slider */}
        <div className="overflow-hidden">
          <ul
            ref={slider}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            className="flex w-[200%] transition-transform duration-500 ease-in-out"
          >
            {[1, 2, 3, 4].map((item, index) => (
              <li key={index} className="w-1/2 list-none p-5 sm:p-3">
                <div className="bg-white shadow-lg p-10 sm:p-6 rounded-xl text-gray-600 leading-relaxed">
                  {/* User Info */}
                  <div className="flex sm:block items-center mb-6 text-sm sm:text-base">
                    <img
                      src={user}
                      alt=""
                      className="w-16 sm:w-12 rounded-full mr-3 sm:mr-0 sm:mb-3 border-4 sm:border-3 border-purple-700"
                    />
                    <div className="text-left">
                      <h3 className="text-purple-700 font-semibold">
                        Kwame Busra
                      </h3>
                      <span className="text-gray-500">Codein, Mars</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-xs text-left">
                    Choosing to pursue my degree at Codein was one of the best
                    decisions I ever made. The supportive community,
                    state-of-the-art facilities, and commitment to academic
                    excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
