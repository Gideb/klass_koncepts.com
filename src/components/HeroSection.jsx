import hero from "../assets/images/hero.png";

const HeroSection = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto min-h-screen flex items-center justify-between px-12 mt-50 gap-20">
     
      <div className="flex flex-col max-w-2xl space-y-8">
        
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit">
          <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
          Digital Agency & Portfolio
        </div>

        
        <h1 className="font-black text-7xl leading-tight text-gray-900">
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
            className="bg-linear-to-r from-purple-700 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
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
        <div className="flex gap-16 pt-10">
          <div>
            <h5 className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
              50+
            </h5>
            <span className="text-gray-500 text-sm">Projects Delivered</span>
          </div>

          <div>
            <h5 className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
              5+
            </h5>
            <span className="text-gray-500 text-sm">Years Experience</span>
          </div>

          <div>
            <h5 className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
              100%
            </h5>
            <span className="text-gray-500 text-sm">Client Satisfaction</span>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-end">
        <img
          src={hero}
          alt="purple colored laptop"
          className="w-full max-w-lg rounded-3xl shadow-xl animate"
        />
      </div>
    </section>
  );
};

export default HeroSection;
