import hero from "../../../assets/images/hero.png";
import blob from "../../../assets/images/blob.svg";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="scroll-mt-16 min-h-screen relative w-full overflow-hidden bg-linear-to-b from-white to-purple-50/30 py-10 sm:py-10 lg:py-24 mt-10 sm:mt-5"
    >
      {/* Fluid Blobs */}
      <img
        src={blob}
        alt="animated blob image"
        className="absolute -top-20 -left-20 sm:top-2 sm:left-0 w-64 sm:w-96 -z-10 animate-fluid blur-md opacity-40"
      />

      <img
        src={blob}
        alt="animated blob image"
        className="absolute bottom-0 right-0 sm:bottom-10 sm:right-20 w-72 sm:w-lg -z-10 animate-fluid-slow blur-sm opacity-60"
      />

      <img
        src={blob}
        alt="animated blob image"
        className="absolute bottom-20 left-[10%] sm:bottom-5 sm:right-[30%] w-48 sm:w-80 -z-10 animate-fluid-fast blur-lg opacity-20"
      />

      <img
        src={blob}
        alt="animated blob image"
        className="absolute top-40 -right-20 sm:top-20 sm:left-[10%] w-40 sm:w-32 -z-10 animate-fluid-slow blur-xs opacity-30"
      />

      {/* Main Content Container */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-12 lg:py-0">
          {/* Left Content */}
          <div className="flex flex-col space-y-8 lg:space-y-10 order-2 lg:order-1">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto">
              <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
              Digital Agency & portfolio
            </div>

            {/* Main Heading */}
            <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight lg:leading-[1.2] text-gray-900">
              We Build{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-fuchsia-500">
                {" "}
                High Performance{" "}
              </span>{" "}
              <br className="hidden sm:block" /> Digital Systems That{" "}
              <br className="hidden sm:block" />
              Grow Your Business
            </h1>

            <p className="font-semibold lg:text-sm sm:text-[8px] md:text-xs text-wrap text-gray-600">
              Klass Koncepts partners with ambitious brands to design, build,
              and scale modern digital platforms that convert users, increase
              revenue, and outperform competitors.
            </p>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Web Development",
                "Branding",
                "Media",
                "Security Solutions",
              ].map((service, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-600 transition-colors duration-300"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto group bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                📅 Book a Strategy Call
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/portfolio"
                className="w-full sm:w-auto group text-purple-700 px-8 py-3.5 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FaPlay className="text-xs" />
                🚀 Start a Project
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 lg:pt-10 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <h5 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-fuchsia-600">
                  <CountUp end={5} duration={2.5} suffix="+" />
                </h5>
                <span className="text-gray-500 text-xs sm:text-sm">
                  Years Experience
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h5 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-fuchsia-600">
                  <CountUp end={50} duration={4} suffix="+" />
                </h5>
                <span className="text-gray-500 text-xs sm:text-sm">
                  Projects Delivered
                </span>
              </div>

              <div className="text-center sm:text-left">
                <h5 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-fuchsia-600">
                  <CountUp end={98} duration={5} suffix="%" />
                </h5>
                <span className="text-gray-500 text-xs sm:text-sm">
                  Client Satisfaction
                </span>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-fuchsia-400 border-2 border-white"
                  />
                ))}
              </div>
              <span>Trusted by 50+ businesses worldwide</span>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

              <img
                src={hero}
                alt="Modern laptop showcasing digital solutions"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl will-change-transform animate-floatRotate group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <a
          href="#social-proof"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-600 transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-9 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
