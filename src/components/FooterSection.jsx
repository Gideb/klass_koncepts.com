import React from "react";

const FooterSection = () => {
  const navLinks = [
    "Home",
    "Services",
    "Portfolio",
    "About",
    "Why-Us",
    "Contact",
    "Testimonials",
  ];

  return (
    <div>
      <section
        id="footer"
        className="min-h-90 text-white bg-linear-to-b from-black via-zinc-900 to-black border-t border-purple-600/20 
"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-10 px-6 sm:px-12 lg:px-0 py-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold ">
                <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-fuchsia-700">
                  Klass
                </span>{" "}
                Koncepts
              </h2>
              <p className="w-60 text-sm">
                Digital Solutions company delivering modern web technologies and
                creative experiences for modern brands.
              </p>
              <div className="space-x-2">
                <a
                  href="https://x.com/1gideb"
                  className="p-2 bg-white/10 rounded-xl hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/30
"
                >
                  <i className="fab fa-twitter hover:scale-110 transition duration-300"></i>
                </a>
                <a
                  href="https://instagram.com/1gideb"
                  className="p-2 bg-white/10 rounded-xl hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/30
"
                >
                  <i className="fab fa-instagram hover:scale-110 transition duration-300"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/gilbert-debrah-836aa61a3/"
                  className="p-2 bg-white/10 rounded-xl hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/30
"
                >
                  <i className="fab fa-linkedin hover:scale-110 transition duration-300"></i>
                </a>
                <a
                  href="https://github.com/Gideb"
                  className="p-2 bg-white/10 rounded-xl hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/30
"
                >
                  <i className="fab fa-github hover:scale-110 transition duration-300"></i>
                </a>

                <a
                  href="https://youtube.com/gidebdesigns"
                  className="p-2 bg-white/10 rounded-xl hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/30
"
                >
                  <i className="fab fa-youtube hover:scale-110 transition duration-300"></i>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-semibold text-white/70">
                Quick Links
              </h3>

              <div className="space-y-2 flex flex-col">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className=" text-sm text-white hover:text-purple-500 hover:translate-x-1
                  transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-semibold text-white/70">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>Website Development</li>
                <li>Web Design</li>
                <li>SEO Optimization</li>
                <li>Graphic Design</li>
                <li>Video Editing</li>
                <li>Photography & Videography</li>
                <li>CCTV Installation</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-semibold text-white/70">Contact</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a href="mailto:gidebdesigns@gmail.com">
                    {" "}
                    hello@klasskoncepts.com{" "}
                  </a>
                </p>

                <p>
                  <a href="tel:+233552649953">+233 55 264 9953</a>
                </p>
                <p>
                  Accra, Ghana <sub>GH</sub>
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">
            Ready to Build Something Exceptional?
          </h2>

          <div className="bg-purple-600/10 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center mb-10">
            <h3 className="text-lg font-semibold">
              Stay Updated With Our Latest Projects
            </h3>
            <div className="flex mt-4 md:mt-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg bg-white/10 backdrop-blur-md text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700 transition">
                Subscribe
              </button>
            </div>
          </div>

          <hr className="border-white/30 my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm pb-10">
            <p>
              &copy; {new Date().getFullYear()}
              Klass Koncepts. All rights reserved.
            </p>
            <p>
              Powered by{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-fuchsia-700">
                Klass Koncepts
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterSection;
