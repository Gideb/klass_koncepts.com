import {
  FaGlobe,
  FaCode,
  FaLayerGroup,
  FaSearch,
  FaPalette,
  FaVideo,
  FaCamera,
  FaShareAlt,
  FaShieldAlt,
  FaLightbulb,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div id="services">
      <section className="max-w-7xl mx-auto min-h-screen px-6 sm:px-12 py-24 text-center mt-10">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto">
          <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
          What We Do
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-black">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
            Services
          </span>
        </h2>
        <br />
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          End-to-end digital solutions tailored to your unique business needs.
        </p>

        {/* Digital & Web Solutions */}
        <div className="mt-16">
          <div className="flex items-center justify-start gap-2 text-purple-600 text-xl font-bold mb-6">
            <FaGlobe className="text-3xl" />
            Digital & Web Solutions
            <span className="h-px w-170 bg-gray-300 ml-4"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer text-left border-2 border-gray-200 border-l-5 border-l-purple-600 transform transition duration-400 ease-in-out hover:translate-x-3">
              <div className="bg-amber-100 text-amber-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4 ">
                <FaCode className="text-xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Website Development
              </h4>
              <p className="text-gray-500 text-sm">
                Custom, responsive websites built with modern tech stacks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer text-left border-2 border-gray-200 border-l-5 border-l-purple-600 transform transition duration-400 ease-in-out hover:translate-x-3">
              <div className="bg-amber-100 text-amber-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4 ">
                <FaLayerGroup className="text-xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Web Design</h4>
              <p className="text-gray-500 text-sm">
                Beautiful UI/UX designs that convert visitors to clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer text-left border-2 border-gray-200 border-l-5 border-l-purple-600 transform transition duration-400 ease-in-out hover:translate-x-3">
              <div className="bg-amber-100 text-amber-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <FaSearch className="text-xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">SEO Optimization</h4>
              <p className="text-gray-500 text-sm">
                Rank higher and drive organic traffic to your business.
              </p>
            </div>
          </div>
        </div>

        {/* Creative & Media */}
        <div className="mt-16">
          <div className="flex items-center justify-start gap-2 text-amber-600 text-xl font-bold mb-6">
            <FaPalette className="text-3xl" />
            Creative & Media
            <span className="h-px w-170 bg-gray-300 ml-4"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer text-left border-2 border-gray-200 border-l-5 border-l-amber-600 transform transition duration-400 ease-in-out hover:translate-x-3">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <FaPalette className="text-xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Graphic Design</h4>
              <p className="text-gray-500 text-sm">
                Brand identity, logos, and marketing materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer text-left border-2 border-gray-200 border-l-5 border-l-amber-600 transform transition duration-400 ease-in-out hover:translate-x-3">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <FaVideo className="text-xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Video Editing</h4>
              <p className="text-gray-500 text-sm">
                Professional video production and post-processing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer text-left border-2 border-gray-200 border-l-5 border-l-amber-600 transform transition duration-400 ease-in-out hover:translate-x-3">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4 ">
                <FaCamera className="text-xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Photography & Videography
              </h4>
              <p className="text-gray-500 text-sm">
                High-quality visual content for your brand.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer text-left border-2 border-gray-200 border-l-5 border-l-amber-600 transform transition duration-400 ease-in-out hover:translate-x-3">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <FaShareAlt className="text-xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Social Media Management
              </h4>
              <p className="text-gray-500 text-sm">
                Grow your audience with strategic content.
              </p>
            </div>
          </div>
        </div>

        {/* Security Solutions */}
        <div className="mt-16">
          <div className="flex items-center justify-start gap-2 text-purple-600 text-xl font-bold mb-6 text-left">
            <FaShieldAlt className="text-3xl" />
            Security Solutions
            <span className="h-px w-170 bg-gray-300 ml-4"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer max-w-md text-left border-2 border-gray-200 border-l-5 border-l-purple-600 transform transition duration-400 ease-in-out hover:translate-x-3">
              <div className="bg-amber-100 text-amber-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4 ">
                <FaShieldAlt className="text-xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">CCTV Installation</h4>
              <p className="text-gray-500 text-sm">
                Professional surveillance systems for homes and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="px-6 sm:px-12 py-24 text-center bg-purple-50"
      >
        <div className="max-w-7xl mx-auto min-h-70">
          <div className="inline-flex items-center gap-2 bg-purple-200 text-purple-600 px-3 py-2 rounded-4xl text-sm font-medium h-fit w-fit mx-auto">
            <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
            Why Us
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-black">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-800 to-fuchsia-500">
              Klass Koncepts
            </span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            We don't just build websites - we build digital experiences that
            drive results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-20">
            <div className="bg-white px-8 py-10 rounded-xl shadow hover:shadow-lg cursor-pointer border-2 border-gray-200 border-t-5 border-t-amber-600 transform transition duration-400 ease-in-out hover:-translate-y-3">
              <div className="text-white bg-purple-600 w-15 h-15 flex items-center justify-center rounded-lg mb-4 mx-auto">
                <FaAward className="text-3xl" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-black">
                Professional & Reliable
              </h4>
              <br />
              <p className="text-gray-500 text-md ">
                We deliver on our promises. Every project is executed with
                precision, professionalism, and on-time delivery you can count
                on.
              </p>
            </div>

            <div className="bg-white px-8 py-10 rounded-xl shadow hover:shadow-lg cursor-pointer border-2 border-gray-200 border-t-5 border-t-amber-600 transform transition duration-400 ease-in-out hover:-translate-y-3">
              <div className="text-white bg-purple-600 w-15 h-15 flex items-center justify-center rounded-lg mb-4 mx-auto">
                <FaLightbulb className="text-3xl" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-black">
                Creative & Strategic Approach
              </h4>
              <br />
              <p className="text-gray-500 text-md">
                We blend bold creativity with data-driven strategy to produce
                digital experiences that stand out and perform.
              </p>
            </div>

            <div className="bg-white px-8 py-10 rounded-xl shadow hover:shadow-lg cursor-pointer border-2 border-gray-200 border-t-5 border-t-amber-600 transform transition duration-400 ease-in-out hover:-translate-y-3">
              <div className="text-white bg-purple-600 w-15 h-15 flex items-center justify-center rounded-lg mb-4 mx-auto">
                <i className="fas fa-arrow-trend-up text-3xl"></i>
              </div>
              <h4 className="font-bold text-xl mb-2 text-black">
                Affordable & Scalable Solutions
              </h4>
              <br />
              <p className="text-gray-500 text-md">
                Premium quality without the premium price tag. Our solutions
                grow with your business at every stage.
              </p>
            </div>

            <div className="bg-white px-8 py-10 rounded-xl shadow hover:shadow-lg cursor-pointer border-2 border-gray-200 border-t-5 border-t-amber-600 transform transition duration-400 ease-in-out hover:-translate-y-3">
              <div className="text-white bg-purple-600 w-15 h-15 flex items-center justify-center rounded-lg mb-4 mx-auto">
                <i className="fas fa-bolt text-3xl"></i>
              </div>
              <h4 className="font-bold text-xl mb-2 text-black">
                End-to-End Service Delivery
              </h4>
              <br />
              <p className="text-gray-500 text-md">
                From concept to launch and beyond. We handle the full lifecycle
                so you can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
