import React, { useEffect, useRef, useState } from "react";
import user from "../assets/images/profile.jpg";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const TestimonialSection = () => {
  const slider = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  // Testimonials data array for easy updates
  const testimonials = [
    {
      id: 1,
      name: "Kwame Busra",
      company: "Codein",
      location: "Mars",
      text: "Choosing to pursue my degree at Codein was one of the best decisions I ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Mensah",
      company: "TechStart",
      location: "Accra, Ghana",
      text: "Klass Koncepts transformed our online presence completely. Their attention to detail and technical expertise is unmatched. The website they built for us has increased our conversions by 200%.",
      rating: 5,
    },
    {
      id: 3,
      name: "John Doe",
      company: "Global Media",
      location: "Lagos, Nigeria",
      text: "Working with Gilbert was a pleasure. He understood our vision perfectly and delivered beyond expectations. The project was completed on time and within budget.",
      rating: 5,
    },
    {
      id: 4,
      name: "Amara Okafor",
      company: "Creative Hub",
      location: "Nairobi, Kenya",
      text: "The team's creative direction and technical implementation are top-notch. They don't just build websites; they create digital experiences that resonate with users.",
      rating: 5,
    },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate slide width based on screen size
  const getSlideWidth = () => {
    return isMobile ? 100 : 50; // 100% on mobile, 50% on desktop (shows 2 slides)
  };

  const slideForward = () => {
    const slideWidth = getSlideWidth();
    const maxIndex = testimonials.length - (isMobile ? 1 : 2);

    if (currentIndex >= maxIndex) {
      // Loop back to start
      setCurrentIndex(0);
      slider.current.style.transform = `translateX(0%)`;
    } else {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      slider.current.style.transform = `translateX(-${newIndex * slideWidth}%)`;
    }
  };

  const slideBackward = () => {
    const slideWidth = getSlideWidth();
    const maxIndex = testimonials.length - (isMobile ? 1 : 2);

    if (currentIndex <= 0) {
      // Loop to end
      setCurrentIndex(maxIndex);
      slider.current.style.transform = `translateX(-${maxIndex * slideWidth}%)`;
    } else {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      slider.current.style.transform = `translateX(-${newIndex * slideWidth}%)`;
    }
  };

  const goToSlide = (index) => {
    const slideWidth = getSlideWidth();
    setCurrentIndex(index);
    slider.current.style.transform = `translateX(-${index * slideWidth}%)`;
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(slideForward, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex, isMobile]); // Re-run when dependencies change

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center bg-gradient-to-b from-white to-purple-50/30"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mx-auto animate-fadeIn">
        <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
        Testimonials
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
        What Clients{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-700 to-fuchsia-500">
          Say
        </span>
      </h2>

      <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
        Don't just take our word for it - hear from some of our satisfied
        clients
      </p>

      {/* Testimonials Wrapper */}
      <div className="relative mt-12 sm:mt-16 px-4 sm:px-8 lg:px-12">
        {/* Navigation Buttons */}
        <button
          onClick={slideBackward}
          className="absolute left-0 sm:-left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="text-sm sm:text-base" />
        </button>

        <button
          onClick={slideForward}
          className="absolute right-0 sm:-right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="text-sm sm:text-base" />
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden rounded-2xl">
          <ul
            ref={slider}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            className={`flex transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing`}
            style={{ width: `${testimonials.length * (isMobile ? 100 : 50)}%` }}
          >
            {testimonials.map((testimonial, index) => (
              <li
                key={testimonial.id}
                className={`${isMobile ? "w-full" : "w-1/2"} list-none p-2 sm:p-3 lg:p-4`}
              >
                <div className="bg-white shadow-lg hover:shadow-xl p-6 sm:p-8 lg:p-10 rounded-2xl text-gray-600 leading-relaxed h-full flex flex-col transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  {/* Quote Icon */}
                  <div className="text-purple-200 mb-4">
                    <FaQuoteRight className="text-3xl sm:text-4xl opacity-50" />
                  </div>

                  {/* User Info - Responsive flex column on mobile, row on larger screens */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4 sm:gap-0">
                    <img
                      src={user}
                      alt={testimonial.name}
                      className="w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-4 border-purple-100 sm:mr-4"
                    />
                    <div className="text-left">
                      <h3 className="text-purple-700 font-semibold text-base sm:text-lg">
                        {testimonial.name}
                      </h3>
                      <span className="text-gray-500 text-sm">
                        {testimonial.company}, {testimonial.location}
                      </span>

                      {/* Star Rating */}
                      <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm sm:text-base text-gray-600 text-left leading-relaxed grow">
                    "{testimonial.text}"
                  </p>

                  {/* Bottom Gradient Line */}
                  <div className="h-1 w-20 bg-linear-to-r from-purple-600 to-fuchsia-500 rounded-full mt-6"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => {
            const maxIndex = testimonials.length - (isMobile ? 1 : 2);
            const isActive = index === currentIndex;
            const isWithinRange = index <= maxIndex;

            return (
              isWithinRange && (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-purple-600"
                      : "w-2 bg-purple-200 hover:bg-purple-400"
                  } h-2 rounded-full focus:outline-none`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            );
          })}
        </div>

        {/* Counter (optional) */}
        <div className="text-sm text-gray-400 mt-4">
          {currentIndex + 1} / {testimonials.length - (isMobile ? 0 : 1)}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
