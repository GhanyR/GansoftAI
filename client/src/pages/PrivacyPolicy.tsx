import { AnimatedGradient } from "@/components/AnimatedGradient";
import GansoftLogo from "@/components/GansoftLogo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <AnimatedGradient>
      <GansoftLogo />
      
      {/* Back button */}
      <Link href="/">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-8 right-8 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Back</span>
        </motion.button>
      </Link>
      
      <div className="flex flex-col items-center justify-start h-full w-full px-6 py-20 overflow-y-auto">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-medium mb-8 tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Privacy Policy
          </motion.h1>
          
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <p className="text-white/60 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">1. Information We Collect</h2>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-white/90">Personal Information</h3>
                  <p>
                    We may collect personal information such as your name, email address, and contact details 
                    when you register for our services or contact us for support.
                  </p>
                  <h3 className="text-lg font-medium text-white/90">Usage Data</h3>
                  <p>
                    We automatically collect information about how you use our AI-powered applications, 
                    including your interactions, preferences, and performance metrics to improve our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">2. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To provide and maintain our AI-powered consumer applications</li>
                  <li>To improve and personalize your user experience</li>
                  <li>To communicate with you about our services and updates</li>
                  <li>To analyze usage patterns and optimize our AI algorithms</li>
                  <li>To ensure the security and integrity of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share information with:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Service providers who assist us in operating our applications</li>
                  <li>Law enforcement when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. This includes 
                  encryption, secure servers, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">5. AI and Machine Learning</h2>
                <p>
                  Our AI-powered applications may process your data to provide personalized experiences 
                  and improve our algorithms. We ensure that AI processing is conducted in accordance 
                  with privacy best practices and applicable regulations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">7. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                  and improve our AI algorithms. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">8. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect 
                  personal information from children under 13. If we become aware of such collection, 
                  we will take steps to delete the information promptly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">9. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your privacy rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">10. Policy Updates</h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of any material 
                  changes by posting the updated policy on our website and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">11. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us at 
                  <a href="mailto:support@gansoft.dev" className="text-indigo-300 hover:text-indigo-200 ml-1">
                    support@gansoft.dev
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedGradient>
  );
}