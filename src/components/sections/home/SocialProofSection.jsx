import React from "react";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import logo4 from "../../../assets/images/logo4.png";
import logo5 from "../../../assets/images/logo5.png";
import logo6 from "../../../assets/images/logo6.png";

import {
  FaRocket,
  FaMousePointer,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaUsers,
 
} from "react-icons/fa";

const SocialProofSection = () => {

  // Brand logos (using placeholder colors - replace with actual logos)
  const brands = [
    { name: "TechCorp", color: "from-blue-600 to-blue-400", logo: logo1 },
    {
      name: "InnovateLabs",
      color: "from-purple-600 to-pink-500",
      logo: logo2,
    },
    {
      name: "GlobalMedia",
      color: "from-green-600 to-emerald-400",
      logo: logo3,
    },
    {
      name: "CreativeHub",
      color: "from-orange-600 to-amber-500",
      logo: logo4,
    },
    { name: "StartupX", color: "from-red-600 to-rose-500", logo: logo5 },
    {
      name: "FutureTech",
      color: "from-indigo-600 to-purple-500",
      logo: logo6,
    },
  ];

  // Problems we solve
  const problems = [
    {
      icon: FaClock,
      title: "Slow websites",
      description: "Lose revenue & customers",
      stat: "53% of users abandon sites that take >3s to load",
      color: "red",
    },
    {
      icon: FaMousePointer,
      title: "Poor UX",
      description: "Kills conversions",
      stat: "88% of users won't return after a bad experience",
      color: "orange",
    },
    {
      icon: FaChartLine,
      title: "Weak SEO",
      description: "Limits organic growth",
      stat: "75% of users never scroll past the first page",
      color: "yellow",
    },
    {
      icon: FaUsers,
      title: "Disconnected systems",
      description: "Waste time & resources",
      stat: "Businesses lose 20-30% revenue from inefficiency",
      color: "purple",
    },
  ];

  const getProblemColor = (color) => {
    const colors = {
      red: "from-red-500 to-rose-500",
      orange: "from-orange-500 to-amber-500",
      yellow: "from-yellow-500 to-amber-400",
      purple: "from-purple-500 to-fuchsia-500",
    };
    return colors[color];
  };

  return (
    <div id="social-proof" className="scroll-mt-24">
      {/* Trusted By Section */}
      <section className="py-14 sm:py-14 lg:py-25 relative overflow-hidden bg-linear-to-b  from-purple-50/30 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.05)_0%,transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mx-auto mb-6">
              <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
              Social Proof
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Growing Brands{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
                Across Industries
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg">
              From startups to established enterprises, our partners rely on us
              to build scalable, performance-driven digital solutions.
            </p>
          </div>

          {/* Brand Logos */}
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-6 sm:mb-8">
              Trusted by innovative companies worldwide
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-3">
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = "none";
                          // Show gradient fallback
                          e.target.parentElement.innerHTML += `<div class="w-full h-full rounded-lg bg-linear-to-br ${brand.color}"></div>`;
                        }}
                      />
                    ) : (
                      <div
                        className={`w-full h-full rounded-lg bg-linear-to-br ${brand.color}`}
                      ></div>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                    {brand.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Highlight */}
          {/*   <div className="mt-16 sm:mt-20 bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <FaStar className="text-3xl sm:text-4xl text-yellow-300" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-3 italic">
                  "Klass Koncepts transformed our digital presence completely.
                  Our traffic increased by 200% in just 3 months!"
                </p>
                <div>
                  <p className="font-semibold">Sarah Mensah</p>
                  <p className="text-sm text-purple-100">CEO, TechStart</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Most Businesses Don't Have a{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
                {" "}
                Website Problem{" "}
              </span>
              <br />
              They Have a{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-red-600 to-orange-500">
                Performance Problem
              </span>
            </h2>
          </div>

          {/* Problems Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              const gradientColor = getProblemColor(problem.color);
              return (
                <div
                  key={index}
                  className="group relative bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${gradientColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br ${gradientColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="text-xl sm:text-2xl text-white" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {problem.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 mb-3">
                      {problem.description}
                    </p>

                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-purple-600 text-sm mt-1 shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-500">
                        {problem.stat}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Solution Statement */}
          <div className="text-center max-w-3xl mx-auto">
            {/* <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mx-auto mb-6">
              <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
              The Solution
            </div> */}

            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 leading-relaxed">
              We solve these problems with{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
                intelligent digital architecture
              </span>
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "Lightning Fast",
                "UX Optimized",
                "SEO Ready",
                "Fully Integrated",
              ].map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-600 transition-colors"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Fix Your Performance Issues
              <FaRocket className="text-sm group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialProofSection;
