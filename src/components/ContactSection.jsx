import React from "react";

const ContactSection = () => {
  return (
    <div id="contact">
      <section
        id="why-us"
        className="px-6 sm:px-12 py-24 text-center bg-purple-50"
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

          <div className="grid grid-cols-2 gap-35 py-8 ">
            <div className="text-left mt-10">
              <h3 className="font-semibold text-xl">Get In Touch</h3>
              <p className="my-5">
                Whether you have a project in mind or just want to say hello,
                we'd love to hear from you.
              </p>

              <div className="contact-cards space-y-6">
                <div
                  className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 
                  flex items-center gap-4 pl-10 border-x-4 border-x-purple-600"
                >
                  <div
                    className="text-white bg-red-600 w-9 h-9 
                    flex items-center justify-center rounded-lg"
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

                <div
                  className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 
                  flex items-center gap-4 pl-10 border-x-4 border-x-purple-600"
                >
                  <div
                    className="text-white bg-yellow-600 w-9 h-9 
                    flex items-center justify-center rounded-lg"
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

                <div
                  className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 
                  flex items-center gap-4 pl-10 border-x-4 border-x-purple-600"
                >
                  <div
                    className="text-white bg-black w-9 h-9 
                    flex items-center justify-center rounded-lg"
                  >
                    <i className="fas fa-location-dot text-xl"></i>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500">Location</p>
                    <h4 className="font-semibold text-black">Accra, Ghana</h4>
                  </div>
                </div>

                <div
                  className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 
                  flex items-center gap-4 pl-10 border-x-4 border-x-purple-600"
                >
                  <div
                    className="text-white bg-green-600 w-9 h-9 
                    flex items-center justify-center rounded-lg "
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

            <div className="mt-10 bg-white p-10 rounded-2xl shadow-2xl">
              <form className="flex flex-col text-left">
                <div className="flex">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2 ">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="bg-white border border-purple-300 rounded-md p-5 w-full"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        placeholder="Your@email"
                        className="bg-white border border-purple-300 rounded-md p-5 "
                      />
                    </div>
                  </div>
                </div>

                <label htmlFor="service">Service Type</label>
                <select
                  name="service"
                  id="service"
                  className="border border-purple-300 rounded-md p-5"
                >
                  <option value="">Select Service Type</option>
                </select>

                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell us about your project"
                  rows={4}
                  className="bg-white border border-purple-300 rounded-md p-5"
                ></textarea>

                <button
                  type="submit"
                  className="p-4 bg-linear-to-br from-purple-700 to-fuchsia-700 text-white rounded-xl mt-2"
                >
                  Send Message
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
