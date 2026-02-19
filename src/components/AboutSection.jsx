import profile from "../assets/images/profile.jpg";


const AboutSection = () => {
  return (
    <div id="about" className="scroll-mt-24">
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – Profile Card */}
          <div className="bg-gray-100 rounded-3xl p-10 shadow border border-gray-300 text-center transition hover:shadow-lg">
            <div className="w-36 h-40 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center overflow-hidden">
              <img
                src={profile}
                alt="Founder"
                className="w-full h-full object-fit"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Gilbert Larbi Debrah
            </h3>
            <p className="text-purple-600 font-medium mt-1">
              Founder & Technical Lead
            </p>

            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <span className="px-4 py-2 text-sm rounded-full bg-purple-100 text-purple-600 font-medium">
                <i class="fas fa-code" aria-hidden="true"></i> Developer
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-purple-100 text-purple-600 font-medium">
                {" "}
                <i class="fas fa-briefcase" aria-hidden="true"></i> Founder
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-purple-100 text-purple-600 font-medium">
                {" "}
                <i class="fas fa-user" aria-hidden="true"></i> Strategist
              </span>
            </div>
          </div>

          {/* RIGHT – Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
              About Us
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mt-6 leading-tight">
              Built By a{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-fuchsia-500">
                Developer
              </span>{" "}
              Who Gets It
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              <strong>Klass Koncepts</strong> is a digital solutions company
              founded by{" "}
              <span className="text-purple-600 font-medium">
                Gilbert Larbi Debrah
              </span>
              , focused on delivering modern web technologies and creative
              digital experiences that empower businesses to thrive in the
              digital era.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              With a deep background in software engineering and creative
              design, Gilbert leads every project with technical excellence and
              an eye for detail. From pixel-perfect interfaces to robust backend
              systems, every solution is crafted to exceed expectations.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Based in Ghana, Klass Koncepts serves clients locally and
              internationally — combining the energy of a startup with the
              discipline of an enterprise agency.
            </p>

            {/* Skills Boxes */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-gray-100 p-6 rounded-xl transition-transform duration-300 hover:-rotate-3 border border-gray-200 ">
                <h5 className="font-semibold text-gray-900">
                  Full-Stack Engineering
                </h5>
                <p className="text-purple-600 text-sm mt-1">
                  React, Node.js, APIs
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl transition-transform duration-300 hover:rotate-3 border border-gray-200 ">
                <h5 className="font-semibold text-gray-900">
                  Creative Direction
                </h5>
                <p className="text-purple-600 text-sm mt-1">
                  Branding & Visual Design
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl  transition-transform duration-300 hover:rotate-3 border border-gray-200 ">
                <h5 className="font-semibold text-gray-900">Client Focus</h5>
                <p className="text-purple-600 text-sm mt-1">Ghana & Global</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl  transition-transform duration-300 hover:-rotate-3 border border-gray-200 ">
                <h5 className="font-semibold text-gray-900">Delivery Method</h5>
                <p className="text-purple-600 text-sm mt-1">Agile & On-Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="px-6 sm:px-12 py-24 text-center bg-purple-50"
      >
        <div className="max-w-7xl mx-auto min-h-60">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-200 text-purple-600 p-3 rounded-4xl text-sm font-medium h-fit w-fit mx-auto">
              <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
              Tech Stack
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-black">
              Tools &{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-800 to-fuchsia-500">
                Technologies
              </span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
              Modern, battle-tested technologies that power our digital
              solutions.
            </p>
          </div>

          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-8 mt-20 relative duration-300">
            <div className="bg-white p-4 rounded-xl shadow-lg cursor-pointer border-2 border-gray-300 flex justify-around items-center gap-5 transition-transform  hover:animate-jiggle">
              <div className="text-white bg-fuchsia-600 w-10 h-10 flex items-center justify-center rounded-lg mx-auto">
                {" "}
                <i className="fab fa-typescript text-3xl"></i>
              </div>
              <h4 className="font-semibold text-black pr-8">TypeScript</h4>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg cursor-pointer border-2 border-gray-300 flex justify-center items-center gap-5 transition-transform  hover:animate-jiggle">
              <div className="text-white bg-blue-600 w-10 h-10 flex items-center justify-center rounded-lg mx-auto">
                {" "}
                <i className="fab fa-react text-3xl"></i>
              </div>
              <h4 className="font-semibold text-black pr-8">React</h4>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg cursor-pointer border-2 border-gray-300 flex justify-center items-center gap-5 transition-transform  hover:animate-jiggle">
              <div className="text-white bg-green-600 w-10 h-10 flex items-center justify-center rounded-lg mx-auto">
                {" "}
                <i className="fab fa-js text-3xl"></i>
              </div>
              <h4 className="font-semibold text-black pr-8">JavaScript</h4>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg cursor-pointer border-2 border-gray-300 flex justify-center items-center gap-5 transition-transform  hover:animate-jiggle">
              <div className="text-white bg-yellow-600 w-10 h-10 flex items-center justify-center rounded-lg mx-auto">
                {" "}
                <i className="fa-brands fa-tailwind-css text-2xl"></i>
              </div>
              <h4 className="font-semibold text-black pr-8">Tailwind</h4>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg  cursor-pointer border-2 border-gray-300 flex justify-center items-center gap-5 transition-transform  hover:animate-jiggle">
              <div className="text-white bg-red-600 w-10 h-10 flex items-center justify-center rounded-lg mx-auto">
                {" "}
                <i className="fab fa-node text-2xl"></i>
              </div>
              <h4 className="font-semibold text-black pr-8">Node.js</h4>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg  cursor-pointer border-2 border-gray-300 flex justify-center items-center gap-5 transition-transform  hover:animate-jiggle">
              <div className="text-white bg-purple-600 w-10 h-10 flex items-center justify-center rounded-lg mx-auto">
                {" "}
                <i className="fab fa-git text-2xl"></i>
              </div>
              <h4 className="font-semibold text-black pr-8">Git</h4>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg cursor-pointer border-2 border-gray-300 flex justify-center items-center gap-5 transition-transform  hover:animate-jiggle">
              <div className="text-white bg-amber-600 w-10 h-10 flex items-center justify-center rounded-lg mx-auto">
                {" "}
                <i className="fab fa-figma text-2xl"></i>
              </div>
              <h4 className="font-semibold text-black pr-8">Figma</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
