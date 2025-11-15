import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, cardVariants } from "../utils/animationVariants";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#050810] pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-cyan-400">Policy</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={cardVariants}
            className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Introduction
                </h2>
                <p className="text-gray-300 mb-4">
                  At Autolinium ("we," "our," or "us"), we are committed to
                  protecting your privacy and ensuring the security of your
                  personal information. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you use our AI automation services and visit our website.
                </p>
                <p className="text-gray-300">
                  By using our services, you consent to the data practices
                  described in this policy. If you do not agree with the terms,
                  please do not access or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  Personal Information
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>
                    Contact information (name, email address, phone number)
                  </li>
                  <li>Company information (company name, job title)</li>
                  <li>Communication records (emails, chat transcripts)</li>
                  <li>Billing information for paid services</li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  Automatically Collected Information
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Usage data and website analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  AI Service Data
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>Conversation data with our AI assistants</li>
                  <li>Business process information for automation solutions</li>
                  <li>Integration data with third-party platforms</li>
                  <li>Performance metrics and usage patterns</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  How We Use Your Information
                </h2>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>To provide and maintain our AI automation services</li>
                  <li>
                    To personalize your experience and improve our services
                  </li>
                  <li>
                    To communicate with you about updates, offers, and support
                  </li>
                  <li>To process transactions and send invoices</li>
                  <li>To develop new products, services, and features</li>
                  <li>To ensure the security and integrity of our services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              {/* Data Sharing and Disclosure */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share information in the following
                  circumstances:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With trusted third
                    parties who assist us in operating our website and providing
                    services (e.g., hosting providers, payment processors)
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or
                    to protect our rights and safety
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly
                    authorize us to share specific information
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Data Security
                </h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure.
                </p>
                <p className="text-gray-300">
                  Our AI systems are designed with privacy in mind, and we
                  employ encryption, access controls, and regular security
                  assessments to safeguard your data.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Your Rights
                </h2>
                <p className="text-gray-300 mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>
                    Right to access and receive a copy of your personal data
                  </li>
                  <li>Right to rectify inaccurate or incomplete information</li>
                  <li>
                    Right to erasure of your personal data ("right to be
                    forgotten")
                  </li>
                  <li>
                    Right to restrict or object to processing of your data
                  </li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@autolinium.com"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    office@autolinium.com
                  </a>
                </p>
              </div>

              {/* Cookies and Tracking */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-300 mb-4">
                  We use cookies and similar tracking technologies to track
                  activity on our website and hold certain information. Cookies
                  are files with a small amount of data that may include an
                  anonymous unique identifier.
                </p>
                <p className="text-gray-300">
                  You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not
                  accept cookies, you may not be able to use some portions of
                  our service.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Third-Party Services
                </h2>
                <p className="text-gray-300 mb-4">
                  Our services may integrate with or link to third-party
                  platforms including:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>Airtable for data management</li>
                  <li>Softr for application interfaces</li>
                  <li>Zapier, Make, and n8n for workflow automation</li>
                  <li>Google services for analytics and communication</li>
                  <li>Payment processors for transactions</li>
                </ul>
                <p className="text-gray-300">
                  These third parties have their own privacy policies, and we
                  encourage you to review them. We are not responsible for the
                  practices of these third parties.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Data Retention
                </h2>
                <p className="text-gray-300">
                  We will retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
              </div>

              {/* International Data Transfers */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  International Data Transfers
                </h2>
                <p className="text-gray-300">
                  Your information may be transferred to and maintained on
                  computers located outside of your state, province, country, or
                  other governmental jurisdiction where the data protection laws
                  may differ. We ensure appropriate safeguards are in place for
                  such transfers.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Children's Privacy
                </h2>
                <p className="text-gray-300">
                  Our services are not intended for individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you are a parent or guardian and believe your
                  child has provided us with personal information, please
                  contact us.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-gray-300 mb-4">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
                <p className="text-gray-300">
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:privacy@autolinium.com"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      office@autolinium.com
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <Link
                      to="/contact"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      autolinium.com/contact
                    </Link>
                  </p>
                  <p>
                    <strong>Address:</strong> Autolinium, Chittagong,
                    Bangladesh.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Questions About Your Data?
                </h3>
                <p className="text-cyan-300 mb-4">
                  We're here to help you understand how we protect and use your
                  information.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Our Privacy Team
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
