import { motion } from "framer-motion";

export default function GansoftLogo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-8 left-8 z-20"
    >
      {/* Simple modern logo text without background */}
      <h1 className="text-white text-xl md:text-2xl font-medium tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
          Gansoft
        </span>
      </h1>
    </motion.div>
  );
}
