import { AnimatedGradient } from "@/components/AnimatedGradient";
import GansoftLogo from "@/components/GansoftLogo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";

export default function Contact() {
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
      
      <div className="flex flex-col items-center justify-center h-full w-full px-6">
        <div className="max-w-2xl text-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-medium mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contact Us
          </motion.h1>
          
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="text-indigo-300" size={24} />
              <h2 className="text-white text-xl font-medium">Get in Touch</h2>
            </div>
            
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Have questions about our AI-powered consumer apps? We'd love to hear from you.
            </p>
            
            <motion.a
              href="mailto:support@gansoft.dev"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              support@gansoft.dev
            </motion.a>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedGradient>
  );
}