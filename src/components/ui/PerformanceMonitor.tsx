import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PerformanceMonitor: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<string>('');

  useEffect(() => {
    // Check connection speed
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    if (connection) {
      const effectiveType = connection.effectiveType;
      setConnectionSpeed(effectiveType);
      
      // Show warning for slow connections
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        setShowWarning(true);
        
        // Auto-hide after 5 seconds
        setTimeout(() => setShowWarning(false), 5000);
      }
    }

    // Monitor performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          
          // If load time > 3 seconds, show optimization tip
          if (loadTime > 3000) {
            console.log('Portfolio loaded in:', loadTime + 'ms');
          }
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {showWarning && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
        >
          📶 Slow connection detected. Portfolio optimized for your speed!
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PerformanceMonitor;