import { AnimatedGradient } from "@/components/AnimatedGradient";
import GansoftLogo from "@/components/GansoftLogo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
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
            Terms of Use
          </motion.h1>
          
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-8 text-sm leading-relaxed">
              <div>
                <p className="text-white/60 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                <p className="mb-6">
                  These Terms of Use ("Terms") are a legally binding agreement between you and Gansoft ("Gansoft", "we", "us", or "our") that govern your access to and use of Wisdom and other Gansoft apps, websites, and services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy (together, the "Agreement"). If you do not agree, do not use the Services.
                </p>
              </div>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">1) Who May Use the Services</h2>
                <div className="space-y-3">
                  <p>You must be at least 13 years old (or the minimum age required in your jurisdiction) to use the Services. If you are under the age of majority in your jurisdiction, you may use the Services only with consent of a parent or legal guardian who agrees to be bound by these Terms on your behalf.</p>
                  <p>You represent and warrant that you have the right, authority, and capacity to enter into these Terms and to comply with them.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">2) Description of the Services (Wisdom)</h2>
                <div className="space-y-3">
                  <p>Wisdom is an AI‑powered learning and discovery app that provides summaries, insights, and guidance for educational and productivity purposes. Features may include, for example, topic deep‑dives, fact cards, daily learning routines, bookmarks, reading lists, and other tools that help you learn and reflect. Specific features available to you depend on your region, device, app version, and plan (free or paid).</p>
                  <p className="text-orange-300 bg-orange-900/20 p-3 rounded-lg border border-orange-500/20">
                    <strong>Important:</strong> AI systems can be wrong, incomplete, or outdated. Outputs may contain mistakes or content you find sensitive. Always verify important information from primary sources. The Services are for informational and educational purposes only and are not a substitute for professional advice (e.g., medical, legal, financial, or mental‑health advice).
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">3) Accounts and Security</h2>
                <div className="space-y-3">
                  <p>You may need an account to use some features. Keep your login credentials confidential; you are responsible for all activities that occur under your account.</p>
                  <p>Notify us immediately at <a href="mailto:support@gansoft.dev" className="text-indigo-300 hover:text-indigo-200">support@gansoft.dev</a> if you suspect unauthorized access or security issues.</p>
                  <p>We may reject, reclaim, or require you to change a username that violates these Terms or applicable law.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">4) Subscriptions, Billing, and Free Trials</h2>
                <p className="mb-4">Some features of the Services are offered on a paid, auto‑renewing subscription basis (e.g., Wisdom Pro). The following applies where available:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">4.1 Auto‑Renewing Subscriptions</h3>
                    <p>Subscriptions auto‑renew until canceled. Your Apple ID (for iOS) or Google Play account (for Android) will be charged the recurring fee at the start of each billing period.</p>
                    <p>Billing periods (e.g., monthly or annually) and prices are shown in the app at purchase time and may vary by region and currency.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">4.2 Free Trial (e.g., 7 Days)</h3>
                    <p>We may offer an introductory free trial (e.g., 7 days). If you do not cancel at least 24 hours before the trial ends, your subscription converts to a paid plan and the recurring fee for the next period will be charged.</p>
                    <p>Trials and introductory offers may be one‑per‑account/household/device/Apple ID/Google account. We may determine eligibility in our sole discretion.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">4.3 Managing or Canceling</h3>
                    <p><strong>iOS (Apple):</strong> Manage or cancel in Settings › Apple ID › Subscriptions. Payment is processed by Apple; Gansoft cannot cancel for you.</p>
                    <p><strong>Android (Google Play):</strong> Manage or cancel in Play Store › Profile › Payments & subscriptions. Payment is processed by Google; Gansoft cannot cancel for you.</p>
                    <p>Cancelation takes effect at the end of the current billing period; you will retain access until then. Partial‑period refunds are not provided by Gansoft.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">4.4 Restore Purchases</h3>
                    <p><strong>iOS:</strong> If you reinstall the app or switch devices, use the "Restore Purchases" option in‑app while signed in with the same Apple ID.</p>
                    <p><strong>Android:</strong> Google Play typically restores active subscriptions automatically when you sign in with the same Google account.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">4.5 Price and Plan Changes; Migration</h3>
                    <p>We may change prices, introduce new plans, or discontinue plans. If we increase a price for an auto‑renewing subscription, we will notify you in advance as required by Apple/Google policies. Continued use after the change takes effect constitutes acceptance; otherwise, you should cancel before renewal.</p>
                    <p>We may migrate you to a substantially equivalent plan (e.g., a new yearly plan code) with equal or greater benefits; we will provide notice and you may cancel before the next renewal.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">4.6 Refunds</h3>
                    <p>All purchases are final and non‑refundable by Gansoft, except where required by law. For purchases via Apple or Google, any refund requests must be made directly to Apple or Google and are subject to their policies.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">4.7 Taxes and Exchange Rates</h3>
                    <p>Prices may include or exclude taxes depending on your region. Exchange rates are determined by Apple/Google and/or your payment provider.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">5) Acceptable Use</h2>
                <p className="mb-3">You agree not to, and not to assist or permit any third party to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Violate any law, regulation, or rights of others; infringe intellectual‑property, privacy, or publicity rights.</li>
                  <li>Upload, generate, or share content that is illegal, harmful, abusive, harassing, hateful, discriminatory, sexually explicit, or otherwise objectionable.</li>
                  <li>Use the Services to provide professional advice without appropriate qualifications and compliance.</li>
                  <li>Reverse engineer, decompile, or otherwise attempt to extract source code or models; circumvent technical protections or usage limits; access without authorization; or interfere with the Services' operation.</li>
                  <li>Use automated means (scrapers, bots) to access or collect data from the Services, except as expressly permitted by us in writing.</li>
                  <li>Misrepresent your identity or affiliation; impersonate others; or engage in spam, scams, or fraud.</li>
                </ul>
                <p className="mt-3">We may suspend or terminate access for violations.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">6) Content and Intellectual Property</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">6.1 Our Content</h3>
                    <p>The Services (including all software, designs, text, graphics, logos, and other materials) are protected by intellectual‑property laws and are owned by Gansoft or our licensors. We grant you a limited, non‑exclusive, non‑transferable, revocable license to use the Services solely for personal, non‑commercial purposes in accordance with these Terms.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">6.2 Your Content</h3>
                    <p>If you submit, upload, or generate content ("User Content"), you retain your rights to it. You grant Gansoft a worldwide, non‑exclusive, royalty‑free license to use, host, store, reproduce, adapt, and display your User Content solely to operate and improve the Services. You represent and warrant that you have all rights necessary to grant this license and that your User Content does not violate law or rights of others.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white/90">6.3 Feedback</h3>
                    <p>If you provide ideas, suggestions, or feedback, you grant Gansoft a perpetual, irrevocable, worldwide, royalty‑free license to use and incorporate them without restriction or compensation.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">7) AI Outputs and Third‑Party Models</h2>
                <div className="space-y-3">
                  <p>We may process your prompts and content via third‑party AI providers to deliver the Services. Our use of such providers is described in our Privacy Policy.</p>
                  <p>AI outputs may be inaccurate or inappropriate. You are responsible for evaluating outputs and for how you use them.</p>
                  <p>You may not claim that outputs are human‑generated without disclosure where required by law.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">8) Third‑Party Services and Links</h2>
                <p>The Services may include integrations or links to third‑party services and content that are not controlled by Gansoft. We are not responsible for those services or their terms, policies, or practices. Your use of third‑party services may be subject to additional terms and privacy policies.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">9) Availability; Changes; Beta Features</h2>
                <div className="space-y-3">
                  <p>The Services may change over time. We may add, modify, or remove features; impose limits; or discontinue the Services at any time.</p>
                  <p>We may provide beta or experimental features. Such features are provided as‑is without warranties and may be discontinued at any time.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">10) Disclaimers</h2>
                <p>To the maximum extent permitted by law, the Services are provided "AS IS" and "AS AVAILABLE," without warranties of any kind, whether express, implied, or statutory, including without limitation warranties of merchantability, fitness for a particular purpose, non‑infringement, and accuracy. We do not warrant that the Services will be uninterrupted, secure, or error‑free, or that defects will be corrected.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">11) Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Gansoft and its affiliates, officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenues, data, or goodwill, arising out of or related to your use of (or inability to use) the Services, even if advised of the possibility of such damages. Our aggregate liability for all claims relating to the Services shall not exceed the amounts you paid us for the Services in the preceding twelve months.</p>
                <p className="mt-3 text-white/70">Some jurisdictions do not allow the exclusion of certain damages; the above may not apply to you to the extent prohibited by law.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">12) Indemnification</h2>
                <p>You agree to defend, indemnify, and hold harmless Gansoft and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services; (b) your User Content; (c) your violation of these Terms; or (d) your violation of any law or rights of a third party.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">13) App Store and Google Play Terms</h2>
                <p className="mb-3">If you downloaded the app from the Apple App Store or Google Play:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You agree to comply with the Apple Media Services Terms and/or Google Play Terms of Service.</li>
                  <li>Apple and Google are not responsible for providing maintenance or support for the app.</li>
                  <li>To the extent any warranty exists that is not disclaimed, and the app fails to conform to that warranty, you may notify Apple or Google, and they may refund the purchase price (if any). Neither Apple nor Google will have any other warranty obligations with respect to the app.</li>
                  <li>Apple and Google, and their subsidiaries, are third‑party beneficiaries of these Terms and may enforce them against you as it relates to your license of the app via their stores.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">14) Termination</h2>
                <p>We may suspend or terminate your access to the Services at any time, with or without notice, for any reason, including if we reasonably believe you violated these Terms. Upon termination, your right to use the Services will immediately cease. Sections that by their nature should survive termination will survive (e.g., 6–13, 15–18).</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">15) Governing Law and Dispute Resolution</h2>
                <div className="space-y-3">
                  <p>If you are resident in Indonesia, these Terms and any dispute or claim arising out of or in connection with them are governed by the laws of the Republic of Indonesia, and you submit to the exclusive jurisdiction of the courts of South Jakarta.</p>
                  <p>If you are resident outside Indonesia, these Terms are governed by the laws of Singapore, and you submit to the exclusive jurisdiction of the courts of Singapore.</p>
                  <p>If your local consumer law grants you mandatory protections or forum rights, those rights are not affected.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">16) Changes to These Terms</h2>
                <p>We may update these Terms from time to time. If we make material changes, we will post the updated Terms and update the "Last updated" date above. If required by law, we will provide additional notice. Continued use of the Services after changes become effective constitutes your acceptance of the revised Terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">17) Communications; Electronic Notices</h2>
                <p>You consent to receive notices and communications electronically, including via in‑app messages, email, or by posting within the Services or on our website.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">18) Miscellaneous</h2>
                <div className="space-y-3">
                  <p><strong>Entire Agreement.</strong> These Terms and our Privacy Policy are the entire agreement between you and Gansoft regarding the Services and supersede any prior agreements.</p>
                  <p><strong>Severability.</strong> If any provision is held invalid or unenforceable, the remaining provisions remain in full force and effect.</p>
                  <p><strong>No Waiver.</strong> Our failure to enforce a provision is not a waiver of our right to do so later.</p>
                  <p><strong>Assignment.</strong> You may not assign or transfer these Terms; we may assign them to an affiliate or in connection with a merger, acquisition, or sale of assets.</p>
                  <p><strong>Language.</strong> Where we provide a translation, the English version controls to the extent of any conflict.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">19) Contact Us</h2>
                <p>
                  If you have questions about these Terms or the Services, contact us at 
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