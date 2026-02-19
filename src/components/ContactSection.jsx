import React from "react";

const ContactSection = () => {
  return (
    <div id="contact">
      <section
        id="why-us"
        className="px-6 sm:px-12 py-24 text-center bg-linear-to-b from-purple-50 via-white to-white
"
      >
        <div className="max-w-7xl mx-auto min-h-60">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto">
            <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
            Contact
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-black">
            Let's{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
              {" "}
              Work Together{" "}
            </span>
          </h2>

          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Ready to transform your digital presence? get in touch and let's
            create something amazing.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 py-16">
            <div className="text-left mt-10">
              <h3 className="font-semibold text-xl">Get In Touch</h3>
              <p className="my-5">
                Whether you have a project in mind or just want to say hello,
                we'd love to hear from you.
              </p>

              <div className="contact-cards space-y-6">
                <div className="group bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-purple-100 shadow-lg flex items-center gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="text-white bg-linear-to-br from-purple-600 to-fuchsia-600 
w-10 h-10 flex items-center justify-center rounded-xl shadow-md group-hover:scale-110 transition"
                  >
                    <i className="fas fa-envelope text-xl"></i>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500">Email</p>
                    <h4 className="font-semibold text-black">
                      hello@klasskoncepts.com
                    </h4>
                  </div>
                </div>

                <div className="group bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-purple-100 shadow-lg flex items-center gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="text-white bg-linear-to-br from-purple-600 to-fuchsia-600 
w-10 h-10 flex items-center justify-center rounded-xl shadow-md group-hover:scale-110 transition"
                  >
                    <i className="fas fa-phone text-xl"></i>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500">Phone</p>
                    <h4 className="font-semibold text-black">
                      +233 55 264 9953
                    </h4>
                  </div>
                </div>

                <div className="group bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-purple-100 shadow-lg flex items-center gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="text-white bg-linear-to-br from-purple-600 to-fuchsia-600 
w-10 h-10 flex items-center justify-center rounded-xl shadow-md group-hover:scale-110 transition"
                  >
                    <i className="fas fa-location-dot text-xl"></i>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500">Location</p>
                    <h4 className="font-semibold text-black">Accra, Ghana</h4>
                  </div>
                </div>

                <div className="group bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-purple-100 shadow-lg flex items-center gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="text-white bg-linear-to-br from-purple-600 to-fuchsia-600 
w-10 h-10 flex items-center justify-center rounded-xl shadow-md group-hover:scale-110 transition"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <h4 className="font-semibold text-black">
                      Chat on WhatsApp
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-10 bg-white/80 backdrop-blur-xl p-10 rounded-3xl 
shadow-[0_20px_60px_rgba(124,58,237,0.15)] border border-purple-100"
            >
              <form className="flex flex-col text-left space-y-4">
                <div className="flex">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2 ">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className=" bg-white border border-purple-200 rounded-xl px-4 py-3
focus:outline-none focus:ring-2 focus:ring-purple-500/40 
focus:border-purple-500 transition"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        placeholder="Your@email"
                        className="bg-white border border-purple-200 rounded-xl px-4 py-3
focus:outline-none focus:ring-2 focus:ring-purple-500/40 
focus:border-purple-500 transition"
                      />
                    </div>
                  </div>
                </div>

                <label htmlFor="service">Service Type</label>
                <select
                  name="service"
                  id="service"
                  className="bg-white border border-purple-200 rounded-xl px-4 py-3
focus:outline-none focus:ring-2 focus:ring-purple-500/40 
focus:border-purple-500 transition"
                >
                  <option value="">Select Service Type</option>
                </select>

                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell us about your project"
                  rows={4}
                  className="bg-white border border-purple-200 rounded-xl px-4 py-3
focus:outline-none focus:ring-2 focus:ring-purple-500/40 
focus:border-purple-500 transition"
                ></textarea>

                <button
                  type="submit"
                  className="mt-6 py-4 rounded-xl font-medium text-white 
  bg-linear-to-r from-purple-700 to-fuchsia-600
  shadow-lg shadow-purple-500/30
  hover:shadow-xl hover:scale-[1.02]
  transition duration-300"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
