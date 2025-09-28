import { AnimatedGradient } from "@/components/AnimatedGradient";
import GansoftLogo from "@/components/GansoftLogo";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks/use-animation";
import { Link } from "wouter";

export default function Home() {
  const { controls, ref } = useAnimation();

  return (
    <AnimatedGradient>
      <GansoftLogo />
      
      {/* Main Content */}
      <div className="flex items-center justify-center h-full w-full px-6 absolute inset-0">
        <div className="w-full max-w-6xl" ref={ref}>
          {/* Main heading with left-to-right animation */}
          <motion.h2 
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-tighter text-center"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 block font-normal text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              We build consumer apps
            </motion.span>
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 block font-normal text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              powered by AI—
            </motion.span>
            <motion.span 
              className="block font-medium mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              ones people actually use.
            </motion.span>
          </motion.h2>
        </div>

        {/* Footer with navigation links - improved mobile visibility */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-black/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10"
          >
            <Link href="/contact">
              <motion.button 
                className="text-white/90 hover:text-white text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg hover:bg-white/10 min-w-[100px] text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <Link href="/terms">
              <motion.button 
                className="text-white/90 hover:text-white text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg hover:bg-white/10 min-w-[100px] text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Terms of Use
              </motion.button>
            </Link>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <Link href="/privacy">
              <motion.button 
                className="text-white/90 hover:text-white text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg hover:bg-white/10 min-w-[100px] text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Privacy Policy
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <motion.div 
          className="absolute top-1/4 right-[10%] w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.4, 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            opacity: { duration: 2, delay: 1 },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            scale: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.3, 
            y: [0, 15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            opacity: { duration: 2, delay: 1.5 },
            y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
            scale: { repeat: Infinity, duration: 8, ease: "easeInOut" }
          }}
        />
      </div>
    </AnimatedGradient>
  );
}
