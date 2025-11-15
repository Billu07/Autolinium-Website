import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#050810] pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* About Overview */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Autolinium
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Autolinium is an AI-based software agency. We build AI Agents,
            Custom CRMs, Automations, and Mobile Apps that run your business
            24/7. Using Airtable, Make, n8n, Zapier, Softr, and custom software
            (React, Node, Python, Golang, Java, Spring Boot), our team replaces
            scattered tools with one integrated system that saves time, cuts
            costs, and scales with you.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl text-center p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
              <i className="fas fa-bullseye text-white text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-white">
              Our Mission
            </h3>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              To empower businesses with AI-driven solutions that streamline
              operations, enhance productivity, and drive growth through
              seamless automation and custom software.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 text-center text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Values
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Innovation",
                description:
                  "We leverage cutting-edge AI and automation to deliver forward-thinking solutions.",
                icon: "fas fa-lightbulb",
                gradient: "from-yellow-500 to-orange-400",
              },
              {
                title: "Efficiency",
                description:
                  "Our systems are designed to minimize manual work and maximize output.",
                icon: "fas fa-rocket",
                gradient: "from-green-500 to-teal-400",
              },
              {
                title: "Scalability",
                description:
                  "We build solutions that grow with your business, from startups to enterprises.",
                icon: "fas fa-chart-line",
                gradient: "from-blue-500 to-cyan-400",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-gray-800 rounded-2xl text-center p-6 sm:p-8 hover:border-cyan-400/50 transition-colors duration-300"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg`}
                >
                  <i
                    className={`${value.icon} text-white text-xl sm:text-2xl`}
                  ></i>
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { number: "90%", label: "Manual Work Reduced" },
              { number: "24/7", label: "AI Operations" },
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-[#0f172a] border border-gray-800 rounded-xl hover:border-cyan-400/50 transition-colors duration-300"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 text-center text-white">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Team
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Md Minhaz Uddin",
                role: "Founder & CEO, Autolinium",
                description:
                  "Specializes in building intelligent automation systems and AI agent development.",
                expertise: ["AI Automation", "System Planning"],
                icon: "fas fa-brain",
              },
              {
                name: "Zahid Hasan",
                role: "Backend Developer",
                description:
                  "Expert in Node.js, and building scalable web applications with AI integration.",
                expertise: ["Node.js", "API Development", "Database Design"],
                icon: "fas fa-code",
              },
              {
                name: "Kazi Masum Billah",
                role: "Automation Specialist & Frontend Developer",
                description:
                  "Focuses on workflow automation using no-code tools and custom integration solutions.",
                expertise: [
                  "No-code Tools",
                  "Process Automation",
                  "System Integration",
                  "Frontend Developer",
                ],
                icon: "fas fa-cogs",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 sm:p-8 text-center hover:border-cyan-400/50 transition-colors duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                  <i className={`${member.icon} text-white text-xl`}></i>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {member.name}
                </h4>
                <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-500/20 text-cyan-400 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Advisor Panel */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 text-center text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Advisor Panel
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Dr. Emily Rodriguez",
                role: "AI Research Advisor",
                affiliation: "Former Google AI Research",
                description:
                  "Provides strategic guidance on AI implementation and ethical AI practices.",
                focus: ["AI Strategy", "Research & Development", "Ethical AI"],
                icon: "fas fa-microscope",
              },
              {
                name: "Robert Kim",
                role: "Business Strategy Advisor",
                affiliation: "Tech Startup Consultant",
                description:
                  "Advises on business growth, market positioning, and scaling strategies.",
                focus: [
                  "Business Growth",
                  "Market Strategy",
                  "Scaling Operations",
                ],
                icon: "fas fa-chart-network",
              },
            ].map((advisor, index) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-purple-400/50 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-lg flex-shrink-0">
                    <i className={`${advisor.icon} text-white text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {advisor.name}
                    </h4>
                    <p className="text-cyan-400 text-sm mb-1">{advisor.role}</p>
                    <p className="text-gray-500 text-xs mb-3">
                      {advisor.affiliation}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {advisor.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {advisor.focus.map((area, areaIndex) => (
                        <span
                          key={areaIndex}
                          className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl text-center p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-lg">
              <i className="fas fa-cogs text-white text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-white">
              Our Approach
            </h3>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We start by understanding your business needs, then design
              integrated systems using no-code tools like Airtable and Zapier or
              custom stacks like React and AWS. Our iterative process ensures
              rapid deployment, continuous improvement, and long-term success.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl border border-gray-800 p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Let's discuss how our AI-powered automation solutions can
              streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <i className="fas fa-paper-plane mr-2 sm:mr-3"></i>
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Explore Services
                <i className="fas fa-arrow-right ml-2 sm:ml-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
