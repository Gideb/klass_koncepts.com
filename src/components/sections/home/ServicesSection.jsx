import React from "react";
import {
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaArrowRight,
  FaRocket,
  FaSearch,
  FaMobile,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Digital Platforms",
      icon: FaLaptopCode,
      description:
        "Custom web applications built for speed, scalability, and performance.",
      gradient: "from-blue-600 to-cyan-500",
      outcomes: [
        "Lightning fast load times (< 2 seconds)",
        "Scalable architecture for growth",
        "Mobile-responsive design",
      ],
      link: "/services#digital-platforms",
    },
    {
      id: 2,
      title: "Growth & Optimization",
      icon: FaChartLine,
      description:
        "Data-driven strategies that increase visibility, traffic, and conversions.",
      gradient: "from-green-600 to-emerald-500",
      outcomes: [
        "40% average traffic increase",
        "Top 3 Google rankings",
        "Higher conversion rates",
      ],
      link: "/services#growth",
    },
    {
      id: 3,
      title: "Brand & Experience",
      icon: FaPalette,
      description:
        "Visual identities and user experiences that turn visitors into loyal customers.",
      gradient: "from-purple-600 to-pink-500",
      outcomes: [
        "Memorable brand identity",
        "Intuitive user journeys",
        "Increased customer loyalty",
      ],
      link: "/services#brand",
    },
  ];

  const stats = [
    { icon: FaRocket, value: "50+", label: "Projects" },
    { icon: FaUsers, value: "30+", label: "Clients" },
    { icon: FaAward, value: "5+", label: "Years" },
    { icon: FaClock, value: "24/7", label: "Support" },
  ];

  return (
    <div
      id="service"
      className="scroll-mt-16 relative w-full overflow-hidden bg-linear-to-br from-fuchsia-700 to-purple-700 py-16 sm:py-20 lg:py-24"
    >
         

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center text-white mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Our Services
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Solutions That Drive{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-pink-200">
              Real Results
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="text-2xl sm:text-3xl text-white mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm  p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-t-2xl"
              >
                {/* Icon with Gradient */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-2xl sm:text-3xl text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm sm:text-base mb-4">
                  {service.description}
                </p>

                {/* Outcome Points */}
                <ul className="space-y-2 mb-6">
                  {service.outcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-white/90"
                    >
                      <span className="text-green-300 mt-1">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Decorative Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${service.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-white/80 mb-4">
            Not sure which service fits your needs?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            Get a Free Consultation
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
