import React from "react";
import profile from "../assets/images/profile.jpg";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT – Profile Card */}
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-200 text-center">
          <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center overflow-hidden">
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
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
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
            , focused on delivering modern web technologies and creative digital
            experiences that empower businesses to thrive in the digital era.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            With a deep background in software engineering and creative design,
            Gilbert leads every project with technical excellence and an eye for
            detail. From pixel-perfect interfaces to robust backend systems,
            every solution is crafted to exceed expectations.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Based in Ghana, Klass Koncepts serves clients locally and
            internationally — combining the energy of a startup with the
            discipline of an enterprise agency.
          </p>

          {/* Skills Boxes */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            <div className="bg-gray-100 p-6 rounded-xl">
              <h5 className="font-semibold text-gray-900">
                Full-Stack Engineering
              </h5>
              <p className="text-purple-600 text-sm mt-1">
                React, Node.js, APIs
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <h5 className="font-semibold text-gray-900">
                Creative Direction
              </h5>
              <p className="text-purple-600 text-sm mt-1">
                Branding & Visual Design
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <h5 className="font-semibold text-gray-900">Client Focus</h5>
              <p className="text-purple-600 text-sm mt-1">Ghana & Global</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <h5 className="font-semibold text-gray-900">Delivery Method</h5>
              <p className="text-purple-600 text-sm mt-1">Agile & On-Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
