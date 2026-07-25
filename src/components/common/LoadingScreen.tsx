import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#060B26] text-white selection:bg-amber-500"
        >
          {/* Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-blue-600/10 to-amber-600/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
            {/* Logo Mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mb-6 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-[0_0_40px_rgba(245,158,11,0.5)]"
            >
              <img
                src="/balajione-logo.jpg"
                alt="BalajiOne Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-extrabold tracking-tight font-heading gradient-text-gold-luxury mb-1"
            >
              BalajiOne Enterprises
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-amber-400 font-mono tracking-widest uppercase mb-8"
            >
              Building Trust. Delivering Excellence.
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4 p-[1px] border border-amber-500/20">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <div className="flex justify-between w-full text-xs font-mono text-slate-400">
              <span>System Initializing...</span>
              <span className="text-amber-400 font-semibold">{Math.min(100, progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
