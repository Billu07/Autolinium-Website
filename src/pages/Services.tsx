import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  const services = [
    {
      title: "AI Automation",
      description:
        "Automate your entire business workflow with AI-powered automation for lead generation, content creation, sales funnels, and more.",
      slug: "ai-automation",
      icon: "fas fa-robot",
      features: [
        "Lead Generation & Outreach",
        "Automated Video Generation",
        "Social Media & Blog Automation",
        "Sales Funnel Automation",
      ],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "AI Agents",
      description:
        "Intelligent AI agents that handle customer interactions, sales, and support across multiple channels 24/7.",
      slug: "ai-agents",
      icon: "fas fa-comments",
      features: [
        "Sales Chatbots",
        "AI Voice Receptionist",
        "AI Calling Agents",
        "Multi-Channel Support",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Web Applications",
      description:
        "Custom AI-powered web applications including CRM, ERP, and POS systems tailored to your business needs.",
      slug: "ai-web-applications",
      icon: "fas fa-globe",
      features: [
        "AI-Powered CRM",
        "Enterprise ERP Systems",
        "Point of Sale (POS)",
        "Custom Business Apps",
      ],
      gradient: "from-green-500 to-teal-400",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050810] pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Services
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI automation, intelligent
            agents, and custom web applications designed for the future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 sm:p-8 text-center flex flex-col h-full hover:border-cyan-400/50 transition-colors duration-300"
            >
              {/* Icon with gradient background */}
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
              >
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-400 text-sm sm:text-base"
                      >
                        <i className="fas fa-check-circle text-green-400 mr-3 text-sm"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full"
                  >
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-[#0f172a] border border-gray-800 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="text-left flex-1">
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-2">
                Not Sure Which Service You Need?
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Get personalized recommendations from our AI automation experts.
              </p>
            </div>
            <Link
              to="https://calendar.app.google/1YYTXKxWK5PFaSzV8"
              className="px-6 sm:px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
