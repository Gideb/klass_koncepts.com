import hero from "../assets/images/hero.png";
import bgVideo from "../assets/videos/video-5.mp4";
import poster from '../assets/images/poster.jpg'

const HeroSection = () => {
  return (
    <section
      id="home"
      className="scroll-mt-24 min-h-screen relative w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        playsInline
        muted
        poster={poster}
        className="w-full h-full object-cover absolute top-0 left-0 -z-2"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="px-8 max-w-7xl mx-auto flex items-center justify-between mt-40 gap-10 z-1">
        <div className="flex flex-col max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            Digital Agency & Portfolio
          </div>

          <h1 className="font-black text-7xl leading-18 text-gray-900">
            We Build <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-fuchsia-500">
              Powerful
            </span>{" "}
            Digital <br />
            Solutions for Modern <br />
            Brands
          </h1>

          <p className="text-gray-600 text-lg font-semibold">
            Web Development • Branding • Media • Security Solutions
          </p>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="#contact"
              className="bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Get a Quote
            </a>

            <a
              href="#portfolio"
              className="text-purple-700 px-6 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition"
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
         {/*  <div className="flex gap-16 pt-10">
            <div>
              <h5 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-br from-amber-600 to-fuchsia-600">
                50+
              </h5>
              <span className="text-gray-500 text-sm">Projects Delivered</span>
            </div>

            <div>
              <h5 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-br from-amber-600 to-fuchsia-600">
                5+
              </h5>
              <span className="text-gray-500 text-sm">Years Experience</span>
            </div>

            <div>
              <h5 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-br from-amber-600 to-fuchsia-600">
                100%
              </h5>
              <span className="text-gray-500 text-sm">Client Satisfaction</span>
            </div>
          </div> */}
        </div>

        <div className="w-1/2 flex justify-end">
          <img
            src={hero}
            alt="purple colored laptop"
            className="w-full max-w-lg rounded-2xl shadow-xl will-change-transform animate-[floatRotate_20s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
