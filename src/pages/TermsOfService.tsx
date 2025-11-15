import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, cardVariants } from "../utils/animationVariants";

const TermsOfService: React.FC = () => {
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
              Terms of <span className="text-cyan-400">Service</span>
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
              {/* Agreement */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using Autolinium's AI automation services,
                  website, and related platforms (collectively, the "Services"),
                  you agree to be bound by these Terms of Service and our
                  Privacy Policy.
                </p>
                <p className="text-gray-300">
                  If you disagree with any part of these terms, you may not
                  access our Services. These terms apply to all visitors, users,
                  and others who wish to access or use our Services.
                </p>
              </div>

              {/* Services Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Services Description
                </h2>
                <p className="text-gray-300 mb-4">
                  Autolinium provides AI automation solutions including but not
                  limited to:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>Custom AI agent development and deployment</li>
                  <li>Workflow automation and process optimization</li>
                  <li>Custom CRM development and integration</li>
                  <li>Mobile and web application development</li>
                  <li>Business process consulting and implementation</li>
                  <li>
                    Integration with third-party platforms (Airtable, Softr,
                    Zapier, etc.)
                  </li>
                </ul>
                <p className="text-gray-300">
                  We reserve the right to modify, suspend, or discontinue any
                  part of our Services at any time without prior notice.
                </p>
              </div>

              {/* User Accounts */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. User Accounts
                </h2>
                <p className="text-gray-300 mb-4">
                  When you create an account with us, you must provide accurate,
                  complete, and current information. You are responsible for:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>
                    Notifying us immediately of any unauthorized access or
                    security breaches
                  </li>
                  <li>
                    Ensuring you have the authority to enter into agreements on
                    behalf of your organization
                  </li>
                </ul>
                <p className="text-gray-300">
                  We reserve the right to refuse service, terminate accounts, or
                  remove content at our sole discretion.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Intellectual Property
                </h2>

                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  Our Intellectual Property
                </h3>
                <p className="text-gray-300 mb-4">
                  The Services and their original content, features,
                  functionality, AI models, automation workflows, and branding
                  are owned by Autolinium and are protected by international
                  copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  Your Content
                </h3>
                <p className="text-gray-300 mb-4">
                  You retain ownership of any data, content, or business
                  information you provide to us for automation services. By
                  submitting content, you grant us a license to use, modify, and
                  process that content solely for the purpose of providing our
                  Services to you.
                </p>

                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  License Grant
                </h3>
                <p className="text-gray-300">
                  We grant you a limited, non-exclusive, non-transferable
                  license to access and use our Services for your business
                  purposes in accordance with these terms.
                </p>
              </div>

              {/* Service Levels and Availability */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Service Levels and Availability
                </h2>
                <p className="text-gray-300 mb-4">
                  While we strive to maintain high availability and performance
                  standards, we do not guarantee uninterrupted or error-free
                  service. Our Services may be temporarily unavailable for:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>Scheduled maintenance and updates</li>
                  <li>Emergency repairs and security patches</li>
                  <li>Factors beyond our reasonable control</li>
                  <li>Third-party service disruptions</li>
                </ul>
                <p className="text-gray-300">
                  We will make reasonable efforts to notify you of significant
                  service disruptions.
                </p>
              </div>

              {/* Payments and Billing */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Payments and Billing
                </h2>
                <p className="text-gray-300 mb-4">
                  For paid services, you agree to:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>
                    Pay all fees and charges in accordance with the pricing
                    terms
                  </li>
                  <li>Provide accurate billing and payment information</li>
                  <li>
                    Authorize us to charge your payment method for recurring
                    services
                  </li>
                  <li>
                    Understand that all fees are non-refundable unless otherwise
                    stated
                  </li>
                </ul>
                <p className="text-gray-300">
                  We reserve the right to change our pricing with 30 days
                  notice. Continued use of Services after price changes
                  constitutes your acceptance of new prices.
                </p>
              </div>

              {/* User Responsibilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  7. User Responsibilities
                </h2>
                <p className="text-gray-300 mb-4">
                  You agree not to use our Services to:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>Violate any laws, regulations, or third-party rights</li>
                  <li>Transmit malicious code, viruses, or harmful content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>
                    Use our AI systems for spam, fraud, or deceptive practices
                  </li>
                  <li>
                    Reverse engineer, decompile, or disassemble our technology
                  </li>
                  <li>Interfere with the proper functioning of our Services</li>
                </ul>
                <p className="text-gray-300">
                  You are responsible for complying with all applicable data
                  protection laws and regulations regarding the data you process
                  through our Services.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Third-Party Services
                </h2>
                <p className="text-gray-300 mb-4">
                  Our Services may integrate with or depend on third-party
                  platforms including:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>Airtable for data management and storage</li>
                  <li>Softr for application interfaces</li>
                  <li>Zapier, Make, and n8n for workflow automation</li>
                  <li>Various AI models and APIs</li>
                  <li>Payment processors and communication tools</li>
                </ul>
                <p className="text-gray-300">
                  Your use of third-party services is subject to their
                  respective terms and privacy policies. We are not responsible
                  for the actions or policies of these third parties.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="text-gray-300 mb-4">
                  To the maximum extent permitted by law, Autolinium shall not
                  be liable for:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>
                    Any indirect, incidental, special, or consequential damages
                  </li>
                  <li>
                    Loss of profits, revenue, data, or business opportunities
                  </li>
                  <li>
                    Damages resulting from service interruptions or failures
                  </li>
                  <li>Third-party actions or service disruptions</li>
                  <li>Your use or inability to use our Services</li>
                </ul>
                <p className="text-gray-300">
                  Our total liability to you for all claims shall not exceed the
                  amount you paid us for Services in the six months preceding
                  the claim.
                </p>
              </div>

              {/* Disclaimer of Warranties */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  10. Disclaimer of Warranties
                </h2>
                <p className="text-gray-300 mb-4">
                  Our Services are provided "as is" and "as available" without
                  warranties of any kind, either express or implied. We do not
                  warrant that:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>Our Services will meet your specific requirements</li>
                  <li>
                    Our Services will be uninterrupted, timely, or error-free
                  </li>
                  <li>
                    The results obtained from using our Services will be
                    accurate or reliable
                  </li>
                  <li>Any errors in our Services will be corrected</li>
                </ul>
                <p className="text-gray-300">
                  Some jurisdictions do not allow the exclusion of implied
                  warranties, so the above exclusions may not apply to you.
                </p>
              </div>

              {/* Indemnification */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  11. Indemnification
                </h2>
                <p className="text-gray-300">
                  You agree to indemnify and hold harmless Autolinium and its
                  affiliates, officers, and employees from any claims, damages,
                  losses, or expenses (including reasonable attorneys' fees)
                  arising from:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mt-4">
                  <li>Your use of our Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of a third party</li>
                  <li>Your content or data processed through our Services</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  12. Termination
                </h2>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your access to our Services
                  immediately, without prior notice or liability, for any reason
                  including:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                  <li>Breach of these Terms of Service</li>
                  <li>Non-payment of fees for paid services</li>
                  <li>Requests by law enforcement or government agencies</li>
                  <li>Unexpected technical or security issues</li>
                </ul>
                <p className="text-gray-300">
                  Upon termination, your right to use our Services will
                  immediately cease. All provisions of these Terms that by their
                  nature should survive termination shall survive, including
                  ownership provisions, warranty disclaimers, and limitations of
                  liability.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  13. Governing Law
                </h2>
                <p className="text-gray-300">
                  These Terms shall be governed by and construed in accordance
                  with the laws of [Your Country/State], without regard to its
                  conflict of law provisions. Any disputes shall be resolved in
                  the courts located in [Your City/Region].
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  14. Changes to Terms
                </h2>
                <p className="text-gray-300 mb-4">
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-300">
                  By continuing to access or use our Services after those
                  revisions become effective, you agree to be bound by the
                  revised terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  15. Contact Information
                </h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:legal@autolinium.com"
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
                    <strong>Address:</strong> Autolinium, Software Technology
                    Park, Chittagong, Bangladesh
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Questions About Our Terms?
                </h3>
                <p className="text-cyan-300 mb-4">
                  Our team is here to help clarify any aspect of our Terms of
                  Service.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Our Legal Team
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
