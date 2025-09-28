import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradient({ children, className }: AnimatedGradientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "relative h-screen w-screen overflow-hidden",
        className
      )}
    >
      {/* Darker gradient background with deeper colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 bg-[length:400%_400%] animate-gradient-xy" />
      
      {/* Subtle colored highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(76,29,149,0.15)_0%,rgba(0,0,0,0)_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(124,58,237,0.1)_0%,rgba(0,0,0,0)_35%)]" />
      
      {/* Subtle noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Slight vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      
      {/* Content container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
